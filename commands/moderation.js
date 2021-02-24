const Discord = require('discord.js');
module.exports = {
  name: "help-moderation",
  aliases: ["mod-help","moderation","mod"],
  description: "Help Menu",
  execute(message, args){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Moderation Help')
    .setURL('https://discord.gg/9XeCsKmwah')
    .setAuthor('Fearless City', 'https://i.imgur.com/DQFuucM.png', 'https://discord.gg/9XeCsKmwah')
    .setDescription('Moderation Commands')
    .setThumbnail('https://i.imgur.com/czohc7Y.jpeg')
    .addFields(
      { name: 'Ban', value: '`c/ban`' , inline: true },
      { name: 'Unban', value: '`c/unban`', inline: true },
      { name: 'Mute', value: '`c/mute`', inline: true },
      { name: 'Kick', value: '`c/kick`', inline: true }
    )
    .setTimestamp()
    .setFooter('By Fearless', 'https://i.imgur.com/DQFuucM.png');
    message.channel.send(helpEmbed);
 }
}
