form = document.forms.formRequest
trTags = document.querySelectorAll('tr')
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
  });
  inputTotal.value = subtotal;
  pTotal.innerHTML = `${subtotal}`;
}).catch((error) => {
  console.error(error);
});
