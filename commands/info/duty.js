const { RichEmbed } = require("discord.js");
const Discord = require('discord.js')
module.exports = {
    name: "duty",
    aliases: ["duty", "Stocking"],
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
   const exampleEmbed = new Discord.RichEmbed()
	.setColor('#00ff00')
	.setTitle('Duty Mode')
	.setDescription('Duty Mode is toggled on!')
	.setTimestamp()
	message.member.addRole('672776915538673676')
  .then(console.log)
  .catch(console.error);

message.channel.send(exampleEmbed);
    }
}