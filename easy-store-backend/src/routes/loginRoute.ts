import express,{Request } from 'express';
import controller from '../controller/loginController';

const router = express.Router();

router.get('/login/:email/:password', controller.getLogin);


export = router;