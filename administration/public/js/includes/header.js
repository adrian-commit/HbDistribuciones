const counter = document.querySelector('#counter')

if (req.session.cart) {
    counter.innerHTML = `${req.session.cart.length}`
}