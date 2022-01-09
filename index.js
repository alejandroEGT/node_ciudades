
require('dotenv').config();
require('colors');
const { leerInput, inquirerMenu, pausa, listadoLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');
console.log("ss")

const main = async () => {
    let opt;
    const busqueda = new Busquedas();
    busqueda.ciudad
    do {
        let lid='';
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //mostrar mensaje
                const search = await leerInput('Ciudad: ');
                // Buscar los lugares
                const lugares = await busqueda.ciudad(search);
                // lugar seleccionado
                lid = await listadoLugares(lugares);
                // console.log(`salida`,{lid})
                const selected = lugares.find( l => l.id=== lid);
                // console.log(`selected`,selected)

                // if(id==='0')await pausa();

                console.log('\nInformacion de la ciudad\n'.green)
                console.log('ciudad:'.green,selected.nombre )
                console.log('lat:'.green, selected.lat )
                console.log('long:'.green, selected.lng )
                console.log('temperatura:'.green,  )
                console.log('minima:'.green, )
                console.log('maxima:'.green, )
                break;

            case '2':

                break;

            case '0':

                break;

            default:
                break;
        }

        if (lid ==='0') pausa();
        if (opt !== '0') await pausa();

    } while (opt !== '0');
}
console.log(process.env.MAPBOX_KEY)
main();