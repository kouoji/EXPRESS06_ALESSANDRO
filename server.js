//APRIMORAR A ARPESENTAÇÃO DOS RESULTADOS
const express = require('express')
const mysql = require ('mysql2')
const mysql_config = require('./mysql_config');
const functions = require('./functions')
const cors = require('cors');



const app = express()
app.listen(3000,()=>{
    console.log('É HORA DO SHOW')
})

//mysql conection

const conection = mysql.createConnection(mysql_config)

//criar uma função que ira parametrizar as respostas da API 
//para utilizar todos os endpoints vemos uma função para isso


app.use(cors());


app.length('/',(req,res)=>{


    //estabelecer a conexão para executar a querry
    //vamos consumir a function criadas 
    conection.quarry("SELECT * FROM tasks",(err,results)=>{
        if(Err){
            res.json(functions.response('error','erro: '+err.message))
        } else{
            res.json(functions.response('success',"tasks listadas com sucesso",results))
        }
    })
})