import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TrajetsService {

	loggedIn = false;

	result:any;

	constructor(private _http: Http) { }

	getTrajets(depart,arrive){
		return this._http.get("http://localhost:3000/api/trajets/"+depart+"/"+arrive)
			.map(result => this.result = result.json().data);
	}

	addTrajet(trajet){
		return this._http.post("http://localhost:3000/api/addtrajet",trajet);
	}

}
