//Here the command starts
const Discord = require('discord.js')
module.exports = {
    //definition
    name: "say", //the name of the command 
    category: "fun", //the category this will be listed at, for the help cmd
    aliases: ["say", "sayit"], //every parameter can be an alias
    cooldown: 2, //this will set it to a 2 second cooldown
    usage: "say <Text>", //this is for the help command for EACH cmd
    description: "Resends the message", //the description of the command

    //running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
        //EVERTHING in HERE CAN BE A PART OF THE COMMAND	
        message.channel.send(text) //you could also do:  message.channel.send(args.join(" "))
        //another example: message.channel.send(user + "send the message: " + text)
        const log = new Discord.MessageEmbed()
        .setTitle(`Utilisation de la commande Say | ${client.user.username}`)
        .setTimestamp()
        .setDescription(`La commande say a été utilisée`) 
        .addField("Salon d'utilisation", message.channel, true)
        .addField("Utilisateur", message.author.username, true)
        .addField("Serveur", message.guild.name, true)
        .addField("Date", new Date(), true)
        .setColor("BLUE")
        client.channels.cache.get("828915153432084510").send(log)
    }
}