const db = require('../../models/warns')

module.exports = {
    name : 'verwijder-alles',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permission to use this command.')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('User not found.')
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
                message.channel.send(`alle warns zijn verwijderd van ${user.user.tag}'s `)
            } else {
                message.channel.send('deze persoon heeft geen warns!')
            }
        })
    }
}