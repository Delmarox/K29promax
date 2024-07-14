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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_31_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICA4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI4LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNixcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmTElvUUhGdTZNTWloeHJvUllnRWl4SlRLZm5XQzduTDk5dXZkalpDbkcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxOTQyNjc1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjlGMTU0MTM2MjY4QUE5MjdERTRFODNFRkE5M0QyQTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwOTY3NDYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE5NDI2NzUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNjgyOTlDRUJCMDM5NzcwRTNGRjUzOEI2RTZDRjgwOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5Njc0NjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUWhaSzdHS3pUeEtoYmtPU2pkc1l3d1wiLFxuICBcInBob25lSWRcIjogXCI5YmI0NWU4NC0wMWJmLTQ2NWQtOTY1ZC1mM2M0MmI4Y2E3Y2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMzIsXG4gICAgICAzNCxcbiAgICAgIDE4NSxcbiAgICAgIDMwLFxuICAgICAgNDEsXG4gICAgICA0MCxcbiAgICAgIDEyNyxcbiAgICAgIDI0MyxcbiAgICAgIDEwMCxcbiAgICAgIDE4NCxcbiAgICAgIDE1MSxcbiAgICAgIDcyLFxuICAgICAgMTg4LFxuICAgICAgMTIwLFxuICAgICAgMTc5LFxuICAgICAgMTkzLFxuICAgICAgMTMyLFxuICAgICAgMTc2LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTMxLFxuICAgICAgMTAxLFxuICAgICAgMjQ0LFxuICAgICAgMTI0LFxuICAgICAgODgsXG4gICAgICAxNDMsXG4gICAgICA4NyxcbiAgICAgIDIyNSxcbiAgICAgIDI0NCxcbiAgICAgIDIzMixcbiAgICAgIDIxMyxcbiAgICAgIDExLFxuICAgICAgOTAsXG4gICAgICAyNDgsXG4gICAgICAxMDMsXG4gICAgICA1MSxcbiAgICAgIDExNSxcbiAgICAgIDIyMCxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNSlFLUEI5TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE5NDI2NzUxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJFbW1hbnVlbFwiLFxuICAgIFwibGlkXCI6IFwiMTYzMDg0NDM4MjQxODk6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOenhrSk1DRUozQ3o3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImkrdmVtV1ZqVm9QTllJeEx1V1E5aVBtTXNjdDJlMUFyL1ZwRnlENGRmR1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZXJDMWxsdkZuTEltcjdubTRDS2Y2Y2Vpc1NmSHdodWRJRUZVdHNRU09meW9UY0g3N3Baa1o4c0lFbXJBTmF6NkozWXpxUkI2NVVYbG5hQmlKbXU0QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRjRjeUloSEJ1ZGVrUysrcjFqaE1EdlZKNFU1MDhRWTBGN1ZUZ3AwZXZ2eStLZXlwYnJqaW9nQlo1QlBVM0hZcVg0QjR0SmtjaC9xcTQ3dGN5Q3M1aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE5NDI2NzUxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTY3NDU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzVMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4U0d4VjhoWHY3RXNvMGQ2Z0RjODhLSnoybXBLeDVkdjMvanVMY09RdGhVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU3Njk5MzUwMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwOTY3NDYyNzgxXCJ9Igp9"  // PUT your SESSION_ID 


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
