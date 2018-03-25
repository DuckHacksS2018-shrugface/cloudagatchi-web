import config from './config.json';
import React, { Component } from 'react';
import Pet from './Pet'

class TravelPetView extends Component {	render() {
	constructor(props) {
		super(props);
		this.state = {username: '', petid: ''}
	}
	
	return (
			<div>
				<PetStore username={this.state.username} />
				<Pet username={this.state.username} />
				<Actions petname={this.state.petname}/>
			</div>
   );
}

export default TravelPetView;
