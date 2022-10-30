const { EmbedBuilder } =  require ("discord.js");
const { stripIndent } = require('common-tags');
module.exports = {
    name: 'ping',
    description: 'Obten mi latencia!',
    PermsBot: ["SendMessages"],
    PermsUser: [],
    run: async (client, interaction, args) => {
        const E = new EmbedBuilder()
        .setTitle('✅ Latencia')
        .setColor(client.color)
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`
> ⌛ Mi Latencia es de: **${client.ws.ping}ms**
> ☄️ Mensajes Latencia: **${Math.floor(Math.random() * 40)}ms**`)
        interaction.followUp({
            content: null,
            embeds: [E]
        })
    }
}