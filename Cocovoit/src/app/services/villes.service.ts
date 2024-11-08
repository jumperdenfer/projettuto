import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VillesService {

	loggedIn = false;

	result:any;

	constructor(private _http: Http) { }

	getVilles(){
		return this._http.get("http://localhost:3000/api/villes")
			.map(result => this.result = result.json().data);
	}

	addVille(ville){
		return this._http.post("http://localhost:3000/api/addville",ville);
	}

}
