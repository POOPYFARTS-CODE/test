const distube = require('distube')

module.exports = {
  name:'resume',
  execute(message,client,args){
    if(!message.member.voice.channel)return message.channel.send(`Yo Dude Connect To A VC First!`)
    const music = args.join(" ");
    client.distube.resume(message, music)
    message.channel.send({
      embed:{
        title: 'Music Resumed!',
        color: '#add8e6'
      }
    })
  }
}