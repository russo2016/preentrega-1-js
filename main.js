let profesor = prompt("Hola profesor, ingrese su nombre")
profesor = profesor[0].toUpperCase() + profesor.substring(1)
let alumnos = parseInt(prompt(profesor + ", ingrese la cantidad de alumnos que tiene"))
let aprobados = 0
let promocionados = 0
let desaprobados = 0
let promedio = 0
let notas = 0


while (alumnos <= 0){
    alert("No se puede tener esa cantidad de alumnos")
    alumnos = parseInt(prompt(profesor +", ingrese la cantidad de alumnos que tiene"))
}

for (let i = 1; i<=alumnos ; i++){
    let nota1 = parseInt(prompt("Ingrese la nota del primer parcial del alumno " + i))
    while (nota1<=0 || nota1 > 10){
        alert("Nota inválida, vuelva a ingresar la nota porfavor")
        nota1 = parseInt(prompt("Ingrese la nota del primer parcial del alumno " + i))
    }
    let nota2 = parseInt(prompt("Ingrese la nota del segundo parcial del alumno " + i))
    while (nota2<=0 || nota2 > 10){
        alert("Nota inválida, vuelva a ingresar la nota porfavor")
        nota2 = parseInt(prompt("Ingrese la nota del primer parcial del alumno " + i))
    }
    let notaFinal = (nota1+nota2) /2
    notaFinal,aprobados,desaprobados,promocionados = condicion(notaFinal)
    notas += notaFinal
    notaFinal = 0
}

function condicion(notaFinal){
    if (notaFinal >= 7){
        promocionados += 1
    } else if(notaFinal>=4 && notaFinal < 7){
        aprobados += 1
    } else if (notaFinal<4 && notaFinal >1){
        desaprobados += 1
    }
    return notaFinal,aprobados,desaprobados,promocionados
}

promedio = notas / alumnos

console.log(profesor + ", en su clase hay " + alumnos + " alumnos")
console.log("Tiene " + promocionados + " alumnos promocionados, " + aprobados + " alumnos aprobados, que deberán rendir final y " + desaprobados + " alumnos desaprobados")
console.log("El promedio de notas de su clase es de " + promedio.toFixed(2))