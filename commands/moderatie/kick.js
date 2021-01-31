module.exports = {
    name: 'kick', //command name
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('ik heb geen permission');
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('tagg een persoon om te kicken')
        await Member.kick({ reason : args.slice(1).join(" ")})
        message.channel.send(`${Member.user.tag} is gekickt van de server!`)
    }
}