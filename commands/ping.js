module.exports = {
    name: 'ping',
    description: 'Cek latency bot!',
    execute(message) {
        message.reply(`Pong! Latency: ${Date.now() - message.createdTimestamp}ms`);
    },
};
