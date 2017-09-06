import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBjebhdbNMoW2nI-RCk8-34e_mFcBZOEkQ';

YTSearch({key: API_KEY, term: 'guitars'}, function(data) {
	console.log(data);
});

const App = () => {
	return (
		<div>
			<SearchBar></SearchBar>
		</div>
	);
}
	
ReactDom.render(<App />, document.querySelector('.container'));