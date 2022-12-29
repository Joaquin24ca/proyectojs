
//Alert de formulario
const formulario =document.querySelector("#form")
formulario.addEventListener("click", () => {
    Swal.fire(
        'Excelente',
        'Muy pronto recibira informacion de nuestras ofertas',
        
      )
})


const cardContainer = document.querySelector("#cards")
const contenedorCarrito=document.getElementById(`carrito-compras`)
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito =document.getElementById("contadorCarrito")
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')


//Carrito
let carrito =[]

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

document.addEventListener("DOMContentLoaded",() => {
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
    }
})
 // Cards renderizadas
nuevosProductos.forEach((_producto) => {
    const nuevaCard = document.createElement(`div`)

    nuevaCard.className = `card`
    nuevaCard.innerHTML = `
    <img src=${_producto.imgSrc}alt="burguer" />
          <h4>${_producto.producto}</h4>
          <p><span> S/${_producto.precio}.00</span></p>
          <button id="agregar${_producto.id}" class ="boton-agregar">Comprar ahora </button> 

    `
    cardContainer.append(nuevaCard)
    

   const boton = document.getElementById(`agregar${_producto.id}`)

   boton.addEventListener("click", () => {
    agregarAlcarrito(_producto.id)

   })
   // Alert de compras
boton.addEventListener("click",()=>{
    Swal.fire(
        {
         title:"Muchas gracias, se agrego tu producto al carrito",
         background:"linear-gradient(to right, #f83600 0%, #f9d423 100%)",
          customClass:{
           title:"titulo",
    
          },
          icon:"success"
        }
      )
})

})

const agregarAlcarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else{

    const item = nuevosProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    
    console.log(carrito)
   
   
}
 actualizarCarrito()}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1)  
    actualizarCarrito() }



const actualizarCarrito = () => {
     contenedorCarrito.innerHTML=""

    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML=`
        <p>${prod.producto}</p>
        <p>Precio:S/ ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem("carrito",JSON.stringify(carrito))
      
        
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}
