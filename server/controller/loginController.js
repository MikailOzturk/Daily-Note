var Kullanici = require('../models/kullanici');
var Günlük = require('../models/günlük');
var kullanici;
var gunluk;
var i;
var yeniGünlük = new Günlük;
module.exports.indexGet = function (req, res) {
    if (req.session.kullaniciAdi) {
        res.send('Giriş yaptınız. <a href="/logout">Çıkış</a> yapmak ister misiniz?');
    }
    else {
        res.render('login');
    }

}

module.exports.indexPost = function (req, res) {

   

    Kullanici.find({ kullaniciAdi: req.body.username, sifre: req.body.password }, function (err, results) {

        if (results.length) {
            

            req.session.regenerate(function(err) {
                req.session.user = req.body.username
                    req.session.save(function(err) {
                    console.log("Session Before Redirect: ", req.session.user);
                    res.user= req.body.username
                    res.render('notekle',{
                        session:req.session.user,
                        
                    });
                   
                    
                });
            });



        } else {
            res.render('home');
        }


    });


}

module.exports.signupGet = function (req, res) {

    res.render('signup');
}

module.exports.signupPost = function (req, res) {




    var yeniKullanici = new Kullanici({
        ad: req.body.ad,
        soyad: req.body.soyad,
        kullaniciAdi: req.body.kullaniciAdi,
        email: req.body.email,
        sifre: req.body.sifre

    });
    console.log(req.body);

    yeniKullanici.save(function (err) {
        if (err) {
            res.render('signup')
        }
        else {


            res.redirect('/login')




        }

    });


}
module.exports.indexEkleGet = function (req, res) {
    Günlük.find({ kullaniciAdi: req.session.user },function(err, results){
           
         
        res.render('notekle',{session:req.session.user,
            gunluk: results});
    });

   
}

module.exports.indexEklePost = function (req, res) {
    Kullanici.find( function(err, results){
        i=0;
    var yeniGünlük = new Günlük({

        kullaniciAdi: req.session.user,
        günlükNot: req.body.günlükNot,
        tarih: req.body.tarih,
        gunluk_id:req.session.user + '_' + req.body.tarih
        
    });
    yeniGünlük.save(function (err) {
        if (err) {
          
                res.render('notekle',{session:req.session.user,
                    kullanici: results});
            
            console.log('basarısız');
        }
        else {

                res.render('notekle',{session:req.session.user,
                    kullanici: results});
            
            console.log('kayıt tamm');
        }
    }); 
});
    console.log(req.body);

   console.log(req.session.user);

}



module.exports.indexNoteGet = function(req, res){
    Günlük.find({ kullaniciAdi: req.session.user },function(err, results){
           
         
        res.render('note',{session:req.session.user,
            gunluk: results});
    });
}

module.exports.indexNotePost = function(req, res){
    
    Günlük.find({ kullaniciAdi: req.session.user},function(err, results){
         
   
         var yeniGünlük = new Günlük({

            kullaniciAdi: req.session.user,
            günlükNot: req.body.günlükNot,
            tarih: req.body.tarih,
            günlükNot1:req.body.günlükNot1,
            gunluk_id:req.session.gunluk_id
        });
    
        const gunluk_id = req.body.gunluk_id
        const günlükNot = req.body.günlükNot
        
        const check = gunluk => gunluk || new Error('User not found') 
        
        const upsert = async (gunluk_id, günlükNot) => check(await Günlük.findOneAndUpdate({gunluk_id}, {günlükNot}, {upsert: true}))
        
        upsert(gunluk_id, günlükNot) 

                res.render('note',{session:req.session.user,
            gunluk: results});
        console.log(req.body);

    });

    }
