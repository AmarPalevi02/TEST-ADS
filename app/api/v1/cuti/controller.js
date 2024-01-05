const { StatusCodes } = require('http-status-codes')
const {
    createCuti,
    showAll,
    updateCuti,
    deleteCuti
} = require('../../../service/mysql/cuti')

const index = async (req, res, next) => {
    try {
        const result = await showAll()
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
        const result = await createCuti(req)
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
        const result = await updateCuti(req)
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
        const result = await deleteCuti(req)
        res.status(StatusCodes.OK).json({
            message: 'Delete Successfully',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    index,
    update,
    destroy
}