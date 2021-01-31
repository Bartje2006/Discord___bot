const { MessageEmbed, Client, Message } = require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'verify',
    run : async(Client, Message) => {
        const embed = new MessageEmbed()
            .setTitle('Reaction Roles')
            .setDescription('reageer met 🖋 om je zelf te verivitiveren') 
            .setColor('RED')

        const msg = await Message.channel.send(embed)
        await msg.react('🖋')
    }
}