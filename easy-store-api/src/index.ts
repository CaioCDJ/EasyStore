import 'reflect-metadata'; 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

import clientRoutes from './routes/clientRoutes';

// Porta do servidor
const PORT = process.env.PORT || 4000;

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

// App Express
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint raiz
app.get('/', (req:any, res:any) => {
	res.send('Bem-vindo!');
});

// Cors
app.use(cors({
	origin: ['http://localhost:3000']
}));

// Rotas
app.use('/api', clientRoutes);

// Rotas inexistentes
app.use((req:any, res:any) => {
	res.status(404);
})

// Inicia o sevidor
app.listen(PORT, () => {
	console.log(`Servidor rodando com Heheh ${HOSTNAME}:${PORT}`)
});
