const { create, Client } = require('@open-wa/wa-automate')
const figlet = require('figlet')
const options = require('./utils/options')
const { color, messageLog } = require('./utils')
const HandleMsg = require('./HandleMsg')

const start = (sanbot = new Client()) => {
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('sanbot', { font: 'Ghost', horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color('[DEV]'), color('sanbot', 'yellow'))
    console.log(color('[~>>]'), color('BOT Started!', 'green'))

    // Mempertahankan sesi agar tetap nyala
    sanbot.onStateChanged((state) => {
        console.log(color('[~>>]', 'red'), state)
        if (state === 'CONFLICT' || state === 'UNLAUNCHED') sanbot.forceRefocus()
    })

    // ketika bot diinvite ke dalam group
    sanbot.onAddedToGroup(async (chat) => {
	const groups = await sanbot.getAllGroups()
	// kondisi ketika batas group bot telah tercapai,ubah di file settings/setting.json
	if (groups.length > groupLimit) {
	await sanbot.sendText(chat.id, `Sorry, the group on this bot is full\nMax Group is: ${groupLimit}`).then(() => {
	      sanbot.leaveGroup(chat.id)
	      sanbot.deleteChat(chat.id)
	  }) 
	} else {
	// kondisi ketika batas member group belum tercapai, ubah di file settings/setting.json
	    if (chat.groupMetadata.participants.length < memberLimit) {
	    await sanbot.sendText(chat.id, `Sorry, BOT comes out if the group members do not exceed ${memberLimit} people`).then(() => {
	      sanbot.leaveGroup(chat.id)
	      sanbot.deleteChat(chat.id)
	    })
	    } else {
        await sanbot.simulateTyping(chat.id, true).then(async () => {
          await sanbot.sendText(chat.id, `Hai minna~, Im sanbot. To find out the commands on this bot type ${prefix}menu`)
        })
	    }
	}
    })

    // ketika seseorang masuk/keluar dari group
    sanbot.onGlobalParicipantsChanged(async (event) => {
        const host = await sanbot.getHostNumber() + '@c.us'
        // kondisi ketika seseorang diinvite/join group lewat link
        if (event.action === 'add' && event.who !== host) {
            await sanbot.sendTextWithMentions(event.chat, `Hello, Welcome to the group @${event.who.replace('@c.us', '')} \n\nHave fun with us✨`)
        }
        // kondisi ketika seseorang dikick/keluar dari group
        if (event.action === 'remove' && event.who !== host) {
            await sanbot.sendTextWithMentions(event.chat, `Al-fatihah buat @${event.who.replace('@c.us', '')}, yang keluar grup✨`)
        }
    })

    sanbot.onIncomingCall(async (callData) => {
        // ketika seseorang menelpon nomor bot akan mengirim pesan
        await sanbot.sendText(callData.peerJid, 'Maaf sedang tidak bisa menerima panggilan.\n\n-bot')
        .then(async () => {
            // bot akan memblock nomor itu
            await sanbot.contactBlock(callData.peerJid)
        })
    })

    // ketika seseorang mengirim pesan
    sanbot.onMessage(async (message) => {
        sanbot.getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[sanbot]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    sanbot.cutMsgCache()
                }
            })
        HandleMsg(sanbot, message)    
    
    })
	
    // Message log for analytic
    sanbot.onAnyMessage((anal) => { 
        messageLog(anal.fromMe, anal.type)
    })
}

//create session
create(options(true, start))
    .then((sanbot) => start(sanbot))
    .catch((err) => new Error(err))
