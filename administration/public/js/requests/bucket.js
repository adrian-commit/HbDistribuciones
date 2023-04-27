form = document.forms.formRequest
trTags = document.querySelectorAll('tr')
trashButtons = document.querySelectorAll('#outCart')
inputTotal = form.querySelector('#subtotalInput')
pTotal = form.querySelector('#subtotal')

let subtotal = 0;
const requests = [];
trTags.forEach((tr) => {
  let id = tr.id;   
  requests.push(axios.get(`http://localhost:5050/api/products/show/${id}`));
});
Promise.all(requests).then((responses) => {
  responses.forEach((response, i) => {
    const productPrice = response.data.price;
    const totalProduct = productPrice * Number(trTags[i].querySelector("#cant").textContent);
    subtotal += totalProduct;

    // Crear un nuevo elemento input y establecer sus atributos
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "productPrice";
    input.value = totalProduct;

    // Agregar el input hidden al elemento "tr" correspondiente
    trTags[i].appendChild(input);
  });
  inputTotal.value = subtotal;
  pTotal.innerHTML = `${subtotal}`;
}).catch((error) => {
  console.error(error);
});

trashButtons.forEach(button=> {
  button.addEventListener('click', async(e)=>{
    const tr = button.parentNode.parentNode
    const trId = tr.id
    const request = await axios.post('http://localhost:3000/products/outItemBucket', {
      id: trId
    })
    const confirm = request.data
    location.reload()
  })
})

form.addEventListener('submit',async(e)=>{
  try {
    e.preventDefault()
    const total = form.elements['total'].value
    const clientId = form.elements['client'].value
    const userId = form.elements['userId'].value
    const delivery = form.elements['delivery']
    const deliveryValue = Array.from(delivery).find(option=> option.checked).value
    
    const request = await axios.post('http://localhost:5050/api/requests/create', {
    total,
    clientId,
    userId,
    send: deliveryValue
    })
    const newOrder = request.data
    if (newOrder) {
      for (let i = 0; i < trTags.length; i++) {
        const trId = trTags[i].id
        const value = trTags[i].querySelector('input[name="productPrice"]').value
        const cant = trTags[i].querySelector('#cant').textContent
        await axios.post('http://localhost:5050/api/items/create',{
          price:value,
          quantity: cant,
          productId: trId,
          requestId: newOrder.id
        })
      }
      form.querySelector('#newOrderId').value = newOrder.id
      form.submit()
    }
  } catch (error) {
    throw new Error(error)
  }
})