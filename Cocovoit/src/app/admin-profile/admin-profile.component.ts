import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

	users: Array<any>;
	delete: string;

  constructor(private _usersService: UsersService){

  	this._usersService.getUsers().subscribe(res => this.users = res);

  }

  ngOnInit() {
  }

  deleteProfile(){
  	this._usersService.deleteUser(this.delete).subscribe(res => window.location.reload()
  		);
  }


}
