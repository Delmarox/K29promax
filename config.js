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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_21_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCeVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICA5NixcbiAgICAgICAgMTQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgxLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM0LFxuICAgICAgICA1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM3LFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDg3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiamxpUWFGa1lXTWo5Z25IalE5WXlNWkpQZ3lEdVlpc3drelB0bVU3eFRybz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDV6YTF0YjJTNHlrRGhWd1Y1WVRsd1wiLFxuICBcInBob25lSWRcIjogXCJkMTc4M2I0OC0wNTY2LTQ0OWMtYmRlYi01ZTI4MjhkMDlkMDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMTU4LFxuICAgICAgMTExLFxuICAgICAgMTkwLFxuICAgICAgNzYsXG4gICAgICAyMzMsXG4gICAgICAxNzIsXG4gICAgICA1LFxuICAgICAgMTk5LFxuICAgICAgMTY2LFxuICAgICAgMjI1LFxuICAgICAgOTEsXG4gICAgICA3NyxcbiAgICAgIDE2MixcbiAgICAgIDE4MSxcbiAgICAgIDg2LFxuICAgICAgMTA1LFxuICAgICAgNzUsXG4gICAgICAzOCxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDE5MCxcbiAgICAgIDE0NyxcbiAgICAgIDc0LFxuICAgICAgNjYsXG4gICAgICA0MCxcbiAgICAgIDE4MixcbiAgICAgIDUzLFxuICAgICAgNDgsXG4gICAgICAxNzIsXG4gICAgICAxMjQsXG4gICAgICAxOTgsXG4gICAgICAyMzMsXG4gICAgICAyNTIsXG4gICAgICAxNyxcbiAgICAgIDQwLFxuICAgICAgMyxcbiAgICAgIDIzNixcbiAgICAgIDIxMixcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc5MzhBR1FYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc2NzIwNjg6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZe48J2frvCdn7XwnZe98J2Xv/Cdl7zwnZe68J2XrvCdmIVcIixcbiAgICBcImxpZFwiOiBcIjE4MTI2OTE3ODY0NjY3MTo5N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNVE5zL1lDRUxEdDFiUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndhYjBpQWpEZmVnV0JnYks1WmRLY0dValVjby9oRzJab2tiQm1qakd5RFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVmtqM3JLMElWeGhlLzNkWHl4b1RudllxUkl1cVU1NlVLU0tqZHhvSGJpZVJTZmRZYWZpZzRDTE0rQWl4UFNEdG5jdGoyVk1zcTk5NGJjTFVIRG1yQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia1RUdWNBSUcwekNQSlc1aXZocWpVM1R2ZVlzVGFDcXpsVHFFSnNDQ01XS3EvM2lmNFdMMVFEQW5NM01SWHpJMi9QQVliRDUrUk1tVnRoNkFwVFptQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3NjcyMDY4Ojk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA3MTI4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVCaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUJoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSmo2SXlha3hjcDFQUFgyR0tzKytxZ3lyZlpBU1J0YVZUOXNBOUZta2JLOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3ODUxODAzNTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDk2MTEwNjQzMlwifSIKfQ=="  // PUT your SESSION_ID 


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
