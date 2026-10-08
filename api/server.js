const express = require('express')
const api = express()
const ejs = require('ejs')
const nodemon = require('nodemon')
const dotenv = require('dotenv')
const driveMD = "mongodb+srv://miqueiaseds_db_user:<db_password>@miqueias.88b03ki.mongodb.net/?appName=Miqueias"
const{ MongoClient } = require('mongodb')

dotenv.config()

const url = process.env.DATABASE.URL

api.set("view engine", "ejs")

api.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000")})

api.get('/ler', (request, response)=> {
    response.send('Olá, mundo')
})