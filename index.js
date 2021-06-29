const Discord = require("discord.js")
const client = new Discord.Client()
const config = require('./config.json')


client.on("ready", () => {
  console.log("The client is ready!")



  client.users.fetch(config.user_id).then((user => {
    user.send(config.message)
}))
})
client.login(config.TOKEN)
