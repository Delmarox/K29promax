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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_55_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA3NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgMjIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtSXp5Q2FsRTlOZy9hYklSK2tOT1poY3d5Vi93eEdFcWx2SFc3YVBZOWU0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4MzAzNzI2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTNBNDZGMDMzMjBGMkExQjU0RDc4MkM0Qjk4QzZFRUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODUwMDk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzgzMDM3MjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMkE2Mzk5MDJGQTg5MjczMzIzQjZBMDk0RTRBNTc2OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NTAwOThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTFg1MmVYd09RUUM4TlNtVDd3azY4QVwiLFxuICBcInBob25lSWRcIjogXCIzMDZkOWM2Zi05ZThhLTQwMjItYjdiZC1hMjliMWYyMTdkZTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAyMDIsXG4gICAgICAxOTMsXG4gICAgICAyMjcsXG4gICAgICAyMzUsXG4gICAgICAxNTYsXG4gICAgICA5MSxcbiAgICAgIDEwMixcbiAgICAgIDI3LFxuICAgICAgMTA3LFxuICAgICAgNDAsXG4gICAgICAxMzIsXG4gICAgICA4NixcbiAgICAgIDE5NixcbiAgICAgIDIyOCxcbiAgICAgIDE4MSxcbiAgICAgIDIwOSxcbiAgICAgIDI1MSxcbiAgICAgIDY2LFxuICAgICAgNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAzLFxuICAgICAgMTA1LFxuICAgICAgMjI3LFxuICAgICAgNTAsXG4gICAgICAyMzgsXG4gICAgICAxODUsXG4gICAgICAyMzgsXG4gICAgICAzNixcbiAgICAgIDgzLFxuICAgICAgMjE2LFxuICAgICAgODAsXG4gICAgICAxMDIsXG4gICAgICAxMzMsXG4gICAgICAxMjAsXG4gICAgICA5OSxcbiAgICAgIDE3MSxcbiAgICAgIDM1LFxuICAgICAgMTAzLFxuICAgICAgMjQ1LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0tMVzc5TTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4MzAzNzI2MzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTgwNjQ1NDkzMTg4NTk6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJOaWNrYmVsbGHwn5Kc4p2k8J+SnOKdpPCfkpzinaTwn5Kc4p2k8J+SnOKdpPCfkpzinaTwn5Kc4p2k8J+SnOKdpFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ByTHZxNEdFS3V0eUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZGM4c2RDWXZrNVYyUm1NMTJhaTM0YVhhekRPWDhoOTNRa01yYjYrRW5sMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4YjhyaUpDdWVYMWNQaVhBUUhXK1RvSlh4bHRWV0Y1Wk9SZ1ZwZTJ2ZDhQYVN6QlFod1ZPZmFEZ24xaTRiSmlNbU5xOXBBZURLdkU3SndvT25QV0REdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVVTNUd3lPSzlXREduN3BJWGFlaTVqMm5hT2RJS2diWGRvNGNYYzJYWHJXUEFIeDZBNTF2UnlGMDRObnN6Q2NXaHJ1aVZnVkU5T1lLcGhldTdpUERqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODMwMzcyNjM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg1MDA5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUIxVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjFVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMXRjUWRnc0RCUU5ZV3ZNMXhUdjRkSWp1Q3BUcGp2b1BTd09VUTk2czU4VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzA4MTA3MjU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4NTAwOTcyODdcIn0iCn0="  // PUT your SESSION_ID 


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
