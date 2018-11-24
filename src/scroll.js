import React from 'react';

const Scroll = (props)=>{
	return(
		<div className="pv4 ph2 tc-l" style={{overflowY: "scroll", borderTop: "2px solid black" , height: "35.5em"}}>
			{props.children}
		</div>
		)
}
export default Scroll;