const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

// --- WEB SUNUCUSU (7/24 İÇİN) ---
app.get('/', (req, res) => res.send('Hesap Aktif!'));
app.listen(3000, () => console.log('Web sunucusu hazir.'));

// --- DISCORD HESAP BAĞLANTISI ---
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`${client.user.tag} hesabi şu an aktif!`);
});

// Tokenini buraya girme, Render ayarlarinda girecegiz!
client.login(process.env.TOKEN);
