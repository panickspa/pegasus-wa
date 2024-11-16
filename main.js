import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { doubleChain } from './llmchain.js';
import sqlite3 from 'sqlite3'
import { publikasiToText, variableToText } from './converterApi.js';
import qr from 'qr-image';
import { createWriteStream, writeFileSync } from 'fs';
import QRCode from 'qrcode'
const sql = sqlite3.verbose()
const db = new sql.Database('data_9.db')
const client = new Client({
    takeoverTimeoutMs: 5000,
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on("auth_failure", (e) => {
    console.log('AUTHENTICATION FAILURE', e)
});
client.on("disconnected", (e) => {
    console.log('DISCONNECTED', e)
})
client.on("authenticated", (e) => {
    console.log('AUTHENTICATED', e)
})
// client.on("")
function generateQR(_qr){
    QRCode.toFile('./qr.png', _qr)
    qrcode.generate(_qr, {small: true});
}

client.on('qr', _qr => {
    QRCode.toFile('./qr.png', _qr)
    qrcode.generate(_qr, {small: true});
});
client.on('message_create', message => {
    if(!message.fromMe){
        doubleChain({
            pertanyaan: message.body,
        },3,db)
            .then(e => {
                console.log(e)
                if(typeof e == 'string'){
                    client.getChatById(message.from).then((chat) => {
                        chat.sendMessage(e)
                    })
                }else{
                    if(e[0].length > 0 && e[1].length > 0){
                        publikasiToText(e[0]).then((p) => {
                            variableToText(e[1]).then((v) => {
                                client.getChatById(message.from).then((chat) => {
                                    chat.sendMessage(`Berikut mungkin data yang kamu cari \n\n*Data*\n\n${v}`).then(e => {
                                        chat.sendMessage(`*Publikasi*\n\n\n${p}\n`)
                                    })
                                })
                                // message.reply(`Berikut mungkin data yang kamu cari \n\n*Data*\n\n${v}\n\n*Publikasi*\n\n\n${p}\n`)
                            })
                        })
                        .catch(e => {
                            variableToText(e[1]).then((v) => {
                                // message.reply(`Berikut mungkin data yang kamu cari \n\n${v}`)
                                client.getChatById(message.from).then((chat) => {
                                    chat.sendMessage(`Berikut mungkin data yang kamu cari \n\n${v}`)
                                })
                            })
                        })
                    }
                    if(e[0].length < 1 && e[1].length == 0){
                        variableToText(e[1]).then((v) => {
                            // message.reply(`Berikut mungkin data yang kamu cari \n\n${v}`)
                            client.getChatById(message.from).then((chat) => {
                                chat.sendMessage(`Berikut mungkin data yang kamu cari \n\n${v}`)
                            })
                        })
                    }
                    if(e[0].length > 0 && e[1].length < 1){
                        publikasiToText(e[0]).then((p) => {
                            // message.reply(`Berikut mungkin data yang kamu cari \n\n${p}`)
                            client.getChatById(message.from).then((chat) => {
                                chat.sendMessage(`Berikut mungkin data yang kamu cari \n\n${p}`)
                            })
                        })
                    }
                }
            })
            .catch(e => {
                console.log(e)
                message.reply('Maaf, Pegasus lagi pusing coba kembali beberapa saat lagi.')
            });
    }
});

client.initialize();
