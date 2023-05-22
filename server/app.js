
const express = require('express')
const PORT = 4001
const app = express()
const postRouter = require('./routes')
// import router with reqiure
const router = require('./routes')

//app .use what ever endpoint i want to call it 
app.use('/', router) // this will allow for communnication to postman "yes i am listening"
app.use(express.json())


app.listen(PORT, () => {
  console.log(`greetings! app is listening on ${PORT}`)
})

//rs in terinal will restart your app