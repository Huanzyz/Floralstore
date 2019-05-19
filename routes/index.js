var express = require('express');
var router = express.Router();

//Require our controllers
var home_controller = require('../controllers/homeController');
var product_controller = require('../controllers/productController');
var contact_controller = require('../controllers/contactController')
var blog_controller = require('../controllers/blogController');
var account_controller = require('../controllers/accountController');
var order_controller = require('../controllers/orderController');
//add more controllers

//GET | POST ...
// HOME
router.get('/', home_controller.index); 
// PRODUCT SECTION
//GET request for list of all Products.
router.get('/list-product/:id', product_controller.product_list);
// GET request for one Product
router.get('/detail-a-product',product_controller.product_detail);
// GET request for list of the favorite products
router.get('pages/love-product', product_controller.product_favorite_list)

// CONTACT SECTION
// GET request for creating a Contact
router.get('/contact',contact_controller.contact_create_get);

// BLOG SECTION
//GET request for list of all Blogs.
router.get('/blog',blog_controller.blog_list);
// GET request for one Blog
router.get('/blog-content',blog_controller.blog_detail);

// ACCOUNT SECTION
// register
router.get('/register',account_controller.account_register_post);
// login
router.get('/login',account_controller.account_login_get);
// forget - password
router.get('/forget-password',account_controller.account_forget_password_post);
// edit - profile
router.get('/edit-profile',account_controller.account_edit_profile_post);

// ORDER SECTION
router.get('/cart',order_controller.order_cart)

router.get('/checkout',order_controller.order_checkout)

router.get('/trackorder',order_controller.order_trackOrder)


module.exports = router;