const Discord = require('discord.js');
module.exports = {
  name: "help-music",
  aliases: ["music"],
  description: "Help Menu",
  execute(message, args){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Music Help')
    .setURL('https://discord.gg/9XeCsKmwah')
    .setAuthor('Fearless City', 'https://i.imgur.com/DQFuucM.png', 'https://discord.gg/9XeCsKmwah')
    .setDescription('Music Commands')
    .setThumbnail('https://i.imgur.com/czohc7Y.jpeg')
    .addFields(
      { name: 'Play', value: '`c/play`' , inline: true },
      { name: 'Pause', value: '`c/pause`', inline: true },
      { name: 'Skip', value: '`c/skip`', inline: true },
      { name: 'Stop', value: '`c/stop`', inline: true }
    )
    .setTimestamp()
    .setFooter('Fearless City', 'https://i.imgur.com/DQFuucM.png');
    message.channel.send(helpEmbed);
 }
}
