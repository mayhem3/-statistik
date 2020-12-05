const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
// Umutcan'dan sevgilerle...
exports.run = (client, message, args) => {

let server = args[0]
    if (!server) return message.channel.send(`**İstediğiniz sunucunun ID'sini yazmalısınız!**<a:red:767864405702213642>`).then(msg => msg.delete(10000))
         message.delete()
  const umut = client.emojis.cache.get('')
  const can = client.emojis.cache.get('')

   message.channel.send(`  **Bot Sunucudan Ayrıldı! <a:onay:767864298218586172>**`);
   client.guilds.cache.get(server).leave()
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot belirtilen sunucudan ayrılır.',
  usage: 'ayrıl'
};
