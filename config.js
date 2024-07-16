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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_02_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA3MixcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDg2LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyLFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMzLFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDRWpaRXVTZ1Z6UG9XNU1POWFidFVrWVR4OTFQYkNidS8xRjRDOGRSZVpVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwRExDMVJjVVIxeVBGbG4wS3ZOODBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlhNzYyYTNiLTNlZjItNDFhZi04MzgxLTk0MjAzZThjMjFiZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTQsXG4gICAgICAyMzcsXG4gICAgICAxOCxcbiAgICAgIDE3MixcbiAgICAgIDEzLFxuICAgICAgMTA5LFxuICAgICAgMTIyLFxuICAgICAgMjYsXG4gICAgICAxMjYsXG4gICAgICAzOSxcbiAgICAgIDE1MyxcbiAgICAgIDQ0LFxuICAgICAgMTYsXG4gICAgICA3MSxcbiAgICAgIDgwLFxuICAgICAgNSxcbiAgICAgIDEyMCxcbiAgICAgIDg0LFxuICAgICAgNzYsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAxMTgsXG4gICAgICAxMTQsXG4gICAgICA4NCxcbiAgICAgIDYyLFxuICAgICAgMjQsXG4gICAgICAxNTAsXG4gICAgICAyNTUsXG4gICAgICAxMTksXG4gICAgICAxOTQsXG4gICAgICAyNTQsXG4gICAgICA3NixcbiAgICAgIDI0LFxuICAgICAgMzIsXG4gICAgICAxNTQsXG4gICAgICAxNTcsXG4gICAgICAyMTUsXG4gICAgICAxODcsXG4gICAgICAxMTYsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTRZMkVYWVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4MzUxNTcyMjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS2ltYmVybHlcIixcbiAgICBcImxpZFwiOiBcIjE0OTYyMzg1OTU4OTMyNzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1SitaZ0NFTWFjMXJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWGZXRC9hLzVqa0M4TUdFMlIzcjBzOUI1amU4Z1V1T3VxM0VCT29vSHBUOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIybTJXc0FTS0xVTzNFcGwzS0NGK3pNTkxEOW9MZ0ZxOHFKTUNqb1laNklzYWluS1lSMCtjN1B6TGtoWnZlRTVPdHZHZ1ZKbVcwM3d6VkZHY0F0MzZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFOE1neTRtaVVEU1h0bzdsdktEZWlWM2sxYmtaSEVweGgyMTFmZ0dJTTFxeFVJZ2Rka2tYaW9XQ2kxTWRMOFZFTXAxL3JidkFmeS9SMzRTbCtDb1dpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODM1MTU3MjI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNzczMjdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
