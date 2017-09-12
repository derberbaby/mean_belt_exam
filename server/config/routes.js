var users = require('./../controllers/users.js');
var questions = require('./../controllers/questions.js');

module.exports = (app) => {
  app.post('/api/login', users.login);

  app.post('/api/register', users.register);

  app.get('/api/user', users.check_session_user);

  app.get('/api/logout', users.logout);

  app.post('/api/create_question', questions.create_question);

  app.get('/api/questions', questions.getall);
  
  app.get('/api/showone/:question_id', questions.showone);

  app.post('/api/add_answer/:question_id', questions.add_answer);

  app.post('/api/add_like/:answer_id', questions.add_like);
}