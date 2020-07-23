var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/NodeProje';

mongoose.connect(mongoDB);

mongoose.connection.on('connected',function(){
    console.log('Mongodb Connected');
});
mongoose.connection.on('error',function(err){
    console.log('Mongodb connection error : '+err );
});
mongoose.connection.on('disconnected',function(){
    console.log('Mongodb Disconnected');
});