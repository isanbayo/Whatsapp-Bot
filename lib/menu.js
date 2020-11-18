const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/isanbayo/whatsapp-bot

Instagram: https://instagram.com/isanbayo/

Best regards, Ihsan.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Sebelum make, bot nya siapa tau kakak pengen donasi.
Bisa lewat
https://saweria.co/isanbayo
atau
DANA : *08975767944*
BCA : *8905604461*
A/N M Ihsan Fadilah

PERATURAN BOT.
-DILARANG KERAS TELFON/VC ATAU KAKAK DIBLOKIR, KARNA BOT NYA UDAH DI PROGRAM OTOMATIS.
-DILARANG KERAS MENG AKTIFKAN FITUR SIMI-SIMI KECUALI DI GRUP TK. TADIKA MESRA
Berikut adalah beberapa fitur yang ada pada sanbot!✨

Creator:
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

Islam:
-❥ *${prefix}infosurah*
-❥ *${prefix}surah*
-❥ *${prefix}tafsir*
-❥ *${prefix}ALaudio*
-❥ *${prefix}jsolat*


Fun Menu (Group):
-❥ *${prefix}simisimi*
-❥ *${prefix}katakasar*
		┷-❥ *${prefix}klasmen*

Download:
-❥ *${prefix}tiktok*
-❥ *${prefix}instagram*
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytvid*

Primbon:
-❥ *${prefix}artinama*
-❥ *${prefix}cekjodoh*

Search Any:
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}whatanime*

Random Teks:
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}quote*

Random Images:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Lain-lain:
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*

Tentang Bot:
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*
-❥ *${prefix}sanbot*

Sanstore Bot:
-❥ *${prefix}pasangbot*
-❥ *${prefix}rdp*
-❥ *${prefix}vps*
-❥ *${prefix}acc*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
-❥ *${prefix}ban* - banned
-❥ *${prefix}bc* - promosi
-❥ *${prefix}leaveall* - keluar semua grup
-❥ *${prefix}clearall* - hapus semua chat

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}tagall*
-❥ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
-❥ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

https://saweria.co/isanbayo
atau
DANA : *08975767944*
BCA : *8905604461*
A/N M Ihsan Fadilah

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -Ihsan`
}

exports.textpasangbot = () => {
    return `
Anda Ingin Memasang Bot seperti ini Di grup Anda?
Anda Cukup membayar 
- 60.000 anda sudah mendapatkan akses bot + Rdp 1vCPU 2GB RAM
- 100.000 anda sudah mendapatkan akses bot + Rdp 2vCPU 4GB RAM
- 150.000 anda sudah mendapatkan akses bot + Rdp 2vCPU 8GB RAM
Free edit kata kata di dalam bot.

Best regards, Ihsan.
whatsapp me :
https://wa.me/628975767944`
}

exports.textrdp = () => {
    return `
[+] RDP Server [+]
Avaible OS : Windows Server 2012 R2/Windows Server 2019/Windows Server 2016
- 1vCPU 2GB RAM = 35.000
- 2vCPU 4GB RAM = 60.000
- 2vCPU 8GB RAM = 120.000
- 4vCPU 16GB RAM = 180.000
- 8vCPU 32GB RAM = 300.000
*Hanya Tersedia Server US

Best regards, Ihsan.
whatsapp me :
https://wa.me/628975767944`
}

exports.textvps = () => {
    return `
[+] VPS Server [+]
Avaible OS : Ubuntu 20.04/Ubuntu 18.04
- 1vCPU 2GB RaAM = 35.000
- 2vCPU 4GB RAM = 60.000
- 2vCPU 8GB RAM = 120.000
- 4vCPU 16GB RAM = 180.000
- 8vCPU 32GB RAM = 300.000
*Hanya Tersedia Server US

Best regards, Ihsan.
whatsapp me :
https://wa.me/628975767944`
}

exports.textacc = () => {
    return `
[+]EDUCATION[+]
- AWS Education = 40.000
- Azure Education = 50.000

[+]CANVA PRO[+]
- 1 Tahun = 50.000

[+]Youtube Premium[+]
- Admin = 15k
- Invite = 5k

[+]Netflix[+]
- Private = 100.000
- Shared = 40.000

[+]Spotify Premium[+]
- Admin = 50.000
- Invite = 15.000

Best regards, Ihsan.
whatsapp me :
https://wa.me/628975767944`
}