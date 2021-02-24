//requiring the discord js 
const fs = require('fs');
const Discord = require('discord.js');
const distube = require('distube')
//creating a client
const {prefix, token} = require('./config.json');
const { type } = require('os');
const DisTube = require('distube');
const client = new Discord.Client();
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.distube = new DisTube(client, {searchSongs: false, emitNewSongOnly: true});
client.distube
.on("playSong", (message, queue, song) => message.channel.send({
  embed:{
    title:'Playing Your Song',
    color:'#add8e6',
    description:`Playing ${song.name} Now! Requested By ${song.user}.`
  }
}))
.on("addSong", (message, queue, song) => message.channel.send({
  embed:{
    title: 'Music Added To Queue!',
    color: '#add8e6',
    description: `Added ${song.name} - ${song.formattedDuration} to the queue by ${song.user}`
  }
}
))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
//when the client is ready it will log Ready!
//this will be triggered when the bot logs in

client.once('ready', () => {
  console.log('Ready!');
  const status = `c/help`
  client.user.setActivity(status, {type: 'LISTENING'})
});
//listening for messages and logging them by declaring the message content as variable
client.on('message', async message =>{
  const cooldowns = new Discord.Collection();
  //if starts with prefix or by tagging output = given down
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  //Create an args variable that slices off the prefix entirely, removes the leftover whitespaces and then splits it into an array by spaces.
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  //changes the command to lowercase
  const commandName = args.shift().toLowerCase();
 //checks he message and if the command is found returns the function
  const command = client.commands.get(commandName)
 		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
 	if (!command) return;
  try{
    command.execute(message,client, args);
  }catch (error){
    console.log(error)
    message.reply('There Was Error Running Your Command!')
  }
});
//bot login with discord token (bot token)
client.login(process.env.token);
