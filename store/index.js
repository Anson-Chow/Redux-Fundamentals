//https://scrimba.com/playlist/pNpEbsP

import { createStore } from 'redux'

const house = {
    type: 'condo',
    rooms: [
        {id: 1, type: 'Living Room'},
        {id: 2, type: 'Dining Room'},
        {id: 3, type: 'Bathroom'}
    ],
    doorsOpen: {
        backDoor: false,
        frontDoor: true
    },
    temp: 'Calculating...'
}

const reducer = (state = house, action) => {
    if (action.type === 'ADD_ROOM') {
        return Object.assign({}, state, {
            rooms: state.rooms.concat(action.payload)
        })
    }
    
    if (action.type === 'GET_TEMP') {
        return Object.assign({}, state, {
            temp: action.payload
        })
    }
    return state
}

const store = createStore(reducer)

export default store


// Redux, Context, and Composition
// https://dev.to/singhshemona/state-management-with-react-when-to-use-what-3nhm