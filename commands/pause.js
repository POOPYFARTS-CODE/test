const distube = require('distube')

module.exports = {
  name:'pause',
  execute(message,client,args){
    if(!message.member.voice.channel)return message.channel.send(`Yo Dude Connect To A VC First!`)
    const music = args.join(" ");
    client.distube.pause(message, music)
    message.channel.send({
      embed:{
        title: 'Music Paused',
        color: "#add8e6"
      }
    })
  }
}