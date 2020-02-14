const { RichEmbed } = require("discord.js");
const Discord = require('discord.js')
module.exports = {
    name: "stock",
    aliases: ["stock", "Stocking"],
    description: "Tells the accounts in stock",
    usage: "<input>",
    run: (client, message, args) => {
message.channel.send('We have Origin, Spotify, NordVpn and Hulu.');
    }
}