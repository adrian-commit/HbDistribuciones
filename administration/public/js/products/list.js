const selectCat = document.querySelector('#selectCat')
const selectSub = document.querySelector('#selectSub')
const selectModel = document.querySelector('#selectModel')
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

selectSub.addEventListener('change',async(e)=>{
    try {
        let valor = e.target.value;
        let require = await axios.get('http://localhost:5050/api/models/')
        let response = require.data;
        let models = response.filter(m=>m.categoryId == valor)
        models.forEach(model => {
            let option = new Option(model.name, model.id)
            selectModel.options.add(option)
        });
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

selectModel.addEventListener('change', async(e)=>{
    try {
        let valor = e.target.value;
        let require = await axios.get('http://localhost:5050/api/products/')
        let response = require.data;
        let products = response.filter(p=>p.model == valor)
        table.innerHTML = ''
        products.forEach(product => {
            // fila Principal
            let item1 = document.createElement('tr')

            let tdImage = document.createElement('td')
            if (product.template.image.img === 'null') {
                let icon = document.createElement('i')
                icon.classList.add('fa-solid', 'fa-image')
                tdImage.appendChild(icon)
            } else {
                let img = document.createElement('img')
                img.src=product.image.img
                img.alt=product.name
                tdImage.appendChild(img)
            }
            item1.appendChild(tdImage)

            let tdName = document.createElement('td')
            tdName.innerHTML= product.name
            item1.appendChild(tdName)

            let tdSku = document.createElement('td')
            tdSku.innerHTML= product.sku
            item1.appendChild(tdSku)

            let tdTotal = document.createElement('td')
            tdTotal.innerHTML= `${product.total}\ Unidades`
            item1.appendChild(tdTotal)

            let tdPrice = document.createElement('td')
            tdPrice.innerHTML= `$\ ${product.price}/u`
            item1.appendChild(tdPrice)

            // Agregar enlaces con íconos a las celdas
            let tdPrecio = crearLinkIcono('http://', 'fa-solid', 'fa-pen');
            item1.appendChild(tdPrecio);

            let tdBorrar = crearLinkIcono('http://', 'fa-solid', 'fa-trash');
            item1.appendChild(tdBorrar);

            let tdActualizar = crearLinkIcono('http://', 'fa-solid', 'fa-box');
            item1.appendChild(tdActualizar);

            let tdStock = crearLinkIcono('http://', 'fa-solid', 'fa-boxes-stacked');
            item1.appendChild(tdStock);

            let iconVerStock = document.createElement('i');
            iconVerStock.classList.add('fa-solid', 'fa-chevron-right');
            item1.appendChild(iconVerStock);

            table.appendChild(item1)

            //Fila Secundaria con las Zonas
            let item2 = document.createElement('tr')

            let tdAsignar = document.createElement('td')
            tdAsignar.innerHTML= "Sin Asignar: "
            item2.appendChild(tdAsignar)

            if (product.quantities.length > 0) {
                product.quantities.forEach(q=>{
                    let tdZona = document.createElement('td')
                    tdZona.innerHTML= `${q.stockHouses.name}\:${q.stock}`
                    item2.appendChild(tdZona)
                })
            }

            table.appendChild(item2)

        });
    } catch (error) {
        throw new Error(error);
    }
})