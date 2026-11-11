const express = require("express")
const app = express()
const {MongoClient} = require("mongodb")
const dotenv = require("dotenv")

dotenv.config()

const url = Process.env.DATABASE_URL

const client = new MongoClient(url)
let collection

app.set("view engine", "ejs")
app.use(express.urlencoded(
    {extended:true}))

app.get("/index", (req, res) = (
    res.render("index.ejs") 
))

app.post("/show", async (req, res) => {
    await collection.insertOne ({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    })
    res.redirect("/show")
} )

app.get("/show", async(req, res) => {
    const crud = await collection.find().toArray()
    res.render("show.ejs", {crud})
})

app.get("/edit/:id", async (req, res) => {
    const crud = await collection.find({_id:new ObjectId(req.params.id)})
    req.render("edit.ejs", {crud})
})

api.post('/edit/:id', async (req, res) => {
    await collection.updateOne(
        {_id: new ObjectId(req.params.id) },
        {
            $set:{
                name: req.body.name,
                email: req.body.email,
                telefone: req.body.telefone
            }
        }
    )
    res.redirect("/show")
})

app.get("/delete/:id", async (req, res) => {
    await collection.deleteOne({_id: ObjectId(req.params.id)})
    res.redirect("/show")
})

async function iniciar(){
    await client.connect()
    const db = client.db("aluno")
    collection = db.collection("crud")
    console.log("conectou com o nosso banco")

    app.listen(3000, function(){
        console.log("a porta do servidor está rodando na porta 3000")
    })
}