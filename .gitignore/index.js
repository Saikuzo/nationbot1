const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = "!";

client.on('ready', () => {
    console.log(`Client connecté sous ${client.user.tag}!`);
})

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.id === "578820344601772082")
    if(!channel)return;
    var embed = new Discord.RichEmbed()
    .setColor("0x00FF40")
    .setDescription(`:small_orange_diamond: Bienvenue à toi ${member}! sur le serveur discord de Nation :wink: :v:`)
    channel.sendEmbed(embed);
})

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find(ch => ch.id === "578820344601772082")
    if(!channel)return;
    var embed = new Discord.RichEmbed()
        .setColor("0xFF0000")
        .setDescription(`:small_orange_diamond: Aurevoir ${member}! a plus tard sur le serveur discord de Nation :sob: :call_me:`)
    channel.sendEmbed(embed);
})

/* Connexion */
client.login(process.env.TOKEN);
