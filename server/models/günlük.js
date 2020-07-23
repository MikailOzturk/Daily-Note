var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var günlükSchema = new Schema({

      kullaniciAdi:String,
      günlükNot: String,
      tarih: String,
      gunluk_id: { type: String, required: true, unique: true}
      

});

   var Günlük = mongoose.model('Günlük', günlükSchema);

   module.exports= Günlük;