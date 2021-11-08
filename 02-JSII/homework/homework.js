// No cambies los nombres de las funciones.

function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    //return array[array.length - 1];
    return array.pop();

}

function incrementarPorUno(array) {
    // "array" debe ser una arreglo de números enteros
    // Aumenta cada número por 1 y devuelve el array
    // Tu código:
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
    return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;

}

function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    let frase = palabras[0];
    for (let i = 1; i < palabras.length; i++) {
        frase = frase + ' ' + palabras[i];
    }
    return frase;

}

function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return true;
        } 
        }
        return false;
    
    //return array.include(elemento);

}

function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser un array de enteros
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let sum = 0;
    for (let i = 0; i < resultadosTest.length; i++) {
        sum = sum + resultadosTest[i];
       
        
    }

    return sum / resultadosTest.lenght;
}


function numeroMasGrande(numeros) {
    // "numeros" debe ser un array de enteros
    // Devuelve el número más grande
    // Tu código:
    //let max = Math.max(numeros);
    //return max;
    let max = numeros[0];
    for (let i = 1; i < numeros.lenght; i++){
        if(numeros[i] > max){
            max = numeros[i];
        }
    }

    return max;

}

function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
       // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Tu código:

    if (arguments.lenght === 0){

        return 0;

    }
    let sum = 1;
    for (let i = 0; i < argumentos.length; i++) {
        sum = sum * argumentos[i];
    }
    return sum;

}

function cuentoElementos(arreglo) {
    // Realiza una función que retorne la cantidad de los elementos del arreglo que sean mayores a 18.
    // Tu código:
    let sum = 0;
    for (let i = 0; i < arreglo.lenght; i++) {
        if (arreglo[i] > 18) {
            sum = sum + 1;
        }
    }
    return sum;
}

function todosIguales(arreglo) {
    // Escriba la función todosIguales, si todos los elementos de un arreglo son iguales
    // retornar true, caso contrario retornar false.
    // Tu código:
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] !== pivot){
            return false;
        }

    }

        return true; 
                  
}

function mesesDelAño(array) {
    // Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    // Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:

    let mesesEncontrados = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
            mesesEncontrados.push(array[i]);
           
                   
            } 
        
        }

        if (mesesEncontrados.length < 3){
            return 'No se encontraron los meses pedidos';

        

        
    }
function breakStatement(numero) {
    // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array. 
    // Devolver el array
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    // devolver: "Se interrumpió la ejecución"
    // Pista: usá el statement 'break'
    // Tu código:
    let op = 1;
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i === numero) breack;
        numero =+ 2;
        nuevoArray.push(numero);

        }

        if(i < 10) return 'Se interrumpió la ejecución';
        return nuevoArray;
      
    

}

function continueStatement(numero) {
    // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array.    
    // Devolver el array
    // Cuando el número de iteraciones alcance el valor 5, no se agrega ese número al array
    // y se continua con la siguiente iteración
    // Pista: usá el statement 'continue'
    // Tu código:

    let nuevoArreay = [];
    for (let i = 0; i < array.length; i++) {
        numero = numero + 2;
        if(i === 5) continue;
        nuevoArreay.push(numero);
        
    }
    return nuevoArreay;

}

function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
    let obgetoGato = {
        nombre: nombre,
        edad: edad,
        meow: function(){
            return 'Meow!';
        }
        
    }

    return obgetoGato;


}

function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código:
    objeto[property] = null;
    return objeto;

}

function invocarMetodo(objeto, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código:
    objeto[metodo]();

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:
    //return objetoMisterioso['numeroMisterioso'] * 5;
    return objetoMisterioso.numeroMisterioso * 5

}

function eliminarPropiedad(objeto, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
    // tip: tenes que usar bracket notation
    // Devuelve el objeto
    // Tu código:
    delete objeto[unaPropiedad];
    return objeto;
}

function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    let objeto = {
        nombre: nombre,
        email: email,
        password: password

    }

    return objeto;


}

function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
    if (usuario.email){
        return true;
    }else {
        return false;
    }

}

function tienePropiedad(objeto, propiedad) {
    // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
    // "propiedad" es un string
    // De lo contrario, devuelve "false"
    // Tu código:
    if(objeto[propiedad]){
        return true;
     
    }else{
        return false;
    }
//return !!objeto[propiedad] //opción 2
}

function actualizarPassword(usuario, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    usuario.password = nuevaPassword;
    return usuario;

}

function agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // Tu código:
    usuario.amigos.push(nuevoAmigo);
    return usuario;

}

function sumarLikesDeUsuario(usuario) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    let sumaLikes = 0;
    for (let i = 0; i < post.length; i++) {
        sumaLikes = sumaLikes + usuario.posts[i].likes;
         
    }
    
    return sumaLikes;


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverUltimoElemento,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    dePalabrasAFrase,
    arrayContiene,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
    cuentoElementos,
    todosIguales,
    mesesDelAño,
    breakStatement,
    continueStatement,
    crearGato,
    agregarPropiedad,
    invocarMetodo,
    multiplicarNumeroDesconocidoPorCinco,
    eliminarPropiedad,
    nuevoUsuario,
    tieneEmail,
    tienePropiedad,
    actualizarPassword,
    agregarAmigo,
    sumarLikesDeUsuario
};