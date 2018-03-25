import React, { Component } from 'react';

class Actions extends Component {

/*rons main thing will call this class which returns a bunch of html */	
  render() {
    return (
      <div className="App">
       	<button onclick="button">Feed</button>
	<button type="button">Play</button>
	<button type="button">Clean</button>
	<button type="button">Bathe</button>
	<button type="button">Scold</button>
	<button type="button">Heal</button>
	
      </div>
    );
  }
}

export default Actions;
