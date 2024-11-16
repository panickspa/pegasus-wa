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
config()

// import {removeStopwords, ind} from 'stopword'
const sql = sqlite3.verbose()

// const db = new sql.Database('./data_9.db', (e)=>{
//     // console.log(e)
// })

export async function getData(query, db) {
    return new Promise((res, rej) => {
        db.all(query,[],(err, rows) => {
            if(err) rej(err)
            else res(rows)
        })
    })
    
}
const apiKeyGemnini = process.env.API_KEY ? process.env.API_KEY : '';
const genAI = new GoogleGenerativeAI(apiKeyGemnini);

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
// Model LLM
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
});

const model2 = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
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

// Generate Text
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
// parsing JSON to insert values
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
export const getAllDomain = () => fetch('https://webapi.bps.go.id/v1/api/domain/type/all/key/23b53e3e77445b3e54c11c60604350bf/');
// interface ChainRequestConstructor {
//   attempt: number|7;
//   pertanyaan: string;
//   db: SQLiteDatabase;
// }

/**
 * 
 * @param {JSON} p
 * @param {String} p.pertanyaan
 * @param {SQLiteDatabase} db 
 * @returns 
 */

export async function doubleChain(p, attempt = 7, db) {
    console.log('chaining ...')
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
        console.log(q_text);
        let q_json = JSON.parse(q_text);
        // eslint-disable-next-line no-useless-escape
        let data = await getData(q_json.sql_publikasi.replaceAll(/NEAR\(\'/g,'NEAR(').replaceAll(/\'\)\'/g,")'"), db);
        // eslint-disable-next-line no-useless-escape
        let data2 = await getData(q_json.sql_variable.replaceAll(/NEAR\(\'/g,'NEAR(').replaceAll(/\'\)\'/g,")'"), db);
        console.log(data2.length > 0 || data.length > 0);
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
          return [titles, data2];
        }
      }
      let g = await genText(p.pertanyaan);
      return g;
    } catch (error) {
      let g = {
        error: error,
        message: 'Maaf layanan kami sedang mengalami gangguan silahkan coba tanyakan kembali kepada saya beberapa saat lagi'
      }
      return g;
    }
  }


// Analyze data from dynamic table
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