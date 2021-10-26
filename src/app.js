import cart from './cart.js'

const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const carrito = cart


document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

items.addEventListener('click', e => {
    addCarrito(e)
})

const fetchData = async () => {
    try {
        const res = await fetch("/src/mock.json")
        const data = await res.json()
        /* console.log(data) */
        printCard(data)
    } catch (error) {
        console.log(error)
    }
}

const printCard = data => {
    data.forEach(producto => {

        templateCard.getElementById('productTitle').textContent = producto.title
        templateCard.getElementById('productPrice').textContent = `$ ${producto.price}`
        templateCard.getElementById('productThumbnail').setAttribute("src", producto.thumbnail)
        templateCard.getElementById('card-btn').dataset.id = producto.id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)
}

const addCarrito = e => {
    if (e.target.id === "card-btn") {
        setCart(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCart = objeto => {
    
    const product = {
        id: objeto.querySelector('#card-btn').dataset.id,
        title: objeto.querySelector('#productTitle').textContent,
        price: objeto.querySelector('#productPrice').textContent,
        quantity: 1
    }
    if(carrito.hasOwnProperty(product.id)){
        product.quantity = carrito[product.id].quantity + 1
    }
    carrito[product.id] = {...product}

    console.log(carrito)
}