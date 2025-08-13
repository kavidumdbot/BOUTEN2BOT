const { cmd } = require('../lib/command');
const config = require('../settings');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')

cmd({
    pattern: "menu",
    react: "📂",
    desc: "Check bot Commands.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { reply, prefix }) => {
    try {

        let teksnya = `
 Hello  Ｉ ａｍ   𝙺𝙰𝚅𝙸𝙳𝚄-𝙼𝙳 𝚅1 ❯❯  
╭────────────────────●●►
| *🛠️  𝚅𝙴𝚁𝚂𝙸𝙾𝙽:* ${require("../package.json").version}
| *📡  𝙼𝙴𝙼𝙾𝚁𝚈:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
| *⏱️  𝚁𝚄𝙽𝚃𝙸𝙼𝙴:* ${runtime(process.uptime())}
╰─────────────────────●●►
   ❮❮  𝙺𝙰𝚅𝙸𝙳𝚄-𝙼𝙳 𝚅1 𝙼𝙴𝙽𝚄 𝙻𝙸𝚂𝚃❯❯  `;

        let imageUrl = "https://i.ibb.co/nsqDV3w1/541.jpg";

        let vpsOptions = [
            { title: "ᴏᴡɴᴇʀ menu ", description: "Bot Owner Only Commands", id: `${prefix}ownermenu` },
            { title: "ᴅᴏᴡɴʟᴏᴀᴅ menu ", description: "Get Bot Download Menu", id: `${prefix}dlmenu` },
            { title: "LOGO MENU ", description: "Get Bot logo Menu", id: `${prefix}logomenu` },
            { title: "ᴄᴏɴᴠᴇʀᴛ menu ", description: "Get Bot Convert Menu", id: `${prefix}convertmenu` },
            { title: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ ", description: "Get Group Only Commands", id: `${prefix}groupmenu` },
            { title: "ᴀɪ ᴍᴇɴᴜ ", description: "Get Bot AI Commands List", id: `${prefix}aimenu` },
            { title: "𝙰𝙽𝙸𝙼𝙴 menu ", description: "Get Bot Search Menu", id: `${prefix}animemenu` },
            { title: "ꜰᴜɴ menu ", description: "Fun Joke Menu Bot", id: `${prefix}funmenu` },
            { title: "𝙼𝙰𝙸𝙽 menu ", description: "Owner Only Bug Menu", id: `${prefix}mainmenu` },
            { title: "𝙾𝚃𝙷𝙴𝚁 ᴍᴇɴᴜ️ ", description: "Random Commands Menu", id: `${prefix}othermenu` }
        ];

        let buttonSections = [
            {
                title: "List of GOJO MOVIE X Bot Commands",
                highlight_label: "GOJO MOVIE X",
                rows: vpsOptions
            }
        ];

cmd({
    pattern: "dlmenu",
    react: "🎬",
    desc: "Download Menu Text List",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { reply, prefix }) => {
    try {
        const text = `🎬 *𝙺𝙰𝚅𝙸𝙳𝚄-𝙼𝙳 DOWNLOAD MENU* 🎬

ඔබට පහත commands භාවිතා කර download කරගන්න පුළුවන්:

╭─────────────⭓
│ 📥 YouTube Video 
│ ➤ ${prefix}ytv <link or search>
│
│ 🎵 YouTube Song 
│ ➤ ${prefix}song <link or search>
│
│ 🎯 TikTok Video 
│ ➤ ${prefix}tt <link>
│
│ 🎬 Instagram Reel 
│ ➤ ${prefix}instagram <link>
│ 
│ 📽️ Sinhalasub.lk movie
│ ➤ ${prefix}movie <search>
│
│ ⚜️ Sinhala dubbed movie 
│ ➤ ${prefix}mv <search>
│
│ 🧾 Sri Lanka school past papers
│ ➤ ${prefix}pastpp <search>
│
│ 📺 Facebook videos 
│ ➤ ${prefix}fb <link>
╰─────────────⭓

_ඔබට අවශ්‍ය link එකක් හෝ keyword එකක් එක්කර command එක යොදන්න_`;

        await reply(text);
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

        let buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Select Menu" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "Choose Menu Tab 📖",
                        sections: buttonSections
                    })
                }
            }
        ];

        conn.sendMessage(m.chat, {
            buttons,
            headerType: 1,
            viewOnce: true,
            caption: teksnya,
            image: { url: imageUrl },
            contextInfo: {
                mentionedJid: [m.sender], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    
                    newsletterName: `𝙺𝙰𝚅𝙸𝙳𝚄-𝙼𝙳💗`,
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
