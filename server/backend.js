const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")));

// app.use("/public", express.static(path.join(__dirname, "../public")));

const port = process.env.PORT || 4005;

app.listen(port, ()=> {
    console.log(`Partying on port ${port} till we die`)
})