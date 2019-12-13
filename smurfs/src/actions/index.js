import axios from 'axios';

export const SMURF_FETCH_LOAD = 'SMURF_FETCH_LOAD';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';
export const SMURF_FETCH_FAIL = 'SMURF_FETCH_FAIL';

// export const getCatFact = () => dispatch => {
//     dispatch({ type: FETCHING_CAT_DATA })
//     axios.get('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random/')
//         .then(response => { console.log(response); dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.text }) })
//         .catch(err => { console.log(err); dispatch({ type: FETCH_DATA_FAIL, payload: err }) })
// }

export const getSmurf = () => dispatch => {
    dispatch({ type: SMURF_FETCH_LOAD });
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => dispatch({ type: SMURF_FETCH_SUCCESS, payload: response.data}))
    .catch(err => dispatch({ type: SMURF_FETCH_FAIL, payload: err}))
}