import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import './Header.scss';
import {useDataLayerValue} from '../../DataLayer'

function Header() {
    const [{user},dispatch] = useDataLayerValue()
    return (
        <div className="bodyHeader">
            <div className="bodyHeader__left">
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs" />
            </div>
            <div className="bodyHeader__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
