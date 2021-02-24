const distube = require('distube')

module.exports = {
  name:'play',
  execute(message,client,args){
    if(!message.member.voice.channel)return message.channel.send(`Yo Dude Connect To A VC First!`)
    const music = args.join(" ");   
    client.distube.play(message, music)
  }
}