import express from 'express';

const productRouter = express.Router();
const {connection} = require('../database/db.ts');

// get by id
productRouter.post('/product/:id',(req,res)=>{

    let id:number = +req.params.id;
    

    let query = 'SELECT * FROM tb_product WHRE cd_product = ?';

    connection.execute(query,[id],(error:String,results:String)=>{
        
        if(results.length < -1){
            res.status(404).send('Produto não encontrado');
        }
        else
            res.send(results);
    });

});

// get by categorie
productRouter.post('/product/categorie/:categorie',(req,res)=>{

    let nmCategorie:String = req.params.categorie;

    let query = `SELECT * from tb_product as p 
	                JOIN tb_categorie as c
		                WHERE c.nm_categorie = ? and 
			                c.cd_categorie = p.fk_cd_categorie;`;
    
    connection.execute(query,[nmCategorie], (error:String, results:String)=>{
        
        if(results.length < -1 ){
            res.status(404);
        } else {
            res.send(results);
        }
    })
});

// search product ??


export default productRouter;