import React from 'react';

const RoboCard = ({id, name, email}) => {
	return(
		<div className = "cf bg-light-blue tc ma4 pa3 w-20 br3 b--black-10 fl ">
			<img src = {`https://robohash.org/set_set4/${id}?size=200x200`} alt = "roboface" className= " br-100 h4 w4 dib ba b--black-05 pa2 grow"/>
			<h3 className = "f4 mb2">{name} </h3>
			<h3 className = "f5 mb2">{email}</h3>
		</div>
		);
}

export default RoboCard;
//mw5 overflow-hidden pa4 ma4 