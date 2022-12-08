const express = require('express')
const { router } = require('./router')
const app = express()
const port = 3000
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'HACKTIV8',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    sameSite: true
  }
}))


app.use('/', router)


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})