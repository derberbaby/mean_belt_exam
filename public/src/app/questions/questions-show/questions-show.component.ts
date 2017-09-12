import { Component, OnInit } from '@angular/core';
import { Question } from './../../question';
import { QuestionService } from './../../question.service';
import { User } from './../../user';
import { Answer } from './../../answer';
import { UserService } from './../../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-show',
  templateUrl: './questions-show.component.html',
  styleUrls: ['./questions-show.component.css']
})
export class QuestionsShowComponent implements OnInit {

	question: Question;
  question_id;
	errors = [];
  answers: Array<Answer>;

  constructor(private _userService: UserService, private _questionService: QuestionService, private _router: Router, private _route: ActivatedRoute) { 
  	this._route.params.subscribe((params)=>{
      // console.log('params is', params.question_id);
      this.question_id = params.question_id;
      // this._questionService.serviceShowQuestion(params.question_id)
      // 	.then( (question) => {
      // 		this.question = question;
      // 	})
      // 	.catch( (err) => this.errors = JSON.parse(err._body));

      this.getQuestion();
    })
  }

  ngOnInit() {
  }

  addLike(answer_id) {
    console.log('component', answer_id);
    this._questionService.serviceAddLike(answer_id)
      .then( (success) => this.getQuestion())
      .catch( (err) => this.errors = JSON.parse(err._body));
  }

  getQuestion() {
    this._questionService.serviceShowQuestion(this.question_id)
      .then( (question) => {
        this.question = question;
        this.answers = question.answers;
      })
      .catch( (err) => this.errors = JSON.parse(err._body));
  }

  logout() {
	this._userService.serviceLogout()
		.then( (success) => this._router.navigate(['']))
		.catch()
  }
}

 
