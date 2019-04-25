// importing React
import React from 'react';
import ReactDOM from 'react-dom';

// importing Main Component

import App from './components/App';

// importing Stylesheet

import './bootstrap.css';

// define the root element

const webPageRoot = document.getElementById('root');

// Render the webpage

ReactDOM.render(<App />, webPageRoot);
