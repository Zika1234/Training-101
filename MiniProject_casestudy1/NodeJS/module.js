var MongoClient = require ('mongodb').MongoClient

exports.displayAll = function(res){

    MongoClient.connect('mongodb://localhost:27017/emp',{useNewUrlParser:true},
    function(err,dbvar){
        if(err) throw err;

        var coll= dbvar.db('productdb');
        coll.collection('product').find().toArray(
            function(err,data){
                if(err) throw err;
                dataArr= JSON.stringify(data)
                // console.log(dataArr);
                // console.log(data);
                res.send(data);
                dbvar.close();
            })
            dbvar.close();
    }) 
}

exports.updateData = function(x){
    MongoClient.connect('mongodb://localhost:27017/emp3',{useNewUrlParser:true},
function(err, dbvar){
    if(err) throw err;
    var y ={Name:x.name}
   
    var coll = dbvar.db('productdb');
    coll.collection('product').update(y,{$set:{"ID":x.eid,"Name":x.ename,"Description":x.edescription,"Price":x.eprice}}, true, function(err,res){
        if(err) throw err;
        console.log("1 document Updated");
        // console.log(res);
        dbvar.close();
    })          
    dbvar.close();
})
}

exports.addData = function(x){
    MongoClient.connect('mongodb://localhost:27017/emp3',{useNewUrlParser:true},
function(err, dbvar){
    if(err) throw err;

   
    var coll = dbvar.db('productdb');
    coll.collection('product').insert(x, true, function(err,res){
        if(err) throw err;
        console.log("1 document Updated");
        console.log(res);
        dbvar.close();
    })          
    dbvar.close();
})
}

exports.deleteAll = function(data)
{
    MongoClient.connect('mongodb://localhost:27017/emp1',{useNewUrlParser:true},
function(err, dbvar){
    if(err) throw err;

    var coll = dbvar.db('productdb');
    coll.collection('product').remove({}, true, function(err,res){
        if(err) throw err;
        console.log("All document Removed");
        dbvar.close();
    })          
    dbvar.close();
})
}