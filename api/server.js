const express = require('express')
const api = express()
const ejs = require('ejs')
const nodemon = require('nodemon')
const dotenv = require('dotenv')
const driveMD = "mongodb+srv://miqueiaseds_db_user:<db_password>@miqueias.88b03ki.mongodb.net/?appName=Miqueias"
const{ MongoClient } = require('mongodb')
dotenv.config()
const url = process.env.DATABASE_URL
//fazer query com _id do mongodb

const ObjectId = require("mongodb").ObjectId

const client = new MongoClient(url)
//cria o banco de dados com o nome de pessoas

const db = client.db("pessoa")
//cria um collection com o nome crud(create table crud)

const collection = db.collection("crud")

api.set("view engine", "ejs")

api.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000")})

api.get('/ler', (request, response)=> {
    response.send('Olá, mundo')
})

api.post("/show", (req, res) => {
    collection.insertOne(req.body, (err, results)=>{
        if(err) return console.log(err)
        console.log("Salvou com sucesso no nosso banco")
        res.redirect("/show")
        collection.find().toArray(err, results) => {
            console.log(results)
        }
    })
})