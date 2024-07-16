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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_36_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIxLFxuICAgICAgICA4LFxuICAgICAgICA0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMixcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICA0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgODgsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjExLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXVG02cHF1bVdwNUdvVnBxZjVJYTk2OFVRa2x2ODFUWlUyTDlRVEFNR0JnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaSk1fdnhKM1JjMlhLTXFKWExwMjVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImVjNDQxZGQ2LThkNjktNGQ4Zi04ZTYzLTYwZmRjZTc2NzE1YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDExMSxcbiAgICAgIDI0MixcbiAgICAgIDIwMCxcbiAgICAgIDkwLFxuICAgICAgMTc5LFxuICAgICAgMjMyLFxuICAgICAgMjE2LFxuICAgICAgMTI4LFxuICAgICAgMTgxLFxuICAgICAgMzQsXG4gICAgICAxNixcbiAgICAgIDk3LFxuICAgICAgMzYsXG4gICAgICAxMjYsXG4gICAgICAxNzQsXG4gICAgICA3OSxcbiAgICAgIDE2MCxcbiAgICAgIDE2NSxcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMTY0LFxuICAgICAgMjQ5LFxuICAgICAgMjAxLFxuICAgICAgNzUsXG4gICAgICAxNzMsXG4gICAgICAxNjIsXG4gICAgICAxMzksXG4gICAgICA4LFxuICAgICAgMjAyLFxuICAgICAgMTc4LFxuICAgICAgMjE3LFxuICAgICAgOTYsXG4gICAgICAyMSxcbiAgICAgIDE0OSxcbiAgICAgIDUsXG4gICAgICAxMDEsXG4gICAgICA4NyxcbiAgICAgIDEzLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1hCUlQ5SFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NjQ2OTY4ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MzM5MTEyNDM2MTI4MToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0szZ3RjWUVFT2ZFejdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVWRVbFE5aWdRekNTeGVyUVF6TEtFLzk3dngvS0JVaTdEUGQ3amlrM3dsND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuZ3U4c2NFYVRVQjNEcnFDeUtNb3ErSW9pQ0ZWVjdHMHY5MmRHMTNUNG50clRpM3VFYXEyRXJEcnNtMm5nTE40TzBkc2h0U1p5ZlpIR3JuU3ZjWXFBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4ZkdBSnZCK29JZWEwUllCbDBiaE9XbUFGRzFBQlFhaHAzTjV6a2tJTGlERExJMHMyaExwN1F0c2I3bUprY1BiYklEbWx4N0JVS2hrdmVsQ1ZhckpqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODY0Njk2ODg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTY3Nzg4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
