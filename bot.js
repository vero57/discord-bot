require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.commands = new Map();
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`Bot ${client.user.tag} sudah online!`);
});

client.on('messageCreate', (message) => {
    console.log(`Pesan diterima: ${message.content}`); // Debugging

    if (!message.content.startsWith('!') || message.author.bot) return;

    console.log(`Command yang diterima: ${message.content}`); // Debugging

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (command) {
        command.execute(message);
    } else {
        message.reply(`Command tidak ditemukan: ${commandName}`);
    }
});

client.login(process.env.TOKEN);

