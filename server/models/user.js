var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

      name: String,
      surname: String,
      userName: { type: String, required: true, unique: true},
      email: String,
      password: { type: String, required: true}

});

   var User = mongoose.model('User', userSchema);

   module.exports= User;
