const consult = require('../modules/query');
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
                let formdata = new FormData()
                formdata.append("image",file)
                formdata.append("modelId", model.id)
                // let newImg = await axios({
                //     method:'post',
                //     url:'http://localhost:5050/api/image/create/',
                //     formdata,
                //     headers:{...formdata.getHeaders()}
                //     // headers:{'Content-Type': 'multipart/form-data'}
                // })
                console.log(formdata)
            }
            return res.redirect('/models/');  
        } catch (error) {
            return res.render('error');
        }
    },
}