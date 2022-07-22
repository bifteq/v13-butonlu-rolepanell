const { MessageActionRow, MessageButton, MessageEmbed, Discord } = require('discord.js');

// BİLGİLENDİRME : Ben uğraşmayın diye buraya tanımladım açıkcası altyapı hazırlıyorsanız veya başka birşey ayarlara tanımlamanızı öneririm. Felixar#1851 :D
///////////////////////////////////////////////////////////////////// 
const vip = "998261415192297522"
const msc = "996783845024215080"
const dzn = "998261414760292423"
////////////////////////////////////////////////////////////////////
exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has("992045605042008067") && !message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({embeds: [new Discord.MessageEmbed() .setDescription("yetkinyokcano.")]})
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.reply(`Role paneli açmak için bir \`@Felixar/ID\` lazım.`)

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('vip')
					.setLabel('VIP')
					.setStyle('PRIMARY'),
                new MessageButton()
					.setCustomId('msc')
					.setLabel('Musician')
					.setStyle('PRIMARY'),
                new MessageButton()
					.setCustomId('dzn')
					.setLabel('Designer')
					.setStyle('PRIMARY'),
                new MessageButton()
					.setCustomId('tr')
					.setLabel('Geri Al')
					.setStyle('SUCCESS'),
                new MessageButton()
					.setCustomId('iptal')
					.setLabel('İptal')
					.setStyle('DANGER'),

			);

            let msg = await message.reply({ content: `
Aşşağıdaki butonlardan kullanıcıya istediğiniz rolü verebilirsiniz. 
( Verilecek Kullanıcı : ${member} - ${member.id} )
`, components: [row] });

            var filter = (button) => button.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({ filter, time: 30000 })
              
                  collector.on("collect", async (button) => {
          
                      if(button.customId === "vip") {
                      await member.roles.add(vip).catch(err => {})
                          await button.reply({ content: `${member} kullanıcısına VIP rolü verildi
                          `
               , ephemeral: false})
                          }
                     
                          if(button.customId === "msc") {
                      await member.roles.add(msc).catch(err => {})
                              await button.reply({ content: `${member} kullanıcısına Musician rolü verildi`
          , ephemeral: true})
                              }
          
                              if(button.customId === "dzn") {
                      await member.roles.add(dzn).catch(err => {})
                                  await button.reply({ content: `${member} kullanıcısına Designer rolü verildi`
          
                       , ephemeral: false})
                                  }

                                  if(button.customId === "tr") {
                      await member.roles.remove(dzn,msc,vip).catch(err => {})
                                    await button.reply({ content: `${member} kullanıcısına verilen tüm roller alındı`
            
                         , ephemeral: true})
                                    }

                                    if(button.customId === "iptal") {
                                        await button.reply({ content: ``
                
                             , ephemeral: true})
                                        }
          
                     })
          

        }
        exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: ["vip"]
          }
          exports.help = {
              name: "rolepanel"
          }
