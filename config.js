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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_33_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICA2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDMxLFxuICAgICAgICA3LFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoYnNUVGJyL1VwNEdKaStteTVpK2JLL3JvLzlheTFRL1NQNS9YVEZKZjJjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtekQyREw5UVQ3U0VlZHgtcmFvRVhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU5ZDU1MTNiLWJkYmYtNDA2MC1hMTViLWJkNjdiYzNlYTdjN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICA4MyxcbiAgICAgIDIxMixcbiAgICAgIDg1LFxuICAgICAgMTY0LFxuICAgICAgMTMzLFxuICAgICAgMjI0LFxuICAgICAgMjQ5LFxuICAgICAgMjUyLFxuICAgICAgMjAsXG4gICAgICAxOTksXG4gICAgICAyMzYsXG4gICAgICAzNCxcbiAgICAgIDI0NyxcbiAgICAgIDIwNyxcbiAgICAgIDEzNCxcbiAgICAgIDE1NixcbiAgICAgIDE1OSxcbiAgICAgIDE2NixcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAyMzEsXG4gICAgICA5OCxcbiAgICAgIDI2LFxuICAgICAgMjAxLFxuICAgICAgMTU5LFxuICAgICAgNTgsXG4gICAgICAxOSxcbiAgICAgIDI1LFxuICAgICAgMjE3LFxuICAgICAgMjA1LFxuICAgICAgMzgsXG4gICAgICA4MyxcbiAgICAgIDEzOCxcbiAgICAgIDExMSxcbiAgICAgIDc1LFxuICAgICAgMzcsXG4gICAgICAxNDAsXG4gICAgICA0MSxcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxNVJCNjc2UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg2NDY5Njg4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUzMzkxMTI0MzYxMjgxOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzdndGNZRUVOL1cxYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVZFVsUTlpZ1F6Q1N4ZXJRUXpMS0UvOTd2eC9LQlVpN0RQZDdqaWszd2w0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBpRW5wTks5K0ZJMmRsMkpiQ2pIRjFQcW53TEo5Z2FHdkIzYU01S1gwUmF0NzhtbGNFbUdrRUVOby9XV2dqYUE1OUlybEovZGJRcTZFbm9RZnBSMkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImh3TjJYb05YVzFVQ09hbml2c1FFalpyUXpmZDFTZ3BvbVhVQThRbFo4QW1OZHBVU0pndk9tSVJoTjdHYmU0czVLUlAzSy90UXVsd2J3a2l6ejNiWkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NjQ2OTY4ODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNjgzODdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
