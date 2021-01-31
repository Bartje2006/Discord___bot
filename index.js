const {Collection, Client, Discord, Channel, MessageEmbed} = require('discord.js')
const fs = require('fs');
const { measureMemory } = require('vm');
const Levels = require('discord-xp')
const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"]
});
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://bart:bart2006@discord-bot.nt4fg.mongodb.net/Data", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})



client.ticketTranscript = mongoose.model('transcripts', 
    new mongoose.Schema({
        Channel : String,
        Content : Array
    })
)

const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.ticketCategory = '799347553740390470'
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setActivity(`${prefix}commands`)
    console.log(`${client.user.username} ✅`)
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '⛏') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('781226302191304705')
            user.send('je hebt nu de Minecraft role!')
        }
    }
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '🚓') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('781226542868332555')
            user.send('je hebt nu de Gtav/Fivem role!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '⛏') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('781226302191304705')
            user.send('je hebt nu de Minecraft role niet meer!')
        }
    }
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '🚓') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('781226542868332555')
            user.send('je hebt nu de GtaV/Fivem role niet meer!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '🚜') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('781269971909083206')
            user.send('je hebt nu de farming sumilator 19 role niet meer!')
        }
    }
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '⚽️') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('781269390011793449')
            user.send('je hebt nu de Rocket League role niet meer!')
        }
    }
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '🚜') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('781269971909083206')
            user.send('je hebt nu de farming sumilator 19 role niet meer!')
        }
    }
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '⚽️') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('781269390011793449')
            user.send('je hebt nu de Rocket League role niet meer!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '🚚') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('781418404732338207')
            user.send('je hebt nu de Truckers-mp role niet meer!')
        }
    }
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '🦠') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('781429944286445609')
            user.send('je hebt nu de among-us role niet meer!')
        }
    }
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '🚚') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('781418404732338207')
            user.send('je hebt nu de farming sumilator 19 role!')
        }
    }
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '🦠') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('781429944286445609')
            user.send('je hebt nu de Truckers-mp role!')
        }
    }
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '📢') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('797548900327358496')
            user.send('je hebt nu de notification role!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '804751088292986910'){
        if(reaction.emoji.name === '📢') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('797548900327358496')
            user.send('je hebt nu de notification role niet meer!')
        }
    }
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '804753148383461396'){
        if(reaction.emoji.name === '🖋') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('779654276750114856')
            user.send('je bent nu ge verifyd yhee!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '804753148383461396'){
        if(reaction.emoji.name === '🖋') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('779654276750114856')
            user.send('je bent nu niet meer geverifeerd!')
        }
    }
})
client.on('guildMemberAdd', async(member) => {
    const Channel = member.guild.channels.cache.get('779421575874215997')
try {
    Channel.send(`Welkom **${member.displayName}**, we hebben nu ${member.guild.memberCount}`)
}
catch(e) {
console.log(e)
}
})


client.on('message', async(message) => {
    if(message.channel.parentID !== '799347553740390470') return;
    client.ticketTranscript.findOne({ Channel : message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
           console.log('there is data')
           data.Content.push(`${message.author.tag} : ${message.content}`) 
        } else {
            console.log('there is no data')
            data = new client.ticketTranscript({ Channel : message.channel.id, Content: `${message.author.tag} : ${message.content}`})
        }
        await data.save()
            .catch(err =>  console.log(err))
        console.log('data is saved ')
    })

})
client.on('guildMembersAdd', async(member) => {
    const channel = member.guild.channels.cache.get('779421575874215997')
    Channel.send(`welkom **${member.displayName}**, we hebben nu ${member.guild.memberCount}`)
    
})


client.login(process.env.token);
