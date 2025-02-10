module.exports = {
    name: 'ready',
    execute(client) {
        console.log(`Bot ${client.user.tag} sudah online!`);
    },
};
