const { Asegurar } = require(`${process.cwd()}/Utils/Asegurar.js`);
module.exports = client => {
    client.on('messageCreate', async (message) => {
        if (!message.guild || !message.channel || message.author.bot) return;
        await Asegurar(message.guild.id, message.author.id);
    })
}