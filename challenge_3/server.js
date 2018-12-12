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

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/index.html'))
// })
