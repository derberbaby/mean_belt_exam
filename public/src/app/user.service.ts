import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  serviceLogin(user)  {
  	return this._http.post('/api/login', user)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceRegister(user) {
  	return this._http.post('/api/register', user)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceCheckSessionUser() {
  	return this._http.get('/api/user')
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceLogout() {
  	return this._http.get('/api/logout')
  		.map( (response) => response.json())
  		.toPromise()
  }

}
