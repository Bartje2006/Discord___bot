const { MessageEmbed, Client, Message } = require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'commands',
    run : async(Client, Message) => {
        const embed = new MessageEmbed()
            .setTitle('alle commands die er zijn')
            .setDescription('') 
            .setColor('GREEN')

    }
}