const Discord = require('discord.js')

module.exports = {
    name: "howgay",
    description: "a howgay command",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Gay🌈")
        .setColor("RED")

        message.channel.send(howgayembed);
    }
}