//Made by Altanay#3606 C 2018

const Discord = require("discord.js");
const client = new Discord.Client();
var sahip = '293006152692662273';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("Altanay | " + " çağır ", 'https://www.twitch.tv/turkishtr2', 1);
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'çağır') {
 if (!message.author.bot)
 client.users.get('293006152692662273').send('**seni** ' + msg.guild + '  sunucusunun **' + msg.channel + '** yazı kanalından çağırıyorlar.**')
 }

});

client.login('Mzk4ODk3MjMwOTMwNjQwODk2.DTLEIw.fsoBHxfLmSc3bAeO6W8jn2rwPmM');

  
