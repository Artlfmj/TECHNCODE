
const Discord = require("discord.js")
module.exports = client => {
    console.log(`You have been disconnected at ${new Date()}.`)
    client.channels.cache.get("826865550666891282").bulkDelete(1)
    const log = new Discord.MessageEmbed()
    .setTitle(":white_check_mark: | TECHNCODE#3529 en cours de reconnection")
    .setTimestamp()
    client.channels.cache.get("826865550666891282").send(log)
}