import express from 'express';

const clientRouter = express.Router();
const {connection} = require('../database/db.ts');

// get ClientInfo
clientRouter.get('/client/:id',(req,res)=>{

    const id: number = +req.params.id
    
    let db = connection;

    db.execute('SHOW TABLES;',function(err:String,results:String,fields:String){
        console.log(results);
    })

    res.send(id.toString());
});



export default clientRouter;
