require('dotenv').config()

const {leerInput, inquirerMenu, pausa, listarLugares} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {
    
    const busquedas = new Busquedas();
    let opt;
    busquedas.leerDB();

    do{
        opt = await inquirerMenu();
        
        switch ( opt ) {

            case '1':
    
                //mostrar mensaje
                const termino   = await leerInput('Ciudad: ');

                // buscar los lugares
                const lugares = await busquedas.ciudad(termino); 

                //seleccionar el lugar
                const id = await listarLugares(lugares);
                if ( id === '0') continue;

                const lugarSeleccionado = lugares.find( l => l.id === id );
                
                // Guardamos en la BD
                busquedas.agregarHistorial( lugarSeleccionado.nombre );

                //clima
                
                const clima = await busquedas.climaLugar( lugarSeleccionado.latitud, lugarSeleccionado.longitud); 
                
                //mostrando resultados
                console.clear();
                console.log('\n Información de la ciudad \n'.green);
                console.log('Ciudad:', lugarSeleccionado.nombre);
                console.log('Lat:', lugarSeleccionado.latitud);
                console.log('Lng:', lugarSeleccionado.longitud);
                console.log('Temperatura:', clima.temp);
                console.log('Mínima:', clima.min);
                console.log('Máxima:', clima.max);
                console.log('Como está el clima: ', clima.desc);
        
                break;

            case '2':
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                const idx = `${ i + 1}.`.green;
                console.log ( `${ idx } ${ lugar } ` );
            })
            
        }
    

        if (opt !== '0') await pausa();

    } while (opt !== '0')
}

main ();