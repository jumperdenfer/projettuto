import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

	loggedIn = false;

	result:any;

	constructor(private _http: Http) { }

	getUsers(){
		return this._http.get("http://localhost:3000/api/users")
			.map(result => this.result = result.json().data);
	}

	getUser(user){
		return this._http.get("http://localhost:3000/api/user/"+user.login+"/"+user.password)
			.map(result => this.result = result.json().data);
	}

	addUser(user){
		return this._http.post("http://localhost:3000/api/adduser",user);
	}

	addUserCar(car){

	}

	deleteUser(user){
		return this._http.delete("http://localhost:3000/api/deleteUser/"+user);
	}

}
