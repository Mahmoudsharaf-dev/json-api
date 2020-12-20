const mongoose = require('mongoose');
const { schema } = require('./users');
const chart=mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        require:true

     },
     date:{   
        type:date,
        defult:date.now
     },
     products:[{
        prouctid: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            require:true
        },
        amount:{}
     }]
})