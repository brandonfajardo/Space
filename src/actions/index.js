import {
    GET_SPACES,
    GET_SPACES_SUCCESS,
    GET_SPACES_FAILURE,
} from './actionTypes'

const URL = 'https://thisopenspace.com'

export const getSpaces = pageNum => {
    return (dispatch) => {
        dispatch({ type: GET_SPACES })

        fetch(`${URL}/lhl-test?page=${pageNum}`)
            .then((data) => data.json())
            .then(({ data }) => {
                dispatch({ type: GET_SPACES_SUCCESS, payload: data })
            })
            .catch(() => {
                dispatch({ type: GET_SPACES_FAILURE })
            })
    }
}