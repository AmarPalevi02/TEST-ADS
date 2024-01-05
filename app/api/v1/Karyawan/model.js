const { DataTypes } = require("sequelize");
const db = require('../../../configs/connection')

const Karyawan = db.define('karyawan', {
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

    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Nama wajib di isi"
            },
            len: {
                args: [3],
                msg: "Nama minimal harus memiliki panjang 3 karakter"
            }
        }
    },

    alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Alamat wajib di isi"
            },
            len: {
                args: [10],
                msg: "Alamat minimal harus memiliki panjang 10 karakter"
            }
        }
    },
    tanggalLahir: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Tanggal lahir harus diisi.'
            },
            isDate: {
                msg: 'Format tanggal lahir tidak valid.'
            },
        }
    },

    tanggalBergabung: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Tanggal bergabung harus diisi.'
            },
            isDate: {
                msg: 'Format tanggal bergabung tidak valid.'
            },
        }
    }
})

module.exports = Karyawan;

(async () => {
    await db.sync()
})();

