const colors = require('colors');
const title = require('./modules/title.js');
const { Client, Collection, Discord, ActivityType, VoiceChannel } = require('discord.js');
const client = new Client({ intents: 32767 });
title('Hosgeldiniz');

require("./loader.js")(client);

client.on('ready', () => {
    console.log(`${client.user.tag} Olarak Giris Yaptiniz!`.green);
    client.user.setPresence({ activities: [{ name: 'EmiWn ♥ E W A', type: 0 }], status: 'idle' });
});

client.login('TOKEN').catch(() => console.log('Tokeni Kontrol Ediniz'.red));

client.on('ready', () => {

    const { joinVoiceChannel  } = require('@discordjs/voice'); 
  
    let VoiceChannel = "1232291480790372456" 
    let VoiceGuild = "1043195325776666665"
  
    joinVoiceChannel({channelId: VoiceChannel, guildId: VoiceGuild,
    adapterCreator: client.guilds.cache.get(VoiceGuild).voiceAdapterCreator
  });
  }); 

