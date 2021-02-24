module.exports = {
  name: "beep",
  description: "Beep!!",
  execute(message, args){
    message.channel.send("Boop!").then((msg)=> {
      setTimeout(function(){
        msg.edit('Your edited message');
      }, 5000)
    });
  }
}