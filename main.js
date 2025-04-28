import WAWebJS, { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { chainRequest } from './llmchain.js';
import sqlite3 from 'sqlite3'
import { publikasiToText, variableToText } from './converterApi.js';
import { appendFileSync, writeFileSync } from 'fs';
import QRCode from 'qrcode'

const sql = sqlite3.verbose()
const db = new sql.Database('data_10.db')
const client = new Client({
    takeoverTimeoutMs: 5000,
    authStrategy: new WAWebJS.LocalAuth({
        dataPath: "./auth"
    }),
});

/**
 * Callback when client is ready
 * @callback
 */
client.on('ready', () => {
    console.log('Client is ready!');
});

/**
 * Callback when authentication failuer
 * @callback
 */
client.on("auth_failure", (e) => {
    console.log('AUTHENTICATION FAILURE', e)
});

/**
 * Callback when bot disconected
 * @callback
 */
client.on("disconnected", (e) => {
    console.log('DISCONNECTED', e)
})

/**
 * Callback when bot authenticated
 * @callback
 */
client.on("authenticated", (e) => {
    console.log('AUTHENTICATED', e)
    client.pupPage.screenshot({
        path: "./wa_image_page.jpg"
    })
})

/**
 * Callback of Generating QR Code for login on Whatssapp
 * @callback
 */
client.on('qr', _qr => {
    QRCode.toFile('./qr.png', _qr)
    qrcode.generate(_qr, {small: true});
});

/**
 * Callback of receiving or creating message
 * @callback
 */
client.on('message_create', message => {
    reply(message)
});

/**
 * Replying message
 * @async
 * @param {WAWebJS.message} message - See https://docs.wwebjs.dev/Message.html
 */
async function reply(message) {
    if(!message.fromMe && !message.isStatus){
        console.log("getting chat")
        let main_chat = await message.getChat()
        let isGroup = await main_chat.isGroup
        console.log("get chat ", isGroup)
        if(isGroup == false || isGroup !== 'undefined'){
            console.log("get contact")
            let main_contact = await main_chat.getContact()
            console.log("getting contact")
            appendFileSync('log.jsonl', `\n${JSON.stringify({
                message: 'Error fetch publikasi',
                number: `${main_contact.number}`,
                name: `${main_contact.name}`,
                isBusiness: main_contact.isBusiness,
            })}`)
            console.log(main_contact.number, main_contact.number != '628562000729')
            if(!main_contact.isBusiness){
                if(message.body == ''){
                    let msg_reply = await chainRequest({
                        pertanyaan: 'halo',
                    },3,db)
                    let chat_rep = await client.getChatById(message.from)
                    chat_rep.sendMessage(msg_reply)
                }else{
                    let msg_reply = await chainRequest({
                        pertanyaan: message.body.slice(0, message.body.length > 200 ? 200:  message.body.length),
                    },3,db)
                    try{
                        if(typeof msg_reply == 'string'){
                            let chat_reply = await client.getChatById(message.from)
                            chat_reply.sendMessage(msg_reply)
                        }
                        else if(msg_reply.isKonsultasiDataStatistik && !msg_reply.isPencarianDataStatistik){
                            let chats_client = await client.getChats()
                            let idx = chats_client.findIndex(c_ => c_.name == '7106 Broadcast Konsultasi')
                            chats_client[idx].sendMessage(`Konsultasi dari wa.me/${main_contact.number}\n\nPertanyaan\n\n${message.body}`)
                            let chat_reply = await client.getChatById(message.from)
                            chat_reply.sendMessage(`Sebentar Petugas PST akan segera menghubungimu lebih lanjut melalui WA mu`)
                        }
                        else{
                            if(msg_reply.data[0].length > 0 && msg_reply.data[1].length > 0){
                                let p = await publikasiToText(msg_reply.data[0])
                                let v = await variableToText(msg_reply.data[1])
                                let chat_reply = await client.getChatById(message.from)
                                chat_reply.sendMessage(`Berikut mungkin data yang kamu cari \n\n*Data*\n\n${v}`)
                                // chat.sendMessage(`*Publikasi*\n\n\n${p}\n`)
                            }
                            if(msg_reply.data[0].length < 1 && msg_reply.data[1].length > 0){
                                let v = await variableToText(msg_reply.data[1])
                                let chat_reply = await client.getChatById(message.from)
                                chat_reply.sendMessage(`Berikut mungkin data yang kamu cari \n\n*Data*\n\n${v}`)
                            }
                            if(msg_reply.data[0].length > 0 && msg_reply.data[1].length < 1){
                                let p = await publikasiToText(msg_reply.data[0])
                                let chat_reply = await client.getChatById(message.from)
                                chat_reply.sendMessage(`*Publikasi*\n\n\n${p}\n`)
                            }
                        }
                    }
                    catch (error){
                        appendFileSync('log.jsonl', `\n${JSON.stringify({
                            message: 'Error fetch publikasi',
                            error: error
                        })}`);
                        console.log(error)
                        message.reply('Maaf, Pegasus lagi pusing coba kembali beberapa saat lagi.')
                    }
                }
            }
        }
        else{
            console.log(main_chat.isGroup, " from group")
        }
    }
}

client.initialize();
