import React from 'react';
import ReactDOM from 'react-dom';
import TravelPetView from './TravelPetView';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TravelPetView />, document.getElementById('root'));
registerServiceWorker();
