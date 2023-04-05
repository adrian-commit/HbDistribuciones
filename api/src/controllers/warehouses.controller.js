const {Warehouse} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let places = await Warehouse.findAll({include:{ all:true }}); 
            return res.send(places);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let place = await Warehouse.findByPk(req.params.id);
            return res.send(place);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newPlace = await Warehouse.create({
                name: req.body.name,
                address: req.body.address,
                phone: Number(req.body.phone)
            })
            return res.send(newPlace);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let place = await Warehouse.findByPk(req.params.id);
            place.update({
                name: req.body.name ? req.body.name : place.name,
                address: req.body.address ? req.body.address : place.address,
                phone: Number(req.body.phone) ? Number(req.body.phone) : place.phone
            });
            return res.send('Lugar Actualizado');
        } catch (error) {
            return res.send(error);
        } 
    },

    deletePlace: async (req,res) => {
        try {
            let place = await Warehouse.findByPk(req.body.id);
            place.destroy();
            return res.send('Lugar eliminado');
        } catch (error) {
            return res.send(error);
        }
    }
}