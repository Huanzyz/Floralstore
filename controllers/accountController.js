var Product = require('../models/account');
//add more model if need

exports.account_login_get = function(req, res, next){
    //todo
     // Successful, so render
     res.render('pages/account/login');
}

exports.account_register_post = function(req, res, next){
    //todo
     // Successful, so render
     res.render('pages/account/register');
}

exports.account_forget_password_post = function(req, res, next){
    //todo
     // Successful, so render
     res.render('pages/account/forget-password');
}

exports.account_edit_profile_post = function(req, res, next){
    //todo
     // Successful, so render
     res.render('pages/account/profileEdit');
}





