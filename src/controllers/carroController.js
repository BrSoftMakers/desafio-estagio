const Carro = require('../models/CarroModel')

exports.lista = async (req, res) => {
    try {
        const carro = new Carro(req.body)
        await carro.buscaCarros()

        if(carro.errors.length > 0) {
            return res.status(500).send(carro.errors)
        }
        else{
            res.status(200).send(carro.carro);
        }
    } catch (error) {
        console.log(error)
    }
    return;
};

exports.cadastro = async (req, res) => {
    try {
        const carro = new Carro(req.body);
        await carro.register()

        if(carro.errors.length > 0) {
            return res.status(500).send(carro.errors)
        }
        else{
            res.status(201).send({
                message: 'Carro Criado com sucesso',
                data: carro.carro
            });
        }
    } catch (error) {
        console.log(error)
    }
};

exports.edit = async (req, res) => {
    if(!req.params.id) return res.status(404)
    try {
        const carro = new Carro(req.body);
        await carro.editaCarros(req.params.id)

        if (carro.errors.length > 0) {
            return res.status(500).send(carro.errors)
        } else {
            res.status(200).send(carro.carro);
        }
    } catch (error) {
        console.log(error)
    }
}

exports.delete = async (req, res) => {
    if(!req.params.id) return res.status(404)
    try {
        const carro = new Carro(req.body);
        await carro.deletaCarros(req.params.id)
        if(!carro.carro) return res.status(404)

        if (carro.errors.length > 0) {
            return res.status(500).send(carro.errors)
        } else {
            res.status(200).send(carro.carro);
        }
    } catch (error) {
        console.log(error)
    }
}
