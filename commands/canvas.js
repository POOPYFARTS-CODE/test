const { execute } = require("./ban");

module.exports = {
  name: 'img',
  async execute(message,args){
    const canvas = require("discord-canvas");
    const guil_count = message.guild.memberCount;
  welcomeCanvas = new canvas.Welcome();

    let image = await welcomeCanvas
      .setUsername("xixi52")
      .setDiscriminator("0001")
      .setMemberCount("140")
      .setGuildName("Server DEV")
      .setAvatar("https://www.site.com/avatar.jpg")
      .setColor("border", "#8015EA")
      .setColor("username-box", "#8015EA")
      .setColor("discriminator-box", "#8015EA")
      .setColor("message-box", "#8015EA")
      .setColor("title", "#8015EA")
      .setColor("avatar", "#8015EA")
      .setBackground("https://www.site.com/background.jpg")
      .toAttachment();

    let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png");

    message.channel.send(attachment);
  }
}