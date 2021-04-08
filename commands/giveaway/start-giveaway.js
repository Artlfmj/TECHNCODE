const ms = require('ms'); // npm install ms

//Here the command starts
const Discord = require('discord.js')
module.exports = {
    //definition
    name: "start-giveaway", //the name of the command 
    category: "", //the category this will be listed at, for the help cmd
    aliases: [""], //every parameter can be an alias
    cooldown: 2, //this will set it to a 2 second cooldown
    usage: "", //this is for the help command for EACH cmd
    description: "", //the description of the command

    //running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
        if(message.author.hasPermission("ADMINSTRATOR")){
            client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(' '),
            winnerCount: parseInt(args[1])
        }).then((gData) => {
            console.log(gData); // {...} (messageid, end date and more)
        
        });
    
    }
}

}



