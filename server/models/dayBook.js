var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dayBookSchema = new Schema({

      userName:String,
      dailyNot: String,
      date: String,
      diary_id: { type: String, required: true, unique: true}
      

});

   var Diary = mongoose.model('Diary', dayBookSchema);

   module.exports= Diary;