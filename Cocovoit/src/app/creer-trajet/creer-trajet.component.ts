import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, 
			Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { VillesService } from '../services/villes.service';
import { TrajetsService } from '../services/trajets.service';

//import { ToastComponent } from '../toast/toast.component';


@Component({
  selector: 'app-creer-trajet',
  templateUrl: './creer-trajet.component.html',
  styleUrls: ['./creer-trajet.component.css']
})
export class CreerTrajetComponent implements OnInit {

	private listeVilles: Object[];
	private depart: string;
    private arrivee: string;
    private distance: string;
    private temps: string;

  constructor(private villesService: VillesService, private trajetsService: TrajetsService, private router : Router) { 
  		this.villesService.getVilles().subscribe(res => this.listeVilles = res);

  }

  ngOnInit() {
  }

  registerTrajet(){
    	this.trajetsService.addTrajet({"depart" : this.depart, "arrivee" : this.arrivee,
    		"distance" : this.distance, "temps" : this.temps
		    }).subscribe(res => window.location.reload()
        );
	}

}

/*
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 	
    private ntel: string;
    private login: string;
    private password: string;



	constructor(private _usersService : UsersService, private router : Router) { }

	ngOnInit() {
         
		private router : Router


	}

	register(){
    	this._usersService.addUser({"name" : this.name, "firstName" : this.firstName,
    		"age" : this.age, "address" : this.address, "login" : this.login,
    		"password" : this.password
		    }).subscribe(res =>window.location.reload());
);
	}
                                      
	logout(){
	}
}
*/