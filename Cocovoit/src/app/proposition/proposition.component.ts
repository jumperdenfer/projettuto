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

//import { ToastComponent } from '../toast/toast.component';


@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {

	private depart: string;
	private date: string;
    private rdv: string;
    private arrivee: string;
    private depose: string;
    private temps: string;
    private voiture: string;
    private place: string;
    private prix: string;

  constructor(private villesService: VillesService, private propositionsService: PropositionsService, private router : Router) { 
  }

  ngOnInit() {
  }

  registerProposition(){
    	this.propositionsService.addProposition({"depart" : this.depart,"date":this.date,"rdv":this.rdv, "arrivee" : this.arrivee,
    		"depose" : this.depose, "temps" : this.temps,"voiture":this.voiture,"place":this.place,"prix":this.prix
		    }).subscribe(res => window.location.reload()
        );
	}

}