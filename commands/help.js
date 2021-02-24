const Discord = require('discord.js');
module.exports = {
  name: "help",
  description: "Help Menu",
  execute(message, args){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Help Menu')
    .setURL('https://discord.gg/9XeCsKmwah')
    .setAuthor('Fearless City', 'https://i.imgur.com/DQFuucM.png', 'https://discord.gg/9XeCsKmwah')
    .setDescription('Help Commands')
    .setThumbnail('https://i.imgur.com/DQFuucM.png')
    .addFields(
      { name: 'Utility', value: '`c/help-utility `' , inline: true },
      { name: 'Fun', value: '`c/help-fun`', inline: true },
      { name: 'Music', value: '`c/help-music`', inline: true },
      { name: 'Moderation', value: '`c/help-moderation`', inline: true }
    )
    .setImage('https://i.imgur.com/DQFuucM.png')
    .setTimestamp()
    .setFooter('By Fearless City', 'https://i.imgur.com/DQFuucM.png');
    message.channel.send(helpEmbed);
 }
}

