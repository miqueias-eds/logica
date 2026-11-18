const express = require("express")
const app = express()
const {MongoClient} = require("mongodb")
const ObjectId = require("mongodb").ObjectId
const dotenv = require("dotenv")

dotenv.config()

const url = process.env.DATABASE_URL

const client = new MongoClient(url)
let collection

app.set("view engine", "ejs")
app.use(express.urlencoded(
    {extended:true}))

app.get("/index2", (req, res) => (
    res.render("index2.ejs") 
))

app.post("/show2", async (req, res) => {
    await collection.insertOne ({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    })
    res.redirect("/show2")
} )

app.get("/show2", async(req, res) => {
    const crud = await collection.find().toArray()
    res.render("show2.ejs", {crud})
})

app.get("/edit2/:id", async (req, res) => {
    const crud = await collection.find({_id:new ObjectId(req.params.id)}).toArray()
    res.render("edit2.ejs", {crud})
})

app.post('/edit2/:id', async (req, res) => { 
    await collection.updateOne(
        {_id: new ObjectId(req.params.id) },
        {
            $set:{
                name: req.body.nome,
                email: req.body.email,
                telefone: req.body.telefone
            }
        }
    )
    res.redirect("/show2")
})

app.get("/delete2/:id", async (req, res) => {
    await collection.deleteOne({_id:new ObjectId(req.params.id)})
    res.redirect("/show2")
})

//iniciar o banco de dados e o server
async function iniciar(){
    //conectar com o mongodb
    await client.connect()
    const db = client.db("aluno")
    collection = db.collection("crud")
    console.log("conectou com o nosso banco")

    app.listen(3000, function(){
        console.log("a porta do servidor está rodando na porta 3000")
    })
}

iniciar().catch(function(erro){
    console.error("Erro ao iniciar", erro)
})