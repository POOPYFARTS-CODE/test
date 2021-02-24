module.exports = {
  name: "prefix",
  description: "Shows The Prefix",
  execute(message, args){
    const avatar = message.author.defaultAvatarURL
    message.channel.send({
      embed: {
        color: '#add8e6',
        title: `**Server Prefix**`,
        description: `**The Server Prefix Is c/**`,
        timestamp: new Date(),
        footer: {text:`By Fearless City`},
      }
  });
 }
}