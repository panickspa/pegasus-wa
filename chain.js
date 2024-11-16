import sqlite3 from 'sqlite3'
import { config } from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai';

config()

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// import {removeStopwords, ind} from 'stopword'
const sql = sqlite3.verbose()

const db = new sql.Database('./data_new.db', (e)=>{
    // console.log(e)
})
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  },);

export async function getSchema() {
    return new Promise((res, rej) => {
        db.serialize(() => {
            db.run(`SELECT name, sql FROM sqlite_schema where sql is not null and name is not 'sqlite_sequence' and type is 'table'`,(e, err) => {
                if(err){
                    rej(err)
                }
                res(e)
            })  
          })
    })
}

export async function getData(query) {
    return new Promise((res, rej) => {
        db.all(query,[],(err, rows) => {
            if(err) rej(err)
            else res(rows)
        })
    })
    
}
export async function chain_variable(pertanyaan, attempt=7) {
    let a = 0
    // const pertanyaan = ``
    const prompt = `Berdasarkan schema tabel dibawah, tulis sebuah SQL query SQLite 3 dengan berdasarkan dibawah berikut: 
    -------------------- 
    SQL TEMPLATE: SELECT * FROM variable WHERE variable MATCH 'judul: NEAR($topik)' limit 25
    -------------------- 
    QUESTION: var_id dan judul yang sesuai dengan topik data dari pertanyaan ${pertanyaan}
    -------------------- 
    SQL QUERY:`
    const parts = [
        {text: "input: Who are you ?"},
        {text: "output: I'm Pegasus, I am part of BPS Minahasa Utara Regency, How can I help you?"},
        {text: "input: Siapa kamu ?"},
        {text: "output: Saya pegasus, saya pegawai virtual dan bagian dari BPS Kabupaten Minahasa Utara, apa yang saya perlu bantu?"},
        {text: "input: bagaimana cara mengetahui pertumbuhan ekonomi?"},
        {text: "output: pertumbuhan ekonomi dapat diketahui dengan laju pertumbuhan PDRB (Produk Domestik Regional Bruto) atau PDB (Produk Domestik Bruto) untuk skala nasional"},
        {text: `input: Berdasarkan schema tabel dibawah, tulis sebuah SQL query SQLite 3 dengan berdasarkan dibawah berikut: 
    -------------------- 
    SQL TEMPLATE: SELECT * FROM publikasi WHERE publikasi MATCH 'text: NEAR($topik)'
    -------------------- 
    QUESTION: title, page, dan text yang sesuai dengan topik data dari pertanyaan 'berapa pertumbuhan ekonomi?'
    -------------------- 
    SQL QUERY:`},
        {text: `output: {sql: "SELECT * FROM publikasi WHERE publikasi MATCH 'text: NEAR(pertumbuhan produk domestik regional bruto atas dasar harga konstan minahasa utara)'", topik: "pertumbuhan ekonomi"}`},
        {text: `input: ${prompt}`},
        {text: "output: "},
      ];
    while(a < attempt){
        try {
            const q = await model.generateContent({
                contents: [{role: 'user', parts: parts}],
                generationConfig:{
                    responseMimeType: 'application/json',
                    responseSchema:{
                        type: "object",
                        properties: {
                            sql: {
                                type: "string"
                            },
                            topik:{
                                type: "string"
                            }
                        }
                    }
                }
            })
            let q_text = q.response.text()
            let q_json = JSON.parse(q_text)
            let data = []
            try {
                data = await getData(q_json.sql.replaceAll(/NEAR\(\'/g,"NEAR(").replaceAll(/\'\)\'/g,")'"))
                console.log(q_json.sql.replaceAll(/NEAR\(\'/g,"NEAR(").replaceAll(/\'\)\'/g,")'"), data.length)
            } catch (error) {
                data = []
            }finally{
                if(data.length > 0){
                    a = attempt
                    return data
                }
            }
        } catch (error) {
            console.log("error", error)
        }
        a = a+1
    }    
}

export async function chain_publikasi(pertanyaan, attempt=7) {
    let a = 0
    // const pertanyaan = ``
    const prompt = `Berdasarkan schema tabel dibawah, tulis sebuah SQL query SQLite 3 dengan berdasarkan dibawah berikut: 
    -------------------- 
    SQL TEMPLATE: SELECT * FROM publikasi WHERE publikasi MATCH 'text: NEAR($topik)'
    -------------------- 
    QUESTION: title, page, dan text yang sesuai dengan topik data dari pertanyaan ${pertanyaan}
    -------------------- 
    SQL QUERY:`
    const parts = [
        {text: "input: Who are you ?"},
        {text: "output: I'm Pegasus, I am part of BPS Minahasa Utara Regency, How can I help you?"},
        {text: "input: Siapa kamu ?"},
        {text: "output: Saya pegasus, saya pegawai virtual dan bagian dari BPS Kabupaten Minahasa Utara, apa yang saya perlu bantu?"},
        {text: "input: bagaimana cara mengetahui pertumbuhan ekonomi?"},
        {text: "output: pertumbuhan ekonomi dapat diketahui dengan laju pertumbuhan PDRB (Produk Domestik Regional Bruto) atau PDB (Produk Domestik Bruto) untuk skala nasional"},
        {text: `input: Berdasarkan schema tabel dibawah, tulis sebuah SQL query SQLite 3 dengan berdasarkan dibawah berikut: 
    -------------------- 
    SQL TEMPLATE: SELECT * FROM publikasi WHERE publikasi MATCH 'text: NEAR($topik)'
    -------------------- 
    QUESTION: title, page, dan text yang sesuai dengan topik data dari pertanyaan 'berapa pertumbuhan ekonomi?'
    -------------------- 
    SQL QUERY:`},
        {text: `output: {sql: "SELECT * FROM publikasi WHERE publikasi MATCH 'text: NEAR(pertumbuhan produk domestik regional bruto atas dasar harga konstan minahasa utara)'", topik: "pertumbuhan ekonomi"}`},
        {text: `input: ${prompt}`},
        {text: "output: "},
      ];
    while(a < attempt){
        try {
            const q = await model.generateContent({
                contents: [{role: 'user', parts: parts}],
                generationConfig:{
                    responseMimeType: 'application/json',
                    responseSchema:{
                        type: "object",
                        properties: {
                            sql: {
                                type: "string"
                            },
                            topik:{
                                type: "string"
                            }
                        }
                    }
                }
            })
            let q_text = q.response.text()
            let q_json = JSON.parse(q_text)
            let data = []
            try {
                data = await getData(
                    q_json.sql.replaceAll(/NEAR\(\'/g,"NEAR(").replaceAll(/\'\)\'/g,")'"))
                console.log(q_json.sql.replaceAll(/NEAR\(\'/g,"NEAR(").replaceAll(/\'\)\'/g,")'"), data.length) 
            } catch (error) {
                data = []
            } finally{
                if(data.length > 0){
                    a = attempt
                    let titles = [...new Set(data.map(e => e.title))]
                    return (titles)
                }  
            }
        } catch (error) {
            console.log("error", error)
        }
        a = a+1
    }    
}

async function  doubleChain(pertanyaan, attempt=7) {
    let a = 0
    // const pertanyaan = ``
    const prompt = `Berdasarkan schema tabel dibawah, tulis sebuah SQL query SQLite 3 dengan berdasarkan dibawah berikut: 
    -------------------- 
    SQL TEMPLATE PUBLIKASI: SELECT * FROM publikasi WHERE publikasi MATCH 'text: NEAR($topik)'
    --------------------
    SQL TEMPLATE VARIABLE: SELECT * FROM variable WHERE variable MATCH 'judul: NEAR($topik)' limit 25
    -------------------- 
    QUESTION: cari data di tabel publikasi dan variable yang sesuai dengan topik data dari pertanyaan '${pertanyaan}'
    -------------------- 
    SQL QUERY:`
    const parts = [
        {text: "input: Who are you ?"},
        {text: "output: I'm Pegasus, I am part of BPS Minahasa Utara Regency, How can I help you?"},
        {text: "input: Siapa kamu ?"},
        {text: "output: Saya pegasus, saya pegawai virtual dan bagian dari BPS Kabupaten Minahasa Utara, apa yang saya perlu bantu?"},
        {text: "input: bagaimana cara mengetahui pertumbuhan ekonomi?"},
        {text: "output: pertumbuhan ekonomi dapat diketahui dengan laju pertumbuhan PDRB (Produk Domestik Regional Bruto) atau PDB (Produk Domestik Bruto) untuk skala nasional"},
        {text: `input: Berdasarkan schema tabel dibawah, tulis sebuah SQL query SQLite 3 dengan berdasarkan dibawah berikut: 
    -------------------- 
    SQL TEMPLATE PUBLIKASI: SELECT * FROM publikasi WHERE publikasi MATCH 'text: NEAR($topik)'
    --------------------
    SQL TEMPLATE VARIABLE: SELECT * FROM variable WHERE variable MATCH 'judul: NEAR($topik)' limit 25
    -------------------- 
    QUESTION: cari data di tabel publikasi dan variable yang sesuai dengan topik data dari pertanyaan 'berapa pertumbuhan ekonomi?'
    -------------------- 
    SQL QUERY:`},
        {text: `output: {sql: "SELECT * FROM publikasi WHERE publikasi MATCH 'text: NEAR(pertumbuhan produk domestik regional bruto atas dasar harga konstan minahasa utara)'", topik: "pertumbuhan ekonomi"}`},
        {text: `input: ${prompt}`},
        {text: "output: "},
      ];
    while(a < attempt){
        try {
            const q = await model.generateContent({
                contents: [{role: 'user', parts: parts}],
                generationConfig:{
                    responseMimeType: 'application/json',
                    responseSchema:{
                        type: "object",
                        properties: {
                            sql_publikasi: {
                                type: "string"
                            },
                            sql_variable: {
                                type: "string"
                            },
                            topik:{
                                type: "string"
                            }
                        }
                    }
                }
            })
            let q_text = q.response.text()
            console.log(q_text)
            let q_json = JSON.parse(q_text)
            let data = []
            let data2 = []
            try {
                data = await getData(
                    q_json.sql_publikasi.replaceAll(/NEAR\(\'/g,"NEAR(").replaceAll(/\'\)\'/g,")'")
                )
                data2 = await getData(
                    q_json.sql_variable.replaceAll(/NEAR\(\'/g,"NEAR(").replaceAll(/\'\)\'/g,")'")
                )
                console.log(
                    q_json.sql_publikasi.replaceAll(/NEAR\(\'/g,"NEAR(").replaceAll(/\'\)\'/g,")'"), 
                    data.length,
                    q_json.sql_variable.replaceAll(/NEAR\(\'/g,"NEAR(").replaceAll(/\'\)\'/g,")'"),
                    data2.length
                ) 
            } catch (error) {
                data = []
            } finally{
                if(data.length > 0){
                    a = attempt
                    let titles = [...new Set(data.map(e => e.title))]
                    return [titles, data2]
                }  
            }
        } catch (error) {
            console.log("error", error)
        }
        a = a+1
    }
}

async function run() {
    let pertanyaan = `berapa jumlah penduduk?`
   let pub = await doubleChain(pertanyaan)
//    let varia = await chain_variable(pertanyaan)
   console.log(pub)
//    console.log(varia)
}

run()