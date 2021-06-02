/**
 * Problema número 1.
 *
 * Necesitamos que obtengas los datos de ./src/input-p1.json y generes funciones que permitan:
 *
 * 1. Retornar todos los nodos que no tienen hijos.
 * 2. Retornar todos los nodos que contienen una cantidad X (parametrizable) de hijos
 * 3. Contabilizar la cantidad de nodos totales
 * 4. Retornar todas las Sedes con 4° Medio que *SI* poseen la *Oferta Tecnología* en sus *Secciones A*
 */

const data = require("./src/input-p1.json");

//******************************************************************************************** */
//************************************** Problema 1.1 **************************************** */
//******************************************************************************************** */

const readline = require ('readline');

let interfazCaptura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('****************************************************************************************************')
console.log();
console.log('1. Retornar todos los nodos que no tienen hijos.');
console.log('2. Retornar todos los nodos que contienen una cantidad X (parametrizable) de hijos');  
console.log('3. Contabilizar la cantidad de nodos totales');
console.log('4. Retornar todas las Sedes con 4° Medio que *SI* poseen la *Oferta Tecnología* en sus *Secciones A*');
console.log();
console.log('****************************************************************************************************')
interfazCaptura.question('Selecione opción: ', function(respuesta){
  
  if(`${respuesta}` == 1 ){
    problema1(data);
  }
  if(`${respuesta}` == 2 ){
    problema2(data);
  }
  if(`${respuesta}` == 3 ){
    problema3(data);
  }
  if(`${respuesta}` == 4 ){
    problema4(data);
  }
  interfazCaptura.close();

});

function problema1(data){
  console.log();
  console.log("*******************************************************************")
  console.log("************************* PROBLEMA 1.1 ****************************")
  console.log("*******************************************************************")
  console.log();

  /* 
    1. Retornar todos los nodos que no tienen hijos.'

    El siguiente For tiene la tarea de recorrer los nodos "sedes" y buscar si es que existe 
    alguno que no posea 'hijos', si existe alguno, muestra el nodo en pantalla.

  */
  for (var i=0; i<data.hijos.length; i++) {
    if (data.hijos[i].hijos == ""){
       console.log(data.hijos[i])
    }

    /*
      El siguiente For tiene la tarea de recorrer los nodos "cursos" y buscar si es que existe 
      alguno que no posea 'hijos', si existe alguno, muestra el nodo en pantalla.
    */

    for(var j=0; j<data.hijos[i].hijos.length; j++) {
      if (data.hijos[i].hijos[j].hijos == ""){
        console.log(data.hijos[i].hijos[j])
      } 
      
      /*
        El siguiente For tiene la tarea de recorrer los nodos "secciones" y buscar si es que existe 
        alguno que no posea 'hijos', si existe alguno, muestra el nodo en pantalla.
      */

      for(var g=0; g<data.hijos[i].hijos[j].hijos.length; g++){
        if(data.hijos[i].hijos[j].hijos[g].hijos == ""){
          console.log(data.hijos[i].hijos[j].hijos[g])
        }

        /*
        El siguiente For tiene la tarea de recorrer los nodos "ofertas" y buscar si es que existe 
        alguno que no posea 'hijos', si existe alguno, muestra el nodo en pantalla.
         */

        for(var h=0; h<data.hijos[i].hijos[j].hijos[g].hijos.length; h++){ 
          if(data.hijos[i].hijos[j].hijos[g].hijos[h].hijos == ""){
            console.log(data.hijos[i].hijos[j].hijos[g].hijos[h])            
          }  
        }
      }
    }
  }
  return true;
}

function problema2(data){
  
  console.log();
  console.log("*******************************************************************")
  console.log("************************* PROBLEMA 1.2 ****************************")
  console.log("*******************************************************************")
  console.log();

  /*
    '2. Retornar todos los nodos que contienen una cantidad X (parametrizable) de hijos'
    El siguiente For tiene la tarea de recorrer los nodos "sedes" y buscar todos los que tienen
    'hijos', y enseguida los imprime en pantalla
  */

  for(var i=0; i<data.hijos.length; i++) {
    if(data.hijos[i].hijos != ""){
      console.log(data.hijos[i])
    }
    
    /*
    El siguiente For tiene la tarea de recorrer los nodos "cursos" y buscar todos los que tienen
    'hijos', y enseguida los imprime en pantalla
    */
    for(var j=0; j<data.hijos[i].hijos.length; j++) {
      if(data.hijos[i].hijos[j].hijos != ""){
        console.log(data.hijos[i].hijos[j])
      } 

      /*
      El siguiente For tiene la tarea de recorrer los nodos "secciones" y buscar todos los que tienen
      'hijos', y enseguida los imprime en pantalla
      */
      for(var g=0; g<data.hijos[i].hijos[j].hijos.length; g++){
        if(data.hijos[i].hijos[j].hijos[g].hijos != ""){
          console.log(data.hijos[i].hijos[j].hijos[g])
        }
        /*
        El siguiente For tiene la tarea de recorrer los nodos "ofertas" y buscar todos los que tienen
        'hijos', y enseguida lo imprime en pantalla
        */
        for(var h=0; h<data.hijos[i].hijos[j].hijos[g].hijos.length; h++){ 
          if(data.hijos[i].hijos[j].hijos[g].hijos[h].hijos != ""){
            console.log(data.hijos[i].hijos[j].hijos[g].hijos[h])
          }  
        }
      }
    }
  }
  return true;
}

function problema3(data){

  console.log();
  console.log("*******************************************************************")
  console.log("************************* PROBLEMA 1.3 ****************************")
  console.log("*******************************************************************")
  console.log();
  
  /*
  '3. Contabilizar la cantidad de nodos totales'
  Se inicializa la variable "cont" la cual será encargada de contar los nodos.}
  */
  var cont=0;

  /*
    El siguiente For se encarga de contar los nodos que pertenecen al tipo "Sede".
    Por cada ocurrencia que encuentra, suma 1 a la variable "cont".
  */

  for(var i=0; i<data.hijos.length; i++) {
    cont++
    /*
    El siguiente For se encarga de contar los nodos que pertenecen al tipo "Curso".
    Por cada ocurrencia que encuentra, suma 1 a la variable "cont".
    */
    for(var j=0; j<data.hijos[i].hijos.length; j++) {
      cont++
      /*
      El siguiente For se encarga de contar los nodos que pertenecen al tipo "Sección".
      Por cada ocurrencia que encuentra, suma 1 a la variable "cont".
      */
      for(var g=0; g<data.hijos[i].hijos[j].hijos.length; g++){
        cont++
        /*
        El siguiente For se encarga de contar los nodos que pertenecen al tipo "Oferta".
        Por cada ocurrencia que encuentra, suma 1 a la variable "cont".
        */
        for (var h=0; h<data.hijos[i].hijos[j].hijos[g].hijos.length; h++){ 
          cont++
        }
      }
    }
  }
  /*
    Se muestra en pantalla la variable 'cont' la cual tiene la cifra final
  */
  console.log('La cantidad de nodos totales es:',cont);
  return true;
}

function problema4(data){

  console.log();
  console.log("*******************************************************************")
  console.log("************************* PROBLEMA 1.4 ****************************")
  console.log("*******************************************************************")
  console.log();
  console.log('Las sedes que cumplen las condiciones son: ');
  console.log();

  /*
  '4. Retornar todas las Sedes con 4° Medio que *SI* poseen la *Oferta Tecnología* en sus *Secciones A*'
  Lo que realizan el primer y segundo for es recorrer las sedes y cursos para encontrar todos las sedes 
  tengan "4to Medio" y cada vez que encuentre un "4to Medio, recorrerá los nodos hijos de aquel nodo".
  */

  for(var i=0; i<data.hijos.length; i++) {
    for(var j=0; j<data.hijos[i].hijos.length; j++) {
      if(data.hijos[i].hijos[j].nombre === "4 Medio"){
        /*
        Lo que realiza el siguiente For e If es buscar dentro de todos los cursos "4to Medio" y buscar
        todos los que posean una sección "A".
        */
        for(var g=0; g<data.hijos[i].hijos[j].hijos.length; g++){
          if(data.hijos[i].hijos[j].hijos[g].nombre === "A"){
            /*
            Lo que realiza el siguiente For e If es buscar dentro de todas las secciones "A" y buscar
            todos los que posean la oferta "tecnología" dentro de sus nodos hijos. Finalmente, imprime
            en pantalla el nombre de la sede.
            */  
            for(var h=0; h<data.hijos[i].hijos[j].hijos[g].hijos.length; h++){ 
              if(data.hijos[i].hijos[j].hijos[g].hijos[h].nombre === "Tecnología"){
                console.log(data.hijos[i].nombre)
              }  
            }
          }    
        }
      }    
    }
  }
  
  return true;
}
