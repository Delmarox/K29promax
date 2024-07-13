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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_35_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzLFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM5LFxuICAgICAgICA2MixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDM5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDY0LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJwZFB5L2Q4SW00dGY3RVloejMwTitjVWRMRlpreUdsNm5uWHpjUUdRSEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFRWk9NZ2N4VDhHYTZCcXZJWk5BWEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWU5NDViYzItNjU4NS00MTJhLWIzMWItNzgzYWEwMGI4Y2MxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDgyLFxuICAgICAgNTAsXG4gICAgICAxNTYsXG4gICAgICAyMyxcbiAgICAgIDE0LFxuICAgICAgMjEzLFxuICAgICAgMTIyLFxuICAgICAgMjIwLFxuICAgICAgNTEsXG4gICAgICAxNjgsXG4gICAgICA0MSxcbiAgICAgIDgwLFxuICAgICAgMjQ1LFxuICAgICAgMTgwLFxuICAgICAgMjM2LFxuICAgICAgMTI0LFxuICAgICAgNDQsXG4gICAgICAxMTEsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgMjQ0LFxuICAgICAgMjA4LFxuICAgICAgMTc0LFxuICAgICAgMjE0LFxuICAgICAgNjAsXG4gICAgICAyNDgsXG4gICAgICAyNDYsXG4gICAgICAzMCxcbiAgICAgIDE0NCxcbiAgICAgIDIzNSxcbiAgICAgIDUsXG4gICAgICAxMDYsXG4gICAgICAyMTksXG4gICAgICA3NyxcbiAgICAgIDg0LFxuICAgICAgMTkzLFxuICAgICAgMTk2LFxuICAgICAgMTEwLFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxYNk1WTExCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY1MjM5NzE3ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDMzNTgzODM5MjM4Nzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05HYnN0SUVFTkdheGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEEzb1FFUlFXeGdsMmVTTUN1SGtOd1RiV09jRUxMTWMxY2RDZ0lCN2ZTOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOYXgzTVZ2a1JtdzU3WWxHR0Q4L1ovUGEzelBPUG1Wc01BWjVXYWFhL0J1ZUNtMnZsQ2JldlBTUFFoQ3FWT241RytGL2dDVVpMak9JS2thbEk4bE9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqb3NpZVhycjhnTkxNdHd4SUtET2pBR3dEaEQrZ1VTbHFRbUdsRExOOHNVK1dyTktEWWVLS1pCZjhpeG1WTFNsTHIvd1lwZW5va2hDMHZPVm1DNjlpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY1MjM5NzE3ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzk4NTQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWxNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBbE0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWOWo3a0hYM3NjZ1FzTmxib1BtZXl6Mi9XZ3kwa01jOHF6eU5BV0VJM2pJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNDY1MzEwMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDc5ODU1MzAyM1wifSIKfQ=="  // PUT your SESSION_ID 


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
