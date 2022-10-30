const Setups = require(`${process.cwd()}/Modelos/Setups.js`);
module.exports = {
    Asegurar
}
async function Asegurar(guildid, userid) {
    let setupData = await Setups.findOne({
        GuildId: guildid
    });
    if(!setupData) {
        console.log('[Nexuz] = Guilds-Messages Security');
        setupData = await new Setups({
           GuildId: guildid,
        });
        await setupData.save();
		}
}