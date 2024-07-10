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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_59_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxLFxuICAgICAgICA5MixcbiAgICAgICAgMjE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidndEOGVqejdYQ3dUcmErUGhjT1lCVldwNElqajN6NExGcGthaHEvNk9Fbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWWU0OTllUF9RNEdTNnRSbm8zZFZKd1wiLFxuICBcInBob25lSWRcIjogXCI4YjIzMGYwOC0yMzhiLTQxMGUtODI4OS01N2IwN2I2YWM0NjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICA1MyxcbiAgICAgIDEzNCxcbiAgICAgIDQ2LFxuICAgICAgMTM3LFxuICAgICAgMTMyLFxuICAgICAgMjQ0LFxuICAgICAgMTU1LFxuICAgICAgMjEsXG4gICAgICA0NCxcbiAgICAgIDIyMSxcbiAgICAgIDE2MCxcbiAgICAgIDE2MixcbiAgICAgIDEwMCxcbiAgICAgIDY4LFxuICAgICAgOTEsXG4gICAgICA0NyxcbiAgICAgIDQ3LFxuICAgICAgMTMxLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDE4MyxcbiAgICAgIDMxLFxuICAgICAgMjQ5LFxuICAgICAgNjEsXG4gICAgICAyMjEsXG4gICAgICAxMixcbiAgICAgIDEyNixcbiAgICAgIDIyMSxcbiAgICAgIDc0LFxuICAgICAgMjIzLFxuICAgICAgMjIyLFxuICAgICAgNDMsXG4gICAgICAxNDksXG4gICAgICAxMzQsXG4gICAgICAxMCxcbiAgICAgIDY2LFxuICAgICAgMTkyLFxuICAgICAgMjA5LFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0c3S0IxWFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzY3MjA2ODo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIksyOXByb21heFwiLFxuICAgIFwibGlkXCI6IFwiMTgxMjY5MTc4NjQ2NjcxOjg3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzTHFSVVF1WWk4dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU3VxMUk4ekdVTUVTcTRiTXJOUDFxdUlWSFVmU1JJK1RoVGtjbk1RcTRWND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMWjNzMWYyc3lDM3R3YVN4L0JyTlZQdUlJTXI4cVhqYkFZNFJCNk0zb2tBVFFmS3dpQmxtclExYUxTM09MVHdXMzN0N1lHYXRZWG9rK0Z6eHRYVUVEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYd0Rmbk9JbWlFbDFVWkFwRHAxdklPVmFPSEROT3BQSldwL3RpSGpINHBlcXkvWXZuRDNvWUJiNnRCSEJyTFJqcTFub2Y2bkN4YlVzUUpEMmJRSFppQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTc2NzIwNjg6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2NDg3NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOYmlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5iaS5qc29uIjogIntcImtleURhdGFcIjpcImplNGk0dHZJY1JkTTFqV1NOKytySFNESzBFd2xBa0hGcWo1d1RVNXB2bVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ3MjE2NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDY0ODc2NzUxMlwifSIKfQ=="  // PUT your SESSION_ID 


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
