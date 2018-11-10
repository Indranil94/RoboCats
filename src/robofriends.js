import React from 'react';
import RoboCard from './robocard.js';

const RoboFriends = ({robots}) =>{
	const RobList = robots.map( (ind,i) =>{
		return <RoboCard id = {ind.id} name = {ind.name} email = {ind.email} />
	});
	return RobList;
}
export default RoboFriends;