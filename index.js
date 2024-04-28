let arrayVacio= [];

let arrayNumeros= [0,1,2,3,4,5,6,7,8,9];

let arrayNumerosPares= [0,2,4,6,8];

let arrayBidimensional =[ [0,1,2],['a','b','c'] ] ;



 function suma (num1,num2){
    return num1+num2;
 }

 
 function potenciacion (num1,num2){

    return Math.pow(num1, num2);
 } 

//con el simbolo ^ no salia

 function separarPalabras (cosa){

    return cosa.split(' ');
 }

 function repetirString (a,num){

    return a.repeat(num);
 }

 function esPrimo (num){

    for (let i=2; i<num; i++) {

         if (num % i === 0) {
            return false;
            } 
    } 
     return true; 
 }


function ordenarArray (unArray){
    return unArray.sort();
}


function obtenerPares(array){

    let pares=[];

    for(let i= 0;i<array.length;i++){

        if(array[i] % 2 ===0){

            pares.push(array[i]);
        }
        
    }

    return pares;

}

//contrl+k+c comentar y pa descomentar contrl+k+u 

function pintarArray(array) {

    return "[" + array.join(', ') + "]";
}



function arrayMapi (array,func){

    let otroArray=[];

    for(let i=0; i<array.length; i++){

        otroArray.push( func(array[i]) );
    }

    return otroArray;
}



function eliminarDuplicados(array) {

    let sinDuplicados = []; 

    for (let i=0; i<array.length; i++) {

      if (sinDuplicados.indexOf(array[i])===-1) {  //indexOf te da el indice del coso, o devuelve -1 si no encuentra ese elemento

        sinDuplicados.push(array[i]);
      }
    }
    return sinDuplicados;
}

//la otra mitad

let arrayNumerosNeg=[0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
let holaMundo=['Hola','Mundo'];
let loGuardoTodo=['hola', 'que', 23, 42.33,'tal'];
let arrayDeArrays=[ [756, 'nombre'], [225, 'apellido'], [298, 'direccion'] ];


 function multiplicacion(num1,num2){
    return num1*num2;
 }

 function division (num1,num2){
    return num1/num2;
 }

 function esPar (num){
    if(num % 2 ===0){
        return true;
    }
    else{
        return false;
    }
 }


 function resta(num1,num2){
    return num1-num2;
 }


let arrayFunciones=[suma,resta,multiplicacion] ;



function ordenarArray2 (array){

    return array.reverse();

}


function obtenerImpares (array){

    let impares=[];

    for(let i= 0;i<array.length;i++){

        if(array[i] % 2 !==0){

            impares.push(array[i]);
        }
        
    }

    return impares;
}


function sumarArray (array){

    let almacen=[];

     almacen=array.reduce((total,elemento)=> total + elemento); //el reduce es como funcion dentro de otra funcion o asi

    return almacen;
}

function multiplicarArray (array){

    let almacen=[];

    almacen=array.reduce((total,elemento)=> total * elemento);

    return almacen;
}

