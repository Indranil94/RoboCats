import {SEARCHFIELD, REQUESTFAILURE, REQUESTPENDING, REQUESTSUCCESS} from './constants';

const initialSearchState = {
	searchField : ''
}

const initialRobotState = {
	robots: [],
	isPending: true,
	error: ''
}

export const SearchRobots = (state = initialSearchState, action = {} )=>{
	switch(action.type){
		case SEARCHFIELD:
			return Object.assign({},state,{searchField: action.payload});
		default:
			return state;
	}
}

export const RequestRobots = (state = initialRobotState, action = {} ) =>{
	switch(action.type){
		case REQUESTPENDING:
			return Object.assign({},state,{isPending: true});
		case REQUESTSUCCESS:
			return Object.assign({},state,{isPending: false, robots: action.payload});
		case REQUESTFAILURE:
			return Object.assign({},state,{isPending: false, error: action.payload});
		default:
			return state;
	}
}