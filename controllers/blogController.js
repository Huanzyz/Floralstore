var Product = require('../models/blog');
//add more model if need


// Display list of all blogs
exports.blog_list = function(req, res, next){
    //todo
     // Successful, so render
     res.render('pages/blog/blog')
}

// Display detail page for a specific blog.
exports.blog_detail = function(req, res, next){
    //todo
     // Successful, so render
     res.render('pages/blog/blog-content')
}
