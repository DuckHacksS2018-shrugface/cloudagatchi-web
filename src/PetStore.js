import config from './config.json';
import React, { Component } from 'react';

class PetIcon extends Component {
	petBtnClick(e) {
		this.props.displayPet(e.target.data-pet-id);
	}

	render() {
		<button onclick={this.petBtnClick} class='pet_icon' data-pet-id={this.props.pet.petID}>{this.props.pet.name}</button>
	}
}

class PetStore extends Component {
	getPets(username) {
		var petGetReq = new XMLHttpRequest();
		
		petGetReq.onload = function() {
			if (this.readyState == 4 && this.status == "200") {
				return JSON.parse(this.responseText);
			} else {
				this.props.createUser(username);
				return {};
			}
		}

		petGetReq.open("GET", this.props.config.url + 'api/user/' + username);
		petGetReq.send();
	}

	render() {
		var pets = getPets(this.props.username);

		return (
			<div>
				{this.pets.map(function(pet) {
					return (
						<PetIcon pet={pet} displayPet={this.props.displayPet} />
					);
				});}

				<button onclick={this.props.createPet} class='pet_icon_add'>+</button>
			</div>
	   );
	}
}

export default PetStore;
