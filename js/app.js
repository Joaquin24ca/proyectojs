
//Alert de formulario
const formulario =document.querySelector("#form")
formulario.addEventListener("click", () => {
    Swal.fire(
        'Excelente',
        'Muy pronto recibira informacion de nuestras ofertas',
        
      )
})


const cardContainer = document.querySelector("#cards")
const contenedorCarrito=document.getElementById("carrito-contenedor")
const contadorCarrito =document.getElementById("contadorCarrito")


//Carrito
let carrito =[]

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
          <button id="agregar${_producto.id}" class ="boton-agregar">Comprar ahora <i class="fa-light fa-cart-shopping"></i </button> 

    `
    cardContainer.append(nuevaCard)
    

   const boton = document.getElementById(`agregar${_producto.id}`)
   boton.addEventListener("click",() => {
    agregarAlcarrito(_producto.nuevosProductos)

   })
   // Alert de compras
boton.addEventListener("click",()=>{
    Swal.fire(
        {
         title:"Muchas gracias por su compra",
         background:"linear-gradient(to right, #f83600 0%, #f9d423 100%)",
          customClass:{
           title:"titulo",
    
          },
          icon:"success"
        }
      )
})

})

const agregarAlcarrito = (prodId) =>{
    const item = nuevosProductos.find((prod) => prod.id ===prodId)
    carrito.push(item)
    actualizarCarrito()
   
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((_producto) => {
        localStorage.setItem("carrito",JSON.stringify(carrito))
      
        
    })
    contadorCarrito.innerText = carrito.length
}
