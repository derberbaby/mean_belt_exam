import { Component, OnInit } from '@angular/core';
import { Question } from './../../question';
import { QuestionService } from './../../question.service';
import { User } from './../../user';
import { UserService } from './../../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-show',
  templateUrl: './questions-show.component.html',
  styleUrls: ['./questions-show.component.css']
})
export class QuestionsShowComponent implements OnInit {

	question: Question;
	errors = [];
	answers: Array<any>;

  constructor(private _userService: UserService, private _questionService: QuestionService, private _router: Router, private _route: ActivatedRoute) { 
  	this._route.params.subscribe((params)=>{
      // console.log('params is', params.question_id);
      this._questionService.serviceShowQuestion(params.question_id)
      	.then( (question) => {
      		this.question = question;
      	})
      	.catch( (err) => this.errors = JSON.parse(err._body));
    })
  }

  ngOnInit() {
  	
  }

  logout() {
	this._userService.serviceLogout()
		.then( (success) => this._router.navigate(['']))
		.catch()
  }
}

 
