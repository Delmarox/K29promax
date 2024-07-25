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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_52_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNixcbiAgICAgICAgOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxLFxuICAgICAgICAxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNixcbiAgICAgICAgMjEyLFxuICAgICAgICAzLFxuICAgICAgICA4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidUdaUUVwcVVxRG5uallha01wQVZRTjlzS00raFFVWkJsZ3g2YktiN1FHRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYmdJMlZvc1lTZ3F1MzV5SElxZTcyUVwiLFxuICBcInBob25lSWRcIjogXCIxNzA0NTFmOS02MDU2LTRjZjAtOGJiZi0xNDc1NWE5NDAxOWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAxMzAsXG4gICAgICAyMzgsXG4gICAgICAxOTQsXG4gICAgICAyMzQsXG4gICAgICAyMDMsXG4gICAgICAyMTcsXG4gICAgICA1OSxcbiAgICAgIDgwLFxuICAgICAgMTYyLFxuICAgICAgMjEyLFxuICAgICAgMjM5LFxuICAgICAgMjQsXG4gICAgICA2LFxuICAgICAgMTg3LFxuICAgICAgODgsXG4gICAgICA2NCxcbiAgICAgIDIwOCxcbiAgICAgIDIxOSxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDI5LFxuICAgICAgMjEsXG4gICAgICAyMTEsXG4gICAgICA5NyxcbiAgICAgIDM3LFxuICAgICAgMjE3LFxuICAgICAgMTQ0LFxuICAgICAgNjUsXG4gICAgICAxNjAsXG4gICAgICA1MixcbiAgICAgIDEwNCxcbiAgICAgIDI1MixcbiAgICAgIDE5OSxcbiAgICAgIDU3LFxuICAgICAgMzYsXG4gICAgICAxNyxcbiAgICAgIDI0NyxcbiAgICAgIDIxOCxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMMURINktKTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3NjcyMDY4OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XuPCdn67wnZ+18J2XvfCdl7/wnZe88J2XuvCdl67wnZiFXCIsXG4gICAgXCJsaWRcIjogXCIxODEyNjkxNzg2NDY2NzE6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVhOcy9ZQ0VNekRoclVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3YWIwaUFqRGZlZ1dCZ2JLNVpkS2NHVWpVY28vaEcyWm9rYkJtampHeURZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBFQzNSbDBZVDU1ZzNjL0pHNVFrWjF5YWI3MkpISFlYZ25KQTc1cHZJTDdHMnRGdnUva2pib3ppNTR1NU9hWSsvTzJlNVNGZTFmRUJ0cDJsSER6dEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllselZzaDZNc1hpemlrTExFVjRXSFFyVW1GTVhML1JDOCt1WkVUL0tKWVRSdlB3RngyNkNFNldrUzFhZG9ZWUgzYWEySVdMZHFLeWxQa2U5RXYvWWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzY3MjA2ODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4Njg3NTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFQm9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVCby5qc29uIjogIntcImtleURhdGFcIjpcIm1TUm5uS1UwejdYL2FUTDZrNW41bVhIUHZ0M1RxelhpMXdnMlpsQVNDa3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzg1MTgwMzU2LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
