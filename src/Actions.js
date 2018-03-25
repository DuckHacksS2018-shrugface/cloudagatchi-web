import React, { Component } from 'react';

class Actions extends Component {

/*rons main thing will call this class which returns a bunch of html */	
  render() {
    return (
      <div className="App">

	//display the duck image
	<div className = "display">
		<img src="getImagePath()"/>
	</div>

	
	<button class="dropbtn">Feed</button>
	<div class="dropdown-content">
		<a onclick={this.feed(1)}>Grapes</a>
		<a onclick={this.feed(2)}>Crackers</a>
		<a onclick={this.feed(3)}>Pasta</a>
		<a onclick={this.feed(4)}>Hot Dog</a>
	</div>
//	<button onclick="button">Feed</button>
	<button onclick={this.play()}>Play</button>
	<button onclick={this.clean()}>Clean</button>
	<button onclick={this.bathe()}>Bathe</button>
	<button type={this.scold()}>Scold</button>
	<button type={this.heal()}>Heal</button>	    
      </div>
    );

  }

  feed(number){
	var getPostReq = new XMLHttpRequest();
	getPostReq.open("POST", this.props.config.url + 'api/pet/' + this.props.petID + "/feed/" + number);
	getPostReq.send();

  }

  play(){
	  var getPostReq = new XMLHttpRequest();
	  getPostReq.open("POST", this.props.config.url + '/api/pet/' + this.props.petID + "/play");
	  getPostReq.send();
  }

  clean() {
  	var getPostReq = new XMLHttpRequest();
	getPostReq.open("POST", this.props.config.url + '/api/pet' + this.props.petID + "/clean");
  	getPostReq.send();
  }

  bathe() {
	var getPostReq = new XMLHttpRequest();
	getPostReq.open("POST", this.props.config.url + '/api/pet' + this.props.petID + "/bathe");
	getPostReq.send();
  }

  scold() {
	var getPostReq = new XMLHttpRequest();
	getPostReq.open("POST", this.props.config.url + '/api/pet' + this.props.petID + "/scold");
	getPostReq.send();
  }

  heal() {
	var getPostReq = new XMLHttpRequest();
	getPostReq.open("POST", this.props.config.url + '/api/pet' + this.props.petID + "/heal");
	getPostReq.send();
  }

  getImagePath(){
	if (this.props.age == 0){
		return "assets/eggboi_bounce.gif"
	}

	else if (this.props.age == 1){
		return "assets/duckboi_bounce.gif"
	}

  }
}

export default Actions;
