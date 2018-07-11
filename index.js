const express = require('express')
const app = express()
const fs = require('fs');
const bodyParser = require('body-parser')


// const jsonParser = bodyParser.json()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('First test')
})

// get all features for org and env
app.post('/getallfeature', (req, res) => {

  let org = req.body.org
  let env = req.body.env
  let obj = JSON.parse(fs.readFileSync('./feature-flags.json', 'utf8'));

  res.json(obj[req.body.org][req.body.env])


})

// get one feature
app.post('/getonefeature', (req, res) => {

  let org = req.body.org
  let env = req.body.env
  let feature = req.body.feature
  var obj = JSON.parse(fs.readFileSync('./feature-flags.json', 'utf8'));

  res.json(obj[org][env][feature])
})




//

// get all the features for an organization
// app.get('/getallfeature', (req, res) => {
//
// })
app.listen(3000, () => console.log('Example app listening on port 3000!'))
