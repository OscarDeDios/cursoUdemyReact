import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBjebhdbNMoW2nI-RCk8-34e_mFcBZOEkQ';

const App = () => {
	return (
		<div>
			<SearchBar></SearchBar>
		</div>
	);
}
	
ReactDom.render(<App />, document.querySelector('.container'));