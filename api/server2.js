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