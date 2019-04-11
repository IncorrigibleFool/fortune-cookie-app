const express = require('express')

const app = express()
const port = 1337

const fortuneCtrl = require('./controllers/fortuneCtrl')

app.use(express.json())

app.get('/api/fortunes', fortuneCtrl.get)
app.post('/api/fortunes', fortuneCtrl.create)
app.patch('/api/fortunes/:id', fortuneCtrl.update)
app.delete('/api/fortunes/:id', fortuneCtrl.delete)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=1000
//use above url to fetch all api fortunes