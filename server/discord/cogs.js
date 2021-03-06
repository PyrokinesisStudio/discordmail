const fs = require('fs');

const commands = {};
const categories = {};

// Register valid commands from "cogs"
fs.readdir('./server/discord/cogs/', (err, items) => {
	items.forEach((item) => {
		const file = item.replace(/\.js/g, '');
		const cog = require(`./cogs/${file}`); // eslint-disable-line global-require, import/no-dynamic-require
		categories[file] = cog;
		cog.forEach((com) => {
			com.aliases.forEach((alias) => {
				if (commands[alias]) {
					throw new Error(`Alias ${alias} from ${file} was already assigned to another command!`);
				} else {
					commands[alias] = com;
				}
			});
		});
	});
});

module.exports = { commands, categories };
