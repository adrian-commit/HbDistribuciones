const {Category, ModelStock} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let categories = await Category.findAll({
                attributes: { exclude:['mainCategory', 'sub']}
            });
            return res.send(categories);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let category = await Category.findByPk(req.params.id, {
                attributes: { exclude:['mainCategory','sub']},
                include:[
                    {
                        as:'subcategories',
                        model: Category,
                        attributes:{ exclude: ['sub']}
                    }
                ]});
            return res.send(category);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newCategory = await Category.create({
                name: req.body.name,
                sub: Number(req.body.sub)
            })
            return res.send(newCategory);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let category = await Category.findByPk(req.params.id);
            category.update({
                name: req.body.name ? req.body.name : category.name,
                sub: Number(req.body.sub) ? Number(req.body.sub) : category.sub
            });
            return res.send('Categoría Actualizada');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteCategory: async (req,res) => {
        try {
            let category = await Category.findByPk(req.body.id);
            category.destroy();
            return res.send('Categoría eliminada');
        } catch (error) {
            return res.send(error);
        }
    }

    
}