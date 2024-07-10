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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_27_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICA4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTksXG4gICAgICAgIDIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMixcbiAgICAgICAgMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDY4LFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMixcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNWkswc3Z4VFlIRU1XQ3Y3aW11OWdvQ28zRmsxTlZ5cEhCbXE3cEJxN0RzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyX3p0UU9GU1NXRzYtZHl1Z0xhNElnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ1MmI0NjQxLTI3MDUtNDJjNS1hNDU0LWY4N2JhNWYzYmE2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDg2LFxuICAgICAgMjE2LFxuICAgICAgMTAzLFxuICAgICAgOTQsXG4gICAgICA4NixcbiAgICAgIDIwLFxuICAgICAgNixcbiAgICAgIDE4MyxcbiAgICAgIDY2LFxuICAgICAgMSxcbiAgICAgIDIwMSxcbiAgICAgIDE5NCxcbiAgICAgIDEzMixcbiAgICAgIDQ5LFxuICAgICAgNzEsXG4gICAgICAxOSxcbiAgICAgIDEwMCxcbiAgICAgIDcxLFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE1LFxuICAgICAgMTM4LFxuICAgICAgMTEwLFxuICAgICAgMjE1LFxuICAgICAgMTg1LFxuICAgICAgMjAzLFxuICAgICAgNDEsXG4gICAgICA4MCxcbiAgICAgIDIyMCxcbiAgICAgIDE2OCxcbiAgICAgIDExMyxcbiAgICAgIDIzNixcbiAgICAgIDE3OCxcbiAgICAgIDE3MCxcbiAgICAgIDExMCxcbiAgICAgIDUwLFxuICAgICAgMTkyLFxuICAgICAgMTk4LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZFNU1EVkMyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc2NzIwNjg6ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTI2OTE3ODY0NjY3MTo4NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeXp1ZXNIRVB6c3VyUUdHQzBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhJeUZmVGJLMk1RaTNta21PQWRoSVQ3YjdFTngwTHVHMnllYkc2KzJYVGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNzJZY296YUZRRU9KOHBrS1ZwdHNzN25FU0R3Yk9xSi9FT2t6dVZKVVdXbmdLTDVTNGpSbDlpUThzZzR1VnY2eEEyRDNYLytzVWJYZzJ1U3o2WDhrQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOWlXaStRc1AvQzRFejJoOGFyNHgvajBRaGwwVmU5VlV2SGViY2lML1NhQ0Z2UWRQcEZGbEx2Vy9DZ2k4Nk5UTjlQNGtyeDNHZ2w3b0tQamxLK3hSamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3NjcyMDY4Ojg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYyODg2NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
