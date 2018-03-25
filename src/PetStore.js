import config from './config.json';
import React, { Component } from 'react';

class PetnameView extends Component {
	createPet(e) {
		if (e.key === 'Enter')
			this.props.createPet(e.target.value);
	}

	render() {
		<div class="petnameview">
			<input type="text" placeholder="petname" onKeyPress={this.createPet} />
		</div>
	}
}

class PetStore extends Component {
	getPets(username) {
		var petGetReq = new XMLHttpRequest();
		
		petGetReq.onload = function() {
			if (this.readyState == 4 && this.status == "200") {
				return JSON.parse(this.responseText);
			} else {
				// This part shouldn't happen considering we check for an existing user, but also safety nets are good
				return {};
			}
		}

		petGetReq.open("GET", this.props.config.url + 'api/user/' + username);
		petGetReq.send();
	}

	petBtnClick(e) {
		this.props.displayPet(e.target.data-pet-id);
	}

	render() {
		var pets = getPets(this.props.username).result;
		var self = this;

		if (showPetnameView)
			return (<PetnameView createPet={this.props.createPet} />);

		return (
			<div class="pet_store">
				{pets.map(function(pet) {
					return (
						<button type='button' onclick={self.petBtnClick} class='pet_icon' data-pet-id={pet.petID}>{pet.name}</button>
					);
				});}

				<button onclick={self.props.showPetView} class='pet_icon_add'>+</button>
			</div>
	   );
	}
}

export default PetStore;
