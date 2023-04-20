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
console.log(total)
console.log(sinAsignar)
console.log(value1)
console.log(value2)
console.log(value3)

function unAssigned(number1, number2, number3) {
    const sum = Number(number1) + Number(number2) + Number(number3)
    console.log(sum)
    if (sum > total ) {
        error.innerHTML += ' La cantidad por zona es mayor al stock disponible'
    } else {
        error.innerHTML = ''
    }
}

zone1.addEventListener('change', (e)=>{
    const value = e.target.value
    if (!(value1 != value)) {
        unAssigned(value, value2, value3)
        // zone1.removeAttribute('name')
        console.log('removido')
    } else {
        unAssigned(value, value2, value3)
        console.log('prueba exitosa')
    }
})

zone2.addEventListener('change', (e)=>{
    const value = e.target.value
    if (!(value2 != value)) {
        zone2.removeAttribute('name')
        console.log('removido')
    } else {
        unAssigned(value1, value, value3)
        console.log('prueba exitosa')
    }
})

zone3.addEventListener('change', (e)=>{
    const value = e.target.value
    if (!(value3 != value)) {
        zone3.removeAttribute('name')
        console.log('removido')
    } else {
        unAssigned(value1, value2, value)
        console.log('prueba exitosa')
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

