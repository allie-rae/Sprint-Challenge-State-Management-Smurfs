import { SMURF_FETCH_SUCCESS, SMURF_FETCH_FAIL, SMURF_FETCH_LOAD } from '../actions';


const initialState = {
    smurfList: [],
    error: '',
    isFetching: false
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SMURF_FETCH_LOAD:
            return {
                ...state,
                isFetching: true
            }
        case SMURF_FETCH_SUCCESS:
            return {
                ...state,
                smurfList: action.payload,
                isFetching: false
            }
        case SMURF_FETCH_FAIL:
            return {
                ...state,
                error: 'Mayday there has been an error'
            }
        default:
            return state;
    }
}