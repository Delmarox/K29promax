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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_26_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NSxcbiAgICAgICAgNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwLFxuICAgICAgICA0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwLFxuICAgICAgICA3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg5LFxuICAgICAgICA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICA5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU3RKT25EdGdGK050V1FPbEdxelVWc1FJWVgxZUJ3b3NYRFhaTTdpK09SQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieEFLTGw0WEZRSS1QZThaRFgzdDZJUVwiLFxuICBcInBob25lSWRcIjogXCI3OWM5ZDYwNS1lYzkxLTQ0ZjUtYTkxMS04NTY3YmU4MGViOThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMTA4LFxuICAgICAgMzgsXG4gICAgICAxMSxcbiAgICAgIDEyNixcbiAgICAgIDc4LFxuICAgICAgOTYsXG4gICAgICAxNzgsXG4gICAgICAxNTMsXG4gICAgICAyMCxcbiAgICAgIDIxMyxcbiAgICAgIDE5NCxcbiAgICAgIDE2OSxcbiAgICAgIDkxLFxuICAgICAgMjUwLFxuICAgICAgMTUwLFxuICAgICAgMTE2LFxuICAgICAgMjUxLFxuICAgICAgNjQsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAyMTksXG4gICAgICAyMTgsXG4gICAgICA0NSxcbiAgICAgIDE5NyxcbiAgICAgIDMxLFxuICAgICAgMTI3LFxuICAgICAgMjI3LFxuICAgICAgMTI0LFxuICAgICAgMjUyLFxuICAgICAgMTcyLFxuICAgICAgNjksXG4gICAgICAzNixcbiAgICAgIDEyMixcbiAgICAgIDEyMyxcbiAgICAgIDIyMCxcbiAgICAgIDE5OCxcbiAgICAgIDE2OSxcbiAgICAgIDIxOCxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpYSjVDSDdHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc2NzIwNjg6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTI2OTE3ODY0NjY3MTo3OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeXp1ZXNIRVAydG9iUUdHQ1VnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhJeUZmVGJLMk1RaTNta21PQWRoSVQ3YjdFTngwTHVHMnllYkc2KzJYVGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUDUwTjBCdzVnK2dLNWQ0a2JLUGo3TmU1Rktyak5GcERDbjloTGtOUkk0UlFtWFZESENyU0pXVU9ydlJIZWtxam1xT2dMbVJveUtFb3FSN2hIVkVVRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSi9FM3IvYU81d2xFSitHU0hQZjBUcWNDOTdWV29qS2EvdkxwZlY0Q0lEYWZmL3RyNnA0ajhQdTJ4S2ZkTDFwMktxTHNYV0k4SXNlV1l4ME02dy9BQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3NjcyMDY4Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDIxMTIwMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1PclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU9yLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWnhLZXgrUmRRUUVwNC8zdFFPeVI5TytxQjhLQStiakswdW02dkdzUnhFaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA0MzgzODg0LFwiY3VycmVudEluZGV4XCI6MzIsXCJkZXZpY2VJbmRleGVzXCI6WzMyLDAsMjksMzFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "k29promax",


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
