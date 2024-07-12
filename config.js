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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_34_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4LFxuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI5LFxuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDczLFxuICAgICAgICAxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTU5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3NyxcbiAgICAgICAgNCxcbiAgICAgICAgNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY0LFxuICAgICAgICA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUxLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQzLFxuICAgICAgICA4MSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyLFxuICAgICAgICA0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhPdmRBNFRlY3h2Y09lcitMU1N5cE5tS2MySys2akhOYW43a3dJVTZTZEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldBcFBPR28wUVpXX3lJWTFYQndaYlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2Y1NmRlYjgtYmI3Zi00NjU4LTgwY2MtZGQ1ODgxNTI4MmU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgNDAsXG4gICAgICA2OCxcbiAgICAgIDE5MSxcbiAgICAgIDE5MyxcbiAgICAgIDM2LFxuICAgICAgOTEsXG4gICAgICA5MSxcbiAgICAgIDEzMSxcbiAgICAgIDY4LFxuICAgICAgNDIsXG4gICAgICA1OSxcbiAgICAgIDIzMixcbiAgICAgIDY1LFxuICAgICAgMTMxLFxuICAgICAgNSxcbiAgICAgIDk0LFxuICAgICAgMjEyLFxuICAgICAgMjAsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAzNyxcbiAgICAgIDM4LFxuICAgICAgMTY4LFxuICAgICAgMzIsXG4gICAgICA1NixcbiAgICAgIDMwLFxuICAgICAgMjQ1LFxuICAgICAgMjIzLFxuICAgICAgMTU2LFxuICAgICAgMTY2LFxuICAgICAgMjUyLFxuICAgICAgOTMsXG4gICAgICA3OCxcbiAgICAgIDEyNSxcbiAgICAgIDEyMSxcbiAgICAgIDkwLFxuICAgICAgNzcsXG4gICAgICAxMzgsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQksyOUxOU0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4MzUxNTcyMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS2ltYmVybHlcIixcbiAgICBcImxpZFwiOiBcIjE0OTYyMzg1OTU4OTMyNzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1SitaZ0NFSkhud0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWGZXRC9hLzVqa0M4TUdFMlIzcjBzOUI1amU4Z1V1T3VxM0VCT29vSHBUOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmdHdoWndHeUlVbDh1WWt4WldMNG5vc0Z4QW9ONWtaNmMwRllHQkNvK1dNUDB0TkJ1WUlwM2lrRHJQZDFSSWlTb3lYNkhHWnZuK3paTGRid0RYRUNDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmdGtRUXpYaVhCQjJzUTJrKzlKRUJ6WFNkZlVTdXdOcjlNWFZjWkFkdTdDa2NRNDd1RXExYXdFMEp3VWF1RnhlWlVMTWlrZzJuVlpKcHV5Qml0K2ZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODM1MTU3MjI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MjY0MzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
