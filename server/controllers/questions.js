let mongoose = require('mongoose');
let Question = mongoose.model('Question');
let User = mongoose.model('User');

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
  	Question.findOne({_id: req.params.question_id}, (err, question) => {
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
  				Question.findOne({_id: req.params.question_id}, (err, question) => {
  					if(err) {
  						let errors = [];
  						for(let i in err.errors) {
  							errors.push(err.errors[i].message);
  						}
  						return res.status(400).send(errors);
  					}
  					else {
  						let answer = new Answer(req.body);
  						answer._User = user._id;
  						answer.save( (err) => {
  							if(err) {
  								let errors = [];
  								for(let i in err.errors) {
  									errors.push(err.errors[i].message);
  								}
  								return res.status(400).send(errors);
  							}
  							else{
  								question.answers.push(answer);
  							}
  						})
  					}
  				})
  			}
  		})
  	}
  }

  							


}