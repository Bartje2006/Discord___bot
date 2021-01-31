module.exports = {
    name: 'ban', //command name
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission('ban_MEMBERS')) return message.channel.send('ik heb geen permission');
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('tagg een persoon om te banen')
        await Member.ban({ reason : args.slice(1).join(" ")})
        message.channel.send(`${Member.user.tag} is gebant van de server!`)
    }
}