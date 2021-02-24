module.exports = {
  name: "embed",
  description: "Embed The Message",
  execute(message, args){
    message.channel.send({
      embed: {
        color: '#add8e6',
        title: `**${message.content}**`,
        description: `**${message.content}**`
      }
  });
 }
}