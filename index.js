const Discord = require('discord.js');
const client = new Discord.Client();
const Music = require('discord.js-lavalink-musicbot');
const music = new Music(client, {
    lavalink: {
        "restnode": {
            "host": "188.72.94.139",
            "port": 2333,
            "password":"346t4u6r5tghrtws4GHYI7w348t4jiognFVEDSWEJHNER"
        },
        "nodes": [
            { "host": "188.72.94.139", "port": 80, "region": "eu", "password": "346t4u6r5tghrtws4GHYI7w348t4jiognFVEDSWEJHNER" }
        ],
    },
    admins: ["372087675596832770", "372087675596832770"],
    token: "NTM4MDM1MTYzNjYyMjU0MTQw.Dyt70Q.VtVpRSbAT7XxeUxJa9vds9uL9og"
});

client.login("NTM4MDM1MTYzNjYyMjU0MTQw.Dyt70Q.VtVpRSbAT7XxeUxJa9vds9uL9og")

client.music = require("discord.js-musicbot-addon");

const prefix = "!";

client.music.start(client, {
  youtubeKey: "AIzaSyBBWwLg9g25RdmEz22RqBOZkFiyKEXK2pY",
  insertMusic: true,

  play: {
    usage: `${prefix}play [link]`,
    exclude: false
  },

  anyoneCanSkip: true,

  ownerOverMember: true,
  ownerID: "372087675596832770",

  cooldown: {
    enabled: true
  }
});

client.on("message", message => {
  if(message.author.bot) return;
  
  var command = message.content.slice(prefix.length).split(" ");
  var args = command.slice(1);

  if(message.content.startsWith(prefix) && command === "play") {
    client.music.playFunction(message, suffix);
  }
});

client.login("NTM4MDM1MTYzNjYyMjU0MTQw.Dyt70Q.VtVpRSbAT7XxeUxJa9vds9uL9og");