const saludo =document.querySelector(".hero__text h4")
const nombreUsuario = prompt("Para una mejor experiencia , por favor ingresar su nombre");
saludo.innerText = `Un placer atenderte ${nombreUsuario}, bienvenid@ y espero disfrutes en....`;


const boton1 =document.querySelector(".guy1")

boton1. addEventListener("click" , () => {
    alert("Excelente decision , tu toxica estara feliz");
})

const boton2 =document.querySelector(".guy2")

boton2. addEventListener("click" , () => {
    alert("Excelente decision , tu novia estara feliz");
})

const boton3 =document.querySelector(".guy3")

boton3. addEventListener("click" , () => {
    alert("Excelente decision ,  tu chica inocente estara feliz");
})

const formulario =document.querySelector("#form")
formulario.addEventListener("click", () => {
    alert("Su mesa esta reservada , lo esperamos con mucho gusto ")
})


const cardContainer = document.querySelector("#cards")

nuevosProductos.forEach((_producto) => {
    const nuevaCard = document.createElement("div")

    nuevaCard.className = "card"
    nuevaCard.innerHTML = `
    <img src=${_producto.imgSrc}alt="burguer" />
          <h4>${_producto.producto}</h4>
          <p>${_producto.caracter}</p>
          <button class="guy1"> Comprar ahora</button> 

    `
    cardContainer.append(nuevaCard)
   
})
