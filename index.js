//copy paste adalah hidupku
//free recode
//maaf ya saya masih belajar
//sc ini di recode zeetoyah
//nih sc ori nya https://github.com/Hexagonz/SELF-HX 
//thaks mau pake sc gw
//salam dunia percopy paste an
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const okta = moment.tz('Asia/Jakarta').format('HH:mm')
const time2 = moment().tz('Asia/Jakarta').format("HH:mm")
const tokyo = moment().tz('Asia/Tokyo').format("HH:mm")
//==========================================================≠=============//
banChats = false
offline = false
targetpc = '-'
owner = '6285755007597'//nomor owner
coowner = '6282140916309'//nomor coowner
namabot = 'Takio-Botz'
fake = `*Waktu : ${okta} WIB*`
zee1 = 'isi nama lu'//nama owner
numbernye = '0'
waktu = '-'
alasan = '-'
exif1 = 'Zeetoyah'//ini untuk wm colong
//==========================================================≠=============//
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: ${zee1}\n` 
            + `ORG: ${namabot} ;\n` 
            + `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n`
            + 'END:VCARD' 
//==========================================================≠=============//
module.exports = Christ = async (Christ, mek) => {
	try {
  if (!mek.hasNewMessage) return
       mek = mek.messages.all()[0]
	if (!mek.message) return
	if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
	const from = mek.key.remoteJid
	const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
	const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const type = Object.keys(mek.message)[0]        
  const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
  const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
  body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = Christ.user.jid
		const botNumberss = Christ.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await Christ.chats.all()
		const groupMetadata = isGroup ? await Christ.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
    const conts = mek.key.fromMe ? Christ.user.jid : Christ.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = mek.key.fromMe ? Christ.user.name : conts.notify || conts.vname || conts.name || '-'
    const amelokta = (`${coowner}@s.whatsapp.net`)
    const isamel = amelokta.includes(sender) || mek.key.fromMe
//==========================================================≠=============//
			var ase = new Date();

                        var waktoo = ase.getHours();
                        switch(waktoo){
               case 0: waktoo = "Midnight Time🌚 - Sleeping Sis :)"; break;
               case 1: waktoo = "Midnight Time🌚 - Sleeping Sis :)"; break;
               case 2: waktoo = "Early Time - Sleeping Sis :)"; break;
               case 3: waktoo = "Early Time - Sleeping Sis :)";break
               case 4: time = "Dawn"; break;
               case 5: time = "Dawn"; break;
               case 6: waktoo = "Good morning sis"; break;
               case 7: waktoo = "Good morning sis"; break;
               case 8: waktoo = "Good morning sis"; break;
               case 9: waktoo = "Good morning sis"; break;
               case 10: waktoo = "Good morning sis"; break;
               case 11: waktoo = "Good Afternoon Sis - Don't Forget to Pray Dzuhur"; break;
               case 12: waktoo = "Good Afternoon - Don't Forget to Pray Dzuhur"; break;
               case 13: waktoo = "Good Afternoon - Don't Forget to Pray Dzuhur"; break;
               case 14: waktoo = "Good Afternoon - Don't Forget to Rest :)"; break;
               case 15: waktoo = "Good Afternoon - Don't forget to take a shower and pray Asr"; break;
               case 16: waktoo = "Good Afternoon - Don't forget to take a shower and pray Asr"; break; 
               case 17: waktoo = "Good Afternoon - Towards Evening"; break;
               case 18: waktoo = "Maghrib Time - Don't Forget to Pray Maghrib Sis"; break;
               case 19: waktoo = "Good evening"; break;
               case 20: waktoo = "Good Night"; break; 
               case 21: waktoo = "Good Night"; break;
               case 22: waktoo = "Good Night - Don't Forget to Rest & Don't Stay Up late"; break;
               case 23: waktoo = "Midnight - Sleeping Sis, it's not good to stay up late :)"; break;
            }
            var tampilHari = "" + waktoo;



//==========================================================≠=============//
mess = {
			wait: 'wait a minute, please',
			success: 'succeed',
			wrongFormat: `*Wrong format, try again in the ${prefix}menu*`,
			only:`*this command is only for ${zee1}*`,
			error: {
				stick: '*its not a sticker*',
				Iv: '*your link is error*'
			},
			only: {
				group: 'This command can only be done in groups',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Christ.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Christ.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Christ.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Christ.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            Christ.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            Christ.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            Christ.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Christ.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Christ.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//==========================================================≠=============//
 cekafk(afk)
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
 if (!mek.key.fromMe){
 if (isAfk(mek.key.remoteJid)) return
 addafk(mek.key.remoteJid)
 heheh = ms(Date.now() - waktu) 
 Christ.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
 if (mek.key.remoteJid.endsWith('@g.us') && offline) {
 if (!mek.key.fromMe){
 if (mek.message.extendedTextMessage != undefined){
 if (mek.message.extendedTextMessage.contextInfo != undefined){
 if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
 for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
 if (ment === `${owner}@s.whatsapp.net`){
 if (isAfk(mek.key.remoteJid)) return
 addafk(mek.key.remoteJid)
 heheh = ms(Date.now() - waktu)
 Christ.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//==========================================================≠=============//
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
if (!mek.key.fromMe && !isamel && banChats === true) return
//==========================================================≠=============//
switch (command) {
    case 'menu':
    case 'help':
      
    	var menu = `
╭─「 *${tampilHari}* 」
│
│• Nama bot        : ${namabot} 
│• Prefix               : ( *${prefix}* )
│• waktu jakarta : ${time2}
│• waktu tokyo    : ${tokyo}
│• nama owner    : ${zee1}
│
╰────

╭──❲ OWNER MENU ❳
│• ${prefix}off
│• ${prefix}on
│• ${prefix}status
│• ${prefix}upswteks
│• ${prefix}upswimage
│• ${prefix}upswvideo
│• ${prefix}self
│• ${prefix}public
│• ${prefix}setthumb
│• ${prefix}setfakeimg
│• ${prefix}setreply
│• ${prefix}settarget
│• ${prefix}join
│• ${prefix}get
╰────────────────⊱ 	

╭──❲ MAKER MENU ❳
│• ${prefix}sticker
│• ${prefix}swm  <author|packname>
│• ${prefix}take
│• ${prefix}fdeface
│• ${prefix}emoji
│• ${prefix}tahta 
│• ${prefix}qrcode
│• ${prefix}attp 
╰────────────────⊱ 	

╭──❲ CONVERT MENU ❳
│• ${prefix}toimg
│• ${prefix}tomp3
│• ${prefix}tomp4
│• ${prefix}slow
│• ${prefix}fast
│• ${prefix}reverse
│• ${prefix}tourl
╰────────────────⊱ 	

╭──❲ FUN MENU ❳
│• ${prefix}fitnah
│• ${prefix}fitnahpc
│• ${prefix}kontak
│• ${prefix}truth
│• ${prefix}dare
│• ${prefix}timer
│• ${prefix}quotes
╰────────────────⊱ 	

╭──❲ TAG MENU ❳
│• ${prefix}hidetag
│• ${prefix}kontag
│• ${prefix}sticktag
│• ${prefix}totag
╰────────────────⊱ 	

╭──❲ DOWNLOAD MENU ❳
│• ${prefix}ytsearch (query)
│• ${prefix}ytmp3 (link)
│• ${prefix}ytmp4 (link)
│• ${prefix}play (judul)
│• ${prefix}video (judul)
│• ${prefix}ig
│• ${prefix}igstalk
│• ${prefix}twitter
│• ${prefix}tiktok
│• ${prefix}tiktokaudio
│• ${prefix}fb
│• ${prefix}brainly
│• ${prefix}image
│• ${prefix}anime
╰────────────────⊱ 	

╭──❲ OTHER ❳
│• ${prefix}owner
│• x code
╰────────────────⊱ 	

❏ *${namabot}* ❏`
//nase = await fs.readFileSync('./image/zeegans.jpg')
//nase = await getBuffer(`https://telegra.ph/file/433cc915666a7b4db36f8.jpg`)
//Christ.sendMessage(from, nase, image, { quoted: mek, caption: `[ *${namabot}* ]\n\n\n`+ menu })
        	fakestatus(menu)
           	break
 case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus('*YOU ARE ONLINE*')
            break       
 case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
 case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus('*YOU ARE OFFLINE*')
            break   
 case 'get':
  
            if(!q) return reply('the link?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
 case 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            Christ.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
 case 'sticktag':

            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker that has been sent*`)
            }
            break
 case 'totag':

            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'audio/mp4',
            	ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            reply(`reply image/sticker/audio/video with caption ${prefix}totag`)
            }
            break
 case 'fitnah':

            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            Christ.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
 case 'settarget':

            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
 case 'fitnahpc':

            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await Christ.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await Christ.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
 case 'tomp3':

            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Christ.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Christ.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
 case 'fast':

            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Christ.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Christ.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
 case 'slow':

            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Christ.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Christ.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
 case 'reverse':

            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Christ.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Christ.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
 case 'anime':

            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            Christ.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
 case 'kontak':

            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            Christ.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break
 case 'take':
 case 'colong':

    		    if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		        media = await Christ.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `${exif1}`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `${namabot}`
            require('./lib/fetcher.js').createExif(satu, dua)
			      require('./lib/fetcher.js').modStick(media, Christ, mek, from)
			      break
 case 'swm':

            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await Christ.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Christ.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            Christ.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await Christ.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Christ.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            Christ.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
 case 'upswteks':
            if (!mek.key.fromMe) return reply(mess.only)
            if (!q) return fakestatus('Isi teksnya!')
            Christ.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
 case 'upswimage':
            if (!mek.key.fromMe) return reply(mess.only)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Christ.downloadMediaMessage(swsw)
            Christ.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            Christ.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
 case 'upswvideo':
            if (!mek.key.fromMe) return reply(mess.only)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Christ.downloadMediaMessage(swsw)
            Christ.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            Christ.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
 case 'fdeface':

            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await Christ.downloadAndSaveMediaMessage(dipes) 
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		    var anu = {
        	  detectLinks: false
    	     	}
    	    	var mat = await Christ.generateLinkPreview(url)
    	     	mat.title = title;
    	    	mat.description = desc;
    	    	mat.jpegThumbnail = bufer;
   			    mat.canonicalUrl = buu; 
    		    Christ.sendMessage(from, mat, MessageType.extendedText, anu)
            break
 case 'public':
          	if (!mek.key.fromMe) return reply(mess.only)
          	if (banChats === false) return
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return reply(mess.only)
          	if (banChats === true) return
          	uptime = process.uptime()
         	  banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':

 	          //if (!isprem) return reply(`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
		      	if (!isGroup) return reply(mess.only.group)
			      var value = args.join(' ')
			      var group = await Christ.groupMetadata(from)
			      var member = group['participants']
			      var mem = []
			      member.map(async adm => {
			      mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			      })
			      var optionshidetag = {
			      text: value,
			      contextInfo: { mentionedJid: mem },
			      quoted: mek
			      }
			      Christ.sendMessage(from, optionshidetag, text)
			      break
 case 'play':

            //if (!isprem) return reply(`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
			      if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		    aramas = await yts(srch);
    	     	aramat = aramas.all 
   			    var mulaikah = aramat[0].url							
            try {
            yta(mulaikah)
            .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then(async (a) => {
            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
             const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
             sendMediaURL(from, thumb, captions)
             await sendMediaURL(from, dl_link).catch(() => reply('error'))
             })                
             })
             } catch (err) {
             reply(mess.error.api)
             }
             break  
 case 'video':

             //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
             if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
             var srch = args.join('')
             aramas = await yts(srch);
             aramat = aramas.all 
             var mulaikah = aramat[0].url                            
             try {
             ytv(mulaikah)
             .then((res) => {
             const { dl_link, thumb, title, filesizeF, filesize } = res
             axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
             .then(async (a) => {
             if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
             const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
             sendMediaURL(from, thumb, captions)
             await sendMediaURL(from, dl_link).catch(() => reply('error'))
             })                
             })
             } catch (err) {
             reply(mess.error.api)
             }
             break      
 case 'sticker': 
 case 'stiker':
 case 'sg':
 case 's':

             if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
             const media = await Christ.downloadAndSaveMediaMessage(encmedia)
             ran = '666.webp'
             await ffmpeg(`./${media}`)
             .input(media)
             .on('start', function (cmd) {
             console.log(`Started : ${cmd}`)
             })
             .on('error', function (err) {
             console.log(`Error : ${err}`)
             fs.unlinkSync(media)
             reply('error')
             })
             .on('end', function () {
             console.log('Finish')
             Christ.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
             fs.unlinkSync(media)
             fs.unlinkSync(ran)
                })
             .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              const media = await Christ.downloadAndSaveMediaMessage(encmedia)
              ran = '999.webp'
              reply(mess.wait)
              await ffmpeg(`./${media}`)
              .inputFormat(media.split('.')[1])
              .on('start', function (cmd) {
              console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
              console.log(`Error : ${err}`)
              fs.unlinkSync(media)
              tipe = media.endsWith('.mp4') ? 'video' : 'gif'
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
              })
              .on('end', function () {
              console.log('Finish')
              Christ.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
              fs.unlinkSync(media)
              fs.unlinkSync(ran)
              })
              .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
              } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
              }
              break               
 case 'toimg':

		        	if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
		         	reply(mess.wait)
	        		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		        	media = await Christ.downloadAndSaveMediaMessage(encmedia)
		        	ran = getRandom('.png')
		        	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		        	fs.unlinkSync(media)
		         	if (err) return reply('Yah gagal, coba ulangi ^_^')
		        	buffer = fs.readFileSync(ran)
		        	fakethumb(buffer,'NIH')
		        	fs.unlinkSync(ran)
	         		})
		         	break
 case 'ytsearch':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
		         	if (args.length < 1) return reply('Tolong masukan query!')
		         	var srch = args.join('');
		        	try {
            	var aramas = await yts(srch);
   			      } catch {
            	return await Christ.sendMessage(from, 'Error!', MessageType.text, dload)
    		      }
    		      aramat = aramas.all 
    	       	var tbuff = await getBuffer(aramat[0].image)
    	      	var ytresult = '';
    	      	ytresult += '「 *YOUTUBE SEARCH* 」'
    	      	ytresult += '\n________________________\n\n'
   			      aramas.all.map((video) => {
            	ytresult += '❏ Title: ' + video.title + '\n'
              ytresult += '❏ Link: ' + video.url + '\n'
              ytresult += '❏ Durasi: ' + video.timestamp + '\n'
              ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    	      	});
    	      	ytresult += '◩ *SELF-BOT*'
    	      	await fakethumb(tbuff,ytresult)
			        break
	case 'setreply':
	case 'setfake':
//
              if (!mek.key.fromMe) return reply(mess.only)
		         	if (!q) return fakegroup(mess.wrongFormat)
		        	fake = q
		        	fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
		        	break
 case 'setfakeimg':
//
              if (!mek.key.fromMe) return reply(mess.only)
            	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
             	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		        	delb = await Christ.downloadMediaMessage(boij)
			        fs.writeFileSync(`./stik/fake.jpeg`, delb)
		         	fakestatus('Sukses')
             	} else {
              reply(`Kirim gambar dengan caption ${prefix}sethumb`)
            	}
			        break	
 case 'setthumb':
//
              if (!mek.key.fromMe) return reply(mess.only)
	            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
             	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		         	delb = await Christ.downloadMediaMessage(boij)
			        fs.writeFileSync(`./stik/thumb.jpeg`, delb)
		         	fakestatus('Sukses')
             	} else {
              reply(`Kirim gambar dengan caption ${prefix}sethumb`)
             	}
			        break	
 case 'ytmp4':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
		        	if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
		        	let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
	         		if (!isLinks2) return reply(mess.error.Iv)
		       		try {
		      		reply(mess.wait)
		      		ytv(args[0])
			      	.then((res) => {
			      	const { dl_link, thumb, title, filesizeF, filesize } = res
			      	axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
			      	.then((a) => {
			      	if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
			       	const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				      sendMediaURL(from, thumb, captionsYtmp4)
				      sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				      })		
				      })
				      } catch (err) {
			        reply(mess.error.api)
			       	}
				      break
 case 'emoji':

		        	if (!q) return fakegroup('emojinya?')
		         	qes = args.join(' ')
		         	emoji.get(`${qes}`).then(emoji => {
		        	teks = `${emoji.images[4].url}`
    	       	sendStickerFromUrl(from,`${teks}`)	
    	      	console.log(teks)
   		       	})
    		      break
 case 'ytmp3':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
		         	if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
		         	let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
		        	if (!isLinks) return reply(mess.error.Iv)
		       		try {
			       	reply(mess.wait)
			       	yta(args[0])
		       		.then((res) => {
			      	const { dl_link, thumb, title, filesizeF, filesize } = res
			      	axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
			      	.then((a) => {
			        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
			      	const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			       	sendMediaURL(from, thumb, captions)
			      	sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
			       	})
			       	})
			       	} catch (err) {
			      	reply(mess.error.api)
			      	}
			       	break
 case 'image':

              if (args.length < 1) return reply('Masukan teks!')
              const gimg = args.join('');
              reply(mess.wait)
              gis(gimg, async (error, result) => {
              n = result
              images = n[Math.floor(Math.random() * n.length)].url
              Christ.sendMessage(from,{url:images},image,{quoted:mek})
              });
              break
 case 'tiktok':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
 	           	if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 	          	if (!q) return fakegroup('Linknya?')
 		          reply(mess.wait)
		          tik.ssstik(`${args[0]}`)
    	      	.then(result => {
    	      	console.log(result)
    	      	const { videonowm, videonowm2, text } = result
    	      	axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    	      	.then(async (a) => {
    	      	me = `*Title* : ${text}\n*Link* : ${a.data}`
		          Christ.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		          })
	          	})
     	      	.catch(e => console.log(e))
          		break
 case 'tiktokaudio':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
 		          if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 	           	if (!q) return fakegroup('Linknya?')
 	          	reply(mess.wait)
 	          	tik.ssstik(`${args[0]}`)
    	      	.then(result => {
    	      	const { music,text } = result
	          	Christ.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
	           	})
     	      	.catch(e => console.log(e))
          		break
 case 'brainly':

		        	if (args.length < 1) return reply('Pertanyaan apa')
            	brien = args.join(' ')
        			brainly(`${brien}`).then(res => {
		        	teks = '❉───────────────────────❉\n'
		        	for (let Y of res.data) {
		        	teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
		        	}
		        	Christ.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
              })              
		        	break
 case 'ig':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
              if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
              if (!q) return fakegroup('Linknya?')
              reply(mess.wait)
	            igdl(args[0])
	            .then(async(result) => {
              for (let ink of result.url_list)	{
              if (ink.includes('.mp4')){
              const igvdl = await getBuffer(ink)	
	            Christ.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:mek,caption:'Nih'})
              } else if (ink.includes('.jpg')){
              const igpdl = await getBuffer(ink)
              Christ.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:mek,caption:'Nih'})
	            }
              }
        	    })
	            break
 case 'igstalk':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
              if (!q) return fakegroup('Usernamenya?')
              ig.fetchUser(`${args.join(' ')}`).then(Y => {
              console.log(`${args.join(' ')}`)
              ten = `${Y.profile_pic_url_hd}`
              teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
              sendMediaURL(from,ten,teks) 
              })      
              break    
 case 'fb':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
              if (!q) return reply('Linknya?')
              if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
              reply(mess.wait)
              te = args.join(' ')
              fakestatus(mess.wait)
              Fb.getInfo(`${te}`)
              .then(G => {
              ten = `${G.download.sd}`
              tek = `${G.title}`
              sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
              })
              break    
 case 'term':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
		        	if (!q) return fakegroup(mess.wrongFormat)
	        		exec(q, (err, stdout) => {
	        		if (err) return fakegroup(`SELF-BOT:~ ${err}`)
	        		if (stdout) {
	        		fakegroup(stdout)
	        		}
         			})
		          break 
 case 'join':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
              try {
              if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
              hen = args[0]
              if (!q) return fakestatus('Masukan link group')
              var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
              if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
              var response = await Christ.acceptInvite(codeInvite)
              fakestatus('SUKSES')
              } catch {
              fakegroup('LINK ERROR!')
              }
              break
 case'twitter':

              //if (!isprem) return (`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
              if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
              if (!q) return fakegroup('Linknya?')
              ten = args[0]
              var res = await twitterGetUrl(`${ten}`)
              .then(g => {
              ren = `${g.download[2].url}`
              sendMediaURL(from,ren,'DONE')
              })
              break
 case 'runtime':
 case 'test':

            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
 case 'speed':
 case 'ping':

	      		const timestamp = speed();
      			const latensi = speed() - timestamp
      			exec(`neofetch --stdout`, (error, stdout, stderr) => {
		      	const child = stdout.toString('utf-8')
	       		const teks = child.replace(/Memory:/, "Ram:")
	      		const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
	      		fakegroup(pingnya)
	      		})
      			break  
 case 'totag':

            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
             } else{
            reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
 case 'tomp4':

            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await Christ.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
 case 'tourl':

            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Christ.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
 case 'inspect':

            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await Christ.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
            ${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
            *Nama Gc* : ${subject}
            *Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
            *Jumlah Member* : ${size}
            ${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
            *Id desc* : ${descId}
            ${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
            for ( let y of participants) {
            par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
            jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
            }
            jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            Christ.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
            } catch {
            reply('Link error')
            }
            break
//==========================================================≠=============//
case 'tagall':

            //if (!isprem) return reply(`Maaf kamu belum di izinkan menggunakan fitur ini oleh ${zee1}`)
  		     	if (!isGroup) return reply(mess.only.group)
			   		members_id = []
		  			teks = (args.length > 1) ? body.slice(8).trim() : ''
	  				teks += '\n\n'
				  	for (let mem of groupMembers) {
		 				teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
	  				}
			  		mentions(teks, members_id, true)
		  			break
case 'grup':
case 'group':

            if (args.length < 1) return reply('grupnya mau di buka apa di tutup om?')
		        if (!mek.key.fromMe) return reply(mess.only.owner)
		       	if (args[0] === 'buka') {
				    reply(`*BERHASIL MEMBUKA GROUP*`)
						Christ.groupSettingChange(from, GroupSettingChange.messageSend, false)
				  	} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						Christ.groupSettingChange(from, GroupSettingChange.messageSend, true)
				  	}
				  	break      
case 'loli':

  //if (!isprem) return reply('*Fitur ini khusus elite !!!*')
				Christ.updatePresence(from, Presence.composing)
				reply('*Elite user detected, Wait a minute....*')
				 data = fs.readFileSync('./database/loli.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 loli = await getBuffer(randKey.result)
                 Christ.sendMessage(from, loli, image,  {quoted: mek, caption:'*Ini kak 😊*'})
	        			break  
case 'attp':

                     if (args.length < 1) return reply('Kasih teks lah omm')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     Christ.sendMessage(from, atetepe, sticker, {quoted: mek})
                     break
case 'asupan':

        //if (!isprem) return reply('*Fitur ini khusus elite !!!*')
				Christ.updatePresence(from, Presence.composing)
				reply('*Elite user detected, Wait a minute....*')
				 data = fs.readFileSync('./database/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asupan = await getBuffer(randKey.result)
                 Christ.sendMessage(from, asupan, video,  {quoted: mek, mimetype: 'video/mp4', ptt:true})
	        			break  
case 'setimg':

	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Christ.downloadMediaMessage(boij)
			fs.writeFileSync(`./image/zeegans.jpg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}setimg`)
          	}
			break	
case 'truth':

  if (!isGroup) return reply(mess.only.group)
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await fs.readFileSync('./image/truth.jpeg');
		Christ.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: mek })
		break
		case 'dare':

		  if (!isGroup) return reply(mess.only.group)
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		tod = await fs.readFileSync('./image/dare.jpeg');
		Christ.sendMessage(from, tod, image, { quoted: mek, caption: '*DARE*\n\n'+ der })
		break      
case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  Christ.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
					break    
case 'timer':

				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
case 'qrcode':

			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return Christ.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
			const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			Christ.sendMessage(from, buff, image, {quoted: mek})
			break
case 'quotes':

					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await fs.readFileSync('./image/zeegans.jpg');
					Christ.sendMessage(from, nase, image, { quoted: mek, caption: '[ *Quotes* ]\n\n'+ nsh })
					break
case 'tahta':

					if (args.length < 1) return reply('masukan teks')
					Zee = body.slice(7)
					reply(mess.wait)
					amel = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${Zee}&apikey=apivinz`)
					Christ.sendMessage(from, amel, image, {caption: `Harta tahta ${Zee}`, quoted: mek})
					break
case 'listadmin':
  
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'clear':
            if (!mek.key.fromMe) return 
            zii = '-'
            fakestatus('*SUCCES*')
            break       
case 'tutuptime':
         if (!mek.key.fromMe) return reply(mess.only)
              Christ.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin *${pushname}*\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					Christ.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break











//==========================================================≠=============//
default:
if (budy.includes('Bot')) {
                  zee = fs.readFileSync('./image/zeegans.jpg')
                  teks = `*${namabot} online*\n*jan sepam kak!!*\n*Atau bakal ku laporin ${zee1}*`
              Christ.sendMessage(from, zee, image, { quoted: mek, caption: `[ *${namabot}* ]\n\n\n`+ teks })
                  //reply('.menu')
                  }
if (budy.includes('Assalamualaikum')) {
                  fakestatus(`*Wa'alaikumsalam*`)
                  }
 if (budy.includes(`@${owner}`)) {
                  fakestatus(`Ga usah nge tag!!`)
                  }
if (budy.includes("Anjing")) {
                  fakestatus(`Jangan ngomong kasar kak!!`)
                  }
if (budy.includes("anjing")) {
                  fakestatus(`Jangan ngomong kasar kak!!`)
                  }
if (budy.includes("Ajg")) {
                  fakestatus(`Jangan ngomong kasar kak!!`)
                  }
if (budy.includes("ajg")) {
                  fakestatus(`Jangan ngomong kasar kak!!`)
                  }


if (budy.startsWith('x')){
try {
return Christ.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[Takio-Botz-v1]', 'cyan'), color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'blue'))
        }
	// console.log(e)
	}
}
