const express = require('express')
const route = express()
const {
    create,
    index,
    update,
    destroy
} = require('./controller')

route.get('/cuti', index)
route.post('/cuti', create)
route.put('/cuti/:nomorInduk', update)
route.delete('/cuti/:nomorInduk', destroy)

module.exports = route