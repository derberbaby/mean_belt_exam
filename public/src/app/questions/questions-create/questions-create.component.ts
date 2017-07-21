import { Component, OnInit } from '@angular/core';
import { Question } from './../../question';
import { QuestionService } from './../../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css']
})
export class QuestionsCreateComponent implements OnInit {

	question = new Question();
	errors = [];
	
  constructor(private _questionService: QuestionService, private _router: Router) { }

  ngOnInit() {
  }

  createQuestion() {
  	this._questionService.serviceCreateQuestion(this.question)
  		.then( (success) => {
  			this._router.navigate(['main'])
  		})
  		.catch( (err) => this.errors = JSON.parse(err._body));
  }
}
