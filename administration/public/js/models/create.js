const form = document.forms.formModel;
const selectCat = form.category;
const selectSub = form.sub;

selectCat.addEventListener('change',async(e)=>{
    try {
        let valor = e.target.value;
        if (!(valor == 'category')) {
            let require = await axios.get(`http://localhost:5050/api/categories/show/${valor}`)
            let subs = require.data.subcategories;
            subs.forEach(cat => {
                let option = new Option(cat.name, cat.id)
                selectSub.options.add(option)
            });  
        }
    } catch (error) {
        throw new Error(error);
    }
})