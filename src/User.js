import React, { Component } from 'react';

class User extends Component {
	createUser(username) {
		var userPostReq = new XMLHttpRequest();

		userPostReq.onload = function() {
			var response = JSON.parse(this.responseText);

			if (this.readyState == 4 && this.status == 200) {
				PetInterface.handlePets;
			} else {
				console.error(response);
			}
		}

		userPostReq.open("POST", config.url + "api/user/", true);
//		userPostReq.setRequestHeader('Content-type', '');
		userPostReq.send(username)
	}

	getUserInfo(username) {
		var userGetReq = new XMLHttpRequest();
		
		userGetReq.onload = function() {
			var userInfo = JSON.parse(this.responseText);

			if (this.readyState == 4) {
				if (this.status == 200) {
					getPetInfo(userInfo.pets);
				} else if (this.status == 404) {
					createUser(username);
				} else {
					console.error(userInfo);
				}
			}
		}

		userGetReq.open("GET", config.url + "api/user/" + username);
		userGetReq.send();
	}
}
