const Discord = require('discord.js');
const client = new Discord.Client();

//  Partie Music
var dispatcher;

// Partie Variable
const PREFIX = "!";

// Fonction

function sendError(message, description) {
    message.channel.sendEmbed({embed: {
        color: 15158332,
        description: ':x: ' + description 
    }});
}



client.on('ready', () => {
    console.log(`Client connecté sous ${client.user.tag}!`);
})

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.id === "578820344601772082")
    const role = member.guild.roles.find(roles => roles.id ==='578987733415100445')
    if(!channel)return;
    var embed = new Discord.RichEmbed()
    .setColor("0x00FF40")
    .setDescription(`:small_orange_diamond: Bienvenue à toi ${member}! sur le serveur discord de Nation :wink: :v:`)
    channel.sendEmbed(embed);
    member.addRole(role);
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
    if (message.content.startsWith(PREFIX + "sondage")) {
        if(message.author.id === "315494374429556737"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec ✅ ou ❌")
                .setColor("0xB40404")
                .setTimestamp()
            message.guild.channels.find(ch => ch.id === "578308716168871938").sendEmbed(embed)
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

/* client.on('message', message => {
    if(message.content[0] === PREFIX){
        let splitMessage = message.content.split(" ");
        if(splitMessage[0] === '!play') {
            if(splitMessage.length === 2)
            {
                
                if(message.member.voiceChannel)
                {
                    message.member.voiceChannel.join().then(connection => {
                        dispatcher = connection.playArbitraryInput(splitMessage[1]);

                        dispatcher.on('error', e => {
                            console.log(e);
                        });

                        dispatcher.on('end', e => {
                            dispatcher = undefined;
                            console.log('Fin du son');
                        });
                    }).catch(console.log);
                }
                else
                send.message.channel('Erreur, Rejoingez un salon vocal ! ')
            }
            else
                sendError(message, 'Erreur, problème dans les paramètres');
        }
        else if(splitMessage[0] === '!pause') {
            if(dispatcher !== undefined)
                dispatcher.pause();
        }
        else if(splitMessage[0] === '!resume') {
            if(dispatcher !== undefined)
                dispatcher.resume();
        }
    }
});

*/

/* Connexion */
client.login(process.env.TOKEN);
