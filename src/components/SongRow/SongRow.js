import React from 'react'
import './SongRow.scss'

function SongRow({track}) {
    return (
        <div className="songRow">
            <img src={track.album.images[0].url} alt="track name" className="songRow__albumName" />
            <div className="track__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist)=> artist.name).join(",")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
