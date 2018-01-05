//Made by Altanay#3606 C 2018

const Discord = require("discord.js");
const client = new Discord.Client();
var sahip = '293006152692662273';
var prefix = 'hizmetçi!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("Altanay's | " + " aşkm Altanay ", 'https://www.twitch.tv/turkishtr2', 1);
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === prefix + 'çağır') {
  client.users.get('293006152692662273').send('**Aşkımmm seni** ' + msg.channel + ' **kanalından çağırıyolar.**')
 }

});

client.login('Mzk4ODk3MjMwOTMwNjQwODk2.DTFNig.np8WTyvsCf473ifg6f9GzpqAB2Y');
  