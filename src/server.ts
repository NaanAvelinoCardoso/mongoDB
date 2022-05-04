// Importando bibliotecas
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import { mongoConnect } from './database/mongo';
import mainRouters from './routers/index';

// Definindo o DOTENV
dotenv.config();

// Conectando ao MongoDB 
mongoConnect();

// Definindo o servidor
const server = express();

// Configurando o servidor e o template engine e definindo suas pastas
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

// Faz com que eu consiga pegar dados do body das requesições
server.use(express.urlencoded({extended: true}));  

// Rotas
server.use(mainRouters);

server.use((req, res) => {
    res.send('Pagina não encontrada!!');
});


// Porta do servidor
server.listen(process.env.PORT);