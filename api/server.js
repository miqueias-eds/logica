const express = require('express')
const api = express()
const ejs = require('ejs')
const dotenv = require('dotenv')
const{ MongoClient } = require('mongodb')

dotenv.config()
const url = process.env.DATABASE_URL
//fazer query com _id do mongodb

const ObjectId = require("mongodb").ObjectId

const client = new MongoClient(url)
//cria o banco de dados com o nome de pessoas



api.set("view engine", "ejs")

api.use(express.urlencoded({ extended: true } ))

api.get('/index', (req, res) => {
    res.render('index.ejs') })

api.get('/show', async (req, res) => {
    const crud = await collection.find().toArray()
    res.render('show.ejs', {crud})
})

api.post('/show', async(req, res) =>{
    await collection.insertOne({
        name: req.body.name,
        surname: req.body.surname
    })
    res.redirect('/show')
})

api.post('/edit/:id', async (req, res) => {
    await collection.updateOne(
        {_id: new ObjectId(req.params.id) },
        {
            $set:{
                name: req.body.name,
                surname: req.body.surname 
            }
        }
    )

    res.redirect('/show')
})


//visualisar por id
api.get('/edit/:id', async (req, res) => {
    const crud = await collection.find({_id: new ObjectId(req.params.id)}).toArray()
    res.render('edit.ejs', {crud})
})

api.get('/delete/:id', async (req, res) =>{
    await collection.deleteOne({_id: new ObjectId(req.params.id)})
    res.redirect('/show')
})

async function  iniciar(){
    await client.connect()

    const db = client.db("pessoa")
    //cria um collection com o nome crud(create table crud)

    collection = db.collection("crud")
    console.log("Conectado com o MongoDB")

    api.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000") })
}



iniciar().catch(function(erro){
    console.error("Erro ao inciar a aplicação: ", erro)
})


api.get('/ler', (req, res)=> {
    res.send('Olá, mundo') })