const db = require('../../reconDB');

module.exports = {
    name: 'antivloek-uit',
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('jij hebt geen permissions!');
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('ik ben  de permision manage messages nodig');

        if(await db.has(`vloek-${message.guild.id}`) === true) {
            
            await db.delete(`vloek-${message.guild.id}`);
            message.channel.send('Antivloek is nu uit!')

        } else return message.channel.send('Antivloek is al uit!')
    }
}