import {
    SMURF_FETCH_SUCCESS,
    SMURF_FETCH_FAIL,
    SMURF_FETCH_LOAD,
    SMURF_POST_FAIL,
    SMURF_POST_LOAD,
    SMURF_POST_SUCCESS
} from '../actions';


const initialState = {
    smurfList: [],
    error: '',
    isFetching: false,
    isPosting: false
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
            case SMURF_POST_LOAD: 
            return {
                ...state,
                isPosting: true
            }
            case SMURF_POST_SUCCESS:
                return {
                    ...state,
                    smurfList: [...state.smurfList, action.payload],
                    isPosting: false
                }
            case SMURF_POST_FAIL: 
            return {
                ...state,
                error: 'Mayday post error'
            }
        default:
            return state;
    }
}