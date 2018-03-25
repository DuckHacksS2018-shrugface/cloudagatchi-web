import config from './config.json';
import React, { Component } from 'react';

class PetHeader extends Component {
	render() {
		return (
			<div class="pet_header">
				<div class="pet_info">
					<p>{this.props.pet.name}</p>
					<p>{this.props.pet.age}</p>
					<p>{this.props.pet.weight}</p>
				</div>

				<div class="pet_stats">
					<p>{this.props.pet.hunger}</p>
					<p>{this.props.pet.happiness}</p>
					<p>{this.props.pet.discipline}</p>
				</div>
			</div>
		);
	}
}

class Pet extends Component {
	constructor(props) {
		super(props);
		this.state = {age: ''};		// Stateful properties that determine appearance
	}

	getPetInfo(petID) {
		var petGetReq = new XMLHttpRequest();
		var self = this;

		petGetReq.onload = function() {
			if (this.readyState == 4 && this.status == "200") {
				self.setState({age: this.responseText.age});
				return JSON.parse(this.responseText);
			} else {
				self.props.createPet(petID);
			}
		}

		petGetReq.open("GET", config.url + 'api/pet/' + petID);
		petGetReq.send();
	}

	render() {
		var pet = this.getPetInfo(this.props.petID);
					/*if (this.state.age == 0) {
						return (<img src='assets/eggboi1.png' class="pet_img" />);
					} else {
						return (<img src='assets/goodboi1.png' />);
					}*/

		return (
			<div>
				<PetHeader pet={pet} />
			</div>
		);
	}
}

export default Pet;
