//express package
const express = require('express')
//create an instance
const app = express()

const port = 3000

app.listen(port, console.log(`server on ${port}`))