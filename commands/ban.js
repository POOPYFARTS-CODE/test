const Discord = require('discord.js');
module.exports = {
  name: 'ban',
  execute(message,args){
    let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You Dont Have Enought Perms To Use This Command") 
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I Dont Have Enought Perms!") 
    const reason = args[1] || "No reason was given";
    toBan.ban({
      reason: reason
    })
    message.channel.send(`${toBan} was banned from the server!\nReason: ${reason}`)
  }
}

