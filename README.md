# Atin Discord Bot

Atin adalah bot Discord yang ditenagai oleh Google's Gemini AI, dirancang untuk memberikan respons yang ramah dan membantu dalam percakapan.

## Fitur

- `!ask` - Tanya apa saja kepada Atin (nama Ai nya)
- `!hello` - Sapa Atin
- `!ping` - Cek latency bot
- `!goodbye` - Ucapkan selamat tinggal

## Instalasi

1. Clone repository ini
2. Install dependencies:
```bash
npm install
```
3. Buat file `.env` dengan format:
```env
TOKEN=your_discord_bot_token
GEMINI_API_KEY=your_gemini_api_key
```
4. Jalankan bot:
```bash
node bot.js
```

## Persyaratan

- Node.js v16.9.0 atau lebih tinggi
- Discord.js v14
- API key dari Google AI Studio (Gemini)
- Token bot Discord

## Setup Bot Discord

1. Buat aplikasi baru di [Discord Developer Portal](https://discord.com/developers/applications)
2. Buat bot baru di aplikasi tersebut
3. Aktifkan "Message Content Intent" di pengaturan bot
4. Copy token bot dan tambahkan ke file `.env`
5. Undang bot ke server menggunakan URL OAuth2


## Penggunaan

1. Pastikan bot sudah online di server
2. Gunakan command dengan prefix "!"
3. Contoh penggunaan:
   - `!ask apa itu javascript?`
   - `!hello`
   - `!ping`
   - `!goodbye`

## Kontribusi

Silakan berkontribusi dengan membuat pull request atau melaporkan issues.

