// Require
const Discord = require('discord.js');
const Client = new Discord.Client();

// Variable
const PREFIX = "!";

// Message Console

Client.on('ready', () => {
    console.log(`Client connecté sous ${Client.user.tag}!`);
})

// Bienvenue
Client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.id === "583382753798520844")
    const role = member.guild.roles.find(roles => roles.id ==='553268167938670603')
    if(!channel)return;
    var embed = new Discord.RichEmbed()
    .setColor("0x00FF00")
    .setDescription(`🔸 Bienvenue à toi ${member}! sur le serveur discord de Nation | E-Sport ✨ 💖`)
    channel.sendEmbed(embed);
    member.addRole(role);
})

Client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find(ch => ch.id === "583382753798520844")
    if(!channel)return;
    var embed = new Discord.RichEmbed()
        .setColor("0xFF0000")
        .setDescription(`🔸 Aurevoir ${member}! a plus tard sur le serveur discord de Nation ✨ 😭`)
    channel.sendEmbed(embed);
})

// Contact

Client.on('message', message => {
    if(message.content.startsWith(PREFIX + 'send')) {
        message.guild.send('Rejoint ce discord : https://discord.gg/hwadXHk ')
    }
})

Client.on('message', message => {
    if (message.content.startsWith(PREFIX + "contact")) {
    var embed = new Discord.RichEmbed()
        .setColor("#58FAF4")
        .setDescription("Contactez nous par E-Mail avec : nationesport.pro@gmail.com 📧")
    message.channel.send(embed);
    }
})

// Sondage
Client.on('message', message => {
    if (message.content.startsWith(PREFIX + "sondage")) {
        if(message.author.id === "315494374429556737"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec ✅ ou ❌")
                .setColor("0xB40404")
                .setTimestamp()
            message.guild.channels.find(ch => ch.id === "581845517219266571").sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() {
            });
            }else{
                return message.reply("Tu n'as pas la permission. ")
            }
    }
})

/* Connexion */
client.login(process.env.TOKEN);
