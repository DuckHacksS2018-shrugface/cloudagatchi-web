import config from './config.json';
import React, { Component } from 'react';
import PetStore from './PetStore'

class Pet extends Component {
	constructor(props) {
		super(props);
		getPetInfo(this.props.username);
	}

	createPet() {
		
	}

	getPetInfo(pets) {
		var petGetReq = new XMLHttpRequest();

		petGetReq.onload = function() {
			var petInfo = 
		}
	}

	render() {
		return (
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
				</div>
		);
	}
}

export default Pet;
