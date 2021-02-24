const Discord = require('discord.js');
module.exports = {
  name: 'unban',
  async execute(message,client,args){
    let toban = await client.users.fetch(args[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "There was no reason!";

        message.guild.members.unban(toban, reason)

        message.channel.send(`${toban} has been unbanned!`)
  }
}