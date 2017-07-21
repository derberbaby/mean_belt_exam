let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AnswerSchema = new mongoose.Schema({
  content: {type: String, required: [true, "answer content required"], minlength: "5"},
  desc: { type: String },
  likes: { type: Number },
  _User: { type: Schema.Types.ObjectId, ref: 'User' },
  _Question: { type: Schema.Types.ObjectId, ref: 'Question' }
}, {timestamps: true});

let Answer = mongoose.model('Answer', AnswerSchema);