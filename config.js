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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348141351016";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_57_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDczLFxuICAgICAgICAxMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYyLFxuICAgICAgICA1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDc0LFxuICAgICAgICAzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUU5LMUNmYlM3OTJQMWp6K1VVaUpCSUFTeFI3TkJaanh1bFRSdlVBQXlMRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS242cUw0ZUFRY2lqd1BJMHZvZG5kd1wiLFxuICBcInBob25lSWRcIjogXCJhMTA5ODdmZi01OTI3LTQ2MWMtOWQ1Ni0zMWNkNTcyYmE3NzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICA5OSxcbiAgICAgIDE5MCxcbiAgICAgIDgxLFxuICAgICAgNTIsXG4gICAgICAxODYsXG4gICAgICAxMTQsXG4gICAgICAxMTIsXG4gICAgICAyMCxcbiAgICAgIDIzMixcbiAgICAgIDIwMCxcbiAgICAgIDE2NyxcbiAgICAgIDEyOCxcbiAgICAgIDE1MyxcbiAgICAgIDQ1LFxuICAgICAgMjAsXG4gICAgICA0OSxcbiAgICAgIDE0MixcbiAgICAgIDE3NCxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMjI1LFxuICAgICAgMTE3LFxuICAgICAgMjUsXG4gICAgICA1MixcbiAgICAgIDE1NyxcbiAgICAgIDksXG4gICAgICAyNyxcbiAgICAgIDE2OCxcbiAgICAgIDUzLFxuICAgICAgMzMsXG4gICAgICA5MixcbiAgICAgIDEwNCxcbiAgICAgIDU1LFxuICAgICAgOTYsXG4gICAgICAxMjQsXG4gICAgICAxNTcsXG4gICAgICAxNTgsXG4gICAgICAxMSxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJITUU1NVgyVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0MTM1MTAxNjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibWVkaWNhbCBxdWVlblwiLFxuICAgIFwibGlkXCI6IFwiMjIxOTUxMTkyNzc2OTQxOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHViL2JNRkVJMmsyYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJORlZIYVhxOXpZUjFkR1pyRm5PMGRPQWdIUDIrN0lkdGhXZVlLcUx3cUdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVZaTRYZUkwL1FnQ0Q4TW52MDYvU1FZNXI2VzNDaHBPTVRiRmJKaEwzcitpN21SU2VoRzNqRlZhV1Z2U3VXRlpXc1VucDRlZUV0YlRXVWRuUnhBeEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImg5V0hGTldnK1ZXV09KeEJQakRBeCs2eTR6d3BGR3kwTWJ4UjVQQ0lWbzlMeGlqRVdCZWlDcnFMSUp1Z2VLaUpoRGh6Uzl1TEJORjQ5bmFzdWh5dmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDEzNTEwMTY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTI3NDQxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
