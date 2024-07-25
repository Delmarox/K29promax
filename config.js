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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_56_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMixcbiAgICAgICAgMTE4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9tcnd6a1dnN0lwb3FPQ0dobHZkOGZGck5kUkhKL3dSbUlla1o4SjNVQkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE3NjcyMDY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQjA1QzMzNjM1MzFDRDU3ODZCODczRDNCRENFREY1QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4Njg5NjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVnRXbjNiQWFRVXFLVWFrTEVkZGVTZ1wiLFxuICBcInBob25lSWRcIjogXCI0Nzk2MjE5Ni1mYWEyLTQyZjctODY3NC04MDE4MTQ2NzdkNmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgMjEsXG4gICAgICAxNDksXG4gICAgICA2LFxuICAgICAgMTU0LFxuICAgICAgMTg2LFxuICAgICAgMTYsXG4gICAgICAxNDAsXG4gICAgICA1NyxcbiAgICAgIDMsXG4gICAgICAxMTMsXG4gICAgICAxMDMsXG4gICAgICAxNDIsXG4gICAgICAxMDYsXG4gICAgICAxOTMsXG4gICAgICAxMDYsXG4gICAgICA0LFxuICAgICAgODMsXG4gICAgICAxOCxcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDM0LFxuICAgICAgODEsXG4gICAgICAyOCxcbiAgICAgIDMyLFxuICAgICAgMjIsXG4gICAgICAyMixcbiAgICAgIDE5LFxuICAgICAgOTAsXG4gICAgICAxNjQsXG4gICAgICA2MCxcbiAgICAgIDEyMCxcbiAgICAgIDE1NSxcbiAgICAgIDEzOSxcbiAgICAgIDY1LFxuICAgICAgMTY5LFxuICAgICAgMTA5LFxuICAgICAgMTQ1LFxuICAgICAgODIsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjFLRDlRUjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzY3MjA2ODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdl7jwnZ+u8J2ftfCdl73wnZe/8J2XvPCdl7rwnZeu8J2YhVwiLFxuICAgIFwibGlkXCI6IFwiMTgxMjY5MTc4NjQ2NjcxOjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01YTnMvWUNFSmJGaHJVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid2FiMGlBakRmZWdXQmdiSzVaZEtjR1VqVWNvL2hHMlpva2JCbWpqR3lEWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQSjZQUi82bGV4SGo2VUdMSzFyeDllRTI3SmxEOTE2a29Ydm5BekV0VDdMU29aQzNtQWNTSmw1c2RzMU5tNDFVdC9uZWlrQThCazRMTXBrSU80NlVBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUSkw2TmpUUlpROVJUK0tZMTF4dUNuc3BxUXlMN1lTK3FabW9aNnlJQ01mZmMxS2MxNHhTWmpLKytIbzlaNDd2dzgrTmhGck15TUhBb1VGSGswMXZnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTc2NzIwNjg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODY4OTU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUJ2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFQnYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrc0YyM1hlVStNYU5yVlVaa1JORmxUNnZhZWJON3ZwWkhGR2V0QkRjQkpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc4NTE4MDM1NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4Njg5MzI5NjJcIn0iCn0="  // PUT your SESSION_ID 


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
