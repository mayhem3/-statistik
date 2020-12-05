// 7/24 SESTE TUTMA //

client.on("ready", async function() {
const voiceChannel = "KANAL ID"
client.channels.cache.get(voiceChannel).join()
.catch(err => {//Mayhem <3
throw err;
})
})

