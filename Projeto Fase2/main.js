require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// 2. Criar o servidor web
const app = express();

// configurando o servidor web
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// conectando os controllers ao servidor web
app.use('/produtos', require('./controllers/produto_controller'));
app.use('/postagens', require('./controllers/postagem_controller'));


//Conectando o banco de dados
console.log('Conectando o Banco de Dados')
mongoose.connect(process.env.URL_BANCO).then(() => {
console.log('Banco de dados iniciado com sucesso!')
app.listen(parseInt(process.env.PORTA_SERVIDOR), () => {
console.log('A aplicação está no ar em http://localhost:5000');
  
});
  

} );








