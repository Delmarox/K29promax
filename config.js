const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                        // put your app url here,
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_45_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDkwLFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDk1LFxuICAgICAgICA0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNaaXJnZGZFdDRKdEQrR1U3T2ZITW5DVStNUnBaNUl1aldQVVNHTUY1YzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5FLVVicXlLUTFhV0tlZWVadHJTUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTdkZDIyNTgtZTkxMS00MTQxLTkxZDgtZDI3YzQ3ZmM0OGNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDEyNSxcbiAgICAgIDEyNSxcbiAgICAgIDIxMyxcbiAgICAgIDE4NyxcbiAgICAgIDE1MyxcbiAgICAgIDM0LFxuICAgICAgOSxcbiAgICAgIDExMyxcbiAgICAgIDE4NyxcbiAgICAgIDg0LFxuICAgICAgMjgsXG4gICAgICAxMTIsXG4gICAgICAxNTMsXG4gICAgICAxNjksXG4gICAgICA3OCxcbiAgICAgIDI0NyxcbiAgICAgIDE4MCxcbiAgICAgIDE4MyxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDgwLFxuICAgICAgNzcsXG4gICAgICAyNDMsXG4gICAgICAxNzksXG4gICAgICAyMTMsXG4gICAgICAxMyxcbiAgICAgIDE0MSxcbiAgICAgIDI0MSxcbiAgICAgIDE2LFxuICAgICAgMjM2LFxuICAgICAgMTE4LFxuICAgICAgNjYsXG4gICAgICAyMTUsXG4gICAgICAxMTIsXG4gICAgICAxNjksXG4gICAgICA5LFxuICAgICAgNTUsXG4gICAgICAyMTMsXG4gICAgICA2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDS0ZaR1BKU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3NjcyMDY4Ojk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XuPCdn67wnZ+18J2XvfCdl7/wnZe88J2XuvCdl67wnZiFXCIsXG4gICAgXCJsaWRcIjogXCIxODEyNjkxNzg2NDY2NzE6OTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVROcy9ZQ0VNZVF6N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3YWIwaUFqRGZlZ1dCZ2JLNVpkS2NHVWpVY28vaEcyWm9rYkJtampHeURZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImd2eFVDZ016NHV1L1h0eDJZNzdDaUZiUzBGNEh2VEJvNzBlT0F0d3MxV2xFYXFSenpaVDMwRDBPSHBqZnNRNzhJZlQ0MWZxZDNHQTRodEZrZG9SVkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlnRU9BZGo0RE5taWZ3VUhaYU9XcE8wVWd0Y2lDQk95SmE0RklSWmtQcnpNSWRNYTRuTDJncy9zMjJ5bnRYTk4zR0xmUTVpSDJJTkhSYkRFNVdWSGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzY3MjA2ODo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NjEwOTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
