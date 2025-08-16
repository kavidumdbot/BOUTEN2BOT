const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'RU4gQKQD#sCXJO1fAe3jLO-rhs3I4cGkK94_divOmMqaCz89VDYI' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94767054052' : process.env.OWNER_NUMBER,  
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
ALIVE:  process.env.ALIVE  || '> 𝙺𝙰𝚅𝙸𝙳𝚄-𝙼𝙳',
GEMINI_API_KEY:process.env.GEMINI_API_KEY || 'AIzaSyDQIUl78aFtIgsNKY1RUU82nDkL905UbtA',
WEATHER_API_KEY: process.env.WEATHER_API_KEY || "9ad6e2bc255f629e9ff07569f0ad0af3",
FOOTER: process.env.FOOTER || "𝙺𝙰𝚅𝙸𝙳𝚄-𝙼𝙳",
NAME:process.env.NAME || "𝙺𝙰𝚅𝙸𝙳𝚄-𝙼𝙳",
PICTURE:process.env.PICTURE || "https://i.ibb.co/nsqDV3w1/541.jpg",
MAX_SIZE_GB: process.env.MAX_SIZE_GB || "2",
MAX_SIZE: process.env.MAX_SIZE || "2000",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "random",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",    
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",   
READ_MESSAGE: process.env.READ_MESSAGE || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
BUTTON: process.env.BUTTON || "true",

};
