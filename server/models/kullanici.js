var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kullaniciSchema = new Schema({

      ad: String,
      soyad: String,
      kullaniciAdi: { type: String, required: true, unique: true},
      email: String,
      sifre: { type: String, required: true}

});

   var Kullanici = mongoose.model('Kullanici', kullaniciSchema);

   module.exports= Kullanici;
