const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "../public")));

// i don't neex a port number bc heroku does it by itself
app.listen(port, ()=> {
    console.log(`Partying on port ${port} till we die`)
})