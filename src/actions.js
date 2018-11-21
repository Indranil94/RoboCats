import {SEARCHFIELD, REQUESTFAILURE, REQUESTPENDING, REQUESTSUCCESS} from './constants';
//action creators actions:object action_creator: object assignment
export const setSearchField = (text) =>{
	return {
		type : SEARCHFIELD,
		payload : text
	}
}

export const requestRobots = (dispatch) =>{
	dispatch({ type: REQUESTPENDING });
	fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data=> dispatch({ type: REQUESTSUCCESS, payload: data}))
    .catch(err => dispatch({type: REQUESTFAILURE, payload: err}));
}