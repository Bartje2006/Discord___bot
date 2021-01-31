const { Client, Message } = require('discord.js')

module.exports = {
    name : 'ticket',
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run : async(client, message) => {
        const ch = message.guild.channels.cache.find(ch => ch.name === message.author.id)
        if(ch) return message.channel.send('je hebt al een ticket open.')
        message.guild.channels.create(`${message.author.id}`, {
            type : 'text',
            parent : '799347553740390470',
            permissionOverwrites : [
                {
                    id : message.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : message.author.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                },
                {
                    id : '801921948564324373',
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                }
            ]
        }).then(async channel=> {
            channel.send(`${message.author}, welkom in je ticket!`)
            message.reply(`klik <#${channel.id}> om je ticket te zien`)
        })
    }
}