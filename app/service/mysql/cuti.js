const Cuti = require("../../api/v1/cuti/model")
const Karyawan = require('../../api/v1/Karyawan/model')
const { BadRequestError } = require('../../errors')

const showAll = async () => {
    const result = await Cuti.findAll()

    return result
}

const createCuti = async (req) => {
    const {
        nomorInduk,
        tanggalCuti,
        lamacuti,
        keterangan
    } = req.body

    const karyawan = await Karyawan.findOne({
        where: {
            nomorInduk: nomorInduk
        }
    })

    if (!karyawan) throw new BadRequestError('Karyawan tidak terdaftar')

    const result = await Cuti.create({
        nomorInduk,
        tanggalCuti,
        lamacuti,
        keterangan
    })

    return result
}

const updateCuti = async (req) => {
    const { nomorInduk } = req.params
    const {
        tanggalCuti,
        lamacuti,
        keterangan
    } = req.body

    const checkNomorInduk = await Cuti.findByPk(nomorInduk)

    if (!checkNomorInduk) throw new BadRequestError(`Tidak ada Karyawan dengan nomor induk : ${nomorInduk}`)

    const result = await Cuti.update({
        tanggalCuti,
        lamacuti,
        keterangan
    }, { where: { nomorInduk: nomorInduk } })

    return result
}

const deleteCuti = async (req) => {
    const { nomorInduk } = req.params

    const result = await Cuti.destroy({ where: { nomorInduk: nomorInduk } })

    if (!result) throw new BadRequestError(`Tidak ada karyawan dengan nomor induk : ${nomorInduk}`)

    return result
}

module.exports = {
    createCuti,
    showAll,
    updateCuti,
    deleteCuti
}