const form = document.forms.formProduct;
const selectCat = form.category;
const selectSub = form.sub;
const selectModel = form.model;

selectCat.addEventListener('change',async(e)=>{
    try {
        let valor = e.target.value;
        if (!(valor == 'category')) {
            let require = await axios.get(`http://localhost:5050/api/categories/show/${valor}`)
            let subs = require.data.subcategories;
            //selectSub.innerHTML = ''
            subs.forEach(cat => {
                let option = new Option(cat.name, cat.id)
                selectSub.options.add(option)
            });  
        }
    } catch (error) {
        throw new Error(error);
    }
})

selectSub.addEventListener('change',async(e)=>{
    try {
        let valor = e.target.value;
        let require = await axios.get('http://localhost:5050/api/models/')
        let response = require.data;
        let models = response.filter(m=>m.categoryId == valor)
        console.log(response)
        selectModel.innerHTML = ''
        models.forEach(model => {
            let option = new Option(model.name, model.id)
            selectModel.options.add(option)
        });
    } catch (error) {
        throw new Error(error);
    }
})