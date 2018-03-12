import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAuOlD8M3ttxyNO_rftIkOCisEO6uljHdA';

YTSearch({key: API_KEY, term: 'biconnect'}, function(data) {
  console.log(data);
});

//create a new component. this component should produce some html
const App = () => {
  return (<div>
      <SearchBar />
    </div>
  );
}

//take this component's generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
