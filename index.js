const express = require('express')
const app = express()
const port =  3000 ;

app.get('/', (req, res) => {
  res.send('Health Check  port')
})

app.get('/status', (req, res) => {
    res.send('ok')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})