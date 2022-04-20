const mongoose = require('mongoose')

const conexao = async() => {

    var atlas = await mongoose.connect('mongodb+srv://UserAdmin:15102005a@fiaptecnico.eftcw.mongodb.net/test')
}

module.exports = conexao