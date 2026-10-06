const protocolo = require('express')
const api = express()
const app = protocolo()
const exibir = require('ejs')
const executar = require('nodemon')
const mongodb = require('mongodb')
const dotenv = require('dotenv')
const driveMD = "mongodb+srv://miqueiaseds_db_user:<db_password>@miqueias.88b03ki.mongodb.net/?appName=Miqueias"
//mongodb+srv://miqueiaseds_db_user:<db_password>@miqueias.88b03ki.mongodb.net/?appName=Miqueias

app.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000")})



app.get('/ler', (request, response)=> {
    response.send('Olá, mundo')
})
DATABASE_URL=DRIVE