const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'Bogota', 'San josé'];

    constructor() {
        //leer db si existe
    }

    get header() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'lenguaje': 'es'
        };
    }

    async ciudad(lugar = '') {
        //peticion http

        const instancia = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params: this.header
        });

        const res = await instancia.get();

        // const res = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/los%20angele.json?access_token=pk.eyJ1IjoiYWxlamFuZHJvZWd0IiwiYSI6ImNreTU5a3NyNDBmZGUyd29heGc0dTVhZnEifQ.GYivjKCmcALgxG9lAV8LhA&limit=2&lenguaje=es');

       
        return res.data.features.map( lugar => ({id: lugar.id,
             nombre: lugar.place_name,
             lng:lugar.center[0],
             lat:lugar.center[1]
        }));


        // {id: lugar.id,
        // nombre: lugar.place_name,
        // lng:lugar.center[0],
        // lat:lugar.center[1]}
    
    }
}

module.exports = Busquedas;