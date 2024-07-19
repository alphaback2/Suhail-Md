const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94784608102";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_15_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NixcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDcyLFxuICAgICAgICA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdHaTl4MGY5cVh1TjkzdDZuaFJFMGZjN0g1UmxLQUNZV3A0RXpCWVU1YkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklnOFRFMktmU0Jtczd4SENfeWM3NGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjEwZWQ5M2UtNjkzOS00YzBjLThkNDMtOWRhMzMxNWE2ZDcwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDcxLFxuICAgICAgMTYyLFxuICAgICAgMjA1LFxuICAgICAgMTcwLFxuICAgICAgNDMsXG4gICAgICAxMzksXG4gICAgICAxMzYsXG4gICAgICA4OCxcbiAgICAgIDE2MCxcbiAgICAgIDEwMSxcbiAgICAgIDExNyxcbiAgICAgIDIwNyxcbiAgICAgIDI3LFxuICAgICAgMTE4LFxuICAgICAgMzQsXG4gICAgICA0LFxuICAgICAgNjcsXG4gICAgICAyMzksXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAxMTMsXG4gICAgICA4NyxcbiAgICAgIDk4LFxuICAgICAgMTUyLFxuICAgICAgMTE0LFxuICAgICAgMTIsXG4gICAgICAxNjYsXG4gICAgICAxMzgsXG4gICAgICAxMTgsXG4gICAgICAxNzgsXG4gICAgICAxMzYsXG4gICAgICAxMDgsXG4gICAgICAzNixcbiAgICAgIDI0MCxcbiAgICAgIDE3MyxcbiAgICAgIDE2MixcbiAgICAgIDI0NSxcbiAgICAgIDcwLFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0JYNllaTEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg0NjA4MTAyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDQwMTUwNTE3NDc0MTg6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUgyOG9jQkVOckYyN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsK2I4MFduMVlvNkNpblNWVlhKYURxVlJHcFA5bk9qZGxjaDRXSzFzN2xNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNPUFFDbFdSUUlKbjlBMnM2Zjc1bVhiK3ZqeldtREZJT2t2bzkwWDgwNVUxcUhhc0NjR0cxU0VmdStnVmkxazU4eU1sS0lCYUZMUkdzamRoNC9FZERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhYTGo4YmZ1Q1o5K2lJNnloaUtJbktFb1ArYnRtbFVVbmtZMGNpM25NNFJWa2xYYUFuZldOQld3ZzFmT2tJZGRpejFsN2NhUW5uSlQ1U3hHQ0dZQ2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg0NjA4MTAyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE2NDUwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUEyWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTJYLmpzb24iOiAie1wia2V5RGF0YVwiOlwidTZ4clREUURZWktKMVE4cit6cFdlTTJ5N21iVUZMZnRBT0dxL2V5R21NTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODQ5OTgzOTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "👀🔮𝗰𝘆𝗯𝗲𝗿𝘀𝗮𝗰𝗵𝗶𝘆𝗮🔮👀",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
