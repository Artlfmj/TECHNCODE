//Here the command starts
const Discord = require("discord.js")
module.exports = {
    //definition
    name: "ban", //the name of the command 
    category: "util", //the category this will be listed at, for the help cmd
    aliases: [""], //every parameter can be an alias
    cooldown: 2, //this will set it to a 2 second cooldown
    usage: "", //this is for the help command for EACH cmd
    description: "", //the description of the command

    //running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
        const attach = new Discord.MessageAttachment()
        .setFile("../../data/ban.mp4")
        message.channel.send(attach)
        const log = new Discord.MessageEmbed()
        .setTitle(`Utilisation de la commande ban | ${client.user.username}`)
        .setTimestamp()
        .setDescription(`La commande ban a été utilisée`) 
        .addField("Salon d'utilisation", message.channel, true)
        .addField("Utilisateur", message.author.username, true)
        .addField("Serveur", message.guild.name, true)
        .addField("Date", new Date(), true)
        .setColor("BLUE")
        client.channels.cache.get("828915153432084510").send(log)
    }
}
