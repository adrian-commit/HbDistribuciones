const form = document.forms.stockForm
const zone1 = form.querySelector('#stock1')
const value1 = zone1.value
const zone2 = form.querySelector('#stock2')
const value2 = zone2.value
const zone3 = form.querySelector('#stock3')
const value3 = zone3.value
const total = Number(document.querySelector('#total').innerHTML) 
let sinAsignar = Number(document.querySelector('#unassigned').innerHTML)
const error = document.querySelector('#error')
const btn = document.querySelector('#update')


function unAssigned(number1, number2, number3) {
    const sum = Number(number1) + Number(number2) + Number(number3)
    if (sum > total ) {
        error.innerHTML = ` El total de las cantidades por zona es mayor al stock disponible, solo puede agregar ${sinAsignar}`
    } else {
        error.innerHTML = ''
    }
}

zone1.addEventListener('change', (e)=>{
    const value = e.target.value
    unAssigned(value, value2, value3)
    zone1.dataset.value = value
})

zone2.addEventListener('change', (e)=>{
    const value = e.target.value
    unAssigned(value1, value, value3)
    zone2.dataset.value = value
})

zone3.addEventListener('change', (e)=>{
    const value = e.target.value
    unAssigned(value1, value2, value)
    zone3.dataset.value = value
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const send = new FormData(form)
    const val1 = Number(send.get('stock1'))
    const val2 = Number(send.get('stock2'))
    const val3 = Number(send.get('stock3'))
    const totalVal = val1 + val2 + val3
    if ((val1 == value1) && (val2 == value2) && (val3 == value3)) {
        error.innerHTML = 'No se ha hecho ninguna modificación'   
    }
    else if (totalVal > total) {
        error.innerHTML = 'El total por zona no puede ser superior al stock disponible'
    }
    else if (val1 == value1) {
        zone1.removeAttribute('name')
    }
    else if (val2 == value2) {
        zone2.removeAttribute('name')
    }
    else if (val3 == value3) {
        zone3.removeAttribute('name')
    } else {
        form.submit();
    }

})
// const cancel = document.querySelector('#cancel')
// form1.addEventListener('submit', (e)=>{
//     e.preventDefault()
// })
// input1.addEventListener('change',()=>{
//     const newform1 = new FormData(form1)
//     console.log(newform1)
// })

// input2.addEventListener('change',()=>{
//     const newform2 = new FormData(form2)
//     console.log(newform2)
// })

// input3.addEventListener('change',()=>{
//     const newform3 = new FormData(form3)
//     console.log(newform3)
// })


// function updateStock(button,form) {
//     button.addEventListener('click', async(e)=>{
//         e.preventDefault();
//         const formData = new FormData(form);
//         const newStock = formData.get('new')
//         const stock = formData.get('stock')
//         const productId = formData.get('productId')
//         const placeId = formData.get('placeId')
    
//         try {
//             if (newStock == 'true') {
//                 const request = await axios.post('http://localhost:5050/api/quantities/create', {
//                     stock,
//                     productId,
//                     placeId
//                 })
//                 location.reload()
//             }
//             if (newStock == 'false') {
//                 const itemId = formData.get('itemId')
//                 const request = await axios.put(`http://localhost:5050/api/quantities/update/${itemId}`, {
//                     stock
//                 })
//                 location.reload()
//             }
//             // if (!response.ok) {
//             //     throw new Error(`HTTP error \${response.status}`);
//             // }      
//         } catch (error) {
//             console.error('Error al enviar el FormData:', error);
//         }});
        
// }
    
// updateStock(update1,form1)
// updateStock(update2,form2)
// updateStock(update3,form3)

