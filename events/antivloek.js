const client = require('../index');
const words = require('../curse.json');
const db = require('../reconDB');

client.on('message', async(message) => {
    if(await db.has(`vloek-${message.guild.id}`) === false) return;

    for (let i = 0; i < words.length; i++) {
        if(message.content.includes(words[i])) {
            message.delete();
            message.channel.send('dat woord mag niet in de server worden gebruikt!')
                .then(m => m.delete({ timeout: 3000 }))
        }
    }
})