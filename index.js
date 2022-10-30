// ANTI-CRASH
const { EmbedBuilder } = require('discord.js');
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);
  const exceptionembed = new EmbedBuilder()
  .setTitle("ERROR")
  .setDescription(`${err}`)
  .setColor("Red")
  let Channel = client.channels.cache.get('1036155706270822400')
  channel.send({ embeds: [exceptionembed] })
});
process.on("unhandledRejection", (reason, promise) => {
  console.log(
    "[FATAL] Possibly Unhandled Rejection at: Promise ",
    promise,
    " Razon: ",
    reason.message
  );
   const rejectionembed = new EmbedBuilder()
  .setTitle("ERROR")
  .addFields([
    { name: "PROMESA", value: `${promise}` },
    { name: "RAZON", value: `${reason.message}` },
  ])
  .setColor("Red")
  let Channel = client.channels.cache.get('1036155706270822400')
  Channel.send({ embeds: [rejectionembed] })
});
// CONSTS AND REQUIRES
const { Client, Partials, GatewayIntentBits, Collection } = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const colors = require('colors');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.User,
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message
    ]
});
// CLIENT.COLLECTIONS
client.commands = new Collection();
client.color = config.color;
// CLIENT.FILES
fs.readdirSync('./Files').forEach(File => {
   require(`./Files/${File}`)(client);
});
// CLIENT.LOGIN
client.login(process.env.token);