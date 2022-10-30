const fs = require('fs');
const allevents = [];
module.exports = async client => {
    let cantidad = 0;
    const cargar_dir = (dir) => {
        const archivos_eventos = fs.readdirSync(`./Events/${dir}`).filter((file) => file.endsWith('.js'));
        for(const archivo of archivos_eventos) {
            const evento = require(`../Events/${dir}/${archivo}`)(client);
            const nombre_evento = archivo.split(".")[0];
            allevents.push(nombre_evento);
            cantidad++
        }
    }
    await ["Client", "Guild"].forEach(e => cargar_dir(e));
}