const express = require('express');//importando o express           //1
const routes = require('./routes');//importando de ROUTES.JS        //1-2

require('./database')

const app = express();//atribui express a variável app.     //1

app.use(express.json())//para saber lidar com requisições que vem no formato JSON. //1-2
app.use(routes)//estou mandando o express utilizar as rotas importadas.     //1-2

app.listen(3333);//Basicamente escuta asrequisições vindas da porta definida...     //1
//Segundo a documentação do Node, se nenhuma porta for passada como parâmetro, uma porta aleatória será utilizada.