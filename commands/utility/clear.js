const { message } = require("discord.js");

module.exports = {
    name : 'clear',
    aliases : ['clear'],
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('jij hebt geen permision om het command te gebruiken!')
        if(!args[0]) return message.channel.send('geef een getal op tussen de 1 en de 99')
        if(isNaN(args[0])) return message.channel.send('aleen nummers mogen')
        if(parseInt(args[0]) > 99) return message.channel.send('het maximale wat je kan verwijderen is 99')  
            await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        message.channel.send(`ik heb  ${args[0]} berichten verwijdert!`).then(m => m.Delete({ timeout : 5000 }))
    }
}