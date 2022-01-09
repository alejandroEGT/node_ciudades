const inquirer = require('inquirer');
require('colors');
const preguntas = [
    {
        type: 'list',
        name: 'option',
        message: 'que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Buscar ciduad`
            },
            {
                value: '2',
                name: `${'2'.green}. Historial`
            },
            {
                value: '0',
                name: `${'3'.green}. Salir`
            },

        ]
    }
];
const inquirerMenu = async () => {
    console.clear();
    console.log('===================='.green);
    console.log(' seleccione menu'.green);
    console.log('===================='.green);

    const { option } = await inquirer.prompt(preguntas);
    return option;

}

const pausa = async () => {
    const pregunta = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.blue} para continuar`,
        }
    ];
    await inquirer.prompt(pregunta);
}

const leerInput = async (message) => {
    const q = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'por favor ingrese un valor'
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(q);
    return desc;
}

const listadoLugares = async (lugares = []) => {

    const choices = lugares.map((lugar, i) => {
        const idx = `${i + 1}`.green
        return {
            value: lugar.id,
            name: `${idx}`.green + ` - ${lugar.nombre}`,
        }
    });

    choices.unshift({
        value:'0',
        name:'0.'.green + 'Cancelar'
    })

    const pregunta = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione',
            choices
        }
    ]

    const { id } = await inquirer.prompt(pregunta);

    return id;
}



const confirmar_borrar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    confirmar_borrar,
    listadoLugares
}