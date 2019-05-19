
//add more model if need
var Category = require('../models/category');
var Product = require('../models/product');

var async = require('async');


exports.index = function(req, res, next){ 

    // Product.randomProduct(function(err, result){
    //     console.log("test");
    //     if(err){
    //         console.log(err);
    //         res.err(err);
        
    //     } else{
    //         console.log("11111111")
    //         let arr1 =  result.slice(0,5)
    //         let arr2 = result.slice(6,11)
    //         let result1 = {list1: arr1, list2: arr2}
    //         res.render('pages/home/index', {title: 'FloralShop',list: result1});
    //         console.log("All products random: ");
    //        console.log(result1);
    //     }
    // })   

    async.parallel({
        list1: function(callback){
            Product.randomProduct(callback);
        },
        list2: function(callback){
            Product.randomProduct(callback);
        },

        listCategory: function(callback){
            Category.allCategory(callback);
        }

    },function(err, results) {
        if (err) { return next(err); }
        // if (results.list1 == null && results.list2 == null) { // No results.
        //     var err = new Error('Book not found');
        //     err.status = 404;
        //     return next(err);
        // }
        // Successful, so render.
        res.render('pages/home/index', {title: 'FloralShop',list1: results.list1, list2: results.list2, listCategory: results.listCategory});
    });
}