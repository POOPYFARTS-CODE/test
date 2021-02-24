const Discord = require('discord.js');
module.exports = {
  name: "help-utility",
  aliases: ["utility"],
  description: "Help Menu",
  execute(message, args){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Utility Help')
    .setURL('https://discord.gg/9XeCsKmwah')
    .setAuthor('Fearless City', 'https://i.imgur.com/DQFuucM.png', 'https://discord.gg/9XeCsKmwah')
    .setDescription('Utility Commands')
    .setThumbnail('https://i.imgur.com/DQFuucM.png')
    .addFields(
      { name: 'Server Information', value: '`c/serverinfo`' , inline: true },
      { name: 'User Info', value: '`c/userinfo`', inline: true },
      { name: 'Your Info', value: '`c/myinfo`', inline: true },
      { name: 'Shows Prefix', value: '`c/prefix`', inline: true }
    )
    .setTimestamp()
    .setFooter('By Fearless City', 'https://i.imgur.com/DQFuucM.png');
    message.channel.send(helpEmbed);
 }
}
