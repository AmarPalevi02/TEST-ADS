const express = require('express')
const route = express()
const {
    index,
    create,
    update,
    destroy,
    getOne
} = require('./controller')

route.get('/karyawan', index)
route.get('/karyawan/:nomorInduk', getOne)
route.post('/karyawan', create)
route.put('/karyawan/:nomorInduk', update)
route.delete('/karyawan/:nomorInduk', destroy)

module.exports = route