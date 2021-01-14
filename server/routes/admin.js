const router = require('koa-router')()
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');
const admin = require('../model/admin')
const product = require('../model/product')
const fs = require('fs');
const multer = require('@koa/multer');
const order = require('../model/order')
const path = require("path");
const { ObjectId } = require('mongodb');



let storage = multer.diskStorage({
  destination:function(req, file, cb){
    cb(null, 'public/images')
  },
  filename: (ctx, file, cb)=>{
      console.log(file);
      cb(null, file.originalname);
  }
});

let upload = multer({ storage: storage });




router.prefix('/admin')

const tokenConfig = {privateKey:"blackfloat"};



router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})



router.post("/login",async(ctx,next)=>{
  const data = ctx.request.body;
  let admin_info = await admin.findOne(data)
  console.log(admin_info)
  if(admin_info){
    let token = await jwt.sign(admin_info.toJSON(),tokenConfig.privateKey,{expiresIn:"7d"})
    ctx.body ={success:true,token:token};
  }
  else
  ctx.body ={success:false,token:""};
})

router.get("/check_admin",async(ctx,next)=>{
  const token = ctx.get("Authorization");
  if(token == "")
    return ctx.body = {success:false};
  try{
    let user_info = jwt.verify(token,tokenConfig.privateKey);
    ctx.body = {success:true}
  }catch(err){  
    ctx.body = {success:false};
  }
})

router.get("/logout",async(ctx,next)=>{
  const token = ctx.get("Authorization");
  console.log(jwt.verify(token,tokenConfig.privateKey));
  try{
    jwt.destroy(token);
    ctx.body = {success:true};
  }
  catch(err){
    ctx.body = {success:true};
  }
})


router.post("/addProduct",async(ctx,next)=>{
  let data = ctx.request.body;
  console.log(data);
  try{
    data = await new product(data).save();
    console.log(data);
    ctx.body = {success:true,message:"",_id:data._id};
  }catch(e){
    console.log(e)
    ctx.body = {success:false,message:e}
  }
})

router.post('/uploadImage', upload.single('file'), async ctx => {
  ctx.body = {success:true};
});

router.get("/getProduct",async(ctx,next)=>{
  let products = await product.find({});
  ctx.body = products;
})
router.delete("/delProduct/:id",async(ctx,next)=>{
  const _id = ObjectId(ctx.params.id);
  try{
    await product.deleteOne({_id:_id});
    ctx.body ={success:true};
  }catch(e){
    ctx.body ={success:false};
  }
})

router.get("/getOneProduct/:id",async(ctx,next)=>{
  const _id = ObjectId(ctx.params.id);
  let data = await product.findOne({_id:_id});
  ctx.body ={data};
})

router.put("/updateProduct/:id",async(ctx,next)=>{
  const _id = ObjectId(ctx.params.id);
  let data = ctx.request.body;
  console.log(data)
  try{
    await product.updateOne({_id:_id},data);
    ctx.body ={success:true};
  }catch(e){
    ctx.body ={success:false};
  }

})

router.post("/addOrder",async(ctx,next)=>{
  let data = ctx.request.body;
  try{
    await new order(data).save();
    ctx.body = {success:true};
  }catch(e){
    ctx.body = {success:false};
  }
})

router.get("/getOrders",async(ctx,next)=>{
  let data = await order.find({});
  ctx.body = data;
})

router.get("/getOrder/:id",async(ctx,next)=>{
  const _id = ObjectId(ctx.params.id);
  let data = await product.findOne({_id:_id});
  ctx.body = data;
})


module.exports = router;