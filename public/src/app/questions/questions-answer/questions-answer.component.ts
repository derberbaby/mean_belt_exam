import { Component, OnInit } from '@angular/core';
import { Question } from './../../question';
import { QuestionService } from './../../question.service';
import { User } from './../../user';
import { UserService } from './../../user.service';
import { Answer } from './../../answer';
// import { AnswerService } from './../../answer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-answer',
  templateUrl: './questions-answer.component.html',
  styleUrls: ['./questions-answer.component.css']
})
export class QuestionsAnswerComponent implements OnInit {

	question: Question;
	errors=[];
	answer = new Answer();

  constructor(private _userService: UserService, private _questionService: QuestionService, private _router: Router, private _route: ActivatedRoute) { 
  	this._route.params.subscribe((params)=>{
      console.log('params is', params.question_id);
      this._questionService.serviceShowQuestion(params.question_id)
      	.then( (question) => {
      		this.question = question;
      	})
      	.catch( (err) => this.errors = JSON.parse(err._body));
    })
  }

  ngOnInit() {
  }

  attachAnswer(question) {
  	this._questionService.serviceAttachAnswer(question, this.answer)
  		.then( (success) => {
  			this._router.navigate(['question', question._id])
  		})
  		.catch( (err) => this.errors = JSON.parse(err._body));
  }

}
