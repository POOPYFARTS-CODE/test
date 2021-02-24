const { execute } = require("./cat");

module.exports = {
  name: 'autoplay',
  execute(message,client,args){
    let mode = client.toggleAutoplay(message)
    message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off")+"`")
  }
}