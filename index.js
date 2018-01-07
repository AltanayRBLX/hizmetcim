//Made by Altanay#3606 C 2018 Do not copyright.

const Discord = require("discord.js");
const client = new Discord.Client();
var sahip = '293006152692662273';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  while
    client.user.setGame("Altanay | " + " çağır ", 'https://www.twitch.tv/turkishtr2', 1);
    delay (1)
    client.user.setGame("Altanay | " + " Yerler kirlenmiş.", 'https://www.twitch.tv/turkishtr2', 1);
    delay (1)
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'çağır') {
 client.users.get('293006152692662273').send('**seni ** ' + msg.guild + '** sunucusunun **' + msg.channel + '** yazı kanalından **' + msg.author + '** çağırıyor.**')
 }

});

client.login('Mzk4ODk3MjMwOTMwNjQwODk2.DTN4OQ.RB2COYFbciOYl3CCYYX2kOaH6wU');

  
