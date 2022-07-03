import expres, {Response,Request} from 'express';
import Store from '../models/Store.ts'
const db = require('../repositories/db.ts');

const storeRouter = express.Router();

storeRouter.get('/Store/:id',(req:Request,res:Response):any=>{
  
  let id:any = req.params.id;
  
  if(!id){
    res.status(404).send(); // buscar o status code correto
  }

  const query =`SELECT * FROM tb_store WHERE cd_store = ?`;
  
  return db.exec(query,[id]).then((resp:any) =>{
 
    if(resp.length==0){
      res.status(404).send();
    }else{
      res.send(resp)
    }
    }).catch((e:any)=> res.status(404).send(e.message));
});

clientRouter.delete('/store/:id', (req:Request, res:Response):any=>{
  
  let id:any = req.params.id;
  
  if(!id){
    res.status(404).send(); // buscar o status code correto
  }

  const query =`DELETE FROM tb_store WHERE cd_store = ?`;
  
  return db.exec(query,[id]).then((resp:any) =>{
  
      res.status(200).send('Conta deletado')
    }).catch((e:any)=> res.status(404).send(e.message));  
  
})

module.exports = storeRouter;
