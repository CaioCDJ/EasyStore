import express from 'express';

const clientRouter = express.Router();

// get ClientInfo
clientRouter.get('/client/:id',(req,res)=>{

    const id: number = +req.params.id

    res.send(id.toString());
});



export default clientRouter;
