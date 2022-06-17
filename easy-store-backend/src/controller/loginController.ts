import { Express, NextFunction } from "express";

 
const getLogin = async (req:Request,res:Response, next:NextFunction) =>{
    
    let email = req.params.email;
    
    let password = req.params.password;
    
    return res.status(200).json({
        email,
        password
    });
}


export default {getLogin};