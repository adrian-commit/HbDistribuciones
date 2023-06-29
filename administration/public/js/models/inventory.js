// buttons = document.querySelectorAll('#addCart')
// const counter = document.querySelector('#counter')

// buttons.forEach(button => {
//     button.addEventListener('click',async()=>{
//         const tr = button.parentNode.parentNode
//         const id = tr.id
//         const img = tr.querySelector('#name').getAttribute('src')
//         const name = tr.querySelector('#name').textContent
//         const total = tr.querySelector('#total').textContent
//         const price = tr.querySelector('#price').textContent
//         const quantity = tr.querySelector('#quantity').value == '' ? 1 : tr.querySelector('#quantity').value
//         let request = await axios.post('http://localhost:3000/products/bucket',{
//             id,
//             img,
//             name,
//             total,
//             price,
//             quantity
//         },'aplication/json')
//         // console.log(request.data.length)
//         // counter.innerHTML = `${request && request != undefined ? request.data.length : 0}`;
//     })
// });

const contenedorProductos = document.querySelector('#inventary__items');
// dentro de contenedorProductos hay varios items, donde cada item tiene dos botones de + y -
// quiero que al hacer click en el boton + o -, el valor del input dentro de cada item cambie
// y que el valor del input no sea menor a 1
contenedorProductos.addEventListener('click', (e) => {
    const targetProducto = e.target;
    
    if (targetProducto.classList.contains('inventary__icon--increment')) {
        console.log('click en sumar')
        const item = targetProducto.closest('.inventary__itemTexts');
        const value = item.querySelector('.inventary__quantityNum').value;
        if (value != null && value <= 1) {
            console.log(value + 1)
        } else {
            console.log('no se puede sumar')
        }
    }
    if (targetProducto.classList.contains('inventary__icon--decrement')) {
        console.log('click en restar')
    }    
});


