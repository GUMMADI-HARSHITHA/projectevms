//import
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
//const bcrypt=require('bcrypt');


//config
const app = new express();
app.use(express.json());
app.use(cors());

const client = new  MongoClient('mongodb+srv://admin:admin@cluster0.nmcrq0k.mongodb.net/?retryWrites=true&w=majority');
client.connect();
const db = client.db('Sec32db');
const col = db.collection('details');



app.get('/home',(req,res)=>{
    res.send("Home page");
})
app.post('/insert',async(req,res)=>{
    console.log(req.body);
    //req.body.password= await bcrypt.hash(req.body.password,5);
    console.log(req.body);
    col.insertOne(req.body);
    res.send("successfully submitted");

})

app.get('/showall',async(req,res)=>{
    const result = await  col.find().toArray();
    res.send(result);
})
app.post('/check',async(req,res)=>{
    //const result1 = await col.findOne({'firstname':req.body.un});
    console.log(res.result1)
    console.log(req.body.un);
    console.log(req.body.pw);
    console.log(req.body.add);
    req.body.pw=bcrypt.hash(req.body.pw,5);


       if(result1.password == req.body.pw)
       {
        res.send("Login Success")

    }
    else{
        res.send("Login Failed")
    }
})
app.listen(8081)
console.log("Server running...");


app.post('/Update', async(req,res)=>{
const result2 = await col.findOne({'firstname':req.body.un});
if(result2.firstname==req.body.un){
    if(result2.password==req.body.pw){
        col.updateOne({password:req.body.pw},{$set:{password:req.body.pwd}})
        res.send("updated successfully");
    }
}
else
{
    res.send("updation failed");
}
}
);

app.post('/Delete', async(req,res)=>{
    const result2 = await col.findOne({'firstname':req.body.un});
    if(result2.firstname==req.body.un){
        
            col.deleteOne({firstname:result2.firstname})
            res.send("Deleted successfully");
    }
    else
    {
        res.send("Deletion failed");
    }
    }
    );
   