const express = require('express')
const api = express()
const ejs = require('ejs')
const nodemon = require('nodemon')
const dotenv = require('dotenv')
const driveMD = "mongodb+srv://miqueiaseds_db_user:<db_password>@miqueias.88b03ki.mongodb.net/?appName=Miqueias"
const{ MongoClient } = require('mongodb')
const bodyParser = require('body-parser')

dotenv.config()
const url = process.env.DATABASE_URL
//fazer query com _id do mongodb

const ObjectId = require("mongodb").ObjectId

const client = new MongoClient(url)
//cria o banco de dados com o nome de pessoas

const db = client.db("pessoa")
//cria um collection com o nome crud(create table crud)

const collection = db.collection("crud")

api.use(bodyParser.urlencoded({ extended: true } ))

api.set("view engine", "ejs")

api.get('/index', (req, res) => {
    res.render('index.ejs') })

api.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000") })

api.get('/ler', (req, res)=> {
    res.send('Faz o pix') })

api.post('/show', (req, res) => {
    console.log(req.body) })