// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const axios = require('axios');

/**
 * @todo pegar os tokens registrados
 * @todo tiver token registrado
 * @todo consultar na api
 * @todo entre os tokens
 */

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    {
        headers: {
            'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        } })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

// callback function
// promise não é uma coisa boa
// utilizar async/await
// observables


// When the client is ready, run this code (only once)
// const { bairro } = endereço;
client.once('ready', () => {
    console.log('to pronto!');
    let counter = 1;

    setInterval(() => {
        // se counter tiver resto por 2 == a 0 então
        if (counter % 2 == 0) {
            client.user.setActivity(`aopa ${counter++} sou par!`);
        }
        // senão então faz isso
        else {
            client.user.setActivity(`aopa ${counter++} sou impar!`);
        }
    }, 5 * 1000);


});

// Login to Discord with your client's token
client.login(token);