const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const  routes  = require("./routes/routes")


dotenv.config()
app.use(cors())
app.use(express.json())
require("./config/config")

app.use("/coloshop", routes)

app.listen(process.env.port, () => {
    console.log("Listen 3030 port");
})