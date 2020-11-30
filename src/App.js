import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login'
import { getTokenFromResponse } from './spotify';
import Player from './components/Player/Player'
import SpotifyWebAPI from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer.js'

const spotify = new SpotifyWebAPI()

function App() {
  const [{user,token}, dispatch] = useDataLayerValue()
  useEffect(()=>{
    const hash = getTokenFromResponse()
    window.location.hash = ""
    const _token = hash.access_token
    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user=>{
        console.log(user)
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists
        })
      })
      spotify.getPlaylist('1w0Da5It2iDkfgGmI75CMq').then(response=>{
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
    }
  },[])

  console.log(user)
  console.log(token)

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ):(
          <Login />
        )
      }
    </div>
  );
}

export default App;
