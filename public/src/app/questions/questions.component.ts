import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from './../question';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

	user;
	questions: Array<Question>;
	errors = [];

  constructor(private _userService: UserService, private _questionService: QuestionService, private _router: Router) { }

  ngOnInit() {
  	this._userService.serviceCheckSessionUser()
		.then( (user) => {
			this.user = user;
		})
		.catch( (err) => {
			this._router.navigate([''])
		})
    this.getQuestions();
  }

  getQuestions() {
  	this._questionService.serviceGetQuestions()
  		.then( (questions) => {
  			this.questions = questions;
  		})
  		.catch( (err) => this.errors = JSON.parse(err._body));
  }

  logout() {
  	this._userService.serviceLogout()
  		.then( (success) => this._router.navigate(['']))
  		.catch()
  }

}
