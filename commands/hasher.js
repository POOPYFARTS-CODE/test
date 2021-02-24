const encrypter = require('js-sha256')

module.exports = {
  name: 'encrypt',
  execute(message,args){
    const user_msg = message.content;
    const sliced_msg = user_msg.slice("!encrypttext ");
    console.log(sliced_msg)
    const encryptedText = encrypter.sha256(sliced_msg)

    message.channel.send({
      embed:{
        color: '#add8e6',
        title: 'Your Encrypted Message',
        description: `Your Encrypted Message: **${encryptedText}**`
      }
    })
  }
}