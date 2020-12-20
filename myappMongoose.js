const mongoose = require('mongoose');
const usertbl = require('./users');
const newLocal = require('./products');
require('./mydb');
//require('./server')
const express=require('express');
const { request, response, raw } = require('express');
const ProuductTbl = require('./products');
const exapp= express();
exapp.use(express.json())
exapp.listen(3000)
// *********add row to user tbl*********
//usertbl.create({name:'sika',age:'220',salary:'31000'})
// ********find user from user table using name*****
/*usertbl.findOne({name:"osama"},(err,result)=>{
    if(err) throw(err)
    else{
        console.log(result);
    };
})*/
// ********delete user from user table using name*****
/*usertbl.deleteOne({name:"sika"},(err,res)=>{
    if(err)throw(err)
    else{
        console.log(res);
    }
})*/
/*
usertbl.update({name:'sika'},{name:'tika'},(err,result)=>{
    if(err) throw(err)
    else{
        console.log(result);
    }
})*/
//-------------------getall users
exapp.get('/api/getAllUsers',async(req,res)=>{
  
    try{    const getAllUsers=await usertbl.find()
        res.send(getAllUsers)
    }
    catch(e){res.send(e)}
  
})
//-------------------Delete user
exapp.delete('/api/deleteUser/:id',async(req,res)=>{
try{
    const id=req.params.id
    const delUser=await usertbl.deleteOne({_id:id})
    res.send(delUser)
}
catch(e){res.send(e)}
})
//-------------------add user
exapp.post('/api/addUser',async(req,res)=>{
    try{
        const newUser= new usertbl(req.body)
        const addUser=await newUser.save()
        res.send(addUser)
    }
    catch(e){res.send(e)}
})
//-------------------update_user
exapp.post('/api/updateUser/:id',async(req,res)=>{
  
    try{
        const userId=req.params.id
        const updatData=req.body
        const updated=await usertbl.updateOne({_id:userId},updatData,(err,raw)=>{
            if(err){res.send(err)}
            else{res.send(raw)}
        })
    }
    catch(e){
       res.send(e)
    }
})
//-------------------add_ Manyuser
//------products------Crud--------------------
//Get Allprouducts----------------------------------------
exapp.get('/api/getAllProducts',async(request,response)=>{

    try{
        const allProducts=await ProuductTbl.find()
        response.send(allProducts)
    }
    catch(e){response.send(e)}

})
//add prouducts----------------------------------------
exapp.post('/api/addProuduct',async(request,response)=>{
    try{
        const newProuduct=new ProuductTbl(request.body)
        const ProuductAdd=await newProuduct.save()
        response.send(ProuductAdd)
    }
    catch(e){response.send(e)}
})
//update prouducts----------------------------------------
exapp.post('/api/updateProuduct/:id',async(request,response)=>{
    try{
        const itemId=request.params.id
        const newUpdateItem=request.body
    const updated=await ProuductTbl.updateOne({_id:itemId},newUpdateItem,(err,raw)=>{
    if(err) throw err
    else{
        response.send(raw)
    }
    })
    }
catch(e){response.send(e)}
})
//Delete prouducts----------------------------------------
exapp.delete('/api/deleteProduct/:id',async(request,response)=>{
    try{
        const itemId=request.params.id
        const deletedItem=await ProuductTbl.deleteOne({_id:itemId})
        response.send(deletedItem)
    }
    catch(e){response.send(e)}
})