buttons = document.querySelectorAll('#addCart')
const counter = document.querySelector('#counter')

buttons.forEach(button => {
    button.addEventListener('click',async()=>{
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
        // console.log(request.data.length)
        // counter.innerHTML = `${request && request != undefined ? request.data.length : 0}`;
    })
});
