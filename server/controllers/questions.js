let mongoose = require('mongoose');
let Question = mongoose.model('Question');
let User = mongoose.model('User');
let Answer = mongoose.model('Answer');

module.exports = {

  create_question: (req, res) => {
  	if(req.session.user_id) {
  		User.findOne({_id: req.session.user_id}, (err, user) => {
  			if(err) {
  				let errors=[];
  				for(let i in err.errors) {
  					errors.push(err.errors[i].message);
  				}
  				return res.status(400).send(errors);
  			}
  			else {
  				let question = new Question(req.body);
  				question._User = user._id;
  				question.save( (err) => {
  					if(err) {
  						let errors=[];
  						for(let i in err.errors) {
  							errors.push(err.errors[i].message);
  						}
  						return res.status(400).send(errors);
  					}
  					else {
  						user.questions.push(question);
  						user.save( (err) => {
  							if(err) {
  								let errors = [];
  								for(let i in err.errors) {
  									errors.push(err.errors[i].message);
  								}
  								return res.status(400).send(errors);
  							}
  							else {
  								return res.json(true);
  							}
  						})
  					}
  				})
  			}
  		})
  	}
  },

  getall: (req, res) => {
  	Question.find({}, (err, questions) => {
  		if(err) {
  			let errors = [];
  			for(let i in err.errors) {
  				errors.push(err.errors[i].message);
  			}
  			return res.status(400).send(errors);
  		}
  		else{
  			return res.json(questions);
  		}
  	})
  },

  showone: (req, res) => {
  	Question.findOne({_id: req.params.question_id}).populate({ path: 'answers', options: { sort: { "likes": -1 }}, populate: { path: '_User'}}).exec((err, question) => {
  		if(err) {
  			let errors = [];
  			for(let i in err.errors) {
  				errors.push(err.errors[i].message);
  			}
  			return res.status(400).send(errors);
  		}
  		else {
  			return res.json(question);
  		}
  	})
  },

  add_answer: (req, res) => {
  	// console.log('in add_answer');
  	if(req.session.user_id) {
  		User.findOne({_id:req.session.user_id}, (err, user) => {
  			if(err) {
  				let errors = [];
  				for(let i in err.errors) {
  					errors.push(err.errors[i].message);
  				}
  				return res.status(400).send(errors);
  			}
  			else {
  				// console.log('found user', user);
  				Question.findOne({_id: req.params.question_id}, (err, question) => {
  					if(err) {
  						let errors = [];
  						for(let i in err.errors) {
  							errors.push(err.errors[i].message);
  						}
  						return res.status(400).send(errors);
  					}
  					else {
  						// console.log('found question', question);
  						let answer = new Answer(req.body);
  						answer._User = user._id;
  						answer._Question = question._id;
  						answer.save( (err) => {
  							// console.log('successfully saved answer', answer);
  							if(err) {
  								let errors = [];
  								for(let i in err.errors) {
  									errors.push(err.errors[i].message);
  								}
  								return res.status(400).send(errors);
  							}
  							else{
  								user.answers.push(answer);
  								user.save( (err) => {
  									if(err) {
  										return res.status(400).send(err);
  									}
  									else{
  										console.log('successfully saved user', user);
  									}
  								})
  								question.answers.push(answer);
  								question.save( (err) => {
  									if(err) {
  										return res.status(400).send(err);
  									}
  									else{
  										// console.log('successfully saved question', question);
  										return res.json(true);
  									}
  								})
  							}
  						})
  					}
  				})
  			}
  		})
  	}
  },

  add_like: (req, res) => {
  	// console.log('line 145', req.params.answer_id);
  	Answer.findOne({_id: req.params.answer_id}, (err, answer) => {
  		if(err) {
  			return res.status(400).send(err);
  		}
  		else{
  			answer.likes += 1;
  			answer.save( (err) => {
  				if(err) {
  					return res.status(400).send(err)
  				}
  				else {
  					console.log('successfully added like');
  					return res.json(true)
  				}
  			})
  		}
  	})
  } 							


}