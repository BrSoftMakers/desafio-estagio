const mongoose = require('mongoose')

const CarroSchema = new mongoose.Schema({
    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    tipo: { type: String, required: true },
    situacao: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
})

const CarroModel = mongoose.model('Carro', CarroSchema)

class Carro {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.carro = null
    }

    async register() {
        this.valida()
        if(this.errors.length > 0) return
        try {
            this.carro = await CarroModel.create(this.body)
        } catch (error) {
            console.log(error)
            this.errors.push(error)
        }
    }

    async buscaCarros() {
        this.carro = await CarroModel.find()
            .sort({ criadoEm: -1 });
    }

    async editaCarros(id) {
        if(typeof id !== 'string') return
        this.valida();
        if(this.errors.length > 0) return
        this.carro = await CarroModel.findByIdAndUpdate(id, this.body, { new: true })
    }

    async deletaCarros(id) {
        if(typeof id !== 'string') return
        this.carro = await CarroModel.findByIdAndDelete({_id: id})
    }

    valida() {
        if(!this.body.modelo) this.errors.push('modelo é um campo obrigatório.')
        if(!this.body.marca) this.errors.push('marca é um campo obrigatório.')
        if(!this.body.tipo) this.errors.push('tipo é um campo obrigatório.')
        if(!this.body.situacao) this.errors.push('situacao é um campo obrigatório.')
    }

    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body = '';
            }
        }

        this.body = {
            modelo: this.body.modelo,
            marca: this.body.marca,
            tipo: this.body.tipo,
            situacao: this.body.situacao,
        }
    }
}

Carro.buscaContatos = 




// Carro.prototype.register = async function() {
//     this.valida();
//     if(this.errors.length > 0) return;
//     this.Carro = await CarroModel.create(this.body)
// }

// Carro.prototype.valida = function() {
//     this.cleanUp();

//     if(!this.body.modelo) this.errors.push('modelo é um campo obrigatório.')
//     if(!this.body.marca) this.errors.push('marca é um campo obrigatório.')
//     if(!this.body.tipo) this.errors.push('tipo é um campo obrigatório.')
//     if(!this.body.situacao) this.errors.push('situacao é um campo obrigatório.')
// }

// Carro.prototype.cleanUp = function() {
//     for(const key in this.body) {
//         if(typeof this.body[key] !== 'string') {
//             this.body[key]
//         }
//     }
// }

// this.body = {
//     modelo: this.body.modelo,
//     marca: this.body.marca,
//     tipo: this.body.tipo,
//     situacao: this.body.situacao
// }

module.exports = Carro