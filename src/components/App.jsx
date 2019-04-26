import React, { Component } from 'react';
import Navigation from './Navigation';
import MainPage from './MainPage';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<MainPage />
				<Footer />
			</div>
		);
	}
}

export default App;
