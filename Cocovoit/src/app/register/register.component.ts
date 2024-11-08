import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, 
			Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { UsersService } from '../services/users.service';
//import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 	private name: string;
    private firstName: string;
    private age: string;
    private address: string;
    private ntel: string;
    private login: string;
    private password: string;
    private car: string;
  private isLoggedIn : boolean;


	constructor(private _usersService : UsersService, private router : Router) { 
    this.isLoggedIn=false;
  }

	ngOnInit() {
         
		if(this._usersService.loggedIn){
			this.router.navigate(['/']);
		}


	}

	register(){
    	this._usersService.addUser({"name" : this.name, "firstName" : this.firstName,
    		"age" : this.age, "address" : this.address, "login" : this.login,
    		"password" : this.password,"car" : this.car
		    }).subscribe(
      );
      this.isLoggedIn = true;
	}
                                      
	logout(){
    this.isLoggedIn = false;
	}
}
