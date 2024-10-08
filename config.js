const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "234 903 804 2334";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_52_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjYsXG4gICAgICAgIDY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAzNSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxLFxuICAgICAgICA4NyxcbiAgICAgICAgOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRclhDTldBYXhXcDZISzFhcEszVzFSY1RhSGU4UHFldEh4ZnlUTUsyMndNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzgwNDIzMzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM4NDA0RkNEODk5OTZEODcwQzI5RDIwQkRDNzI1RDg4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODMwMTk1MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1Nkd6YXU1UFM3eUY0OU80dW9POVB3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY4OWExMDEzLTNiOWMtNGYwNi04MGE0LWZlNzA3OGRjZjFmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDEyNSxcbiAgICAgIDIzNCxcbiAgICAgIDI0NyxcbiAgICAgIDIzOCxcbiAgICAgIDEyNyxcbiAgICAgIDE3OCxcbiAgICAgIDE0MCxcbiAgICAgIDEyLFxuICAgICAgNDAsXG4gICAgICAyMjgsXG4gICAgICAyMDEsXG4gICAgICAyMDQsXG4gICAgICAxMDAsXG4gICAgICAxNDAsXG4gICAgICA0MCxcbiAgICAgIDE5OCxcbiAgICAgIDE4MyxcbiAgICAgIDIzMCxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAyMzksXG4gICAgICAxODEsXG4gICAgICAxNTgsXG4gICAgICAxMSxcbiAgICAgIDI0MyxcbiAgICAgIDEwNyxcbiAgICAgIDE2OSxcbiAgICAgIDI2LFxuICAgICAgMTI5LFxuICAgICAgOTYsXG4gICAgICAxNjQsXG4gICAgICA3NyxcbiAgICAgIDYxLFxuICAgICAgMjA4LFxuICAgICAgMTM0LFxuICAgICAgMjQ4LFxuICAgICAgOSxcbiAgICAgIDIxMCxcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUUxDTVJaRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzODA0MjMzNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzg1Nzc2MjMxNjcwODM6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLSGlvWG9ROVphUHVBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJtSlQreHVGQm12SVduUEVuQmxPaFhqS0NZcEJlbnRWZzB0VmNDMVFZQjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVmpiSUdSVncvQmFnaXFBbTRsZGg1QWFIMXJWUmFSdXJxZzk4ZFJCYVYwZkswRnozcnhBZUpINS9WVkcvTloybUlZR092NytJQk5sSkdwdjI1bStoQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZlBlRHRIdGRHeitlNDBScnYwVmNKQk1yam9OZlJkNFp3LzdOR0sxSCtCN2xoYVRPZFNKZ0lpc0NIbVNZNlUxcHpwVVViS2lqNmppM3BOdjU2Znp3QUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzODA0MjMzNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MzAxOTQ3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
