const express = require('express')
const route = express()
const {
    index,
    create,
    update,
    destroy
} = require('./controller')

route.get('/karyawan', index)
route.post('/karyawan', create)
route.put('/karyawan/:nomorInduk', update)
route.delete('/karyawan/:nomorInduk', destroy)

module.exports = route