const db = require('../../reconDB');

module.exports = {
    name: 'antivloek-aan',
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Jij hebt geen permisions!');
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('ik ben de permissions manage messages nodig');

        if(await db.has(`vloek-${message.guild.id}`) === false) {
            
            await db.set(`vloek-${message.guild.id}`, true)
            message.channel.send('antivloek is nu aan!')

        } else return message.channel.send('anti vloek is al aan!')
    }
}