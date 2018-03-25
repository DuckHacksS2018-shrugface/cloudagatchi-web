import config from './config.json';
import React, { Component } from 'react';
import PetStore from './PetStore';
import Pet from './Pet';
import Actions from './Actions';

class UsernameView extends Component {
	handleUser(e) {
		if (e.key === 'Enter')
			this.props.handleUser(e.target.value);
	}
	
	render() {
		return (
			<div class='username_prompt'>
				<input type='text' placeholder='Username' onKeyPress={this.handleUser} />
			</div>
		);
	}
}

class TravelPetView extends Component {	
	constructor(props) {
		super(props);
		this.handleUser.bind(this);
		this.displayPet.bind(this);
		this.state = {username: '', petID: ''};
	}

	createUser(username) {
		var userPostReq = new XMLHttpRequest();
		var self = this;

		userPostReq.onload = function() {
			if (this.readyState == 4 && this.status == 200) {
				self.setState({username});
			}
		}

		userPostReq.open("POST", config.url + 'api/user/' + username);
		userPostReq.send();
	}
	
	handleUser(username) {
		var userGetReq = new XMLHttpRequest();
		var self = this;

		userGetReq.onload = function() {
			if (this.readyState == 4 && this.status == 200) {
				self.setState({username});
			} else {
				self.createUser(username);
			}
		}

		userGetReq.open("GET", config.url + 'api/user/' + username);
		userGetReq.send();
	}

	createPet(petName) {
		var petPostReq = new XMLHttpRequest();
		var self = this;

		petPostReq.onload = function() {
			if (this.readyState == 4 && this.status == "200") {
				self.setState({petID: petID});
			} else {

			}
		}

		petPostReq.open("POST", config.url + 'api/pet/' + petID);
		petPostReq.send("username=" + this.state.username + "&petname=" + petName);
	}

	displayPet(petID) {
		this.setState({petID});
	}

	render() {
		if (this.state.username == '') 
			return(<UsernameView handleUser={this.handleUser} />);

		return (
			<div>
				<PetStore currPetID={this.state.petID} username={this.state.username} displayPet={this.displayPet} createPet={this.createPet} config={config}  />
				<Pet petID={this.state.petID} config={config} />
				<Actions petname={this.state.petname} />
			</div>
   		);
	}
}

export default TravelPetView;
