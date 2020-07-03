const Product = require('../models/products');
const User = require('../models/user');
const db = require('../util/database');

exports.getProfile = (req,res,next)=>{
    //const user = req.user;
    const userId = req.params.userId;

    User
        .findByPk(userId)
        .then(handcraft=>{
            if(!handcraft){
                return res.redirect('/home')
            }
            Product
                .findAll({where:{userId:userId}})
                .then(products=>{
                    res.render('profile/profileUser',{
                        prods:products,
                        handcraft:handcraft,
                        userId:userId,
                        user:req.session.user,
                        pageTitle:'Profile'
                })
        })
    })
        .catch(err=>{
            console.log(err)
        })
        
}

exports.getAddProduct = (req,res,next)=>{
    res.render('profile/editProduct',{
        pageTitle: 'Add Product',
        editing: false,
        user:req.session.user,
    })
}

exports.postAddProduct = (req,res,next)=>{
    const image = req.file;
   
    const describtion = req.body.describtion;
    const price = req.body.price;
    const type = req.body.category;
    const imageUrl = image.path;
    req.user.createProduct({
        price: price,
        image : imageUrl,
        describtion : describtion,
        type : type
    })
        .then(()=>{
            res.redirect('/profile/'+req.session.user.id);
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.getEditProduct = (req,res,next)=>{
    const editMode = req.query.edit;
    if(!editMode){
        res.redirect('/home');
    }
    const prodId = req.params.productId;
    Product
        .findByPk(prodId)
        .then(product=>{
            if(!product){
                return res.redirect('/home');
            }
            res.render('profile/editProduct', {
                title: 'Edit Product',
                editing: editMode,
                product: product,
                user:req.session.user,
              });
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.postEditProduct = (req,res,next)=>{
    const prodId = req.body.productId;
    const updatedDescribtion = req.body.describtion;
    const updatedPrice = req.body.price;
    const image = req.file;
    const updatedType = req.body.category;
    console.log(prodId)
    Product
        .findByPk(prodId)
        .then(product=>{
            product.price = updatedPrice;
            product.describtion = updatedDescribtion;
            product.type = updatedType;
            if(image){
                product.image = image.path;
            }
            return product.save();
        })
        .then(()=>{
            res.redirect('/profile')
        })
        .catch(err=>{
            console.log(err);
        })
}

exports.postDeleteProduct = (req,res,next)=>{
    const userId = req.user.id;
    console.log(userId)
    const prodId = req.body.productId;
    console.log(prodId)
    Product
        .findByPk(prodId)
        .then(product=>{
            return product.destroy();
        })
        .then(()=>{
            console.log('Product Deleted');
            res.redirect('/profile/:userId');
        })
        .catch(err=>{
            console.log(err);
        })
        
}

