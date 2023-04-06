const {ProductImage} = require('../database/models');

module.exports = {
   
    showOne: async (req,res) => {
        try {
            let image = await ProductImage.findByPk(req.params.id);
            return res.send(image);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newImg = await ProductImage.create({
                img: 'http://localhost:5050/uploads/products/' + req.file.filename,
                productId: Number(req.body.productId)
            })
            return res.send(newImg);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let image = await ProductImage.findByPk(req.params.id);
            image.update({
                img: req.file ? 'http://localhost:5050/uploads/products/' + req.file.filename : image.img
            });
            return res.send('Imagen Actualizada');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteImg: async (req,res) => {
        try {
            let image = await ProductImage.findByPk(req.body.id);
            image.destroy();
            return res.send('Imagen eliminada');
        } catch (error) {
            return res.send(error);
        }
    }
}