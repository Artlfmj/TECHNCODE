const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../config.json");
const Discord = require("discord.js")

//Here the command starts
module.exports = {
    //definition
        name: "help", //the name of the command 
        category: "info", //the category this will be listed at, for the help cmd
        aliases: ["h", "commandinfo"], //every parameter can be an alias or empty for no aliases
        cooldown: 5, //this will set it to a 5 second cooldown
        usage: "help [Command]", //this is for the help command for EACH cmd
        description: "Returns all Commmands, or one specific command", //the description of the command

        //running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
        const log = new Discord.MessageEmbed()
        .setTitle(`Utilisation de la commande Help | ${client.user.username}`)
        .setTimestamp()
        .setDescription(`La commande help a été utilisée`) 
        .addField("Salon d'utilisation", message.channel, true)
        .addField("Utilisateur", message.author.username, true)
        .addField("Serveur", message.guild.name, true)
        .addField("Date", new Date(), true)
        .setColor("BLUE")
    client.channels.cache.get("828915153432084510").send(log)
        if(args[0]){ //if there are arguments then get the command help
            return getCMD(client,message,args[0]);
        }
        else{ //if not get all commands
            return getAll(client, message);
        }
    }
}

//function for getting all commands
function getAll(client,message){
const embed = new MessageEmbed() //defining the Embed
    .setColor("DARK BLUE")
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle("Menu d'aide")
    .setFooter(`Pour voir plus d'informations sur une commande spécifique, écrivez: ${config.prefix}help [NOM DE LA COMMANDE]`, client.user.displayAvatarURL())
    const commands = (category) => { //finding all commands and listing them into a string with filter and map
        return client.commands.filter(cmd => cmd.category === category)
                .map(cmd => `\`${cmd.name}\``).join(", ")
    }
    //get the command infostring
    const info = client.categories.map(cat => stripIndents`**__${cat[0].toUpperCase() + cat.slice(1)}__**\n> ${commands(cat)}`)
    .reduce((string, category) => string + "\n" + category);
    //sending the embed with the description
    return message.channel.send(embed.setDescription(info))
}

//function for all commands
function getCMD(client,message,input){
    const embed = new MessageEmbed() //creating a new Embed
    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase())) //getting the command by name/alias
    if(!cmd){ //if no cmd found return info no infos!
        return message.channel.send(embed.setColor("BLUE").setDescription(`No Information found for command **${input.toLowerCase()}**`));
    }
    if(cmd.name) embed.addField("**Command name**", `\`${cmd.name}\``)
    if(cmd.description) embed.addField("**Description**", `\`${cmd.description}\``);

    if(cmd.aliases) embed.addField("**Aliases**", `\`${cmd.aliases.map(a => `${a}`).join("\`, \`")}\``)
    if(cmd.cooldown) embed.addField("**Cooldown**", `\`${cmd.cooldown} Secondes\``)
        else embed.addField("**Cooldown**", `\`1 Seconde\``)
    if(cmd.usage){
        embed.addField("**Usage**", `\`${config.prefix}${cmd.usage}\``);
        embed.setFooter("Syntaxe: <> = required, [] = optional"); 
    }
    //send the new Embed
    
    return message.channel.send(embed.setColor("ORANGE"))
    
}
