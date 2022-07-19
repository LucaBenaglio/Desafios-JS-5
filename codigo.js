//creamos nuestra plantilla de humanos

class Humano {
    constructor(nombre = " ", apellido = " ", edad = 1, peso = 1) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.peso = peso
    }
}

//creamos un array vacio para que el usuario lo llene con datos

const humanos = []

//creamos las variables que las rellenaremos despues

let nombre, apellido, edad, peso, continua, respuesta

//creamos ciclos donde el usuario ingresara datos

do {

    do {
        alert(`Bienvenido al cielo :)
        - cree humanos con las caracteristicas solicitadas
        - cree 2 o mas humanos
        - cuando termine de crear sus humanos escriba "no" para ver sus creaciones
        `)

        nombre = prompt("Ingrese el nombre de su humano").toLowerCase()
        apellido = prompt("Ingrese el apellido de su humano").toLowerCase()
    } while((nombre.length == 0 || apellido.length == 0))

    do {
        edad = parseInt(prompt("Ingrese la edad de su humano"))
        peso = parseInt(prompt("Ingrese el peso de su humano, en KG"))
    } while ((isNaN(edad) || isNaN(peso) || (edad <= 0 || peso <= 0)))
    
    const humanosCreados = new Humano(nombre, apellido, edad, peso)
    humanos.push(humanosCreados)

    continua = prompt(`¿Quiere crear otro humano? "si" o "no"`).toLowerCase()

} while (continua != "no")

const divHumanos = document.getElementById("humanos")

humanos.forEach(Humano => {
    divHumanos.innerHTML += `
        <div class="humanosEstilos">
            <p>Nombre: ${Humano.nombre}</p>
            <p>Apellido: ${Humano.apellido}</p>
            <p>Edad: ${Humano.edad}</p>
            <p>Peso: ${Humano.peso} KG</p>
        </div>
    `
})
