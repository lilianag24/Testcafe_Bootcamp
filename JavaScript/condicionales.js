// Condicionales 

let edad = 29
let masDe18 

//If 
if (edad < 18){
    console.log("Eres menor de edad")
    masDe18 = false
} else{
    console.log("Eres mayor de edad")
    masDe18 = true
}
console.log(masDe18)

// Operador Ternario
masDe18 = (edad < 18) ? false: true

console.log(masDe18)