const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "simple help command",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('Prefix- `.`')
        .setAuthor('Command List', message.author.displayAvatarURL())

        .addFields({
            name: 'About this bot',
            value: 'This bot is for Team Optic!',
        },
        {
            name: 'Information',
            value: '`ping`',        
        },
        {
            name: 'Fun',
            value: '`8ball` | `howgay` | `meme` | `rps` | `tictactoe`',
        },)

        message.channel.send(help)
    }
}