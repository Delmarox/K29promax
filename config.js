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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_26_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDc5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1LFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDczLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzksXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgODEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOUdBbUpGeWx6clhUd0RBUVNGVXFwM1hUMWVUN0NSMkl3TUVsYklWUHBPbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieEV1dGkyM21RSzJFWmh0NGkwekVKZ1wiLFxuICBcInBob25lSWRcIjogXCJlYTVjYTBiMC04ODc1LTQzMzEtODZhZS1kNmQ3ZTE1YTU1ZjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgODIsXG4gICAgICAxNDYsXG4gICAgICAxNDYsXG4gICAgICAzMSxcbiAgICAgIDExLFxuICAgICAgMjA1LFxuICAgICAgODQsXG4gICAgICAxMDMsXG4gICAgICAxMzgsXG4gICAgICAxMDgsXG4gICAgICA3LFxuICAgICAgMjM5LFxuICAgICAgMjE3LFxuICAgICAgMjIyLFxuICAgICAgMTU2LFxuICAgICAgOTgsXG4gICAgICAyNCxcbiAgICAgIDExOSxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDI5LFxuICAgICAgNDAsXG4gICAgICAxNjQsXG4gICAgICAxOTUsXG4gICAgICAxMzcsXG4gICAgICA1MSxcbiAgICAgIDY4LFxuICAgICAgNDksXG4gICAgICA4MCxcbiAgICAgIDIxLFxuICAgICAgMTg5LFxuICAgICAgMTc4LFxuICAgICAgNjAsXG4gICAgICAyMzYsXG4gICAgICAxMDksXG4gICAgICAyMDMsXG4gICAgICAyMyxcbiAgICAgIDE2MSxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIM05aV1FYWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3NjcyMDY4Ojk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XuPCdn67wnZ+18J2XvfCdl7/wnZe88J2XuvCdl67wnZiFXCIsXG4gICAgXCJsaWRcIjogXCIxODEyNjkxNzg2NDY2NzE6OThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVROcy9ZQ0VQYnYxYlFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3YWIwaUFqRGZlZ1dCZ2JLNVpkS2NHVWpVY28vaEcyWm9rYkJtampHeURZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInk4K2JqZnhCODVaV0FpbVlRU01ZNmJ3QndRTFZEN2NFZVhKbW95ZkcwSXMwVTQ1cytwZGJ5Vy82cUp4OHBJMENJS0ZrZjVwUjNETWhKcVlrTThCbkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInV0aC9LcmhVaHR6QkJBL1JnMVFhWjByV3ZmbmkzL0x1RER6eU8wZ2hwM3RhNEhUZWV4dlkzZWlSbS9pZU9YSmxyUUdMOHlrOWpHdDhsei9yR2VNcmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzY3MjA2ODo5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNzE2MTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
