const { DataTypes } = require('sequelize')
const db = require('../../../configs/connection')
const Karyawan = require('../Karyawan/model')

const Cuti = db.define('cuti', {
    nomorInduk: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Nomor induk wajib di isi"
            },
            len: {
                args: [7],
                msg: "Nomor induk minimal harus memiliki panjang 7 karakter"
            }
        }
    },

    tanggalCuti: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Tanggal cuti harus diisi.'
            },
            isDate: {
                msg: 'Format tanggal cuti tidak valid.'
            },
        }
    },

    lamacuti: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Harap masukan lama cuti'
            }
        }
    },

    keterangan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Harap masukan keterangan cuti"
            },
            len: {
                args: [3],
                msg: "Keterangan minimal harus memiliki panjang 3 karakter"
            }
        }
    }
})

// Cuti.belongsTo (Karyawan, { foreignKey: 'nomorInduk' });

module.exports = Cuti;

(async () => {
    await db.sync()
})();