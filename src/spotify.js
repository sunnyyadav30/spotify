export const authEndPoint = 'https://accounts.spotify.com/authorize'
const redirectURI = 'http://localhost:3000/'
const spotifyClientID = 'b26601c74b6a4595b75b45922c3888ee'
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getTokenFromResponse = ()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    },{})
}

export const loginURL = `${authEndPoint}?client_id=${spotifyClientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`