const distube = require('distube');
const Discord = require('discord.js')

module.exports = {
  name:'stop',
  async execute(message,client,args){
    if(!message.member.voice.channel)return message.channel.send(`Yo Dude Connect To A VC First!`)
    let queue = await client.distube.getQueue(message);

    if(queue){
      client.distube.stop(message)
    const newEmbed_ = Discord.MessageEmbed()
     .setTitle('Song Stopped!')
     .setDescription('Song Was Stopped Succesfully!')
    message.channel.send(newEmbed_)
    }else if (!queue){
      return;
  };
 }
}