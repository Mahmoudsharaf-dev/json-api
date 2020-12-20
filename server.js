const htp=require('http')
const User=require('./users')
const server=htp.createServer(async(req,res)=>{

if(req.url==='/'){res.write( 'server is created');res.end()}

else if(req.url==='/sika'){
    try{const myuser= await User.find({name:'sika'})
    res.write(JSON.stringify(myuser))
    res.end
       }
       catch{
           
       }
}

})
server.listen(3000)