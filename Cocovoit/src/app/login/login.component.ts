import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, 
			Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private login: string;
    private password: string;
    private profile: any;
    private isLogged: boolean=false;

  constructor(private _usersService : UsersService, private router : Router) { }

  ngOnInit() {
  }

  register(){
    	this._usersService.getUser({"login" : this.login,
    		"password" : this.password
		    }).subscribe(res => {
		    	this.profile=res;
		    	this.isLogged=true;
		    }
        );
	}

}
