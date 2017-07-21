import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	user = new User();
	user_login = new User();
	errors = [];

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {

  }

  login() {
  	this._userService.serviceLogin(this.user_login)
  		.then( (success) => {
  			this._router.navigate(['/main'])
  		})
  		.catch( (err) => {
  			this.errors = JSON.parse(err._body);
  		})
  }

  register() {
  	this._userService.serviceRegister(this.user)
  		.then( (success) => {
  			this._router.navigate(['/main'])
  		})
  		.catch( (err) => {
  			this.errors = JSON.parse(err._body);
  		})
  }
}
