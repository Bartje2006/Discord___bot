const { recon, reconDB } = require('reconlx');

const db = new reconDB({
    uri: 'mongodb+srv://bart:bart2006@discord-bot.nt4fg.mongodb.net/Data'
})

module.exports = db;