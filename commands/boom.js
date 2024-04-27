const { EmbedBuilder } = require("discord.js");
const smsBomber = require("../modules/sms.js");

module.exports = { 
      name: "sms",
      usage: "/sms <numara> <miktar>",
      options: [
        {
            name: "numara",
            description: "Numara (Örnek: 5679435485)",
            type: 3,
            required: true
        },
        {
            name: "miktar",
            description: "Kaç adet sms göndermek istediğinizi yazın. Tek seferde maksimum 100 adet sms gönderebilirsiniz",
            type: 4,
            required: true
        }
      ],
      category: "Bot", 
      description: "sms gönderilmesini isteiğiniz numarayı ardından gönderilen mesaj miktarını yazınız",
      run: async (client, interaction) => {
        interaction.deferReply();
        let numara = interaction.options.getString("numara");
        let miktar = interaction.options.getInteger("miktar");
        if (isNaN(numara)) return interaction.editReply({ content: "Lütfen bir numara giriniz.", ephemeral: true });
        if (numara.length > 10) return interaction.editReply({ content: "Lütfen geçerli bir numara giriniz.", ephemeral: true });
        if (isNaN(miktar)) return interaction.editReply({ content: "Lütfen bir miktar giriniz.", ephemeral: true });
        
        if (miktar > 100) return interaction.editReply({ content: "Sakin ol ! En fazla 100 mesaj gönderebilirsin. Bırakta sistem biraz dinlensin", ephemeral: true });
        if (miktar < 1) return interaction.editReply({ content: "Minimum 1 mesaj gönderebilirsiniz.", ephemeral: true });

        let embed = new EmbedBuilder()
        .setTitle("E W A  Bomber")
        .setDescription(`**${miktar * 10}** adet mesaj **${numara}** numarasına gönderiliyor.`)
        .setFooter({ text: "E W A Bomber", iconURL: client.user.avatarURL() })
        .setTimestamp()

        setTimeout(async () => {
            smsBomber(numara, miktar);
            try {
                await interaction.editReply({ embeds: [embed] });
            } catch (e) {
                console.log(e);
            }
        }, 5000);
    }
} 