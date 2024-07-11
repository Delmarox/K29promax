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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_51_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMTksXG4gICAgICAgIDQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAzNixcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK24rdFJ6bTN5MHRwUm5NTFZ4R2hwNU84STR5MWlOSEJzUHNXU012NnpjYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQjRJZXNBWnZRMFNOQzctdnRvNGJxd1wiLFxuICBcInBob25lSWRcIjogXCJiZWM5NDRhOC0wNmQ4LTQxYjctOWUxOC1jM2IzMWFiYWM3ZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxMjcsXG4gICAgICAxODEsXG4gICAgICA0NyxcbiAgICAgIDE1MixcbiAgICAgIDk1LFxuICAgICAgMTAyLFxuICAgICAgNTIsXG4gICAgICAyNSxcbiAgICAgIDEsXG4gICAgICAxOTMsXG4gICAgICA2NSxcbiAgICAgIDY2LFxuICAgICAgMjM3LFxuICAgICAgMjEzLFxuICAgICAgMTIsXG4gICAgICAxNjcsXG4gICAgICAxMSxcbiAgICAgIDExNyxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAxOTksXG4gICAgICAxMzMsXG4gICAgICAyMTUsXG4gICAgICAyMzgsXG4gICAgICAyMTQsXG4gICAgICAyMzksXG4gICAgICA1OCxcbiAgICAgIDYxLFxuICAgICAgMTU4LFxuICAgICAgMTM3LFxuICAgICAgMTEwLFxuICAgICAgMjgsXG4gICAgICA5MSxcbiAgICAgIDgzLFxuICAgICAgMTQ5LFxuICAgICAgMjM5LFxuICAgICAgMTE4LFxuICAgICAgOTAsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlZFTTQzQTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NzM4Mjg1MjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzgzNjI5ODM0ODU1MDU6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTJuMFpBREVQTzV2clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIydUdSRWs2dUxlMUpGKzhtQU1oWlRQRE9TSmFNMWhOcjZxZDgvaGQrOXdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhGRG1ZZzhzM3ZLVy9laHM2eERncFBqd1dLUkxQVzdNRERJQncvS3VzamdQSUJCUVlxN0JuZUZiN3BVaFRod3l5ckN1K05PK2tQQ1oxZUNDUW82ZkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdhMGM5bE14UWlXQ0dZbDE1SVpvWVJ6bkhqdXdPVEVYVk1aU2RQUnA5L1kvRTA2bHl0T0x0bWJzMHhYR3NvcTc3eE5GWmxCeE1nV1dMbnFWVE82SUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NzM4Mjg1MjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY4Nzg2MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURQM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFAzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUhtNEZTTEVINWpMTEtobFMwdm5KbkZRb2k2eWZaYUZ1dFBhNElVTGNMRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NDAxOTI5MDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDY4Nzg2NjA2NFwifSIKfQ=="  // PUT your SESSION_ID 


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
