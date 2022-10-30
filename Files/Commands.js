const fs = require('fs')
const Commands = [];
module.exports = client => {
    const commandFolders = fs.readdirSync('./Commands');
    for(const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./Commands/${folder}`)
        .filter((file) => file.endsWith('.js'));
        for(const file of commandFiles) {
            const command = require(`../Commands/${folder}/${file}`);
            if(command.name) {
                client.commands.set(command.name, command);
                Commands.push(command)
            } else {
                continue;
            }
        }
    }
	  client.on('ready', async () => {
    client.application.commands.set(Commands);
    console.log('[Nexuz] = Comandos Cargados!'.cyan);
		})
}