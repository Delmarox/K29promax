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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_28_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDU4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIwLFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMixcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDQsXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOTBHTTB4Q0pnYU90WWlPcGVJK1p3L1BvbG5ackpneHlqR1NqaXhobWRSND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibTVCeW1ISTNSUU93WTJSR0pPeWRUUVwiLFxuICBcInBob25lSWRcIjogXCIyY2M0ZTE1Yy0wZTM5LTQzMTUtYmZkOC1kODA5ODFlNGJjZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgMjUzLFxuICAgICAgMTk3LFxuICAgICAgMjI4LFxuICAgICAgMTg4LFxuICAgICAgNzUsXG4gICAgICAxNTIsXG4gICAgICAxMzIsXG4gICAgICAxNzgsXG4gICAgICAxMTcsXG4gICAgICAyMDUsXG4gICAgICAzOSxcbiAgICAgIDE5NSxcbiAgICAgIDE4NixcbiAgICAgIDIxNCxcbiAgICAgIDIxNyxcbiAgICAgIDIzMSxcbiAgICAgIDgsXG4gICAgICAxLFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgMTI3LFxuICAgICAgMjA4LFxuICAgICAgMTA2LFxuICAgICAgMTMzLFxuICAgICAgMTI3LFxuICAgICAgODEsXG4gICAgICAxNjEsXG4gICAgICAyMDIsXG4gICAgICA5MixcbiAgICAgIDEwMSxcbiAgICAgIDI0MixcbiAgICAgIDY2LFxuICAgICAgMjE2LFxuICAgICAgNjAsXG4gICAgICAxNTUsXG4gICAgICA3NSxcbiAgICAgIDExMixcbiAgICAgIDE5MCxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4xOVRMV0FLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NTI2NzM2NTI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjk5MDUxMzkzOTI2NzI6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQNlA0WndFRUl2RjFyUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhMUXJLK3NxZUtSeWlDQ2Z4RmRKbWpVV1BWdUpSRWh2Q01Jc2NzVWlIQ3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWVl2Mm1tNjIrc1c0NElFNGhNNE1kUlZyeGpVVnR4WEd1UjBHR2dVWXpidFY5Zi94WHVlb254bzhoamRGaFF2Y2lzYmlML0YycENIN25KVFNzbjNlRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRlk3eFVJQ1MrRC9sejcybm9sVTcvUWRjZEliRlpQUWt0a1hYakNIajdzOXpra1BNV1ZLUXFkd1hyMVJsT3l2WkliN2MvSWNxeS9Eb0NxcTZFb0x4RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTUyNjczNjUyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwODI1MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJUmtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlSay5qc29uIjogIntcImtleURhdGFcIjpcIjRsa0FOSVVjR0tzMDFWcytFbHNyMlpwVjRjMUVEaWFEd0hLMThwcHEzWW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEzNDA1MzM3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
