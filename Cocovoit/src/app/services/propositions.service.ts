import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PropositionsService {

	result:any;


  constructor(private _http: Http) { }

getPropositions(depart, arrive){
		return this._http.get("http://localhost:3000/api/propositions/"+depart+"/"+arrive)
			.map(result => this.result = result.json().data);
	}

	addProposition(proposition){
		return this._http.post("http://localhost:3000/api/addproposition",proposition);
	}

}
