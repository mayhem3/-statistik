const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("© Warden Giveaway 2020", client.user.avatarURL())
    .addField("<:Ownership:780126411390189578> **|** **Botun Yapımcısı**", "<@743387541100822598>") .addField("<a:typing:778997305297731585> **|** **Ping**",client.ws.ping + " ms", false)
    .addField("<a:cloudup:778560542033182740> **|** **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<a:crank:778975399464009739> **|** **Çalışma süresi**", seksizaman, true).addField("<:utandm:777095995690450944> **|** **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:hypesquad_events:772428250915667968> **|** **Sunucular**",client.guilds.cache.size.toLocaleString(), true)
    .addField("💻 **|** **Kanallar**", client.channels.cache.size.toLocaleString(), true)
   .addField("<:js:778975699024871495> **|** **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("<a:emoji_37:764005846128132096> **|** **Node.JS sürüm**", `${process.version}`, true)
    .addField("<:pc:779394545594138654> **|** **Bit**", `\`${os.arch()}\``, true).addField("<:apc:778986090261774356> **|** **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    

.addField("<:cpu:778975382056861718> | **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)



  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istatistik", "bot", "i"],
  permLevel: 0
};

exports.help = {
  name: "bilgi",
  description: "Botun istatistiklerini gösterir",
  usage: "bilgi"
};
