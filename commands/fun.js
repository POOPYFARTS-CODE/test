const Discord = require('discord.js');
module.exports = {
  name: "help-fun",
  aliases: ["fun"],
  description: "Help Menu",
  execute(message, args){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Fun Help')
    .setURL('https://discord.gg/9XeCsKmwah')
    .setAuthor('Comet Development', 'https://i.imgur.com/DQFuucM.png', 'https://discord.gg/9XeCsKmwah')
    .setDescription('Fun Commands')
    .setThumbnail('https://i.imgur.com/czohc7Y.jpeg')
    .addFields(
      { name: 'Meme', value: '`c/meme`' , inline: true },
      { name: 'Cats Images', value: '`c/cats`', inline: true },
      { name: 'Dogs', value: '`c/dogs`', inline: true },
      { name: 'Animal', value: '`c/animal`', inline: true }
    )
    .setTimestamp()
    .setFooter('By Fearless City', 'https://i.imgur.com/DQFuucM.png');
    message.channel.send(helpEmbed);
 }
}
