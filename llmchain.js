/* eslint-disable @typescript-eslint/no-shadow */
import {GoogleGenerativeAI, SchemaType} from '@google/generative-ai';
import {default_domain, getDynData} from './api.js';
import {apiKey} from './api.js';
// import {
//   openDatabase,
//   enablePromise,
//   SQLiteDatabase,
//   ResultSet,
// } from 'react-native-sqlite-storage';
// import {turvar} from './indicator';
import { black, grad5 } from './color.js';
import sqlite3 from 'sqlite3'
import { config } from 'dotenv'
import { appendFileSync } from 'fs';
import { type } from 'os';
config()

// import {removeStopwords, ind} from 'stopword'
const sql = sqlite3.verbose()

// const db = new sql.Database('./data_9.db', (e)=>{
//     // console.log(e)
// })

/**
 * @typedef {object} variabel
 * @property {string | number} val - The value of the variable.
 * @property {string | number} label - The label of the variable.
 * @property {string | number} id - The ID of the variable.
 * @property {string} unit - The unit of the variable.
 * @property {string} subj - The subject of the variable.
 * @property {string} def - The definition of the variable.
 * @property {string | number} decimal - The number of decimal places for the variable.
 * @property {string} note - A note about the variable.
 */

/**
 * @typedef {object} turvar
 * @property {string | number} val - The value.
 * @property {string | number} label - The label.
 */

/**
 * @typedef {object} variable
 * @property {number} var_id - The ID of the variable.
 * @property {string} kategori_data - The data category.
 * @property {string} judul - The title.
 * @property {string} satuan - The unit of measurement.
 * @property {string} wilayah - The region or area.
 * @property {string} domain - The domain of the variable.
 * @property {string} var_id_domain - The domain-specific variable ID.
 */

/**
 * @typedef {object} Paginations
 * @property {number} page - The current page number.
 * @property {number} per_page - The number of items per page.
 * @property {number} pages - The total number of pages.
 * @property {number} count - The number of items in the current response.
 * @property {number} total - The total number of items.
 */

/**
 * @typedef {object} VarObject
 * @property {number} var_id - The variable ID.
 * @property {string} title - The title of the variable.
 * @property {number} sub_id - The sub-category ID.
 * @property {string} sub_name - The name of the sub-category.
 * @property {string} def - The definition of the variable.
 * @property {string} notes - Additional notes about the variable.
 * @property {number} vertical - The vertical category (likely an ID).
 * @property {string} unit - The unit of measurement.
 * @property {number} graph_id - The ID of the associated graph.
 * @property {string} graph_name - The name of the associated graph.
 */

/**
 * @typedef {object} VarApi
 * @property {string} status - The status of the API response.
 * @property {string} data-availability - Indicates if the data is available.
 * @property {Array<Paginations, VarObject>} data - An array containing pagination information and an array of VarObject.
 */

/**
 * @typedef {object} VarResp
 * @property {number} val - The value.
 * @property {string} label - The label.
 * @property {string} unit - The unit of measurement.
 * @property {string} subj - The subject.
 * @property {string} def - The definition.
 * @property {string} decimal - The number of decimal places.
 * @property {string} note - Additional notes.
 */


/**
 * @typedef {object} DataResponse
 * @property {string} status - The status of the data response.
 * @property {string | 'available'} data-availability - Indicates if the data is available.
 * @property {Array<VarResp>} var - An array of VarResp objects.
 * @property {Array<turvar>} turvar - An array of turvar objects.
 * @property {string} labelvervar - A string representing the label version of var.
 * @property {Array<turvar>} vervar - Another array of turvar objects.
 * @property {Array<turvar>} tahun - An array representing years (turvar objects).
 * @property {Array<turvar>} turtahun - Another array representing years (turvar objects).
 * @property {object.<string, number>} datacontent - An object where keys are strings and values are numbers.
 */

/**
 * 
 * @param {string} query 
 * @param {SQLiteDatabase} db 
 * @returns {Promise<SQLiteDatabase>}
 */

export async function getData(query, db) {
    return new Promise((res, rej) => {
        db.all(query,[],(err, rows) => {
            if(err) rej(err)
            else res(rows)
        })
    })
    
}
const apiKeyGemnini = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY : '';
const genAI = new GoogleGenerativeAI(apiKeyGemnini);

/**
 * Get parts for initiating model
 * @param {string} q - Question of input 
 * @returns {Array} Array of parts
 */
const getParts = (q) => {
  return [
    {text: 'input: Who are you ?'},
    {
      text: "output: I'm Pegasus, I am part of BPS Minahasa Utara Regency, How can I help you?",
    },
    {text: 'input: Siapa kamu ?'},
    {
      text: 'output: Saya pegasus, saya pegawai virtual dan bagian dari BPS Kabupaten Minahasa Utara, apa yang saya perlu bantu?',
    },
    {
      text: 'input: pegasus',
    },
    {
      text: 'input: apakah judul-judul variabel menurut bulan?',
    },
    {
      text: 'output: semua judul-judul di database dengan periode bulan semua memiliki bulan',
    },
    {
      text: 'Pegasus adalah Petugas Pelayanan Khusus BPS Kabupaten Minahasa Utara yang siap membantu',
    },
    {text: `input: ${q}`},
    {text: 'output: '},
  ];
};

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash-lite',
});

const model2 = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash-lite',
  generationConfig:{
    responseMimeType: 'application/json',
    responseSchema:{
        type: SchemaType.OBJECT,
        properties: {
            sql_publikasi: {
                type: SchemaType.STRING,
            },
            sql_variable: {
                type: SchemaType.STRING,
            },
            topik:{
                type: SchemaType.STRING,
            },
        },
    },
},
});

const model3 =  genAI.getGenerativeModel({
    model: 'gemini-2.0-flash-lite',
    generationConfig:{
      responseMimeType: 'application/json',
      responseSchema:{
          type: SchemaType.OBJECT,
          properties: {
              topik: {
                  type: SchemaType.STRING,
              },
              pertanyaan: {
                  type: SchemaType.STRING,
              },
              isPencarianDataStatistik:{
                  type: SchemaType.BOOLEAN,
              },
              wilayah: {
                  type: SchemaType.STRING,
              }
          },
      },
  },
});

// Generate Text
/**
 * 
 * @param {String} t 
 * @returns {string}
 */
export async function genText(t) {
  let parts = getParts(t);
  try {
    const a = await model.generateContent({
      contents: [{role: 'user', parts}],
    });
    return a.response.text();
  } catch (error) {
    return 'Maaf Pegasus baru kecapekan dan pusing, tunggu beberapa menit saat lagi';
  }
}

/**
 * parsing JSON to insert values
 * @param {DatabaseVariable} e 
 * @returns {string}
 */
export const variablesValueString = (e) => {
  let p = e.reduce((prev, values) => {
    return `${prev}\n( "${values.var_id}", 
       "${values.kategori_data}",
       "${values.kategori_data.toLowerCase()}",
       "${values.kategori_data.toLocaleUpperCase()}",
       "${values.judul}",
       "${values.judul.toLocaleLowerCase()}",
       "${values.judul.toLocaleUpperCase()}",
       "${values.satuan}",
       "${values.wilayah}",
       "${values.wilayah.toLocaleLowerCase()}",
       "${values.wilayah.toLocaleUpperCase()}",
       "${values.domain}",
       "${values.var_id}_${values.domain}"
   ),`;
  }, '');
  return p.substring(0, p.length - 1);
};

// Get Var with timeout
/**
 * 
 * @param {string} uri 
 * @param {number} timeout 
 * @returns {Promise<DataResponse,Error>}
 */
export const getVarWithTimeout = (uri, timeout = 250) =>
  new Promise((res, rej) => {
    let interval = setTimeout(async () => {
      try {
        let v = await fetch(uri);
        let v_json = await v.json();
        res(v_json);
        clearInterval(interval);
      } catch (error) {
        console.log(error);
        rej(error);
        clearInterval(interval);
      }
    }, timeout);
  });

// Get Var with timeout
/**
 * 
 * @param {string} uri 
 * @param {number} timeout 
 * @returns {Promise<DataResponse,Error>}
 */
export const getPublication = (uri, timeout = 250) =>
  new Promise((res, rej) => {
    let interval = setTimeout(async () => {
      try {
        let v = await fetch(uri);
        let v_json = await v.json();
        if(v_json.status === 'OK' && v_json['data-availability'] === 'available'){
          let data = v_json.data[1][0];
          res(data);
        }
        else{
          rej(v_json);
        }
        clearInterval(interval);
      } catch (error) {
        console.log(error);
        rej(error);
        clearInterval(interval);
      }
    }, timeout);
  });

// Get All Domain
export const getAllDomain = () => fetch(`https://webapi.bps.go.id/v1/api/domain/type/all/key/${process.env.BPS_API_KEY}/`);

const parts_init = [
      {text: 'input: Who are you ?'},
      {text: "output: I'm Pegasus, I am part of BPS Minahasa Utara Regency, How can I help you?"},
      {text: 'input: Siapa kamu ?'},
      {text: 'output: Saya pegasus, saya pegawai virtual dan bagian dari BPS Kabupaten Minahasa Utara, apa yang saya perlu bantu?'},
      {text: 'input: bagaimana cara mengetahui pertumbuhan ekonomi?'},
      {text: 'output: pertumbuhan ekonomi dapat diketahui dengan laju pertumbuhan PDRB (Produk Domestik Regional Bruto) atau PDB (Produk Domestik Bruto) untuk skala nasional'},
      {text: 'input: test'},
      {text: "output: I'm Pegasus, I am part of BPS Minahasa Utara Regency, How can I help you?"},
      {text: 'input: ping'},
      {text: "output: I'm Pegasus, I am part of BPS Minahasa Utara Regency, How can I help you?"},
      {text: 'input: test'},
      {text: 'output: Hello, I am Pegasus, what can i do for you?'},
      {text: 'input: Siapa kamu ?'},
      {text: 'output: Hai, Saya Pegasus, ada yang bisa saya bantu?'},
      {text: 'input: '},
      {text: 'output: Hai, ada yang bisa saya bantu?'},
]


/**
 * @typedef {object} DatabaseVariable
 * @property {number} var_id
 * @property {string} kategori_data
 * @property {string} judul
 * @property {string} wilayah
 * @property {string} satuan
 * @property {string} domain
 */

/**
 * @typedef {object} TitlePublikasi
 * @property {string} title
 * @property {number} count
 */

/**
 * @typedef {object} pertanyaan
 * @property {string} pertanyaan - text of question
 */

/**
 * @async
 * @param {pertanyaan} p
 * @param {String} p.pertanyaan
 * @param {number} attempt
 * @param {SQLiteDatabase} db 
 * @returns {string|Array<Array<TitlePublikasi>,Array<DatabaseVariable>>}
 */

export async function chainRequest(p, attempt = 7, db) {
  console.log('chaining ...', `key: ${apiKeyGemnini}`);
  appendFileSync('log.jsonl', `\n${JSON.stringify({
    message: 'chaining....',
    pertanyaan: p.pertanyaan,
  })}`);
  // let a = 0;
  // console.log('db read write');
  try {
    // console.log('exec variables_76 select all')
    let exclusion = [
      'pantun',
      'cerita',
      'siapa anda',
      'siapa kamu',
      'apa itu pegasus',
      'siapa pegasus',
      'pegasus',
      'halo',
      'hai',
      'halo pegasus',
      'hai pegasus',
      'hi pegasus',
      'aloha pegasus',
      'syalom pegasus',
    ];
    if (p.pertanyaan.toLowerCase() == 'bantu aku') {
      let jawaban = 'Halo Saya Pegasus Assistant, berikan saja pertanyaan apapun kepada saya, jika ingin menghapus pesan silahkan untuk memberikan pertanyaan ** hapus pesan ** atay ** clear messages **';
      return jawaban;
      // return 'Halo Saya Pegasus Assistant, berikan saja pertanyaan apapun kepada saya, jika ingin menghapus pesan silahkan untuk memberikan pertanyaan ** hapus pesan ** atay ** clear messages **';
    }
    if (exclusion.findIndex(e => p.pertanyaan.includes(e)) > -1) {
      let g = await genText(p.pertanyaan);
      appendFileSync('log.jsonl', `\n${JSON.stringify({
        message: g,
        pertanyaan: p.pertanyaan,
      })}`);
      return g;
    }
    let prompt = `Dari pertanyaan berikut "${p.pertanyaan}" apakah termasuk pertanyaan pencarian data?`
    let parts = parts_init.concat([
      {text: `input: ${prompt}`},
      {text: 'output: '},
    ]);
    const q = await model3.generateContent({
      contents: [{role: 'user', parts: parts}],
    });
    let q_text = q.response.text();
    let q_json = JSON.parse(q_text);
    appendFileSync('log.jsonl', `\n${JSON.stringify({
      message: q_json,
      pertanyaan: p.pertanyaan,
    })}`);
    if(q_json.isPencarianDataStatistik && p.pertanyaan && p.pertanyaan != ""){
      let q_var = `SELECT * FROM variable WHERE variable MATCH '${q_json.topik.toLowerCase()}${q_json.wilayah ? ` ${q_json.wilayah.toLocaleLowerCase()}` : '' }' limit 15`
      let q_pub = `SELECT * FROM publikasi WHERE publikasi MATCH 'NEAR(${q_json.topik.toLowerCase()}${q_json.wilayah ? ` ${q_json.wilayah.toLowerCase()}` : '' })' ORDER BY cast(year as INT) desc , rank`
      let data2 = await getData(q_var, db)
      let data = await getData(q_pub, db)
      // console.log(data2.length > 0 || data.length > 0);
      // if(data2.length > 0 || data.length > 0){
      //     // a = attempt;
      //     let publikasi_ = data;
      //     let titles = [...new Set(publikasi_.map(e => e.title))].map(e => {
      //     let tahun_data = [...e.matchAll(/\d{4}/g)];
      //     return {
      //         title: e,
      //         count: tahun_data[tahun_data.length - 1],
      //     };
      //     })
      //     .sort((a, b) => {return Number(b.count) - Number(a.count);});
      //     appendFileSync('log.jsonl', `\n${JSON.stringify({
      //         message: 'Data ditemukan',
      //         pertanyaan: p.pertanyaan,
      //         data: titles,
      //     })}`);
      //     return [titles, data2];
      // }
      if(data2.length > 0){
        // a = attempt;
        // let publikasi_ = data;
        // let titles = [...new Set(publikasi_.map(e => e.title))].map(e => {
        // let tahun_data = [...e.matchAll(/\d{4}/g)];
        // return {
        //     title: e,
        //     count: tahun_data[tahun_data.length - 1],
        // };
        // })
        // .sort((a, b) => {return Number(b.count) - Number(a.count);});
        // appendFileSync('log.jsonl', `\n${JSON.stringify({
        //     message: 'Data ditemukan',
        //     pertanyaan: p.pertanyaan,
        //     data: titles,
        // })}`);
        return [[], data2];
      }
      else{
        let parts = parts_init.concat([
          {text: `input: ${p.pertanyaan}`},
          {text: 'output: '},
        ]);
        const g = await model.generateContent({
          contents: [{role: 'user', parts: parts}],
          });
        appendFileSync('log.jsonl', `\n${JSON.stringify({
          message: g,
          pertanyaan: p.pertanyaan,
        })}`);
        return g.response.text();
      }
    }
    else{
      // let g = await genText(p.pertanyaan);
      let parts = parts_init.concat([
          {text: `input: ${p.pertanyaan}`},
          {text: 'output: '},
        ]);
        const g = await model.generateContent({
          contents: [{role: 'user', parts: parts}],
        });
      appendFileSync('log.jsonl', `\n${JSON.stringify({
        message: g,
        pertanyaan: p.pertanyaan,
      })}`);
      return g.response.text();
    }
  }
  catch (error){
      let g = {
          error: error,
          message: 'Maaf layanan kami sedang mengalami gangguan silahkan coba tanyakan kembali kepada saya beberapa saat lagi'
      }
      appendFileSync('log.jsonl', `\n${JSON.stringify(g)}`);
      return g.message;
  }

}

export async function doubleChain(p, attempt = 7, db) {
    console.log('chaining ...', `key: ${apiKeyGemnini}`);
    appendFileSync('log.jsonl', `\n${JSON.stringify({
      message: 'chaining....',
      pertanyaan: p.pertanyaan,
    })}`);
    // let a = 0;
    // console.log('db read write');
    try {
      // console.log('exec variables_76 select all')
      let exclusion = [
        'pantun',
        'cerita',
        'siapa anda',
        'siapa kamu',
        'apa itu pegasus',
        'siapa pegasus',
        'pegasus',
        'halo',
        'hai',
        'halo pegasus',
        'hai pegasus',
        'hi pegasus',
        'aloha pegasus',
        'syalom pegasus',
      ];
      if (p.pertanyaan.toLowerCase() == 'bantu aku') {
        let jawaban = 'Halo Saya Pegasus Assistant, berikan saja pertanyaan apapun kepada saya, jika ingin menghapus pesan silahkan untuk memberikan pertanyaan ** hapus pesan ** atay ** clear messages **';
        return jawaban;
        // return 'Halo Saya Pegasus Assistant, berikan saja pertanyaan apapun kepada saya, jika ingin menghapus pesan silahkan untuk memberikan pertanyaan ** hapus pesan ** atay ** clear messages **';
      }
      if (exclusion.findIndex(e => p.pertanyaan.includes(e)) > -1) {
        let g = await genText(p.pertanyaan);
        appendFileSync('log.jsonl', `\n${JSON.stringify({
          message: g,
          pertanyaan: p.pertanyaan,
        })}`);
        return g;
      }
      const prompt = `Berdasarkan schema tabel dibawah, tulis sebuah SQL query SQLite 3 dengan berdasarkan dibawah berikut: 
    -------------------- 
    SQL TEMPLATE PUBLIKASI: SELECT DISTINCT title FROM publikasi WHERE text MATCH '$topik' ORDER BY cast(year as INT) desc limit 5
    --------------------
    SQL TEMPLATE VARIABLE: SELECT * FROM variable WHERE judul MATCH '$topik' limit 15
    -------------------- 
    QUESTION: cari data di tabel publikasi dan variable yang sesuai dengan topik data dari pertanyaan '${p.pertanyaan}'
    -------------------- 
    SQL QUERY:`;
    const parts = [
        {text: 'input: Who are you ?'},
        {text: "output: I'm Pegasus, I am part of BPS Minahasa Utara Regency, How can I help you?"},
        {text: 'input: Siapa kamu ?'},
        {text: 'output: Saya pegasus, saya pegawai virtual dan bagian dari BPS Kabupaten Minahasa Utara, apa yang saya perlu bantu?'},
        {text: 'input: bagaimana cara mengetahui pertumbuhan ekonomi?'},
        {text: 'output: pertumbuhan ekonomi dapat diketahui dengan laju pertumbuhan PDRB (Produk Domestik Regional Bruto) atau PDB (Produk Domestik Bruto) untuk skala nasional'},
        {text: `input: Berdasarkan schema tabel dibawah, tulis sebuah SQL query SQLite 3 dengan berdasarkan dibawah berikut: 
    -------------------- 
    SQL TEMPLATE PUBLIKASI: SELECT * FROM publikasi WHERE text MATCH '$topik' limit 10
    --------------------
    SQL TEMPLATE VARIABLE: SELECT * FROM variable WHERE judul MATCH '$topik' limit 15
    -------------------- 
    QUESTION: cari data di tabel publikasi dan variable yang sesuai dengan topik data dari pertanyaan 'berapa pertumbuhan ekonomi?'
    -------------------- 
    SQL QUERY:`},
        {text: 'output: {"sql_publikasi": "SELECT * FROM publikasi WHERE title MATCH \'pertumbuhan produk domestik regional bruto atas dasar harga konstan minahasa utara\' limit 10", "sql_variable":"SELECT * FROM variable WHERE judul MATCH "pertumbuhan produk domestik regional bruto atas dasar harga konstan minahasa utara limit 15" topik: "pertumbuhan ekonomi"}'},
        {text: `input: ${prompt}`},
        {text: 'output: '},
      ];
      for (let a = 0; a < attempt; a++){
        const q = await model2.generateContent({
          contents: [{role: 'user', parts: parts}],
        });
        let q_text = q.response.text();
        // console.log(q_text);
        let q_json = JSON.parse(q_text);
        appendFileSync('log.jsonl', `\n${JSON.stringify({
          message: JSON.stringify(q),
          pertanyaan: p.pertanyaan
        })}`);
        // eslint-disable-next-line no-useless-escape
        let data = await getData(q_json.sql_publikasi.replaceAll(/NEAR\(\'/g,'NEAR(').replaceAll(/\'\)\'/g,")'"), db);
        // eslint-disable-next-line no-useless-escape
        let data2 = await getData(q_json.sql_variable.replaceAll(/NEAR\(\'/g,'NEAR(').replaceAll(/\'\)\'/g,")'"), db);
        // console.log(data2.length > 0 || data.length > 0);
        if(data2.length > 0 || data.length > 0){
          a = attempt;
          let publikasi_ = data;
          let titles = [...new Set(publikasi_.map(e => e.title))].map(e => {
            let tahun_data = [...e.matchAll(/\d{4}/g)];
            return {
              title: e,
              count: tahun_data[tahun_data.length - 1],
            };
          })
          .sort((a, b) => {return Number(b.count) - Number(a.count);});
          appendFileSync('log.jsonl', `\n${JSON.stringify({
            message: 'Data ditemukan',
            pertanyaan: p.pertanyaan,
            data: titles,
          })}`);
          return [titles, data2];
        }
      }
      let g = await genText(p.pertanyaan);
      appendFileSync('log.jsonl', `\n${JSON.stringify({
        message: g,
        pertanyaan: p.pertanyaan,
      })}`);
      return g;
    } catch (error) {
      let g = {
        error: error,
        message: 'Maaf layanan kami sedang mengalami gangguan silahkan coba tanyakan kembali kepada saya beberapa saat lagi'
      }
      appendFileSync('log.jsonl', `\n${JSON.stringify(g)}`);
      return g;
    }
  }


/**
 * @typedef {object} JSONAnalyzed
 * @property {string} natural_response - analyze of data
 * @property {string} data - JSON of data
 */
/**
 * Analyze data from dynamic table
 * @async
 * @param {number} v 
 * @returns {JSONAnalyzed}
 */
export async function analyze(v) {
  let d = await getDynData({
    domain: default_domain,
    var: v,
    apiKey: apiKey,
  });
  const a = await model.generateContent([
    `berikan analisis deskriptif dari ${transformApi(d)}`,
  ]);
  return {
    natural_response: a.response.text(),
    data: JSON.stringify(d),
  };
}

/**
 * @typedef {object} HTMLAnalayzed
 * @property {string} natural_response - analyze of data
 * @property {string} data - HTML of data
 */

/**
 * @async
 * @param {string} html - String of HTML 
 * @returns {HTMLAnalayzed}
 */
export async function analyzeDataFromHTML(html) {
  try {
    const a = await model.generateContent([
      `berikan analisis deskriptif dari ${html}`,
    ]);
    // console.log(a.response.text());
    return {
      natural_response: a.response.text(),
      data: JSON.stringify(html),
    };
  } catch (error) {
    return {
      natural_response: 'Maaf sekarang Pegasus kecapekan sehingga tidak bisa menganalisa data yang kompleks',
      data: JSON.stringify(html),
    };
  }
}

/**
 * Transforming API to html
 * @function
 * @param {DataResponse} data
 * @property {string} status - The status of the data response.
 * @property {string} data-availability - Indicates if the data is available.
 * @property {Array<VarResp>} var - An array of VarResp objects.
 * @property {Array<turvar>} turvar - An array of turvar objects.
 * @property {string} labelvervar - A string representing the label version of var.
 * @property {Array<turvar>} vervar - Another array of turvar objects.
 * @property {Array<turvar>} tahun - An array representing years (turvar objects).
 * @property {Array<turvar>} turtahun - Another array representing years (turvar objects).
 * @property {Array<string, number>} datacontent - An object where keys are strings and values are numbers.
 * @returns {string} - string of HTMLData from JSONData
 */
export function transformApi(data) {
  let turvarLength = Number(data.turvar[0].val) === 0 ? 0 : data.turvar.length;

  let turtahunLength =
    Number(data.turtahun[0].val) === 0 ? 0 : data.turtahun.length;

  let spanLabelVervar =
    2 + (turvarLength > 0 ? 1 : 0) + (turtahunLength > 0 ? 1 : 0);
  let tahunSpan =
    (turtahunLength > 0 ? turtahunLength : 1) *
    (turvarLength > 0 ? turvarLength : 1);
  let tahunTd = data.tahun.reduce((prev, curr) => {
    return `${prev}<td class="h-tahun" colspan="${tahunSpan}">${curr.label}</td>`;
  }, '');

  let varSpan =
    turvarLength > 0
      ? turtahunLength > 0
        ? turvarLength * turtahunLength * data.tahun.length
        : turvarLength * data.tahun.length
      : turtahunLength > 0
      ? turtahunLength * data.tahun.length
      : data.tahun.length;
  let turtahunTd = data.turtahun.reduce((prev, curr) => {
    return `${prev}<td ${turvarLength > 0 ? `colspan="${turvarLength}"` : ''} class="h-turtahun">${curr.label}</td>`;
  }, '');
  let turtahunTd_ = '';
  for (let ti_ = 0; ti_ < data.tahun.length; ti_++) {
    turtahunTd_ = turtahunTd_ + turtahunTd;
  }
  turtahunTd = turtahunTd_;
  let turvarTd =
    turvarLength === 0
      ? ''
      : data.turvar.reduce((prev, curr) => {
          return `${prev}<td class="h-turvar">${curr.label}</td>`;
        }, '');
  let turvarTd_ = '';
  for (let tri = 1; tri <= data.turtahun.length; tri++) {
    // console.log(tri, 'tri')
    for (let ti = 1; ti <= data.tahun.length; ti++) {
      // console.log(ti, 'ti')
      turvarTd_ = turvarTd_ + turvarTd;
    }
  }
  turvarTd = turvarTd_;

  let tNumber = '';
  for (let i = 1; i <= varSpan + 1; i++) {
    tNumber = `${tNumber}<td>(${i})</td>`;
  }
  tNumber = `<tr class="t-number">${tNumber}</tr>`;

  let header = `<thead><tr><td class="h-labelvervar" rowspan="${spanLabelVervar}">${
    data.labelvervar
  }</td><td class="h-variable"${varSpan > 1 ? ` colspan="${varSpan}" ` : ''}>${
    data.var[0].label
  }${
    data.var[0].unit
      // eslint-disable-next-line eqeqeq
      ? data.var[0].unit == ''
        ? ''
        : ` (${data.var[0].unit}) `
      : ''
  }</td></tr><tr>${tahunTd}</tr>${
    turtahunLength > 0 ? `<tr class="r-turtahun">${turtahunTd}</tr>` : ''
  }${
    turvarLength > 0 ? `<tr class="r-turvar">${turvarTd}</tr>` : ''
  }${tNumber}</thead>`;


  let body = data.vervar.reduce((prev, curr) => {
    let tahun = data.tahun
      .reduce((prev, curr) => {
        let turtahun = data.turtahun
          .reduce((prev, curr) => {
            let turvar = data.turvar
              .reduce((prev, curr) => {
                return prev.concat([curr.val]);
              }, [])
              .map((e) => ({turvar: e, turtahun: curr.val}));
            return prev.concat(turvar);
          }, [])
          .map(e => `${e.turvar}${curr.val}${e.turtahun}`);
        return prev.concat(turtahun);
      }, [])
      .reduce((prevT, currT) => {
        return `${prevT}<td class="b-data">${formatNumber(
          data.datacontent[`${curr.val}${data.var[0].val}${currT}`],
        )}</td>`;
      }, '');
    return `${prev}<tr><td class="b-data-label">${curr.label}</td>${tahun}</tr>`;
  }, '');
  // console.log(`<table>${header}<tbody>${body}<tbody></table>`);
  return `<table>${header}<tbody>${body}<tbody></table>`;
}

export const tableApiStyle = `body{
  margin: 0;
  padding: 0;
}
* {
  text-align: justify;
}
table {
        border-color: black;
        border-spacing: 0;
        border-radius: 10px;
    }
.table{
  border-radius: 10px 10px 0 0 0
}
thead tr td {
    padding: 0.5em;
    color: white;
    background-color: #002851;
    text-align: center;
    border: none;
    font-weight: bold;
}
.b-data-label{
    padding-left: 1em;
}
tbody tr:nth-child(even){
    background-color: #CCE9FF;
}
tbody tr:nth-child(odd){
    background-color: #e4f1fc;
}
thead tr.t-number td{
    background-color: #004282;
}
.b-data{
    text-align: right;
    padding: 0.5em 1em 0.5em 0.2em;
}
.card{
    background-color: ${grad5};
    padding: 1em;
    color: ${black};
}`;
// let table = `<table>${header}<tbody>${body}<tbody></table>`

function formatNumber(e) {
  // console.log('data ', e);
  return e
    ? Number(e) === 0
      ? '—'
      : new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(
          Number(e),
        )
    : '—';
}