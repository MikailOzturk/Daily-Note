
var fs= require("fs");

var express = require('express');
var path= require('path');
var app = express();

var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var db = require('./server/models/db');

var session = require('express-session');

app.use(session({
      secret: 'Proje',
      resave: true,
      saveUninitialized: false,
      
    }));


app.set('view engine','ejs')
app.set('views',path.join(__dirname, '/server/views'));

app.get("/logout", function(req,res){
    
      delete req.session.userName;
      res.redirect("/");
});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(ejsLayouts);
app.use('/public', express.static(path.join(__dirname, 'public')));


require('./server/routes/routeManager')(app);


var User = require('./server/models/user');




app.listen(8888);

console.log('baglandi')




























