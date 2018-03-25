import config from './config.json';
import React, { Component } from 'react';
import PetStore from './PetStore';
import Pet from './Pet';
import Actions from './Actions';

class UsernameView extends Component {
	constructor(props) {
		super(props);
		this.handleUser = this.handleUser.bind(this);
	}

	handleUser(e) {
		if (e.keyCode == 13)
			this.props.handleUser(e.target.value);
	}
	
	render() {
		return (
			<div className='username_prompt'>
				<input type='text' placeholder='Username' onKeyDown={this.handleUser} />
			</div>
		);
	}
}

class TravelPetView extends Component {	
	constructor(props) {
		super(props);
		this.createUser.bind(this);
		this.handleUser.bind(this);
		this.createPet.bind(this);
		this.displayPet.bind(this);
		this.state = {username: '', petID: '', shouldShowPetnameView: false};
	}

	createUser(username) {
		var userPostReq = new XMLHttpRequest();
		var self = this;

		userPostReq.onload = function() {
			if (this.readyState == 4 && this.status == 200) {
				self.setState({username});
			}
		}.bind(this);

		userPostReq.open("POST", config.url + 'api/user/' + username);
		userPostReq.send();
	}
	
	handleUser(username) {
		var userGetReq = new XMLHttpRequest();
		var self = this;

		userGetReq.onload = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log("yay exists");
				self.setState({username});
			} else {
				//self.createUser(username);
				var userPostReq = new XMLHttpRequest();

				userPostReq.onload = function() {
					if (this.readyState == 4 && this.status == 200) {
						self.setState({username});
					}
				}.bind(this);
				
				userPostReq.open("POST", config.url + 'api/user/' + username);
				userPostReq.send();
			}
		}.bind(this);

		userGetReq.open("GET", config.url + 'api/user/' + username);
		userGetReq.send();
	}

	createPet(petName) {
		var petPostReq = new XMLHttpRequest();
		var self = this;
		var petID = Math.random().toString(36).substring(7);

		petPostReq.onload = function() {
			if (this.readyState == 4 && this.status == "200") {
				self.setState({petID, shouldShowPetnameView: false});
			} else {
				console.log("Error");
				self.setState({petId: '', shouldShowPetnameView: false});
			}
		}

		petPostReq.open("POST", config.url + 'api/pet/' + petID);
		petPostReq.send("username=" + this.state.username + "&petname=" + petName);
	}

	displayPet(petID) {
		this.setState({petID});
	}

	showPetnameView() {
		this.setState({shouldShowPetnameView: true});
	}

	render() {
		if (this.state.username === '') 
			return(<UsernameView handleUser={this.handleUser} />);

		return (
			<div>
				<PetStore currPetID={this.state.petID} username={this.state.username} displayPet={this.displayPet} createPet={this.createPet} shouldShowPetnameView={this.state.shouldShowPetnameView} showPetnameView={this.showPetnameView} config={config}  />
				<Pet petID={this.state.petID} createPet={this.createPet} config={config} />
				<Actions age={this.state.age} petID={this.state.petID} petname={this.state.petname} config={config} />
			</div>
   		);
	}
}

export default TravelPetView;
