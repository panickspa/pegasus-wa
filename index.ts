import { Client } from 'whatsapp-web.js';
// import qrcode from 'qrcode-terminal';
import qr from 'qr-image'
import { writeFileSync } from 'fs';

// const qr_ = qr.image('I love QR!', { type: 'png' });

const client = new Client({
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ],
    },
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', (qr_: string) => {
   let qrImage = qr.imageSync(qr_,{type: 'png'});
   writeFileSync("qr.png", qrImage);
});
client.on('message_create', (message: any) => {
	console.log(message.body);
});

client.initialize();
