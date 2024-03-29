const {ModelImage} = require('../database/models');

module.exports = {
   
    showOne: async (req,res) => {
        try {
            let image = await ModelImage.findByPk(req.params.id);
            return res.send(image);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            console.log(req.file)
            console.log(req.body)
            let newImg = await ModelImage.create({
                img: req.file ? 'http://localhost:5050/uploads/models/' + req.file.filename : 'empty',
                modelId: Number(req.body.modelId)
            })
            return res.send(newImg);
        } catch (error) {
            console.error('Error: ', error)
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let image = await ModelImage.findByPk(req.params.id);
            image.update({
                img: req.file ? 'http://localhost:5050/uploads/models/' + req.file.filename : image.img
            });
            return res.send('Imagen Actualizada');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteImg: async (req,res) => {
        try {
            let image = await ModelImage.findByPk(req.body.id);
            image.destroy();
            return res.send('Imagen eliminada');
        } catch (error) {
            return res.send(error);
        }
    }
}