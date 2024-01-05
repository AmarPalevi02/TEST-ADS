const { StatusCodes } = require('http-status-codes')
const {
    showAllKaryawan,
    createKaryawan,
    updateKaryawan,
    deleteKaryawann
} = require('../../../service/mysql/karyawan')

const index = async (req, res, next) => {
    try {
        const result = await showAllKaryawan()
        res.status(StatusCodes.OK).json({
            message: 'Successfully',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const result = await createKaryawan(req)
        res.status(StatusCodes.CREATED).json({
            message: 'Successfully',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateKaryawan(req)
        res.status(StatusCodes.OK).json({
            message: 'Update Successfully',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteKaryawann(req)
        res.status(StatusCodes.OK).json({
            message: 'Delete Successfully',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    index,
    create,
    update,
    destroy
}
