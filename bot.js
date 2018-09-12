const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`Type #Help`,"http://twitch.tv/xmas")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.login(process.env.BOT_TOKEN);



client.on ("guildMemberAdd", member => {
  
  var role = member.guild.roles.find ("name", "3RB");
  member.addRole (role);
 
})

client.on ("guildMemberRemove", member => {
  
})



client.on("message", message => { //clear
  var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith(prefix + "clear")) {
      if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "**_تــم مسح الشات **_",
color: 0x5016f3, 
footer: {

}
}}).then(msg => {msg.delete(3000)});
                }


});



client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bcall') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
return;
}
 message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
     var bc = new Discord.RichEmbed()
     m.sendMessage(args)
 });
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
        message.channel.send(`\`${message.guild.memberCount}\` : عدد الاعضاء المستلمين`); 

}
} else {
 return;
}
});



client.on('message',async message => {
 if(message.content.startsWith(prefix + "setvoice")) {
 if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
 if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
 message.channel.send('✅| **تم عمل الروم بنجاح**');
 message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
   console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
   c.overwritePermissions(message.guild.id, {
     CONNECT: false,
     SPEAK: false
   });
   setInterval(() => {
     c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
   },1000);
 });
 }
});



client.on('message', message => {
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 if (command == "say") {
  message.channel.sendMessage(args.join("  "))
  message.delete()
 }
});



client.on('message', msg => {
 if(msg.content === 'السلام عليكم')
             setTimeout(function() {  
msg.reply('**و**عليكم السلام')
             }, 10000)
});
