let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let QuestionSchema = new mongoose.Schema({
  content: {type: String, required: [true, "question content required"], minlength: "10"},
  desc: { type: String },
  _User: { type: Schema.Types.ObjectId, ref: 'User' },
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer' }]
}, {timestamps: true});

let Question = mongoose.model('Question', QuestionSchema);

