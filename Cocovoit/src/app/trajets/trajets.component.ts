import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, 
			Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { VillesService } from '../services/villes.service';
import { PropositionsService } from '../services/propositions.service';

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.component.html',
  styleUrls: ['./trajets.component.css']
})
export class TrajetsComponent implements OnInit {

	private depart:string;
	private arrive:string;
	private listeVilles: Object[];
	private trajets: Object[];


	constructor(private villesService: VillesService, 
		private propositionsService: PropositionsService, private router : Router) { 
		this.villesService.getVilles().subscribe(res => this.listeVilles = res);
	}

	ngOnInit() {
	}

	showTrajets(){
		this.propositionsService.getPropositions(this.depart,this.arrive)
			.subscribe(res => this.trajets = res);
	}

}
