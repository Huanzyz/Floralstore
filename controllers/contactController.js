var Product = require('../models/contact');
//add more model if need


// Display contact create form on GET.
exports.contact_create_get = function(req, res, next){
    //todo
     // Successful, so render
     res.render('pages/contact/contact')
}
