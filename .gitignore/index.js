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

client.on('message', message => {
    if(message.content === PREFIX + "teamspeak"){
        var embed = new Discord.RichEmbed()
            .setColor("0x0000FF")
            .setTitle(":small_orange_diamond: Voici le lien du teamspeak :small_orange_diamond:")
            .setDescription(":pushpin: | 51.254.87.48  ")
        message.channel.sendEmbed(embed);
    }
})

client.on('message', message => {
    if(message.content === PREFIX + "ts"){
        var embed = new Discord.RichEmbed()
            .setColor("0x0000FF")
            .setTitle(":small_orange_diamond: Voici le lien du teamspeak :small_orange_diamond:")
            .setDescription(":pushpin: | 51.254.87.48  ")
        message.channel.sendEmbed(embed);
    }
})

client.on('message', message => {
    if(message.content === PREFIX + "forum"){
        var embed = new Discord.RichEmbed()
            .setColor("0x0000FF")
            .setTitle(":small_orange_diamond: Voici le lien du forum :small_orange_diamond:")
            .setDescription(":pushpin: | 51.254.87.48/index.php?  ")
        message.channel.sendEmbed(embed);
    }
})

client.on('message', message => {
    if(message.content === PREFIX + "serv"){
        var embed = new Discord.RichEmbed()
            .setColor("0x0000FF")
            .setTitle(":small_orange_diamond: Voici l'adresse du serveur :small_orange_diamond:")
            .setDescription(":pushpin: | 51.254.87.48:2302")
        message.channel.sendEmbed(embed);
    }
})

/* Connexion */
client.login(process.env.TOKEN);
