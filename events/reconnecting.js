//here the event starts
const Discord = require("discord.js")
module.exports = client => {
    console.log(`Reconnceting at ${new Date()}.`)
    const log = new Discord.MessageEmbed()
    .setTitle(`Reconnection de ${client.user.username}| ${new Date()}`)
    .setTimestamp()
    .setDescription(`⚠️ | ${client.user.tag} en cours de reconnection`) 
    .setColor("BLUE")
    client.channels.cache.get("828915153432084510").send(log)
}