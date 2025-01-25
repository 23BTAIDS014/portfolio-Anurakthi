//const mongodb=require('mongodb');
//const mongoClient= mongodb.MongoClient;
const mongose=require('mongoose');
 let database;
async function getDatabase(){
    mongose.connect('mongodb://127.0.0.1:27017/t1')
    .then(()=>{
        console.log("db Connected...")
    })
    .catch(()=>{
        console.log("db error..")
    })
}
/*let objectId=mongodb.ObjectId;
async function getDatabase(){
    const client= await mongoClient.connect('mongodb://127.0.0.1:27017');

    database=client.db('t1');
    if(database){
        console.log('database Connected successfully');

    }
    else{
        console.log('Database connection failed:');
    }
        return database
    }
module.exports={getDatabase,objectId};*/
module.exports={getDatabase}