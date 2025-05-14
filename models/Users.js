const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require:true

  },
  username: {
    type: String,
    unqiue:true,
    require :true,
    default:"Guest"
   
  },
  email: {
    type: String,
    require:true

  }, 
  password: {
    type: String,
   require:true
  },
  avatar: {
    type: String,
    default:"http://ww.gravatar.com/avatar/"

  },
  status: {
    type:Boolean,
    default:true

  },
  address: {
    type: String,
    require:true

  },
});
module.exports = mongoose.model('User', UserSchema);