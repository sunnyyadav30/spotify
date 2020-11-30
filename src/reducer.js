export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null,
    //remove after finished dev
    token: 'BQBc_JF4mf6u-KKLRITXyKb38RWFJu6YqADx8wIf_Q3adk4xOculb0kdpoMff9HY9bPrk0bLd7hAg9rMUQRjZKbN-CDWHBsR-xJZybXAxzH4agCcPywEmno7A6aUI3ZLtTsgnEDHNQGDpIBqSx1yOtmHM_qKxruXTb8EeOL6-3tVP8K4'
}

const reducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer