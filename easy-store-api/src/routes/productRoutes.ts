import expres, {Response,Request} from 'express';
import Product from '../models/Product.ts'
const db = require('../repositories/db.ts');

const productRouter = express.Router();

// Rota fechada
productRouter.post('/product/:id',(req:Request,res:Response):any=>{
  
  if(req.body || req.params.id){
    res.status(400).send();
  }
  
  const idStore:number = +req.params.id;
  const product = new Product(req.body)

  const query = `INSERT INTO tb_product (nm_product,vl_product, qt_product, ds_product,fk_cd_store) 
	      	          VALUES (?,?,?,?,?);`;

  const params = [product.name,
                  product.value,
                  product.qt,
                  product.ds,
                  idStore];

  db.exec(query,params).then((resp:any)=>{ 
    res.status(200).send();
  }).catch((e:any)=>{
      res.status(404).send();
  })

});

// productRouter.put('/product/:id');

productRouter.delete('/product/',(req:Request, res:Response):any =>{
  /*
   *{
      "idStore":??,
      "idProduct":??
    }
  * */
  const [idStore,idProduct] = req.body;


  const query = `DELETE FROM tb_product 
                  WHERE cd_product = ?
                    AND fk_cd_store`;

  const params = [idProduct,idStore];

  db.exec(query,params)
  .then((resp:any)=>{
    res.send('Produto excluido');
  })
  .catch((e:any)=>{ 
    res.status(404).send()})
});


export default productRouter;
