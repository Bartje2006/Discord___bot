const db = require('../../models/warns')

module.exports = {
    name : 'verwijder-warn',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('jij hebt geen permisions om dit command uit tevoeren.')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('persoon niet gevonden.')
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[1]) - 1
                data.content.splice(number, 1)
                message.channel.send('warn verwijdert')
                data.save()
            } else {
                message.channel.send('deze persoon heeft geen warns!')
            }
        })
    }
}