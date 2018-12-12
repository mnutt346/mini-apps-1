const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

app.use(express.static('public'))

app.listen(port, function () {
  console.log(`Server listening on port ${port}`)
})

app.post('/user_info', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
})
