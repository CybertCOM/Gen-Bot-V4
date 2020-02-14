const { Client, RichEmbed, Collection } = require('discord.js');
const { config } = require("dotenv");
const usedCommandRecently4 = new Set();
const client = new Client({
    disableEveryone: true
})


// Collections
client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "_help",
            type: "PLAYING"
        }
    }); 
})



client.on("message", async message => {
    const prefix = "_";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.on('guildMemberRemove', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'bye');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bye Come Back Soon, ${member}`);
});

client.on('message', message => {
    switch(message.content.toUpperCase()) {
        case '_RESET':
            resetBot(message.channel);
            break;

        // ... other commands
    }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login('NjI3MTkwOTIxOTg5MDYyNjc3.XkV4ZA.PXla5rJTvB421OOjTtfle7IFsdk'));
}
client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === '_help') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
      .setTitle('Commands:')
      .setColor(0xFF0000)
      .addField(name= "_stock", value= "Tells you about the stock")
      .addField(name= "_hulu", value= "Give you a Hulu account")
      .addField(name= "_Origin", value= "Gives you an Origin account")
      .addField(name= "_spotify", value= "Gives you a spotify account")
      .addField(name= "_nordvpn", value= "Gives you a NordVpn account")
      .addField(name= "_instagaram", value= "Gives you information about an account")
      .setFooter("Don't Forget to share the server with your friends and family!")
      message.channel.send(embed);
    }
  });
client.login("NjI3MTkwOTIxOTg5MDYyNjc3.XkV4ZA.PXla5rJTvB421OOjTtfle7IFsdk");