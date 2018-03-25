import config from './config.json';
import React, { Component } from 'react';
import PetStore from './PetStore';
import Pet from './Pet';
import Actions from './Actions';

class TravelPetView extends Component {	render() {
	constructor(props) {
		super(props);
		this.displayPet.bind(this);
		this.state = {username: this.props.username, petID: ''};
	}
	
	displayPet(petID) {
		this.setState({petID: petID});
	}

	return (
			<div>
				<PetStore username={this.state.username} displayPet={this.displayPet} createPet={} config={config}  />
				<Pet petID={this.state.petID} config={config} />
				<Actions petname={this.state.petname} />
			</div>
   );
}

export default TravelPetView;
