/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
 }  

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
     
   
   }


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   
}
function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var cont=0;
   var sumatoria=0;
   var promedio=0;
   for (var i=0;i<=resultadosTest.length-1;i++){
      cont++;
      sumatoria+=resultadosTest[i];
   }
   promedio=sumatoria/cont;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numGrande=0;
   for (var i=0; i<arrayOfNums.length-1;i++){
         if (arrayOfNums[i]>numGrande){
            numGrande=arrayOfNums[i];
         }
   }
   return numGrande;
}


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   if(arguments.length === 0){
      return 0;
   }if(arguments.length === 1){
      return arguments[0];
   }else{
      var multiplicacion = 1;
   for(let i = 0; i < arguments.length; i++){
      multiplicacion *= arguments[i];
   }
}
   return multiplicacion;
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cuento=0;
   for (let i=0;i<array.length;i++){
      if (array[i]>18){
         cuento++;
      }
   }
   return cuento;
   }

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia===2||numeroDeDia===3||numeroDeDia===4||numeroDeDia===5||numeroDeDia===6) {
      return "Es dia laboral";
   }
   else{
      return "Es fin de semana";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numNuevo=num.toString();
   if (numNuevo[0]==="9"){
      return true;
   }
   else{
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
 
   for (i=0;i<array.length;i++){
      for (j=1;j<array.length;j++){
         if(array[i]!==array[j]){
            return false;
         }
   }
}
return true;
}
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arrayMeses=[];
   for (let i=0;i<array.length;i++){
   if (array[i]==="Enero"){
     arrayMeses.push("Enero");      
   }
   else if(array[i]==="Marzo"){
      arrayMeses.push("Marzo");  
   }
   else if(array[i]==="Noviembre"){
      arrayMeses.push("Noviembre");  
   }
}
if (arrayMeses.length===3){
   return arrayMeses;
}
else{
   return "No se encontraron los meses pedidos";
}
}
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arrayTabla=[];
   for (let i=0;i<11;i++){
      arrayTabla[i]=i*6;
   }
   return arrayTabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   arrayMayorACien=[];
   for (let i=0;i<array.length;i++){
      if (array[i]>100){
         arrayMayorACien.push(array[i]);
      }
   }
   return arrayMayorACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var bandera=0;
   var numAumentado=[];
   for (let i=0;i<10;i++){
      num+=2
      numAumentado.push(num);
      if (num===i){
         bandera=1;
         break;
      }
      }
      if (bandera===1){
         return "Se interrumpió la ejecución";
      }
      else{
         return numAumentado;
      }
   }

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
 
   var numAumentado1=[];
   for (let i=0;i<10;i++){
      
      if (i!==4){
         num+=2
         numAumentado1.push(num);
         
      }
      else{
         continue;
      }
   }
      return numAumentado1;
      }


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
