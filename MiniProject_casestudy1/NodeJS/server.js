var exp = require("express");
var cors = require("cors");
var mod = require ("./module.js");
var app=exp();
var parser = require('body-parser');
var MongoClient = require ('mongodb').MongoClient



app.get('/rest/api/display',cors(),(req,res)=>{

    res.header("Access-Control-Allow-origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
    mod.displayAll(res);
    // console.log(mod.displayAll())
})

app.use(parser.json());

app.post("/rest/api/remove",cors(), (req, res) => {
res.header("Access-Control-Allow-Origin", "*"),
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
console.log(req.body);


MongoClient.connect('mongodb://localhost:27017/emp1',
function(err, dbvar){
    if(err) throw err;

    var coll = dbvar.db('productdb');
    coll.collection('product').remove(req.body, true, function(err,res){
        if(err) throw err;
        console.log("1 document Removed");
        dbvar.close();
    })          
    dbvar.close();
})
})

app.post("/rest/api/update",cors(), (req, res) => {
res.header("Access-Control-Allow-Origin", "*"),
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
console.log(req.body);


// res.send(req.body);
mod.updateData(req.body);


})


app.post("/rest/api/add",cors(), (req, res) => {
res.header("Access-Control-Allow-Origin", "*"),
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
console.log(req.body);
mod.addData(req.body);
res.send(req.body);
})


app.post("/rest/api/deleteAll",cors(), (req, res) => {
res.header("Access-Control-Allow-Origin", "*"),
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
console.log("hello");


// res.send(req.body);
mod.deleteAll(req.body);


})






app.use(cors()).listen(1010,()=>{
    console.log("Server Started")
})








