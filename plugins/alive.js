const os = require('os');
const { cmd } = require('../lib/command');

cmd({
  pattern: "alive",
  alias: ["bot"],
  desc: "Show bot status with button UI and photo",
  react: "👾",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { from, reply }) => {
  try {
    const uptimeSeconds = process.uptime();
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    const uptimeStr = `${hours}h ${minutes}m ${seconds}s`;

    const totalMemMB = (os.totalmem() / (1024 * 1024)).toFixed(2);
    const freeMemMB = (os.freemem() / (1024 * 1024)).toFixed(2);
    const usedMemMB = (totalMemMB - freeMemMB).toFixed(2);
    const cpuModel = os.cpus()[0].model;
    const cpuCores = os.cpus().length;

    const caption = 
`⚡ *𝙺𝙰𝚅𝙸𝙳𝚄-𝙼𝙳 Bot Status* ⚡

🟢 *Online:* Yes  
⏳ *Uptime:* ${uptimeStr}  
💾 *RAM Usage:* ${usedMemMB} MB / ${totalMemMB} MB  
🖥️ *CPU:* ${cpuModel} (${cpuCores} cores)  
👤 *Owner:* sayura

💬 Type *.menu* to see commands!`;

    // Send the message with photo + buttons
    await conn.sendMessage(from, {
      image: { url: "https://i.ibb.co/nsqDV3w1/541.jpg" },
      caption,
      footer: "Powered by kavidu induwara ⚡",
      buttons: [
        { buttonId: ".menu", buttonText: { displayText: "📂 Menu" }, type: 1 },
        { buttonId: ".system", buttonText: { displayText: "🖥️ System Info" }, type: 1 }
      ],
      headerType: 4
    }, { quoted: mek });

  } catch (e) {
    console.error("alive command error:", e);
    reply("❌ Error occurred while fetching bot status.");
  }
});
