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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_24_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDM3LFxuICAgICAgICA1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEyLFxuICAgICAgICAzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgMjM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk3LFxuICAgICAgICA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MixcbiAgICAgICAgODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc0LFxuICAgICAgICA2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieDZnejd1aklCaG9ZbUNzd2JNWDhRdjJXeXcvdGpjRDM3T2pqbGs0MHlCdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTY0ODkxNDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVCRUI2NUE1QTk1MzM5RTAzODdDQjNEOTFGNTg5NThCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDc5NDI3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNjQ4OTE0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzE1M0QyNDU3NDA5OTAxNUE0OTcwRTQ0RjE2RDUxOTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzk0Mjc0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJQaTdGanN6UVg2VFpwZ3VHYnYtVHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWM3YTI0MTgtODlmNS00MjE5LTg5NjgtYmU5NWFlOWMyZDA1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDE4MyxcbiAgICAgIDE2NSxcbiAgICAgIDEzOCxcbiAgICAgIDI1LFxuICAgICAgMzQsXG4gICAgICA2MyxcbiAgICAgIDE1MixcbiAgICAgIDE2MSxcbiAgICAgIDY1LFxuICAgICAgMTg0LFxuICAgICAgODQsXG4gICAgICAxMCxcbiAgICAgIDU1LFxuICAgICAgMTY1LFxuICAgICAgMTAsXG4gICAgICAxMTksXG4gICAgICAxNTQsXG4gICAgICA0MixcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDc2LFxuICAgICAgMjMxLFxuICAgICAgOTQsXG4gICAgICAxMjMsXG4gICAgICA2MCxcbiAgICAgIDIzNixcbiAgICAgIDg0LFxuICAgICAgMTY1LFxuICAgICAgMTQzLFxuICAgICAgODEsXG4gICAgICA4LFxuICAgICAgMTEsXG4gICAgICAxMjQsXG4gICAgICAyMzAsXG4gICAgICAxODIsXG4gICAgICAyNyxcbiAgICAgIDMsXG4gICAgICAxMzMsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIM05TNDlFNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE2NDg5MTQ1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUxMDI0NjMwOTUxOTQxOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTydOZWlsbCBCZWxpZXZlIE1hc2FrYVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08veXdiY0dFSmo1eExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZS9UNGEvVEh2cUk5V0h5TXlUaXVWN0N2NS9wdXJHb096Nk9UMTRwV3RuTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBbDVFTVBGVnNZWXBZSU9PNFVQSTNlY3BubDhxMTEwdWp4cXVlelVvMkYwOFUwTnQxYWJZUXAvM2UvRElJdWJKVmJMeWxoOUNJV3NnUUVhR0diRldCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxdnRWeFpZVjdqZXRjVE1ZZDZ1MXFWZFlsZlc2VVllVWFlUkVqbzB1U0lvM3BmWTFNZVJQN1JrNzlta1paQ1ZWRjZuemdzYzlTZlFmU2VYWEZJYkhpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTY0ODkxNDU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDc5NDI2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURqTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGpMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGQ5RTJUdUhVUkd1QjNmWnBmL0FreDZyZTZ0MVNzaGw2dVgvRUZnMlhrZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzI3MDM1NzU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3OTQyNzExODFcIn0iCn0="  // PUT your SESSION_ID 


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
