const form1 = document.forms.zone1
const form2 = document.forms.zone2
const form3 = document.forms.zone3
const input1 = form1.querySelector('#stock1')
const input2 = form2.querySelector('#stock2')
const input3 = form3.querySelector('#stock3')
const update = document.querySelector('#update')
// const cancel = document.querySelector('#cancel')
form1.addEventListener('submit', (e)=>{
    e.preventDefault()
})
input1.addEventListener('change',()=>{
    const newform1 = new FormData(form1)
    console.log(newform1)
})

input2.addEventListener('change',()=>{
    const newform2 = new FormData(form2)
    console.log(newform2)
})

input3.addEventListener('change',()=>{
    const newform3 = new FormData(form3)
    console.log(newform3)
})


function updateStock(button,form) {
    button.addEventListener('click', async(e)=>{
        e.preventDefault();
        const formData = new FormData(form);
        const newStock = formData.get('new')
        const stock = formData.get('stock')
        const productId = formData.get('productId')
        const placeId = formData.get('placeId')
    
        try {
            if (newStock == 'true') {
                const request = await axios.post('http://localhost:5050/api/quantities/create', {
                    stock,
                    productId,
                    placeId
                })
                location.reload()
            }
            if (newStock == 'false') {
                const itemId = formData.get('itemId')
                const request = await axios.put(`http://localhost:5050/api/quantities/update/${itemId}`, {
                    stock
                })
                location.reload()
            }
            // if (!response.ok) {
            //     throw new Error(`HTTP error \${response.status}`);
            // }      
        } catch (error) {
            console.error('Error al enviar el FormData:', error);
        }});
        
}
    
updateStock(update1,form1)
updateStock(update2,form2)
updateStock(update3,form3)

