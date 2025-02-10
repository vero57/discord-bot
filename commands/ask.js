const model = require('../config/ai-config');

module.exports = {
    name: 'ask',
    description: 'Tanya Atin tentang apapun!',
    async execute(message) {
        try {
            const question = message.content.slice(5).trim();
            if (!question) return message.reply('Hai, ada yang bisa Atin bantu?');

            message.channel.sendTyping();

            const systemPrompt = "Namaku Atin. Aku adalah asisten AI yang ramah dan helpful. Aku selalu menjawab dengan sopan dan kadang menambahkan emoji yang sesuai. Aku suka memperkenalkan diri sebagai Atin di awal percakapan.";
            
            const result = await model.generateContent([
                systemPrompt,
                `User: ${question}`,
                "Atin:"
            ].join('\n'));
            
            const response = await result.response;
            const answer = response.text();

            message.reply(answer);
        } catch (error) {
            console.error('Error:', error);
            message.reply('Maaf, Atin sedang mengalami kesulitan untuk merespon 😅');
        }
    },
};
