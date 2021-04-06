//here the event starts
const Discord = require("discord.js")
module.exports = async (client, member) => {
    //logs when a member joins, make sure to have GuildMemberIntents active in discord.com/developers
    console.log(member + "joined in: " + member.guild.name)
    const log = new Discord.MessageEmbed()
    .setTitle(`Nouveau membre: ${member.guild.name}| ${client.user.username}| ${new Date()}`)
    .setTimestamp()
    .setDescription(`Un nouveau membre a fait son apparition : ${member.guild.name}`) 
    .setColor("BLUE")
    .setThumbnail(member.displayAvatarURL({dynamic: true, size: 512}))
    .addField(`Nom de l'utilisateur`, (member.username))
    .addField(`Tag`, member.tag)
    .addField(`ID`, member.id)
    .addField(`Statut`, member.status)
    .addField(`Compte crée le`, member.createdAt)
    client.channels.cache.get("828915153432084510").send(log)
};

