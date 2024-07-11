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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_03_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDczLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAwLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAxODIsXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MSxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlg4MFVBSk5USEowSUlaeU9heDBjUStndVlzRmE4Mk5xa0czY2xGYk53TlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE3NjcyMDY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RTVBQ0MwOUM3MEJBMjUxNDBBMUQyNjgzRDIxNzI2MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3MTAyMjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWG41YzVYNS1SQks2SEhOcXRpTzJfUVwiLFxuICBcInBob25lSWRcIjogXCJjNzM1NDYwYS1lZjY4LTQ3Y2MtOGU0Ny1kYjM0ZDA3MjQzNWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICAxOTEsXG4gICAgICAyMjIsXG4gICAgICA0MSxcbiAgICAgIDE5LFxuICAgICAgODgsXG4gICAgICAxNDAsXG4gICAgICAxNzksXG4gICAgICAyNTMsXG4gICAgICAxODYsXG4gICAgICA3NixcbiAgICAgIDIyOSxcbiAgICAgIDIxNyxcbiAgICAgIDU4LFxuICAgICAgMjIyLFxuICAgICAgMTQ0LFxuICAgICAgNTIsXG4gICAgICA0OCxcbiAgICAgIDIxMixcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgODgsXG4gICAgICA0OSxcbiAgICAgIDI0NixcbiAgICAgIDI0MixcbiAgICAgIDUzLFxuICAgICAgMTA3LFxuICAgICAgMTAsXG4gICAgICAxNSxcbiAgICAgIDI0NCxcbiAgICAgIDIzNCxcbiAgICAgIDEzMixcbiAgICAgIDE0MixcbiAgICAgIDE3LFxuICAgICAgMjEsXG4gICAgICAyMzUsXG4gICAgICAxMjgsXG4gICAgICAyMjIsXG4gICAgICA2NCxcbiAgICAgIDI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNESjRNTUI1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc2NzIwNjg6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZe48J2frvCdn7XwnZe98J2Xv/Cdl7zwnZe68J2XrvCdmIVcIixcbiAgICBcImxpZFwiOiBcIjE4MTI2OTE3ODY0NjY3MTo5MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQN0xxUlVRd2VpL3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlN1cTFJOHpHVU1FU3E0Yk1yTlAxcXVJVkhVZlNSSStUaFRrY25NUXE0VjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYzFaNm43SUxVQ2Jja2w0b1BqbUMzTzM0ajU1MndUR2F6OGRkZzU3SFZzYzlpcjdraUd5MElPYzB0a3VRTmtUVDVRZGtWSE9sMUxDeWZqajJtK2FsQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV2d5VE9yeGVqQ3Z5SENHbEFOQVJJK3JBY0haTnUzVGNXeDdva3B4SThCTHR2VTlYZU0rYm5EWUZKUnhHS0wyTUVjRFhudkplZXFFLzNKNnBqaS9EZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3NjcyMDY4OjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzEwMjE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjJGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGMkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlWEZlWmF0ekNkTml5RGNxKzY3dmEzRVB5WU0yM0JYUllHL3Zsais5M0MwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0NzIxNjYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3MTAyMTc1MTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".,",
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
