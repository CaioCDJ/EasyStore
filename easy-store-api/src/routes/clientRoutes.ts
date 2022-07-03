import express,{Response,Request} from 'express';
import Client from '../models/Client';
const db = require('../repositories/db.ts');

const clientRouter = express.Router();

// testado
clientRouter.get('/client/:id',(req:Request,res:Response):any=>{
  
  let id:any = req.params.id;
  
  if(!id){
    res.status(404).send(); // buscar o status code correto
  }

  const query =`SELECT nm_firstName,nm_lastName FROM tb_client WHERE cd_client = ?`;
  
  return db.exec(query,[id]).then((resp:any) =>{
  
    if(resp.length==0){
      res.status(404).send();
    }else{
      res.send(resp)
    }
    }).catch((e:any)=> res.status(404).send(e.message));
});

// map testado
clientRouter.post('/client',(req:Request, res:Response):any =>{

  if(req.body){
    res.send('deuRuim')    
  }
  
  const client = new Client(req.body);

  const query = `INSERT INTO tb_client
                  	(nm_firstName,nm_lastName,nm_email,cd_password,nm_address,cd_cep,cd_phone) 
                      VALUES(?,?,?,?,?,?,?)`;
     
  const params = [client.firstName,
                  client.email,
                  client.password,
                  client.address,
                  client.cep,
                  client.phone];
    
   return db.exec(query,params).then((resp:any) =>{
  
    if(resp.length==0){
      res.status(404).send();
    }else{
      res.send(resp)
    }
    }).catch((e:any)=> res.status(404).send(e.message));      
})


// Testado
clientRouter.delete('/client/:id', (req:Request, res:Response):any=>{
  
  let id:any = req.params.id;
  
  if(!id){
    res.status(404).send(); // buscar o status code correto
  }

  const query =`DELETE FROM tb_client WHERE cd_client = ?`;
  
  db.exec(query,[id]).then((resp:any) =>{
  
      res.status(200).send('Conta deletado')
    }).catch((e:any)=> res.status(404).send(e.message));  
  
})

export default clientRouter;
