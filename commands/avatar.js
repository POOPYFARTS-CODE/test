module.exports = {
  name: "avatar",
  aliases: "['icon','pfp']",
  description: "Shows Avatar!",
  execute(message, args){
    const avatar = message.author.displayAvatarURL()
    message.channel.send({
      embed: {
        color: '#add8e6',
        title: `${message.member.displayName}'s Profile Picture`,
        image: {
          url: avatar
        }
      }
  });
 }
}