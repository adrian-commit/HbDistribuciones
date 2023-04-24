buttons = document.querySelectorAll('#addCart')

buttons.forEach(button => {
    button.addEventListener('click',async(e)=>{
        const tr = button.parentNode.parentNode
        const id = tr.id
        const img = tr.querySelector('#name').getAttribute('src')
        const name = tr.querySelector('#name').textContent
        const total = tr.querySelector('#total').textContent
        const price = tr.querySelector('#price').textContent
        const quantity = tr.querySelector('#quantity').value == '' ? 1 : tr.querySelector('#quantity').value
        let request = await axios.post('http://localhost:3000/products/bucket',{
            id,
            img,
            name,
            total,
            price,
            quantity
        },'aplication/json')
        console.log(request.data)
    })
});
