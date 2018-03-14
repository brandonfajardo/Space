import {
    GET_SPACES,
    GET_SPACES_FAILURE,
    GET_SPACES_SUCCESS,
 } from '../actions/actionTypes'

const initialState = {
    spaceList: [],
    loading: null,
    page: 1,
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_SPACES: 
            return {
                ...state,
                loading: true
            }
        case GET_SPACES_SUCCESS:
            return {
                ...state,
                spaceList: [...state.spaceList, ...action.payload],
                loading: false,
                page: ++state.page
            }
        case GET_SPACES_FAILURE: 
            return {
                ...state,
                loading: false,
                error: 'Error!'
            }
        default:
            return state
    }
}