import axios from 'axios';

export const SMURF_FETCH_LOAD = 'SMURF_FETCH_LOAD';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';
export const SMURF_FETCH_FAIL = 'SMURF_FETCH_FAIL';

export const SMURF_POST_LOAD = 'SMURF_POST_LOAD';
export const SMURF_POST_SUCCESS = 'SMURF_POST_SUCCESS';
export const SMURF_POST_FAIL = 'SMURF_POST_FAIL';


export const getSmurf = () => dispatch => {
    dispatch({ type: SMURF_FETCH_LOAD });
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => dispatch({ type: SMURF_FETCH_SUCCESS, payload: response.data}))
    .catch(err => dispatch({ type: SMURF_FETCH_FAIL, payload: err}))
}

export const postSmurf = (formSmurf) => dispatch => {
    console.log("formSmurf", formSmurf)
    dispatch({ type: SMURF_POST_LOAD });
    axios
    .post('http://localhost:3333/smurfs', formSmurf)
    .then(response => {console.log("post response", response);
    dispatch({ type: SMURF_POST_SUCCESS, payload: response.data })}
    )
    .catch(err => dispatch({ type: SMURF_POST_FAIL, payload: err}))
}