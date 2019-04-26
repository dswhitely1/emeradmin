// importing React
import React from 'react';
import ReactDOM from 'react-dom';

// importing Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// importing Main Component

import App from './components/App';

// importing Reducers

import reducers from './reducers';
// importing Stylesheet

import './bootstrap.css';

// setup up the Redux Store
const enhancer = composeWithDevTools(applyMiddleware(thunk)); // REDUX Chrome DevTools
const store = createStore(reducers, enhancer);
// define the root element

const webPageRoot = document.getElementById('root');

// Render the webpage

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	webPageRoot,
);
