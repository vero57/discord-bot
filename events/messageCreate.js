module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (!message.content.startsWith('!') || message.author.bot) return;

        const args = message.content.slice(1).trim().split(/ +/);
    },
};
