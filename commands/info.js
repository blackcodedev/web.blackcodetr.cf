const Discord = require('discord.js');
const black = require("blackcode-api")

exports.run = async (client, message, args) => {
  
let botID = args[0]
  
let b = await black.info(botID);
message.chanel.send("Kısa açıklama: ${b.shortDesc},Sahibi: <@${b.ownerID}>,Oy Sayısı: ${b.votes},Bot: <@${b.botID}>")

  
  
  
  
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["info"]
};
exports.help = {
	name: 'info',
	description: 'ping',
	usage: 'ping'
};
   