const { Message } = require('discord.js')

module.exports = {
    name : 'addrole',
    run : async(client, message, args) => {
        
        /**
         * @param {Message} message
         */
        
        
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('jij hebt geen permissions.')
       
        const target = message.mentions.members.first()
        if(!target) return message.channel.send('geen persoon getagd') 
        const role = message.mentions.roles.first() 
        if(!role) return message.channel.send('zet een rol er bij') 
        
        await target.roles.add(role) 
        message.channel.send(`${target.user.username} heeft de rol gekregen`)
    }
}