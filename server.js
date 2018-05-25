import mongoose from "mongoose"//Skapar en objekthanterare som kommunicerar med databasen, Node.
import express from "express" //Framework att skriva Node.js som hjälper till med att skapa "web application server framework".
                             //Innehåller: router.
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"
mongoose.connect(mongoUrl, { useMongoClient: true })

mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Signup = mongoose.model("Signup", {
  name: { type: String, required: true },
  email: { type: String, required: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"] },
  allergies: { type: String } // , required: true, minlength: [8, "You need at least 8 characters in your password"]
})

const port = process.env.PORT || 8081
app.listen(port, () => {
    console.log("Products API listening on port 8081!")
  }
)

app.get("/", (req, res) => {
  res.send("Send Users")
})

app.post("/guest", (req, res) => {
  const jsonBody = req.body
  const signup = new Signup(req.body)

  signup.save().then(() => {
    res.status(201).json({ created: true })
  }).catch(err => {
    res.status(400).json({ created: false, errorMsg: err.message })
  })
})
