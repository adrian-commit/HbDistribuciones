const selectCat = document.querySelector('#selectCat')
const selectSub = document.querySelector('#selectSub')
const table = document.querySelector('#table')
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

function crearLinkIcono(href, ...iconClasses) {
    let tdIcono = document.createElement('td');
    let linkIcono = document.createElement('a');
    linkIcono.href = href;
    let icon = document.createElement('i');
    iconClasses.forEach((cls) => icon.classList.add(cls));
    linkIcono.appendChild(icon);
    tdIcono.appendChild(linkIcono);
    return tdIcono;
}

selectSub.addEventListener('change', async(e)=>{
    try {
        let valor = e.target.value;
        let require = await axios.get('http://localhost:5050/api/models/')
        let response = require.data;
        let models = response.filter(m=>m.class.id == valor)
        table.innerHTML = ''
        models.forEach(model => {
            // fila Principal
            let item1 = document.createElement('tr')

            let tdImage = document.createElement('td')
            if (model.image.img === 'null') {
                let icon = document.createElement('i')
                icon.classList.add('fa-solid', 'fa-image')
                tdImage.appendChild(icon)
            } else {
                let img = document.createElement('img')
                img.src=model.image.img
                img.alt=model.name
                tdImage.appendChild(img)
            }
            item1.appendChild(tdImage)

            let tdName = document.createElement('td')
            tdName.innerHTML= model.name
            item1.appendChild(tdName)

            // Agregar enlaces con íconos a las celdas
            let tdActualizar = crearLinkIcono('http://', 'fa-solid', 'fa-percent');
            item1.appendChild(tdActualizar);
            
            let tdPrecio = crearLinkIcono('http://', 'fa-solid', 'fa-pen');
            item1.appendChild(tdPrecio);

            let tdBorrar = crearLinkIcono('http://', 'fa-solid', 'fa-trash');
            item1.appendChild(tdBorrar);

            table.appendChild(item1)
        });
    } catch (error) {
        throw new Error(error);
    }
})