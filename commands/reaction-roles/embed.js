const { MessageEmbed, Client, Message } = require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'reaction-message',
    run : async(Client, Message) => {
        const embed = new MessageEmbed()
            .setTitle('Reaction Roles')
            .setDescription('reageer om de role te krijgen\n⛏ - Minecraft Role\n🚓 -GtaV/Fivem Role\n🚜 - farming sumilator 19\n🏀 - Rocket League\n🚚 -truckersmp\n🦠 -Among-us \n📢 -notification') 
            .setColor('GREEN')

        const msg = await Message.channel.send(embed)
        await msg.react('⛏')
        await msg.react('🚓')  
        await msg.react('🚜')  
        await msg.react('🏀')
        await msg.react('🚚')
        await msg.react('🦠')
        await msg.react('📢')
    }
}