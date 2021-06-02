/**
 * Problema número 2.
 * 
 * Genera un script/algoritmo/función que sea capaz de transformar los datos de input-p2.csv
 * en un arból de estructura similar al problema de p1 utilizando la estructura de Nodo.js
 */


//Agregar a raiz toda la estructura solicitada.
//...

const Nodo = require("./src/Nodo");
const raiz = new Nodo("root", "Raíz");
const fs = require("fs");

/**
 * Se inicializan las variables que se utilizarán en el algoritmo.
 * La variable "lineas" contiene todas las lineas del archivo CSV, en modo de array
 * La variable "encabezados" contiene los encabezados del archivo CSV (Sede, Curso, Seccion, Oferta)
 * en modo de array.
 */
var archivoCSV = fs.readFileSync("./src/input-p2.csv",'utf8').replace(/\n/g, '')
var lineas = archivoCSV.split('\r')
var encabezados = lineas[0].split(',')
var arrSedes = [], arrCursos = [], arrSecciones = [], arrOfertas = [], columnas = [], matriz = []

/**
 * Lo que realiza el siguiente bloque es almacenar en el arreglo "sedes", un único valor 
 * en el array por cada nombre de sede existente en los datos del archivo CSV (Sin duplicar)
 */
for (var i=1; i<lineas.length; i++){
    var columnas = lineas[i].split(',')
    for (var j=0; j<lineas[i].length;j++){
        if (columnas[j] !== undefined){
            arrSedes.push(columnas[0])
            sedes = Array.from(new Set(arrSedes))  
        }
    }
}

/**
 * Lo que realiza el siguiente bloque es almacenar en el arreglo "cursos", un único valor 
 * en el array por cada nombre de curso existente en los datos del archivo CSV (Sin duplicar)
 */

for (var i=1; i<lineas.length; i++){
    var columnas = lineas[i].split(',')
    
    for (var j=0; j<lineas[i].length;j++){
        if (columnas[j] !== undefined){
            arrCursos.push(columnas[1])
            cursos = Array.from(new Set(arrCursos))                     
        }
    }    
}

/**
 * Lo que realiza el siguiente bloque es almacenar en el arreglo "sedes", un único valor 
 * en el array por cada nombre de sección existente en los datos del archivo CSV (Sin duplicar)
 */

for (var i=1; i<lineas.length; i++){
    var columnas = lineas[i].split(',')
    for (var j=0; j<lineas[i].length;j++){
        if (columnas[j] !== undefined){
            arrSecciones.push(columnas[2])
            secciones = Array.from(new Set(arrSecciones))                       
        }
    }
}

/**
 * Lo que realiza el siguiente bloque es almacenar en el arreglo "sedes", un único valor 
 * en el array por cada nombre de oferta existente en los datos del archivo CSV (Sin duplicar)
 */

for (var i=1; i<lineas.length; i++){
    var columnas = lineas[i].split(',')
    for (var j=0; j<lineas[i].length; j++){
        if (columnas[j] !== undefined){
            arrOfertas.push(columnas[3])
            ofertas = Array.from(new Set(arrOfertas))                       
        }
    }
}

/**
 *  Lo que realiza el siguiente bloque es generar un nuevo nodo por cada sede diferente.
 *  Se almacenan como hijos del nodo "Raíz"
 */
for(var i=0; i<sedes.length; i++){    
    var nuevoHijo = new Nodo(sedes[i],encabezados[0])
    raiz.hijos.push(nuevoHijo);
}

/**
 *  Lo que realiza el siguiente bloque es generar una matriz de 2 dimensiones
 *  que contiene toda la información del archivo CSV
 */

for (var i=1; i<lineas.length; i++){
    var columnas = lineas[i].split(',')
    matriz.push(columnas) 
}

/**
 * La siguiente instrucción indica que por cada hijo del nodo raíz (o sea, una sede) realizará las 
 * acciones dentro del bloque.
 */

raiz.hijos.forEach(function(e) {
    
    /**
    *  El siguiente bloque genera un nodo hijo por cada sede que posea un curso en ella, gracias al 
    *  array "arrRepetidos" se evita que se generen nodos repetidos.
    */
    var arrRepetidos =[]
    for (var i=0; i<matriz.length; i++){
        for(var j=0; j<cursos.length; j++){
            if( e.nombre == matriz[i][0] 
            && cursos[j] == matriz[i][1] 
            && !(arrRepetidos.includes(matriz[i][1]) ) ){
                nuevoHijo = new Nodo(matriz[i][1],encabezados[1])
                arrRepetidos.push(nuevoHijo.nombre)
                e.hijos.push(nuevoHijo);
            }
        }     
    }   
    
    /**
    * La siguiente instrucción indica que por cada hijo del nodo "Sede" (o sea, un curso) realizará las 
    * acciones dentro del bloque.
    */
    e.hijos.forEach(function(f){
        
        /**
        *  El siguiente bloque genera un nodo hijo por cada curso que posea una sección en ella, gracias 
        *  al array "arrRepetidos" se evita que se generen nodos repetidos.
        */
        var arrRepetidos = []
        for (var i=0; i<matriz.length; i++){
            for(var j=0; j<secciones.length; j++){
                if(e.nombre == matriz[i][0] 
                && f.nombre == matriz[i][1] 
                && secciones[j] == matriz[i][2] 
                && !(arrRepetidos.includes(matriz[i][2]) ) ){
                    nuevoHijo = new Nodo(matriz[i][2],encabezados[2])
                    arrRepetidos.push(nuevoHijo.nombre);
                    f.hijos.push(nuevoHijo);
                }
            }     
        }   
        
        /**
        * La siguiente instrucción indica que por cada hijo del nodo "Curso" (o sea, una sección) 
        * realizará las acciones dentro del bloque.
        */
        f.hijos.forEach(function(g){
            /**
            *  El siguiente bloque genera un nodo hijo por cada sección que posea una oferta en ella,
            *  gracias al array "arrRepetidos" se evita que se generen nodos repetidos.
            */
            var arrRepetidos = []   
            for(var j=0; j<ofertas.length; j++){
                for(var i=0; i<matriz.length; i++){
                    if (matriz[i][3] == ofertas[j] 
                    && g.nombre == matriz[i][2]
                    && f.nombre == matriz[i][1]
                    && e.nombre == matriz[i][0]
                    && !(arrRepetidos.includes(matriz[i][3]))){        
                        nuevoHijo = new Nodo(matriz[i][3],encabezados[3])
                        arrRepetidos.push(nuevoHijo.nombre);
                        g.hijos.push(nuevoHijo);
                    }
                }
            } 
        })
    }) 
})

/**
 * La siguiente instrucción guarda el árbol de datos en un archivo llamado 'Salida.json' y la guarda en
 * la carpeta /src
 */
fs.writeFile('./src/Salida.json', JSON.stringify(raiz),'utf8', (err) => { 
    if (err) throw err; 
    console.log('Archivo generado satisfactoriamente en directorio ./src'); 
}); 