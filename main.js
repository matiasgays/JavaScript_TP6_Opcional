// Arreglos

function ordenarNumeros(listaNumeros, orden){
    if(orden == 'A'){
        listaNumeros.sort((a,b) => {return a - b} );
    }
    else{
        listaNumeros.sort((a,b) => {return b - a});
    }
    return listaNumeros;
}

alert(`Bienvenido al juego que ordena 5 numeros.`); 
const numeros = [];
for(let i = 0; i <=4; i++){
    numeros[i] = parseInt(prompt(`Ingrese el numero ${i+1}:`));
}

const ordenElegido = prompt(`Como los quiere ordenar. Escriba una letra (Ascendente (A) o Descendente (D))`);

console.log(ordenarNumeros(numeros, ordenElegido.toUpperCase()));






