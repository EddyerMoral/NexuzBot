const { ActivityType } =  require("discord.js");
const mongoose = require('mongoose');
const config = require(`${process.cwd()}/config.json`);
module.exports = client => {
    client.on('ready', async () => {
        console.log(`[Nexuz] = ${client.user.tag} Ready!`.blue);
        client.user.setActivity({
            name: '/help | NexuzBot',
            type: ActivityType.Playing
        });
        mongoose.connect(process.env.mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('[Nexuz] = Conectado a MongoDB!'.green)
        }).catch((err) => {
            console.log('[Nexuz] = No Connectado a MongoDB!'.red)
            console.log(err)
        });
    })
}