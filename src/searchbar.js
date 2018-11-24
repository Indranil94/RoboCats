import React from 'react';

/*class SearchBar extends Component{
	Constructor(props){
		super(props);
		this.state.
	}
}*/
const SearchBar = ({onSearchChange, onSearchClick, onResetClick, textval})=>{
	return(
		<div className="tc">
	        <input className="input-reset bn black-80 bg-lightest-blue pa2 w-15 br2" aria-label="Search box" onChange={onSearchChange} placeholder="Enter Search Term" value={textval} type="text" name="search" id="search" />
      		{/*<input className="pa2 button-reset tc bn bg-animate bg-black-70 hover-bg-black white pointer w-10 br2" onClick={onSearchClick} type="submit" value="Search" />*/}
      		<input className="pa2 button-reset tc bn bg-animate bg-black-70 hover-bg-black white pointer w-10 br2" onClick={onResetClick} type="submit" value="Reset" />
      	</div>
		)
}

export default SearchBar;