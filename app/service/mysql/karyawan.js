const Karyawan = require('../../api/v1/Karyawan/model')
const { BadRequestError } = require('../../errors')

const showAllKaryawan = async () => {
    const result = await Karyawan.findAll()

    return result
}

const createKaryawan = async (req) => {
    const {
        nomorInduk,
        nama,
        alamat,
        tanggalLahir,
        tanggalBergabung
    } = req.body

    const result = await Karyawan.create({
        nomorInduk,
        nama,
        alamat,
        tanggalLahir,
        tanggalBergabung
    })

    return result
}

const updateKaryawan = async (req) => {
    const { nomorInduk } = req.params
    const {
        nama,
        alamat,
        tanggalLahir,
        tanggalBergabung
    } = req.body


    const checkNomorIInduk = await Karyawan.findByPk(nomorInduk)

    if (!checkNomorIInduk) throw new BadRequestError(`Tidak ada Karyawan dengan nomor induk : ${nomorInduk}`)

    const result = await Karyawan.update({
        nama,
        alamat,
        tanggalLahir,
        tanggalBergabung
    }, { where: { nomorInduk: nomorInduk } })

    return result
}

const deleteKaryawann = async (req) => {
    const { nomorInduk } = req.params

    const result = await Karyawan.destroy({ where: { nomorInduk: nomorInduk } })

    if (!result) throw new BadRequestError(`Tidak ada karyawan dengan nomor induk : ${nomorInduk}`)

    return result
}

module.exports = {
    createKaryawan,
    showAllKaryawan,
    updateKaryawan,
    deleteKaryawann
}