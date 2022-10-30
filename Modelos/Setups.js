const { model, Schema } = require('mongoose');
const Setups = new Schema({
    GuildId: String,
});
const Modelo = new model('Setups-Guilds-Configs', Setups);
module.exports = Modelo;