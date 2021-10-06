//|━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━|
//| Creator : Fadhil Graphy (penata ulang)
//| Developer : FebzGanz
//| Recode? Silahkan Tapi Jangan Di Apus  Creator
//| Sama Devoloper Nya (jangan numpang nama)
//|━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━|



//OY PANTEK JAN NYOLONG CONST YAK!! HARAMM BROOO
//HARAMMMMM
//SUBSCRIBE YT FEBZABOTZ
//JANGAN DI ILANGIN AUTHOR SMA DEVOLOPER NYA
//REUPLOAD? BOLEH ASALL TAG AE!!



const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

const { 
  color,
  bgcolor
} = require('./lib/color')
const { help } = require('./src/help')
const { animesaran2 } = require('./src/animesaran2')
const { newsCnn } = require('./plugins/cnn.js')

const { 
  wait, 
  getBuffer, 
  h2k, 
  generateMessageID,
  getGroupAdmins,
  NumberRandom,
  start,
  info,
  success,
  close,
} = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { jagoKata } = require('./plugins/jagokata.js')
const { convertSticker } = require("./plugins/swm.js")
const { webp2gifFile } = require("./plugins/gif.js")
const { mediafireDl } = require('./plugins/mediafire.js')
const { dafontSearch, dafontDown } = require('./plugins/dafont.js')
const { covid } = require('./plugins/covid.js')
const { herolist } = require("./plugins/herolist.js")
const { herodetails } = require("./plugins/herodetail.js")
const { y2mateA, y2mateV } = require('./plugins/y2mate.js')
const { fotoIg, videoIg } = require('./plugins/ig.js')
const { lirikLagu } = require('./plugins/lirik.js')
/*const { donasi } = require('./plugins/donasi.js')*/
const { fbDown } = require('./plugins/fb.js')
const { wikiSearch } = require('./plugins/wiki.js')
const { exec } = require('child_process')
const { recognize } = require('./lib/ocr')
const { removeBackgroundFromImageFile } = require('remove.bg')


const fs = require('fs')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const util = require('util')
/*const lolcatjs = require('lolcatjs')*/
const brainly = require('brainly-scraper')
const axios = require('axios')
const cheerio = require('cheerio') 
const googleImage = require('g-i-s')
const yts = require('yt-search')
const ggs = require('google-it')

const antilenk = JSON.parse(fs.readFileSync('./src/antilink.json'))
const simin = JSON.parse(fs.readFileSync('./src/simi.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const chatban = JSON.parse(fs.readFileSync('./src/banchat.json'))
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:FebzGanz\n' //jangan digantu nanti error nanges
            + 'ORG: Creator FebZabotz;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6285849261085:+62 858-4926-1085\n'  //kalo eror jan nanges
            + 'END:VCARD'

const vcard1 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Creator Bot\n' //Jangan diganti nanti eror nanges
            + 'ORG: Creator AmatsukazeBot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6283102650464:+62 831-0265-0464\n'  //kalo eror jan nanges
            + 'END:VCARD'

/*prefix = `#`*/
botname = 'FEBZABOTZ' //ganti jdu name bot Lu:v
blocked = []
fakereply = '© Created By FebzGanz' //jan di ganti lah, hormati yang buat!!
fake = 'FEBZABOTZ' //ganti serah lu

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

/*lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;*/

async function starts() {
	const client = new WAConnection()
	client.version = [2, 2119, 6]
	client.logger.level = 'warn'
	console.log('>', '[',color('YT DEVELOPER','yellow'),']','FEBZABOTZ')
    console.log('>', '[',color('IG DEVOLOPER','red'),']','FEBZABOTZ')
    console.log('>', '[',color('INFO UPDATE','blue'),']','YT FEBZABOTZ')
    /*lolcatjs.fromString('[DEV] FEBZGANZ')
	lolcatjs.fromString('[~>>] BOT Started!')
	lolcatjs.fromString('[HALLO] Semangat Ya Sayang Buat Botnya💙')
    console.log(banner.string)*/
	client.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' SUB YT FEBZABOTZ'))
	})

	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('connecting', () => {
	start('2', 'Connecting...')
	})
	client.on('open', () => {
	success('2', 'SUB YT FEBZABOTZ')
	}) 
	await client.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
	
client.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
	const mdata = await client.groupMetadata(anu.jid)
	console.log(anu)
	if (anu.action == 'add') {
	num = anu.participants[0]
	try {
	ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `Halo👋😇@${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}* jan lupa intro🤓`
	let buff = await getBuffer(ppimg)
	client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	} else if (anu.action == 'remove') {
	num = anu.participants[0]
	try {
	ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
	} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `Sayonara @${num.split('@')[0]}👋`
	let buff = await getBuffer(ppimg)
	client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	}
	} catch (e) {
	console.log('Error : %s', color(e, 'red'))
	}
	})

	client.on('CB:Blocklist', json => {
  if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	}
	})
	
	//--------------welcome------------
//━━━━━━━━━━[ masih eror om makek yang bisa dulu ]━━━━━━━━━━
//━━━━━━━━━━[ Next update coba di fix ]━━━━━━━━━━━━━━━━━━


/*client.on('group-participants-update',async (_client)=>{
		if(!__welcome.includes(_client.jid)) return;
		try{
			const conts = client.key.fromMe ? client.user.jid : client.contacts[_client.participants[0]] || { notify: jid.replace(/@.+/, '') };
			const pushname = client.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-';
			const mdata = client.groupMetadata(_client.jid);
			const serikat = mdata.participants.length;
			console.log(_client);
			switch(_client.action){
				case 'add':
					num = _client.participants[0];
					const teks_welcome = (__welcome_teks[_client.jid]!==undefined&&__welcome_teks[_client.jid].welcome!==undefined) ? __welcome_teks[_client.jid].welcome : `*𝚑𝚊𝚕𝚘 @${num.split("@")[0]} 👋 𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚍𝚊𝚝𝚊𝚗𝚐 𝚍𝚒 𝚐𝚛𝚘𝚞𝚙 ${mdata.subject}}*`;
					try {
						ppimg = await client.getProfilePicture(`${_client.participants[0].split('@')[0]}@c.us`);
					} catch(e) {
						ppimg = "http://hadi-api.herokuapp.com/favicon.ico";
					}
					buff = await getBuffer(`https://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeURIComponent(pushname)}&descriminator=${serikat-1}&memcount=${serikat}&gcname=${encodeURIComponent(mdata.subject)}&pp=${encodeURIComponent(ppimg)}&bg=${encodeURIComponent("https://image.freepik.com/free-vector/black-marble-style-background-with-golden-frame_1017-30295.jpg")}`);
					client.sendMessage(_client.jid,buff,MessageType.image,{caption: teks_welcome,contextInfo: {"mentionedJid": [num]}});
				break;
				case 'remove':
					num = _client.participants[0];
					const teks_goodbye = (__welcome_teks[_client.jid]==undefined&&__welcome_teks[_client.jid].goodbye==undefined) ? __welcome_teks[_client.jid].goodbye :  `*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚝𝚒𝚗𝚐𝚐𝚊𝚕 𝚋𝚎𝚋𝚊?? @${num.split("@")[0]} 𝚔𝚊𝚖𝚒 𝚍𝚊𝚛𝚒 𝚐𝚛𝚘𝚞𝚙 ${mdata.subject}} 𝚜𝚊𝚗𝚐𝚊𝚗 𝚜𝚎𝚗𝚊𝚗𝚐 𝚊𝚗𝚍𝚊 𝚙𝚎𝚛𝚐𝚒*` ;
					try {
						ppimg = await client.getProfilePicture(`${_client.participants[0].split('@')[0]}@c.us`);
					} catch(e) {
						ppimg = "http://hadi-api.herokuapp.com/favicon.ico";
					}
					teks = `*𝚑𝚊𝚕𝚘 @${num.split("@")[0]} 👋 𝚜𝚎𝚕𝚊??𝚊𝚝 𝚍𝚊𝚝𝚊𝚗𝚐 𝚍𝚒 𝚐𝚛𝚘𝚞𝚙 ${mdata.subject}}*`;
					buff = await getBuffer(`https://hadi-api.herokuapp.com/api/card/goodbye?nama=${encodeURIComponent(pushname)}&descriminator=${serikat}&memcount=${serikat - 1}&gcname=${encodeURIComponent(mdata.subject)}&pp=${encodeURIComponent(ppimg)}&bg=${encodeURIComponent("https://image.freepik.com/free-vector/black-marble-style-background-with-golden-frame_1017-30295.jpg")}`);
					client.sendMessage(_client.jid,buff,MessageType.image,{caption: teks_goodbye,contextInfo: {"mentionedJid": [num]}});
				break;
				case 'promote':
					num = _client.participants[0];
					const teks_promote = (__welcome_teks[_client.jid]==undefined&&__welcome_teks[_client.jid].promote==undefined) ? __welcome_teks[_client.jid].promote : `*𝚜𝚎𝚕𝚊𝚖𝚊𝚝 𝚋𝚛𝚘 @${num.split("@")[0]} 𝚔𝚊𝚛𝚎𝚗𝚊 𝚞𝚍𝚊𝚑 𝚖𝚎𝚗𝚓𝚊𝚍𝚒 𝚊𝚍𝚖𝚒𝚗 𝚐𝚛𝚘𝚞𝚙 ${mdata.subject}}*`;
					try {
						ppimg = await client.getProfilePicture(`${_client.participants[0].split('@')[0]}@c.us`);
					} catch(e) {
						ppimg = "http://hadi-api.herokuapp.com/favicon.ico";
					}
					buff = await getBuffer(`https://hadi-api.herokuapp.com/api/card/promote?nama=${encodeURIComponent(pushname)}&member=${serikat}&pesan=${encodeURIComponent("SELAMAT KARENA TELAH MENJADI ADMIN GROUP "+mdata.subject)}&gcname=${encodeURIComponent(mdata.subject)}&pp=${encodeURIComponent(ppimg)}&bg=${encodeURIComponent("https://image.freepik.com/free-vector/black-marble-style-background-with-golden-frame_1017-30295.jpg")}`);
					client.sendMessage(_client.jid,buff,MessageType.image,{caption: teks_promote,contextInfo: {"mentionedJid": [num]}});
				break;
				case 'demote':
					num = _client.participants[0];
					const teks_demote = (__welcome_teks[_client.jid]==undefined&&__welcome_teks[_client.jid].demote==undefined) ? __welcome_teks[_client.jid].demote : `*𝚂𝚊𝚋𝚊𝚛 𝚋𝚛𝚘 @${num.split("@")[0]} 𝚔𝚊𝚛𝚎𝚗𝚊 𝚞𝚍𝚊𝚑 𝚐𝚊𝚔 𝚕𝚊𝚐𝚒 𝚖𝚎𝚗𝚓𝚊𝚋𝚊𝚝 𝚜𝚎𝚋𝚊𝚐𝚊𝚒 𝚊𝚍𝚖𝚒𝚗 𝚐𝚛𝚘𝚞𝚙 ${mdata.subject}}*`;
					try {
						ppimg = await client.getProfilePicture(`${_client.participants[0].split('@')[0]}@c.us`);
					} catch(e) {
						ppimg = "http://hadi-api.herokuapp.com/favicon.ico";
					}
					buff = await getBuffer(`https://hadi-api.herokuapp.com/api/card/demote?nama=${encodeURIComponent(pushname)}&member=${serikat}&pesan=${encodeURIComponent("SELAMAT TURUN JABATAN DARI GROUP "+mdata.subject)}&gcname=${encodeURIComponent(mdata.subject)}&pp=${encodeURIComponent(ppimg)}&bg=${encodeURIComponent("https://image.freepik.com/free-vector/black-marble-style-background-with-golden-frame_1017-30295.jpg")}`);
					client.sendMessage(_client.jid,buff,MessageType.image,{caption: teks_demote,contextInfo: {"mentionedJid": [num]}});
				break;
			}
		} catch(e){console.log('Error : %s', color(e, 'yellow'))}
	});*/

//dah la males error

	client.on('chat-update', async (msg) => {
	try {
  if (!msg.hasNewMessage) return
  msg = JSON.parse(JSON.stringify(msg)).messages[0]
	if (!msg.message) return
	msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
	if (msg.key && msg.key.remoteJid == 'status@broadcast') return
	if (msg.key.fromMe) return
    global.prefix
	global.blocked
	global.botname
   const content = JSON.stringify(msg.message)
   const from = msg.key.remoteJid
   const type = Object.keys(msg.message)[0]
   const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
   const time = moment.tz('Asia/Jakarta').format('HH:mm DD-MM') + '-2021'
   const tanggal = moment.tz('Asia/Jakarta').format('DD-MM') + '-2021'
   const jams = moment.tz('Asia/Jakarta').format('HH:mm')
   const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
   const copid = await covid()
        const cmd = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#z$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#z$%^&.?/\\©^z+*,;]/gi) : '-'          	
	body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption.startsWith(prefix) ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption.startsWith(prefix) ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : ''
	bodi = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
   const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
   const args = body.trim().split(/ +/).slice(1)
   const isCmd = body.startsWith(prefix)
   const botNumber = client.user.jid
   const ownerNumber = ["6285849261085@s.whatsapp.net","6283102650464@s.whatsapp.net"]
   const bant = ["0@s.whatsapp.net"]
   const isGroup = from.endsWith('@g.us')
      number = msg.participant ? msg.participant : client.user.jid
	const sender = isGroup ? number : msg.key.remoteJid
	const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupId = isGroup ? groupMetadata.jid : ''
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	const isGroupAdmins = groupAdmins.includes(sender) || false
	const isWelkom = isGroup ? welkom.includes(from) : false
	const isNsfw = isGroup ? nsfw.includes(from) : false
	const isOwner = ownerNumber.includes(sender)
     const isBanChat = chatban.includes(from)
	if (isBanChat && !isOwner) return
	const bannedy = bant.includes(sender)
	let db_language = JSON.parse(fs.readFileSync('./src/language.json'))
          const sender_lang = {
               id: [],
               en: []
          }
          db_language.map(rest => {
               if (rest.lang == 'id') {
                    sender_lang.id.push(rest.sender)
               } else {
                    sender_lang.en.push(rest.sender)
               }
          })
          const listed_sender = [...sender_lang.id, ...sender_lang.en]
          const lang = listed_sender.includes(sender) ? sender_lang.en.includes(sender) ? 'en' : 'id' : 'id'
	const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
	}
	
//===================[ MESSAGE ]====================//
mess = {
wait: '*_Sabar Oy Lagi Di Proses....._*',
success: '*Nih Gan Dh Jadi✓*',
error: {
stick: 'Gomene Senpaii...',
Iv: 'Link Nya Emrror Senpai...'
},
only: {
group: 'Perintah ini hanya bisa di gunakan dalam group!',
ownerG: 'Perintah ini hanya bisa di gunakan oleh owner group!',
admin: 'Hanya Admin Yang Bisa Menggunakan Command Ini',
Badmin: 'Bot Harus Admin Untuk Perintah Ini'
}
}
	
const reply = (teks) => {
	client.sendMessage(from, teks, text, {quoted: msg})
	}
const sendFileFromStorage = (path, type, options) => {
client.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
console.log(e)
})
}

const sendFile = async (medya, namefile, capti, tag, vn) => {
  baper = await getBuffer(medya)
  mimi = ''
  if (namefile.includes('m4a')){
  client.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
  }
  if (namefile.includes('mp4')){
  client.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
  }
  if (namefile.includes('gif')){
  client.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
  } 
  if (namefile.includes('png')){
  client.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
  }
  
  if (namefile.includes('webp')){
  client.sendMessage(from, baper, sticker, {quoted: tag})
  } else {
  kobe = namefile.split(`.`)[1]
  client.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
  }
}

const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
	client.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	client.sendMessage(from, hasil, type, options).catch(e => {
	client.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
const downloadM = async(save) => {
encmedia = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
encmedia = isTagedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
if (save) return await client.downloadAndSaveMediaMessage(encmedia)
return await client.downloadMediaMessage(encmedia)
  }
  const sendMess = (hehe, teks) => {
 client.sendMessage(hehe, teks, text)
 }
  const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
	}
const fakeReply = (teks, target, teks2) => {
client.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
}
//━━━━━━━━━━━━━━━[ START FAKE REPLY ]━━━━━━━━━━━━━━━━━//
//=========FAKE TROLI=============

     /*      const ftroli = {
	                  key : {
                          participant : '0@s.whatsapp.net'
                            },
                    message: {
                    orderMessage: {
                            itemCount : 99,
                            status: 1,
                            surface : 1,
                            message: 'FebzGanz', //Kasih namalu
                            orderTitle: 'Bang',
                            thumbnail: fs.readFileSync('./src/image/salsa.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                             }
                           }
                         }*/
                         const _0x3fbd=['\x32\x51\x64\x69\x59\x4e\x4f','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a\x5c\x28\x20\x2a\x5c\x29','\x30\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74','\x31\x37\x37\x31\x37\x38\x4f\x56\x55\x45\x76\x61','\x57\x4f\x50\x6e\x75','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x2a\x29','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x46\x61\x64\x68\x69\x6c\x20\x47\x72\x61\x70\x68\x79','\x63\x61\x6c\x6c','\x32\x76\x41\x4f\x69\x58\x56','\x63\x68\x61\x69\x6e','\x31\x61\x63\x58\x59\x6d\x44','\x75\x64\x79\x72\x6b','\x6c\x65\x6e\x67\x74\x68','\x57\x79\x62\x6d\x46','\x42\x61\x6e\x67','\x31\x43\x72\x73\x4e\x76\x53','\x42\x68\x5a\x63\x4b','\x31\x32\x30\x30\x35\x5a\x69\x4e\x7a\x76\x4a','\x61\x63\x74\x69\x6f\x6e','\x76\x65\x77\x68\x48','\x67\x67\x65\x72','\x69\x6e\x69\x74','\x70\x4a\x4e\x61\x6f','\x31\x36\x32\x32\x4e\x48\x4f\x6e\x4c\x6f','\x63\x6f\x75\x6e\x74\x65\x72','\x61\x70\x70\x6c\x79','\x48\x71\x41\x54\x6e','\x73\x74\x72\x69\x6e\x67','\x32\x35\x39\x35\x33\x36\x70\x4b\x67\x4d\x6b\x4b','\x69\x6e\x70\x75\x74','\x69\x41\x67\x6e\x74','\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75\x65\x29\x20\x7b\x7d','\x41\x54\x69\x79\x51','\x32\x35\x32\x30\x31\x31\x71\x77\x45\x58\x71\x4f','\x39\x46\x66\x70\x62\x45\x55','\x74\x65\x73\x74','\x33\x30\x31\x31\x76\x66\x4a\x6d\x5a\x44','\x65\x50\x79\x6e\x58','\x5a\x78\x77\x71\x64','\x2e\x2f\x73\x72\x63\x2f\x69\x6d\x61\x67\x65\x2f\x73\x61\x6c\x73\x61\x2e\x6a\x70\x67','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x70\x67\x62\x6b\x57','\x33\x31\x38\x35\x38\x39\x77\x64\x4a\x5a\x6c\x43','\x32\x39\x6b\x74\x6b\x6a\x69\x67','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63\x74','\x64\x65\x62\x75','\x66\x41\x6f\x78\x44'];const _0x2dfd1d=_0x4c8a;(function(_0x18d7ad,_0x741b15){const _0x1700d4=_0x4c8a;while(!![]){try{const _0x102e82=parseInt(_0x1700d4(0x20b))*parseInt(_0x1700d4(0x1f0))+-parseInt(_0x1700d4(0x1ed))+parseInt(_0x1700d4(0x1fb))*parseInt(_0x1700d4(0x1fe))+parseInt(_0x1700d4(0x1ee))*-parseInt(_0x1700d4(0x20d))+parseInt(_0x1700d4(0x204))*parseInt(_0x1700d4(0x1f6))+-parseInt(_0x1700d4(0x206))*parseInt(_0x1700d4(0x1e8))+-parseInt(_0x1700d4(0x1e3))*parseInt(_0x1700d4(0x1f7));if(_0x102e82===_0x741b15)break;else _0x18d7ad['push'](_0x18d7ad['shift']());}catch(_0x76e6d1){_0x18d7ad['push'](_0x18d7ad['shift']());}}}(_0x3fbd,0x500eb));const _0x277125=function(){let _0x24af68=!![];return function(_0x1d047e,_0x364f3c){const _0x465c21=_0x24af68?function(){const _0x432ee1=_0x4c8a;if(_0x432ee1(0x1df)!==_0x432ee1(0x1df)){const _0x383b3d=_0x309f27[_0x432ee1(0x1e5)](_0x1cf974,arguments);return _0x1d7248=null,_0x383b3d;}else{if(_0x364f3c){if(_0x432ee1(0x1f2)===_0x432ee1(0x1f2)){const _0xedc2c9=_0x364f3c[_0x432ee1(0x1e5)](_0x1d047e,arguments);return _0x364f3c=null,_0xedc2c9;}else{if(_0x584f04)return _0x5a474e;else _0xd05b45(0x0);}}}}:function(){};return _0x24af68=![],_0x465c21;};}();function _0x4c8a(_0x22cc9f,_0x1b705b){return _0x4c8a=function(_0x34d5c6,_0x245aa1){_0x34d5c6=_0x34d5c6-0x1df;let _0x277125=_0x3fbd[_0x34d5c6];return _0x277125;},_0x4c8a(_0x22cc9f,_0x1b705b);}(function(){_0x277125(this,function(){const _0x424ae5=_0x4c8a;if(_0x424ae5(0x1fa)===_0x424ae5(0x1fa)){const _0x4e01f0=new RegExp(_0x424ae5(0x1fc)),_0xf4299e=new RegExp(_0x424ae5(0x200),'\x69'),_0x393c02=_0x245aa1(_0x424ae5(0x1e1));!_0x4e01f0[_0x424ae5(0x1ef)](_0x393c02+_0x424ae5(0x205))||!_0xf4299e[_0x424ae5(0x1ef)](_0x393c02+_0x424ae5(0x1e9))?_0x393c02('\x30'):_0x424ae5(0x207)!==_0x424ae5(0x1ff)?_0x245aa1():_0x344206();}else(function(){return!![];}[_0x424ae5(0x201)](_0x424ae5(0x1f9)+_0x424ae5(0x1e0))[_0x424ae5(0x203)](_0x424ae5(0x20e)));})();}());const ftroli={'\x6b\x65\x79':{'\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74':_0x2dfd1d(0x1fd)},'\x6d\x65\x73\x73\x61\x67\x65':{'\x6f\x72\x64\x65\x72\x4d\x65\x73\x73\x61\x67\x65':{'\x69\x74\x65\x6d\x43\x6f\x75\x6e\x74':0x63,'\x73\x74\x61\x74\x75\x73':0x1,'\x73\x75\x72\x66\x61\x63\x65':0x1,'\x6d\x65\x73\x73\x61\x67\x65':_0x2dfd1d(0x202),'\x6f\x72\x64\x65\x72\x54\x69\x74\x6c\x65':_0x2dfd1d(0x20a),'\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c':fs[_0x2dfd1d(0x1f4)](_0x2dfd1d(0x1f3)),'\x73\x65\x6c\x6c\x65\x72\x4a\x69\x64':_0x2dfd1d(0x1fd)}}};function _0x245aa1(_0x3c1b03){const _0x1a5d92=_0x2dfd1d;function _0x7aa2f(_0x3bfd2a){const _0x45ad45=_0x4c8a;if(typeof _0x3bfd2a===_0x45ad45(0x1e7))return function(_0x3b090a){}[_0x45ad45(0x201)](_0x45ad45(0x1eb))[_0x45ad45(0x1e5)](_0x45ad45(0x1e4));else(''+_0x3bfd2a/_0x3bfd2a)[_0x45ad45(0x208)]!==0x1||_0x3bfd2a%0x14===0x0?_0x45ad45(0x1ea)===_0x45ad45(0x1f5)?_0x4e613b('\x30'):function(){return!![];}[_0x45ad45(0x201)](_0x45ad45(0x1f9)+_0x45ad45(0x1e0))[_0x45ad45(0x203)](_0x45ad45(0x20e)):function(){const _0x3d6f5d=_0x45ad45;return _0x3d6f5d(0x1e2)!==_0x3d6f5d(0x1ec)?![]:!![];}[_0x45ad45(0x201)](_0x45ad45(0x1f9)+_0x45ad45(0x1e0))[_0x45ad45(0x1e5)](_0x45ad45(0x1f8));_0x7aa2f(++_0x3bfd2a);}try{if(_0x1a5d92(0x1e6)===_0x1a5d92(0x20c))_0x2ea3f1(0x0);else{if(_0x3c1b03)return _0x1a5d92(0x209)===_0x1a5d92(0x1f1)?_0x259160:_0x7aa2f;else _0x7aa2f(0x0);}}catch(_0x378539){}}

//==========FAKE TOKO===========
            const ftoko = { key: {
			           fromMe: false,
		               participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		                     },
		       message: {
			          "productMessage": {
				          "product": {
					          "productImage":{
						          "mimetype": "image/jpeg",
						          "jpegThumbnail": fs.readFileSync(`./blank.png`)
					            },
					          "title": fake,
					          "description": "Bot FebZabotz",
					          "currencyCode": "IDR",
					          "priceAmount1000": "50000000",
					          "retailerId": "Self Bot",
					          "productImageCount": 1
				             },
				             "businessOwnerJid": `0@s.whatsapp.net`
		                   }
	                    }
                     }
	/*client.sendMessage(from, teks, text, {quoted: contextInfo: {"forwardingScore": 999, "isForwarded": true}}}})
}*/

//━━━━━━━━━━━━━━━━[ END FAKE REPLY ]━━━━━━━━━━━━━━━━━━//

	colors = ['red','white','black','blue','yellow','green']
	const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	const isAntiLink = isGroup ? antilenk.includes(from) : false
	const isSimi = simin.includes(from)
	const isTagedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	const isTagedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	const isTagedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	const isTagedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
	const isTagedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	
	
	if (bannedy) return reply('kamu di bened')
	
	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
	
	if (!isGroup && !isCmd) console.log('\x1b[1;37m>', '[', '\x1b[1;31mRECV\x1b[1;37m', ']', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
	
  if (isCmd && isGroup) console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m',']', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
  
  if (!isCmd && isGroup) console.log('\x1b[1;37m>', '[', '\x1b[1;31mRECV\x1b[1;37m', ']', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
  
switch(command) {
	
	        case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {"contactMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakereply, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./blank.png')}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                 /*client.sendMessage(from, {displayname: "Jeff", vcard1: vcard}, MessageType.contact, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {"contactMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakereply, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./blank.png')}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})*/
                  client.sendMessage(from, 'Tinggalkan Pesan Kepada Owner Kami!', text, { quoted: msg, contextInfo: { forwardingScore: 508, isForwarded: true}} )
					break
            case 'help':
            case 'menu':
            case 'bantuan':
                    client.sendMessage(from, help(prefix, copid, tanggal, jams, botname), text, {quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
                    
            case 'animelist':
					client.sendMessage(from,'Cari manual ae next baru pke ui https://id.m.wikipedia.org/wiki/Daftar_anime', text, {quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
                    
            case 'whatanime':
					client.sendMessage(from,'Klik Link Untuk Mengetahui Animenya Link https://trace.moe', text, {quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
                    
            case 'randomhentong':
					client.sendMessage(from,'Next Update gw Tambahin', text, {quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
/*******EROR COBA KALIAN FIX********/
        /*       case 'changelanguage':
               case 'changelang':
                    try {
                         const mylang = lang
                         if (!listed_sender.includes(sender)) {
                              let objlang = {
                                   sender: sender,
                                   lang: mylang == 'id' ? 'en' : 'id'
                              }
                              db_language.push(objlang)
                              fs.writeFile('./src/language.json', JSON.stringify(db_language, null, 3), (e) => {
                                   if (e) return console.error(e)
                                   client.sendMesssage(from, mylang == 'id' ? '\`\`\`Successfully changed the language to English\`\`\` ✅' : '\`\`\`Berhasil mengubah bahasa ke indonesia\`\`\` ✅')
                              })
                         } else {
                              const index_lang_sender = listed_sender.indexOf(sender)
                              db_language[index_lang_sender].lang = mylang == 'id' ? 'en' : 'id'
                              fs.writeFile('./src/language.json', JSON.stringify(db_language, null, 3), (e) => {
                                   if (e) return console.error(e)
                                   client.sendMessage(from, mylang == 'id' ? '\`\`\`Successfully changed the language to English\`\`\` ✅' : '\`\`\`Berhasil mengubah bahasa ke indonesia\`\`\` ✅')
                              })
                         }
                    } catch (e) {
                         console.log(e)
                         client.sendMessage(from, `there is an error`)
                    }
                    break*/
                    
case 'bugreport':
if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
teks = args.join(' ')
reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
client.sendMessage('6285849261085@s.whatsapp.net',`*INFO DARI PENGGUNA*\n*Bug Report:* ${teks}`, text)
break
case 'request':
if (args.length < 1) return reply(`Ketik ${prefix}request [fiturnya] [Error Nya Gimana]`) 
teks = args.join(' ')
reply('Terima Kasih Telah Request Fitur Baru Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
client.sendMessage('6285849261085@s.whatsapp.net',`*INFO DARI PENGGUNA*\n*Request Fitur:* ${teks}`, text)
break
case 'brainly':
brainly(args.join(" ")).then(res => {
hmm = '────────────\n'
for (let Y of res.data) {
hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
reply(hmm)
console.log(res)
})
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 

*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}
`
reply(her)
break
case 'swm':
if (type === 'imageMessage' || isTagedImage){
var kls = body.slice(5)
var pack = kls.split("|")[0];
var author = kls.split("|")[1];
const getbuff = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const dlfile = await client.downloadMediaMessage(getbuff)
reply(mess.wait)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
client.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: msg})
} else {
reply('Format Salah!')
}
break
case 'tovideo':
if ((isMedia && !msg.message.videoMessage || isTagedSticker) && args.length == 0) {
const encmediaaa = isTagedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/mp4', filename: `stick.mp4`, quoted: msg, caption: 'success'})
fs.unlinkSync(mediaaa)
}
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `❒「  *Wiki*  」
├ *Judul :* ${res[0].judul}
└ *Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: msg, caption: result}).catch(e => {
  reply(result)
})
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('hmm')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('Mode Antilink sudah aktif')
antilenk.push(from)
fs.writeFileSync('./src/antilink.json', JSON.stringify(antilenk))
reply('Sukses mengaktifkan mode anti link di group ini')
} else if (Number(args[0]) === 0) {
antilenk.splice(from, 1)
fs.writeFileSync('./src/antilink.json', JSON.stringify(antilenk))
reply('Sukes menonaktifkan mode anti link di group ini')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'banchat':
if (!isOwner) return 
if (args.length < 1) return reply('hmm')
if (body.endsWith('true')) {
if (isBanChat) return reply('Silent Mode Telah Aktif Sebelumnya')
chatban.push(from)
fs.writeFileSync('./src/banchat.json', JSON.stringify(chatban))
reply('*Silent Mode True....*')
} else if (body.endsWith('false')) {
chatban.splice(from)
fs.writeFileSync('./src/banchat.json', JSON.stringify(chatban))
reply('*Silent Mode False....*')
} else {
reply(`Ketik ${prefix}banchat true Untuk Mengaktifkan dan false untung Menonaktifkan`)
}
break
case 'modesimi':
if (args.length < 1) return reply('hmm')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('Mode Simi sudah aktif')
simin.push(from)
fs.writeFileSync('./src/simi.json', JSON.stringify(simin))
reply('Sukses mengaktifkan mode simi')
} else if (Number(args[0]) === 0) {
simin.splice(from, 1)
fs.writeFileSync('./src/simi.json', JSON.stringify(simin))
reply('Sukes menonaktifkan mode simi')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'kodebahasa':
let LANGUAGES = `
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`
reply(`${LANGUAGES}`)
break
case 'restart':
if (!isOwner) return
reply(mess.wait)
exec(`node main`)
reply('_Restarting Bot Success_')
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `❒「  *${botname}*  」
├ *Nama :* ${res[0].nama}
├ *Ukuran :* ${res[0].size}
└ *Link :* ${res[0].link}

_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: msg})
break
case 'dafontdown':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('dafont')) return reply(mess.error.Iv)
teks = args.join(' ')
res = await dafontDown(teks) 
result = `❒「  *${botname}*  」
├ *Judul :* ${res[0].judul}
├ *Style :* ${res[0].style}
├ *Nama File :* ${res[0].output}
└ *Isi File :* ${res[0].isi}`
reply(result)
sendFileFromUrl(res[0].down, document, {mimetype: 'font/ttf', filename: res[0].output, quoted: msg})
break
case 'dafontsearch':
case 'dafonts':
if (args.length < 1) return reply('Apa Yang Mau Di Cari? ')
teks = args.join(' ')
reply(mess.wait)
res = await dafontSearch(teks)
a = res[0]
result = `❒「  *${botname}*  」
├ *Judul :* ${a.judul}
├ *Style :* ${a.style}
└ *Link :* ${a.link}
`
reply(result)
break
case 'blocklist':
teks = 'This is list of blocked number :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": blocked}})
break
case 'pinterest':
case 'pin':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${teks}`)
var string = JSON.parse(JSON.stringify(res.data))
var random =  string[Math.floor(Math.random() * string.length)]
sendFileFromUrl(random, image, {quoted: msg, caption: `*Hasil Pencarian Dari :* ${teks}`})
break
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: msg, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `❒「  *Google*  」
├ *Judul :* ${i.title}
├ *Link :* ${i.link}
└ *Keterangan :* ${i.snippet}


`
}
var akhir = kant.trim()
reply(akhir)
break
break
case 'ocr':
if ((isMedia && !msg.message.videoMessage || isTagedImage) && args.length == 0) {
const encmedia = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await client.downloadAndSaveMediaMessage(encmedia)
reply(mess.wait)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3}).then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
}).catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Tag Foto Yang Mau Dijadikan Text!')
}
break
case 'bcgc':
					if (!isOwner) return reply(`Khusu woner om`)
					if (args.length < 1) return reply('.......')
					anu = await groupMembers 
					tagss = msg.participant
					if (isMedia && !msg.message.videoMessage || isTagedImage) {
						const encmedia = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
case 's':
case 'stiker':
case 'sticker':
reply(mess.wait)
if ((isMedia && !msg.message.videoMessage || isTagedImage) && args.length == 0) {
const encmedia = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = NumberRandom('.webp')
await ffmpeg(`./${media}`).input(media).on('error', function (err) {
fs.unlinkSync(media)
reply(mess.error.stick)
}).on('end', function () {
client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(ran)
}).addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save(ran)
} else if ((isMedia && msg.message.videoMessage.seconds < 11 || isTagedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isTagedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await client.downloadAndSaveMediaMessage(encmedia)
	ran = NumberRandom('.webp')
	await ffmpeg(`./${media}`).inputFormat(media.split('.')[1]).on('error', function (err) {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
	}).on('end', function () {
client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(ran)
}).addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save(ran)
	} else if ((isMedia || isTagedImage) && args[0] == 'nobg') {
const media = await downloadM()
ranw = NumberRandom('.webp')
ranp = NumberRandom('.png')
reply(mess.wait)
keyrmbg = 'Your-ApiKey'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: msg})
})
})
} else {
reply(`Kirim Media dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim!`)
}
break
case 'tts':
if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: msg})
reply(mess.wait)
bogay = body.replace(prefix, '')
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: msg})
dtt = bogay.slice(8)
ranm = NumberRandom('.mp3')
dtt.length > 600 ? reply('Textnya kebanyakan om') : gtts.save(ranm, dtt, function() {
sendFileFromStorage(ranm, audio, {quoted: msg, mimetype: 'audio/mp4', ptt: true})
fs.unlinkSync(ranm)
})
break
case 'setprefix':
if (!isOwner) return
teks = args.join('') 
prefix = teks
reply(`_Change Prefix Success!! Prefix_ : *${prefix}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return client.eply(mess.only.admin)
teks = args.join(' ')
group = await client.groupMetadata(from);
member = group['participants']
jids = []
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, teks, text, {contexInfo: {mentionedJid: jids}, quoted: msg})
break
case 'sticktag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isTagedSticker) return reply('Tag Sticker Nya Oum')
teks = body.slice(9)
stik = await downloadM()
group = await client.groupMetadata(from);
member = group['participants']
jids = []
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, stik, sticker, {contexInfo: {mentionedJid: jids}, quoted: msg})
break
case 'facebook':
case 'fb':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(mess.error.Iv)
teks = args.join(' ')
reply(mess.wait)
res = await fbDown(teks).catch(e => {
  reply('_[ ! ] Error Terjadi Kesalahan Dalam Memasuki Web Atau Link Error_')
})
a = res[0]
result = `❒「  *${botname}*  」
├ *Judul :* ${a.judul}
├ *Source :* ${a.source}
├ *Ukuran :* ${a.size}
├ *Kualitas :* ${a.quality}
├ *Type :* ${a.type}
└ *Nama File :* ${a.judul}.${a.type}
`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: msg})
sendFileFromUrl(a.link, video, { mimetype: 'video/mp4',quoted: msg, filename: `${a.judul}.${a.type}`})
break
case 'ytmp3':
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args.join(' ')
reply(mess.wait)
res = await y2mateA(teks).catch(e => {
reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
result = `❒「  *${botname}*  」
├ *Judul :* ${res[0].judul}
├ *Ukuran :* ${res[0].size}
├ *Kualitas :* ${res[0].quality}kbps
├ *Nama File :* ${res[0].output}
└ *Output :* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_
`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: msg}).then((lalu) => {
sendFileFromUrl(res[0].link, document, {quoted: msg, mimetype: 'audio/mp3', filename: res[0].output})
})
break
case 'ytmp4':
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args.join(' ')
reply(mess.wait)
res = await y2mateV(teks).catch(e => {
reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
result = `❒「  *${botname}*  」
├ *Judul :* ${res[0].judul}
├ *Ukuran :* ${res[0].size}
├ *Kualitas :* ${res[0].quality}p
├ *Nama File :* ${res[0].output}
└ *Output :* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_
`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: msg}).then((lalu) => {
sendFileFromUrl(res[0].link, video, {quoted: msg, mimetype: 'video/mp4', filename: res[0].output})
})
break
case 'ig':
case 'instagram':
if (args.length < 1) return reply('Link Yang Mana? ')
if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply(mess.error.Iv)
teks = args.join(' ')
if (!teks.endsWith('-video') && !teks.endsWith('-foto')) return reply('Ketik -foto / -video Untuk Mengisi Option ')
reply(mess.wait)
if (teks.endsWith('-foto')) {
igl = teks.replace('-foto',"") 
res = await fotoIg(igl).catch(e => {
  reply('_[ ! ] Error Gagal Dalam Masuk Web Atau Link Error_')
})
sendFileFromUrl(res[0].foto, image, {quoted: msg})
}
if (teks.endsWith('-video')) {
igl = teks.replace('-video',"")
res = await videoIg(teks).catch(e => {
  reply('_[ ! ] Error Gagal Dalam Masuk Web Atau Link Error')
})
sendFileFromUrl(res[0].video, video, {mimetype: 'video/mp4', quoted: msg})
}
break
case 'play':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
/*reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)*/
let thumbInfo = `❒「  *Youtube Search*  」
├ *Judul :* ${res.all[0].title}
├ *ID Video :* ${res.all[0].videoId}
├ *Diupload Pada :* ${res.all[0].ago}
├ *Views :* ${res.all[0].views}
├ *Durasi :* ${res.all[0].timestamp}
├ *Channel :* ${res.all[0].author.name}
└ *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: msg, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate *Coba Ulangi*_')
})
sendFileFromUrl(res[0].link, audio, {quoted: msg, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
/*reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)*/
let thumbInfo = `❒「  *${botname}*  」
├ *Judul :* ${res.all[0].title}
├ *ID Video :* ${res.all[0].videoId}
├ *Diupload Pada :* ${res.all[0].ago}
├ *Views :* ${res.all[0].views}
├ *Durasi :* ${res.all[0].timestamp}
├ *Channel :* ${res.all[0].author.name}
└ *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: msg, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate*Coba Ulangi*_')
})
sendFileFromUrl(res[0].link, document, {quoted: msg, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'jagokata':
case 'quote':
case 'quotes':
case 'katamutiara':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
res = await jagoKata(teks)
let hasil = `*“* ${res[0].isi} *”*
_~${res[0].by}_`
reply(hasil)
break
case 'yts':
case 'ytsearch':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await yts(`${teks}`)
kant = ``
for (let i of res.videos) {
kant += `❒「  *${botname}*  」
├ *Judul :* ${i.title}
├ *ID Video :* ${i.videoId}
├ *Views :* ${i.views}
├ *Di Upload Pada : ${i.ago}
├ *Durasi :* ${i.timestamp}
├ *Channel :* ${i.author.name}
├ *Link Channel :* ${i.author.url}
└ *Link Video :* ${i.url}


`
}
var akhir = kant.trim()
sendFileFromUrl(res.all[0].image, image, {quoted: msg, caption: akhir})
break
case 'nulis':
case 'tulis':
if (args.length < 1) return reply('Yang mau di tulis apaan?')
teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
client.sendMessage(from, buff, image, {quoted: msg, caption: mess.success}).catch(e => {
  return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`Ketik *${prefix}setname Isi* Buat Edit Subjek Grup`)
teks = args.join(' ')
client.groupUpdateSubject(from, teks)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if ((isMedia && !msg.message.videoMessage || isTagedImage) && args.length == 0) {
encmedia = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
media = await client.downloadAndSaveMediaMessage(encmedia)
reply(mess.wait)
client.updateProfilePicture (from, media)
} else {
  reply(`Tag Foto Atau Kirim Foto Caption *${prefix}setpp*`)
}
break
case 'group':
case 'grup':
case 'gc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`Ketik *${prefix}grup buka* Untuk Buka Grup dan *${prefix}grup tutup* Untuk Tutup Grup`)
if (body.endsWith('buka')){
  client.groupSettingChange (from, GroupSettingChange.messageSend, false)
}
if (body.endsWith('Buka')){
  client.groupSettingChange (from, GroupSettingChange.messageSend, false)
}
if (body.endsWith('tutup')){
  client.groupSettingChange (from, GroupSettingChange.messageSend, true)
}
if (body.endsWith('Tutup')){
  client.groupSettingChange (from, GroupSettingChange.messageSend, true)
}
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`Ketik *${prefix}setdesc Isi* Buat Edit Desc Grup`)
teks = body.slice(9)
client.groupUpdateDescription(from, teks)
break
case 'tagall2':
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
reply(teks)
break
case 'tagall3':
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
					}
client.sendMessage(from, teks, text, {detectLinks: false, quoted: msg})
break
case 'clearall':
if (!isOwner) return 
anu = await client.chats.all()
client.setMaxListeners(25)
for (let _ of anu) {
client.deleteChat(_.jid)
}
reply('Sukses delete all chat :)')
break
case 'bc':
if (!isOwner) return
if (args.length < 1) return
anu = await client.chats.all()
if (isMedia && !msg.message.videoMessage || isTagedImage) {
buff = await downloadM()
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}

*_• Broadcast •_*`})
}
reply('Beres Lord Kirim Bc')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(4)}

*_• Broadcast •_*`)
}
reply('Beres Lord Kirim Bc')
}
break
case 'meadmin':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return
if (isGroupAdmins) return reply('Lu Dah Admin Om')
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.groupMakeAdmin(from, [sender])
reply('Sukses')
break
case 'promote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Promote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break
case 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Demote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick':

if (!isGroup) return reply(mess.only.group)

if (!isGroupAdmins) return reply(mess.only.admin)

if (!isBotGroupAdmins) return reply(mess.only.Badmin)

if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')

mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid

teks = '*Mengeluarkan :* '

for (let _ of mentioned) {

teks += `@${_.split('@')[0]}\n`

}

mentions(teks, mentioned, true)

mentioned.map(v => {

client.groupRemove(from, [v]).catch()

})

break
case 'listadmin':
if (!isGroup) return reply(mess.only.group)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await client.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case 'leave':
if (!isGroup) return reply(mess.only.group)
if (isGroupAdmins || isOwner) {
client.groupLeave(from)
 } else {
 reply(mess.only.admin)
 }
 break
 case 'joox':
 if (args.length < 1) return reply('Lagu Yang Dicari Nya Apa? ')
 teks = args.join(' ')
 axios.get(`https://tobz-api.herokuapp.com/api/joox?q=${teks}&apikey=BotWeA`).then((res) => {
 if (res.data.error) return reply(res.data.error) 
 if (!res.data.error) reply(`Ditemukan!!`) 
 let hasil = `*Judul:* ${res.data.result.judul} - ${res.data.result.album}
*Album:* ${res.data.result.album}
*Artis:* ${res.data.result.judul}
*Di Upload Pada:* ${res.data.result.dipublikasi}

*_Tunggu Proses Upload......._*`
client.sendMessage(from, { url : res.data.result.thumb }, image, {quoted: msg, caption: hasil})
client.sendMessage(from, { url : res.data.result.mp3 }, document, {mimetype: 'audio/mp3', filename: `${res.data.result.judul} - ${res.data.result.album}.mp3`,quoted: msg})
})
break
case 'tomp3':
case 'toaudio':
if ((isMedia && !msg.message.videoMessage || isTagedVideo)&& args.length == 0) {
reply(mess.wait)
const encmedia = isTagedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await client.downloadAndSaveMediaMessage(encmedia)
const ran = NumberRandom('.mp3')
exec(`ffmpeg -i ${media} -b:a 192K -vn ${ran}`, (err) => {
if (err) return reply('_[ ! ] Error Terjadi Kesalahan Dalam Mengconvert_')
sendFileFromStorage(ran, audio, {mimetype: 'audio/mp4', quoted: msg, filename: ran})
fs.unlinkSync(ran)
fs.unlinkSync(media)
})
} else {
  reply(`_Tag Video Atau Kirim Video Dengan Caption ${prefix}tomp3 Untuk Convert Ke Mp3_`)
}
break
case 'toimg':
case 'toimage':
if (!isTagedSticker) return reply('Tag Stiker Yang Akan Di Jadikan Foto')
reply(mess.wait)
const media = await downloadM('save')
ran = NumberRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('*_• Gagal •_*')
sendFileFromStorage(ran, image, {caption : mess.success, quoted: msg})
fs.unlinkSync(ran)
})
break
case 'ytdesc':
if (args.length < 1) return reply('Video/Link Yt Nya Mana? ')
teks = args.join(' ')
res = await yts(teks)
reply(res.all[0].description)
break
case 'tovn':
if (!isTagedAudio) return reply('Tag Audio Yang Mau Di Jadiin Vn')
reply(mess.wait)
aud = await downloadM()
client.sendMessage(from, aud, audio, {mimetype: 'audio/mp4',ptt : true})
break
case 'preview':
if (body.endsWith("-font")) {
if (args.length < 1) return reply('Teks Sama Ukuran Nya Mana? ')
if (!body.includes("|")) return reply(`Ketik *${prefix}preview Teks|Ukuran|Font -font`)
mentah = args.join(' ').replace("-font", "")
teks = mentah.split('|')
if (isNaN(parseInt(teks[1]))) return reply("Pake Angka Gan")
reply(mess.wait)
size = teks[1]
isi = teks[0]
res = await dafontSearch(teks[2])
a = res[0]
result = `❒「  *${botname}*  」
├ *Judul :* ${a.judul}
├ *Style :* ${a.style}
└ *Link :* ${a.link}
`
reply(result)
res = await dafontDown(a.link) 
bup = await getBuffer(res[0].down)
const hasil = await fs.writeFileSync(res[0].output, bup)
exec(`unzip ${res[0].output}`, (err) => {
if (err) return
fs.unlinkSync(res[0].output)
font = `./${res[0].isi[0]}.ttf`
exec(`magick 'blank.png' -gravity center -fill '#ffff' -font '${font}' -size 1280x710 -pointsize ${size} -interline-spacing 7.5 -annotate 0 '${isi}' 'quotes.jpg'`, (err) => {
if (err) return reply('err') 
sendFileFromStorage('quotes.jpg', image,{quoted: msg})
fs.unlinkSync('quotes.jpg')
fs.unlinkSync(font)
})
})
return
}
if(!isTagedDocument) return reply('Tag font Yang Akan Di Jadikan Foto')
if (args.length < 1) return reply('Teks Sama Ukuran Nya Mana? ')
if (!body.includes("|")) return reply(`Ketik *${prefix}preview Teks|Ukuran* Sambil Tag Font`)
mentah = args.join(' ')
teks = mentah.split('|')
if (isNaN(parseInt(teks[1]))) return reply("Pake Angka Gan")
reply(mess.wait)
font = await downloadM('save')
size = teks[1]
isi = teks[0]
exec(`magick 'blank.png' -gravity center -fill '#ffff' -font '${font}' -size 1280x710 -pointsize ${size} -interline-spacing 7.5 -annotate 0 '${isi}' 'quotes.jpg'`, (err) => {
if (err) return reply('err') 
sendFileFromStorage('quotes.jpg', image,{quoted: msg})
fs.unlinkSync('quotes.jpg')
fs.unlinkSync(font)
})
break
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Udah aktif um')
welkom.push(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✓')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'lirik':
if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `❒「  *${botname}*  」
└ *Lirik Lagu :*


${res[0].result}
`
reply(lirik)
})
break

case '$':
if (!isOwner) return 
const cod = args.join(' ')
exec(cod, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(`${stdout}`)
}
})
break
case 'shutdown':
if (!isOwner) return reply(mess.only.ownerB)
reply('Shutdown Bot In 3 Second....') 
setTimeout( () => {
client.close() }, 3000)
break
case 'wait':
if ((isMedia && !msg.message.videoMessage || isTagedImage) && args.length == 0) {
reply(mess.wait)
bang = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
foto = await client.downloadMediaMessage(bang)
await wait(foto).then(res => {
client.sendMessage(from, res.video, video, {quoted: msg, caption: res.teks.trim()})
}).catch(err => {
reply(err)
})
} else {
reply(`Kirim Foto Dengan Caption *${prefix}wait* Untuk Mencari Anime Dari Foto`)
}
break
default:
        if (waktu == 205300) {
         res = await newsCnn('nasional')
         data = res.slice(0, 5)
         for (let a of data){
         isi = `${a.judul}
  
      _Info Lebih Lanjut >>_ ${a.link}`
      buf = await getBuffer(a.thumb)
      return client.sendMessage("13479919177-1603694135@g.us", buf, image, {caption: isi})
        }
      }
      if (isSimi && bodi != undefined){
        res = await axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${bodi}`)
       reply(res.data.result)
       }
       if (bodi.startsWith('$')){
       if (!isOwner) return 
       var konsol = bodi.slice(1)
       exec(konsol, (err, stdout) => {
       if(err) return reply(`${err}`)
       if (stdout) {
       reply(`${stdout}`)
        }
      })
     } 
    if (bodi.startsWith('>')){
    if (!isOwner) return
    var konsol = bodi.slice(1)
    function _return(sul) {
    var sat = JSON.stringify(sul, null, 2)
    var bang = util.format(sat)
    return reply(bang)
     }
     try {
     reply(util.format(eval(`;(async () => { ${konsol} })()`)))
     console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     } catch (e) {
        err = String(e)
        reply(err)
     }
     } else {
     if (bodi != undefined) {
     console.log('>', '[',color('INFO','red'),']',`Message : ${bodi} From`, color(sender.split('@')[0]))
      }
      if (isGroup && isAntiLink && isUrl(bodi) && !isGroupAdmins && bodi != undefined) {
      var sial = sender.split('@')[0] + "@s.whatsapp.net"
      client.groupRemove(from, [sial])
       } 
     }
     if (!bodi.startsWith('$')) return
     if (!bodi.startsWith('>')) return
       }
      } catch (e) {
     const emror = String(e)
      if (emror.includes('startsWith')){ 
      return
       }
      if (emror.includes('this.isZero')){
      return
       }
      console.log('Error : %s', color(e, 'red'))
      console.log(e)
      
       }
  })
}
starts()

//BIG TQTO
// ZOBIN
// MHANKBARBAR
//TQTO
// ALL CREATOR BOT
// ALL PENYEDIA APIKEY
