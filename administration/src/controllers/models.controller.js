const consult = require('../modules/query');
const axios = require('axios');
const FormData = require('form-data');
module.exports = {

    list: async(req,res) => {
        try {
            const request1 = await consult('get','categories/')
            const categories = request1.data
            const request2 = await consult('get','models/')
            const models = request2.data
            return res.render('models/list', {models,categories});  
        } catch (error) {
            return res.render('error');
        }
    },

    newModel: async(req,res) => {
        try {
            const request = await consult('get','categories/')
            const categories = request.data
            return res.render('models/create',{categories});  
        } catch (error) {
            return res.render('error');
        }
    },

    catalog: async(req,res) => {
        try {
            let response1 = await consult('get','models/'+req.params.id)
            let response2 = await consult('get', 'categories/show/'+req.params.id)
            let inventory = response1.data;
            let mainCategory = response2.data;
            return res.render('models/inventary', {inventory, main: mainCategory});  
        } catch (error) {
            return res.render('error', {error});
        }
    },

    create: async(req,res) => {
        try {
            const file = req.file
            const request = await consult('post', 'models/create', {
                name: req.body.name,
                categoryId: req.body.sub
            })
            const model = request.data
            if (file) {
                let formData = new FormData()
                formData.append("image",file.buffer, {filename: file.originalname})
                formData.append("modelId", model.id)
                let newImg = await axios({
                    method:'post',
                    url:'http://localhost:5050/api/images/create',
                    data: formData,
                    headers:{
                        ...formData.getHeaders(),
                        'Accept':'application/json'
                    }
                })
                console.log(newImg)
            }
            return res.redirect('/models/');  
        } catch (error) {
            console.log('Error: ', error)
            return res.render('error');
        }
    },
}