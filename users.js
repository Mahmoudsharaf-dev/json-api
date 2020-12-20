const mongoose=require('mongoose')
 const userscema= new mongoose.Schema({
    name:{
    required:true,
    type : String,
         },
    email:{
        required:true,
        type : String,
      },
    password:{
        required:true,
        type : String,
             },
    role:{
        required:true,
        type : String,
        default:'admin'
         }
    
    });
  const  UserTbl =mongoose.model('users',userscema);
    module.exports=UserTbl