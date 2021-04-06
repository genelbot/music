const Discord = require('discord.js')
const {PREFIX} = require('../config.json')
module.exports = {
  name: "müzik",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()

.addField('» +çal', 'yazdığınız şarkıyı listeye ekler veya çalar')
.addField('» +atla', 'çalmakta olan şarkıyı atlar ve bir sonrakine geçer')
.addField('» +döngü', 'şu an çalmakta olan şarkıyı sürekli tekrarlar')
.addField('» +durdur', 'çalan şarkıyı durdurur')
.addField('» +devam', 'durdurduğunuz şarkıyı devam ettirir')
.addField('» +sıra', 'çalacak şarkıların listesini atar')
.addField('» +np', 'şu an çalan şarkının adını söyler')
.setFooter('LORDOZİBOT', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
)
}
}


