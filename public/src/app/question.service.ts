import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }

  serviceCreateQuestion(question) {
  	return this._http.post('/api/create_question', question)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceGetQuestions() {
  	return this._http.get('/api/questions')
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceShowQuestion(question_id) {
  	// console.log('service', question_id);
  	return this._http.get('/api/showone/' + question_id)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceAttachAnswer(question, answer) {
  	return this._http.post('/api/add_answer/' + question._id, answer)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceAddLike(answer_id) {
  	console.log('service', answer_id);
  	return this._http.post('/api/add_like/' + answer_id, answer_id)
  		.map( (response) => response.json())
  		.toPromise()
  }

}
