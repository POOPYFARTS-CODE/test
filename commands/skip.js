const distube = require('distube');
const Discord = require('discord.js')

module.exports = {
  name:'skip',
  async execute(message,client,args){
    if(!message.member.voice.channel)return message.channel.send(`Yo Dude Connect To A VC First!`)
    let queue = await client.distube.getQueue(message);

    if(queue){
      client.distube.skip(message)
    const newEmbed_ = new Discord.MessageEmbed()
    .setTitle('Song Skipped!')
    .setColor('#add8e6')
    .setDescription('Song Was Skipped Succesfully!')
    message.channel.send(newEmbed_)
    }else if (!queue){
      return;
  };
  }
}