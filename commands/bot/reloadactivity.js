//Here the command starts
const Discord = require('discord.js')
module.exports = {
    //definition
    name: "reloadactivity", //the name of the command 
    category: "bot", //the category this will be listed at, for the help cmd
    aliases: ["latency"], //every parameter can be an alias
    cooldown: 10, //this will set it to a 2 second cooldown
    usage: "ping", //this is for the help command for EACH cmd
    description: "RELOAD ACTIVITY. OWNER ONLY", //the description of the command

    //running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
      message.delete()
        if(message.author.id === "634099784428552213"){
            let member = message.member;

            
            const createTicketEmbed = new Discord.MessageEmbed()
            .setTitle("**Quelle activitΓ© souhaitez vous reload?**")
            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .setColor("#E12800")
            .setDescription("`π¨`: BETA\n`π`: SHOP CLASSIQUE\n`β`: Annuler")
            .setFooter(message.author.username)
            .setTimestamp()
          
          message.channel.send(createTicketEmbed).then(async msg => {
           await msg.react("π¨"); await msg.react("π"); await msg.react("β");
    
            const filter = (reaction, user) => ["π¨", "π", "β"].includes(reaction.emoji.name) && user.id === message.author.id;
            let reaction = (await msg.awaitReactions(filter, {max: 1})).first();
            switch(reaction.emoji.name) {
              case "π¨": 
              msg.delete()
              message.channel.send("EN developpement")
              //client.user.setActivity(`BETA SHOP | VERSION 1.2.15 en beta`, { type: "WATCHING"})
                break;
              case "π": 
              msg.delete()
              message.channel.send("En developpement")
              //client.user.setActivity(`SHOP s!help | VERSION 1.2.15 | ${client.guilds.cache.size} Serveurs | ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Utilisateurs  `, { type: "WATCHING"})  
                break;
              case "β": 
              msg.delete()
                message.channel.send("AnnulΓ© avec succΓ¨s β")
                break;
    }});   
    }
    else{
        message.channel.send("ERREUR | Vous n'avez pas accΓ©s a cette fonctionnalitΓ©. Veuillez ne pas refaire cette commande sous peine de whitelist de nos services")
    }
}
}