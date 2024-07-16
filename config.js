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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_39_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDksXG4gICAgICAgIDExLFxuICAgICAgICAyMzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDc0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgMTg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY5LFxuICAgICAgICA0LFxuICAgICAgICA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICA4NixcbiAgICAgICAgNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDc4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzeVlvV2hEUEYvQkpiZ2ZqUk1EdExxemdDckN2Q3R0cDVYWUJ5OFduWERrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxODk4NTY4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEJDNEJEMjg1Mjg5OEYyQzlCRDZFQTJFREQzRTY5QTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODg4NzMzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE4OTg1Njg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RDlBNEEzQTQyMjEzODk3NjBGNjkxOUZERDQ5NzRCOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4ODg3NDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWkc2aXZiYVZTaVNLUUI2NnY0STZOZ1wiLFxuICBcInBob25lSWRcIjogXCI3M2Y3ODAxOS1iMTBjLTQ2NmMtOWIyZC01ZjBjM2QyNGI0ZDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMTMsXG4gICAgICA0MixcbiAgICAgIDIzOCxcbiAgICAgIDE0MSxcbiAgICAgIDc5LFxuICAgICAgMTgsXG4gICAgICA1LFxuICAgICAgMjQwLFxuICAgICAgMTQ3LFxuICAgICAgMjIxLFxuICAgICAgMjMwLFxuICAgICAgMTIsXG4gICAgICA5MyxcbiAgICAgIDQsXG4gICAgICAxNTMsXG4gICAgICA2NSxcbiAgICAgIDI5LFxuICAgICAgODUsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAxMzUsXG4gICAgICA4NSxcbiAgICAgIDkyLFxuICAgICAgMTA3LFxuICAgICAgMjAyLFxuICAgICAgNDQsXG4gICAgICAxOTMsXG4gICAgICAyMjEsXG4gICAgICAyMDYsXG4gICAgICAxNzMsXG4gICAgICAyMjYsXG4gICAgICA3MixcbiAgICAgIDUyLFxuICAgICAgMzIsXG4gICAgICAyMyxcbiAgICAgIDIyNixcbiAgICAgIDQ4LFxuICAgICAgODMsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNRjIxNTczV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE4OTg1Njg0OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUGljdHVyZXNxdWUgUGhvdG9ncmFwaHlcIixcbiAgICBcImxpZFwiOiBcIjE2MjAwMjI5MDg3MjQ4MzozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOaUlyWUFERUpQYnlyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlcwSmtwMlZ6RnFpb2hFakEvb21RSFJXd2JhUldIaVJhelhwVzJoeDI4VTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSHhtVlgvQlZ0WjNYa3lyeVI0cnVDejNwN2VDMThicDlQajZ1Ym0vYXF1YWhuQWd1T25XMFEzaTYrMENnUFBnMTA1WTdoRnZiOTlMNFpkZ25HNk1nQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVy9ING9GdjdzanE3Q3pLUzR0UTczZHJkWllqMHlHYnNJcVNNWUJkK3c4SUJMdko4Qk56UExxenhmaVBSQUlOKy9lS21VNnFpYmV3NXJidkNZZFRJREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE4OTg1Njg0OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4ODg3MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQOEhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA4SC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
