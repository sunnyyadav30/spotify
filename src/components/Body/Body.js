import React from 'react'
import './Body.scss'
import Header from '../Header/Header'
import {useDataLayerValue} from '../../DataLayer'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled'
import FavouriteIcon from '@material-ui/icons/Favorite'
import MoreHorizon from '@material-ui/icons/MoreHoriz'
import SongRow from '../SongRow/SongRow'

function Body({spotify}) {
    const [{discover_weekly},dispatch] = useDataLayerValue()
    console.log(discover_weekly)
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} al="name" />
                <div className="body__infoText">
                    <strong>Playlists</strong>
                    <h2>Discover weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle" />
                    <FavouriteIcon className="" fontSize="large" />
                    <MoreHorizon className="" />
                </div>
                {
                    discover_weekly?.tracks.items.map(item=>(
                        <SongRow track={item.track} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body
