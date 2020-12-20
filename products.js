const mongoose=require('mongoose')
const productscema=mongoose.Schema({
    name:{
        required:true,
        type : String,
             },
        amount:{
            required:true,
            type : Number,
          },
        serial:{
            required:true,
            type : String,
                 },
        price:{
            required:true,
            type : Number,
            default:'admin'
             }
})
const ProuductTbl=mongoose.model('products',productscema)
module.exports=ProuductTbl