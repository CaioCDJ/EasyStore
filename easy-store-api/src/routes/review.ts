import express from 'express';

const reviewRouter = express.Router();
const {connection} = require('../database/db.ts');

// review of a product :id
reviewRouter.get('/review/product/:id',(req,res)=>{

    let idReview:number = +req.params.id;

    let query =  `SELECT r.cd_review,r.nm_title,r.ds_review,
                         r.dt_review,r.vl_rating, c.nm_firstName, c.nm_lastName
                            FROM tb_review as r 
                                JOIN tb_product as p
                                JOIN tb_client as c
                                    WHERE e.cd_review = ? 
                                        AND r.fk_cd_product = p.cd_product
    `;
    
    connection.execute(query,[idReview],(error:String, results:String)=>{

        if(results.length<-1){
            res.status(404);
        } else{
            res.send(results);
        }
    })
});

// product rating : id
reviewRouter.get('/review/product/rating/:id',(req,res)=>{

});


// send review


// reviews by user
reviewRouter.get('/revier/product/:id',(req,res)=>{

});


export default reviewRouter;