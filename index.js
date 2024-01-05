const express = require('express')
const app = express()
const port = 9001
const logger = require('morgan')
const cors = require("cors")

const errorHendelerMiddlewares = require('./app/middlewares/hendeler-error')
const NotFound = require('./app/middlewares/not-found')

app.use(logger('dev'))
app.use(cors());
app.use(express.json());

const karyawanRouter = require('./app/api/v1/Karyawan/router')
const cutiRouter = require('./app/api/v1/cuti/router')

const v1 = '/api/v1'

app.use(`${v1}/cms`, karyawanRouter)
app.use(`${v1}/cms`, cutiRouter)

app.use(errorHendelerMiddlewares)
app.use(NotFound)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})