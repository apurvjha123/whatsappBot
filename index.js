const qrcode = require('qrcode-terminal');
const axios = require('axios')

const { Client, MessageMedia } = require('whatsapp-web.js');
const client = new Client({
	puppeteer: {
		args: ['--no-sandbox'],
	}
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message',async message => {
    const content = message.body
	if(content === 'Meme plz') {
		const meme = await axios('https://meme-api.herokuapp.com/gimme')
        .then(res => res.data.url)
        client.sendMessage(message.from, await MessageMedia.fromUrl(meme))
	}
    else if(content === 'Joke plz') {
		const joke = await axios('https://v2.jokeapi.dev/joke/Any?safe-mode')
        .then(res => res.data)

        const jokemsg = await client.sendMessage(message.from,joke.setup || joke.joke)
        if(joke.delivery) setTimeout(function(){jokemsg.reply(joke.delivery)},5000)
	}
    
});
client.on('message', message => {
	if(message.body === 'Elhan') {
		message.reply('topper hai');
	}
});
client.on('message', message => {
	if(message.body === 'Harsh') {
		message.reply('Handsome boy');
	}
});


client.on('message', message => {
	if(message.body === 'Lissan') {
		message.reply('Do you mean Lassan');
	}
	if(message.body === 'Atul') {
		message.reply('Usko kuch mat bolo gali de dega');
	}
	if(message.body === 'Arun') {
		message.reply('Chu*ya hai');
	}
	if(message.body === 'Prince') {
		message.reply('simp hai');
	}
	if(message.body === 'Puja') {
		message.reply('do you mean chuja ?');
	}
	if(message.body === 'Raj') {
		message.reply('harsh and frahan ka best friend hai');
	}
	if(message.body === 'Farhan') {
		message.reply('cute hai');
	}
	if(message.body === 'Farzina') {
		message.reply('Topperon ki Topper');
	}
	if(message.body === 'Zain') {
		message.reply('Scout ka baap');
	}
});


client.initialize();