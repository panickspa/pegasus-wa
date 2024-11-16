/* eslint-disable @typescript-eslint/no-shadow */
import {GoogleGenerativeAI, SchemaType} from '@google/generative-ai';
import {default_domain, getDynData} from './api';
import {apiKey} from './api';
// import {
//   openDatabase,
//   enablePromise,
//   SQLiteDatabase,
//   ResultSet,
// } from 'react-native-sqlite-storage';
import {turvar} from './indicator';
import { black, grad5 } from './color';
import sqlite3 from 'sqlite3'
import { config } from 'dotenv'
config()

// import {removeStopwords, ind} from 'stopword'
const sql = sqlite3.verbose()

// const db = new sql.Database('./data_9.db', (e)=>{
//     // console.log(e)
// })

export async function getData(query: string, db: sqlite3.Database) {
    return new Promise((res, rej) => {
        db.all(query,[],(err, rows) => {
            if(err) rej(err)
            else res(rows)
        })
    })
    
}

export interface variable {
  var_id: number;
  kategori_data: string;
  judul: string;
  satuan: string;
  wilayah: string;
  domain: string;
  var_id_domain: string;
}

interface Paginations {
  page: number;
  per_page: number;
  pages: number;
  count: number;
  total: number;
}
interface VarObject {
  var_id: number;
  title: string;
  sub_id: number;
  sub_name: string;
  def: string;
  notes: string;
  vertical: number;
  unit: string;
  graph_id: number;
  graph_name: string;
}
interface VarApi {
  status: string | 'OK';
  'data-availability': string | 'available';
  data: [Paginations, Array<VarObject>];
}

interface VarResp {
  val: number;
  label: string;
  unit: string;
  subj: string;
  def: string;
  decimal: string;
  note: string;
}
export interface DataResponse {
  status: string | 'OK';
  'data-availability': string | 'available';
  var: Array<VarResp>;
  turvar: Array<turvar>;
  labelvervar: string;
  vervar: Array<turvar>;
  tahun: Array<turvar>;
  turtahun: Array<turvar>;
  datacontent: {[key: string]: number};
}

export interface PublikasiData {
  pub_id: string;
  title: string;
  abstract: string;
  issn: string;
  rl_date: string;
  updt_date: string;
  cover: string;
  pdf: string;
  size: string;
}

export interface PublikasiDataResponse {
  status: string | 'OK';
  'data-availability': string | 'available';
  data: [
    {
      page: number,
      pages: number,
      per_page: number,
      count: number,
      total: number
    },
    Array<PublikasiData>
  ]
}

const genAI = new GoogleGenerativeAI('AIzaSyA7mV7s3ujTaLRvaterMDrivA633G5EJJ8');

const getParts = (q: string) => {
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
  model: 'gemini-1.5-flash',
});

const model2 = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
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

interface Message {
  type: 'AI' | 'user';
  message: string | object;
}

interface Domain {
  domain_id: string;
  domain_name: string;
  domain_url: string;
}

export interface DomainResponse {
  status: 'OK' | string;
  'data-availability' : 'available' | string;
  'data': [{
    page: number;
    pages: number;
    total: number;
  }, Array<Domain>];
}

type domain_id = string;
type page_ = number

// parsing JSON to insert values
export const variablesValueString = (e: Array<variable>) => {
  let p = e.reduce((prev: string, values: variable) => {
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
export const getVarWithTimeout = (uri: string, timeout: number = 250) =>
  new Promise<DataResponse>((res, rej) => {
    let interval = setTimeout(async () => {
      try {
        let v = await fetch(uri);
        let v_json: DataResponse = await v.json();
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
export const getPublication = (uri: string, timeout: number = 250) =>
  new Promise<PublikasiData>((res, rej) => {
    let interval = setTimeout(async () => {
      try {
        let v = await fetch(uri);
        let v_json: PublikasiDataResponse = await v.json();
        if(v_json.status === 'OK' && v_json['data-availability'] === 'available'){
          let data: PublikasiData = v_json.data[1][0];
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

type Handler<E> = (event: E) => void;

interface GeneratedTextEvent {
  genText: string;
}
interface AttemptEvent {
  attempt: number
}

export class EventDispatcher<E> {
    private handlers: Handler<E>[] = [];
    fire(event: E) {
        for (let h of this.handlers)
            {h(event);}
    }
    register(handler: Handler<E>) {
        this.handlers.push(handler);
    }
}
export interface DomainEvent {
  domain: string | number;
  name: string;
}
export interface PageDatasetEvent {
  page: number;
  page_all: number;
  per_page: number;
  total: number;
}

export interface Publikasi {
  title: string;
  title_lower: string;
  text: string;
}
// interface ChainRequestConstructor {
//   attempt: number|7;
//   pertanyaan: string;
//   db: SQLiteDatabase;
// }
interface ResultQueryEvent {
    resultQuery: unknown[];
  }

export class Chain{
  // data: number;
  // type: string;
  private a: number;
  private pertanyaan: string;
  private attempt: number;
//   private dbRead: Promise<SQLiteDatabase>;
  private db: sqlite3.Database;
  private genText: string;
  private resultsQuery: unknown[];

  constructor(pertanyaan: string, attempt: number = 7, db: sqlite3.Database){
    this.pertanyaan = pertanyaan;
    this.db = db;
    // this.dbRead = getDBReadOnlyConnection();
    this.attempt = attempt;
    this.genText = '';
    this.resultsQuery = [];
    this.a = 0;
  }

  private addAttempt = new EventDispatcher<AttemptEvent>();
  public onAttempt(handler: Handler<AttemptEvent>){
    this.addAttempt.register(handler);
  }
  private fireAttempt(event: AttemptEvent) {
    this.addAttempt.fire(event);
  }

  private generateText = new EventDispatcher<GeneratedTextEvent>();
  public onGenerateText(handler: Handler<GeneratedTextEvent>){
    this.generateText.register(handler);
  }
  private fireGenerateText(event: GeneratedTextEvent){
    this.generateText.fire(event);
  }

  private resultQuery = new EventDispatcher<ResultQueryEvent>();
  public onResultQuery(handler: Handler<ResultQueryEvent>){
    this.resultQuery.register(handler);
  }
  private fireResultQuery(event: ResultQueryEvent){
    this.resultQuery.fire(event);
  }

  public setPertanyaan(pertanyaan: string){
    this.pertanyaan = pertanyaan;
  }

  public getPertanyaan(){
    return this.pertanyaan;
  }

  async doubleChain(db: sqlite3.Database) {
    // console.log('chaining ...')
    this.a = 0;
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
      // console.log(exclusion.findIndex(e => pertanyaan.includes(e)));

      // let db = await this.db;
      // let dbRead = await this.dbRead;
      // eslint-disable-next-line eqeqeq
        //   if (this.pertanyaan.toLowerCase() == 'hapus pesan') {
        //     // console.log('hapus pesan')
        //     await clearMessages(db);
        //     return '';
        //   }
        //   // eslint-disable-next-line eqeqeq
        //   if (this.pertanyaan.toLowerCase() == 'clear messages') {
        //     // console.log('hapus pesan')
        //     await clearMessages(db);
        //     return '';
        //   }
      // eslint-disable-next-line eqeqeq
      if (this.pertanyaan.toLowerCase() == 'bantu aku') {
        let jawaban = 'Halo Saya Pegasus Assistant, berikan saja pertanyaan apapun kepada saya, jika ingin menghapus pesan silahkan untuk memberikan pertanyaan ** hapus pesan ** atay ** clear messages **';
        this.fireGenerateText({
          genText: jawaban,
        });
        return jawaban;
        // return 'Halo Saya Pegasus Assistant, berikan saja pertanyaan apapun kepada saya, jika ingin menghapus pesan silahkan untuk memberikan pertanyaan ** hapus pesan ** atay ** clear messages **';
      }
      if (exclusion.findIndex(e => this.pertanyaan.includes(e)) > -1) {
        // console.log("gen text exclusion");
        this.genText = await genText(this.pertanyaan);
        // this.textGenerated(this.genText);
        this.fireGenerateText({
          genText: this.genText,
        });
        return this.genText;
      }
      const prompt = `Berdasarkan schema tabel dibawah, tulis sebuah SQL query SQLite 3 dengan berdasarkan dibawah berikut: 
    -------------------- 
    SQL TEMPLATE PUBLIKASI: SELECT DISTINCT title FROM publikasi WHERE text MATCH '$topik' ORDER BY cast(year as INT) desc limit 5
    --------------------
    SQL TEMPLATE VARIABLE: SELECT * FROM variable WHERE judul MATCH '$topik' limit 15
    -------------------- 
    QUESTION: cari data di tabel publikasi dan variable yang sesuai dengan topik data dari pertanyaan '${this.pertanyaan}'
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
      for (let a = this.a; a < this.attempt; a++){
        const q = await model2.generateContent({
          contents: [{role: 'user', parts: parts}],
        });
        let q_text = q.response.text();
        console.log(q_text);
        let q_json = JSON.parse(q_text);
        // eslint-disable-next-line no-useless-escape
        let data = await getData(q_json.sql_publikasi.replaceAll(/NEAR\(\'/g,'NEAR(').replaceAll(/\'\)\'/g,")'"), this.db) as unknown[];
        // eslint-disable-next-line no-useless-escape
        let data2 = await getData(q_json.sql_variable.replaceAll(/NEAR\(\'/g,'NEAR(').replaceAll(/\'\)\'/g,")'"), this.db) as unknown[];
        console.log((data2 as any)[0].rows.length > 0 || (data as any)[0].rows.length > 0);
        if((data2 as any)[0].rows.length > 0 || (data as any)[0].rows.length > 0){
          a = this.attempt;
          let publikasi_ = (data as any)[0].rows.raw();
          let titles = [...new Set(publikasi_.map((e: any) => e.title))].map(e => {
            let tahun_data = [...(e as any).matchAll(/\d{4}/g)];
            return {
              title: e,
              count: tahun_data[tahun_data.length - 1],
            };
          })
          .sort((a, b) => {return Number(b.count) - Number(a.count);});
          return [titles, (data2 as any)[0].rows.raw()];
        }
      }
      this.genText = await genText(this.pertanyaan);
      this.fireGenerateText({
        genText: this.genText,
      });
      return this.genText;
    } catch (error) {
      console.log(error);
      this.genText = 'Maaf layanan kami sedang mengalami gangguan silahkan coba tanyakan kembali kepada saya beberapa saat lagi';
      this.fireGenerateText({
        genText: this.genText,
      });
      return this.genText;
    }
  }

  async chain() {
    // console.log('chaining ...')
    this.a = 0;
    // console.log('db read write');
    try{
      let db = await this.db;
    // console.log('db read')
    //   let dbRead = await this.dbRead;
      // console.log('exec variables_76 select all')
      let vs = await getData('SELECT * from variable', this.db);
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
      // console.log(exclusion.findIndex(e => pertanyaan.includes(e)));

      // let db = await this.db;
      // let dbRead = await this.dbRead;
      // eslint-disable-next-line eqeqeq
    //   if (this.pertanyaan.toLowerCase() == 'hapus pesan') {
    //     // console.log('hapus pesan')
    //     await clearMessages(db);
    //     return '';
    //   }
    //   // eslint-disable-next-line eqeqeq
    //   if (this.pertanyaan.toLowerCase() == 'clear messages') {
    //     // console.log('hapus pesan')
    //     await clearMessages(db);
    //     return '';
    //   }

      // eslint-disable-next-line eqeqeq
      if (this.pertanyaan.toLowerCase() == 'bantu aku') {
        let jawaban = 'Halo Saya Pegasus Assistant, berikan saja pertanyaan apapun kepada saya, jika ingin menghapus pesan silahkan untuk memberikan pertanyaan ** hapus pesan ** atay ** clear messages **';
        this.fireGenerateText({
          genText: jawaban,
        });
        return jawaban;
        // return 'Halo Saya Pegasus Assistant, berikan saja pertanyaan apapun kepada saya, jika ingin menghapus pesan silahkan untuk memberikan pertanyaan ** hapus pesan ** atay ** clear messages **';
      }
      if (exclusion.findIndex(e => this.pertanyaan.includes(e)) > -1) {
        // console.log("gen text exclusion");
        this.genText = await genText(this.pertanyaan);
        // this.textGenerated(this.genText);
        this.fireGenerateText({
          genText: this.genText,
        });
        return this.genText;
      }
      if ((vs as any)[0].rows.length < 50) {
        let jawaban = 'Maaf saya masih mengumpulkan data dari BPS Kabupaten Minahasa Utara, silahkan coba lagi beberapa saat';
        this.fireGenerateText({
          genText: jawaban,
        });
        return jawaban;
        // return 'Maaf saya masih mengumpulkan data dari BPS Kabupaten Minahasa Utara, silahkan coba lagi beberapa saat';
      }
      // let a = 0;
      const prompt = `Berdasarkan schema tabel dibawah, tulis sebuah SQL query SQLite 3 dengan berdasarkan dibawah berikut: 
    -------------------- 
    SQL TEMPLATE: SELECT * FROM variable WHERE variable MATCH '$topik' limit 25
    -------------------- 
    QUESTION: cari data yang sesuai dengan topik data dari pertanyaan ${this.pertanyaan}
    -------------------- 
    SQL QUERY:`;
      for (let a = this.a; a < this.attempt; a++) {
        // console.log('attempt ', a, this.attempt);
        // this.a = this.a + 1;
        // this.emit(this.attemptEventName, a + 1);
        this.fireAttempt({
          attempt: a,
        });
        // console.log('percoban sql ke ', a);
        try {
          const q = await model.generateContent([prompt]);
          let q_text = q.response.text();
          // console.log('sql response ', q_text);
          let q_ = q_text.substring(q_text.indexOf('```sql'), q_text.indexOf('\n```')).replaceAll(/```sql/g, '').replaceAll(/```+/g, '').replace(';',`${this.pertanyaan.includes('semua') || this.pertanyaan.includes('all') ? ' LIMIT 10;' : ';'}`);
          console.log(q_);
          try {
            let data = await getData(q_, this.db);
            // console.log('data', data[0].rows.raw());
            if ((data as any)[0].rows.length > 0) {
              a = this.attempt;
              // console.log('data length ', data[0].rows.length);
              this.resultsQuery = data as unknown[];
              this.fireResultQuery({
                resultQuery: data as unknown[],
              });
              return (data as any)[0].rows.raw();
            }
            if (a === this.attempt) {
              this.genText = await genText(this.pertanyaan);
              this.fireGenerateText({
                genText: this.genText,
              });
              return this.genText;
            }
          } catch (error) {
            // console.log(q_, attempt);
            if (a === this.attempt) {
               this.genText = await genText(this.pertanyaan);
               this.fireGenerateText({
                genText: this.genText,
              });
              return this.genText;
            }
          }
        } catch (error) {
          // console.log(error);
          this.genText = 'Maaf layanan kami sedang mengalami gangguan silahkan coba tanyakan kembali kepada saya beberapa saat lagi';
          this.fireGenerateText({
            genText: this.genText,
          });
          return this.genText;
        }
        // this.a = this.a + 1;
      }
      this.genText = await genText(this.pertanyaan);
      this.fireGenerateText({
        genText: this.genText,
      });
      return this.genText;
    }
    catch(err){
      console.log(err);
      this.genText = 'Maaf layanan kami sedang mengalami gangguan silahkan coba tanyakan kembali kepada saya beberapa saat lagi';
      this.fireGenerateText({
        genText: this.genText,
      });
      return this.genText;
    }
    finally{
    }
  }
}

// Analyze data from dynamic table
export async function analyze(v: number) {
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

export async function analyzeDataFromHTML(html: string) {
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

// Generate Text
export async function genText(t: string) {
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

export function transformApi(data: DataResponse) {
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

  type value_ = number | string | Number | String
  interface value_turtahun_turvar {
    turtahun: value_;
    turvar: value_
  }
  let body = data.vervar.reduce((prev, curr) => {
    let tahun = data.tahun
      .reduce((prev, curr) => {
        let turtahun = data.turtahun
          .reduce((prev, curr: turvar) => {
            let turvar: Array<{
              turvar: number | string | Number | String;
              turtahun: number | string | Number | String;
            }> = data.turvar
              .reduce((prev: Array<number | string | Number | String>, curr) => {
                return prev.concat([curr.val]);
              }, [] as value_[])
              .map((e: number | string | Number | String) => ({turvar: e, turtahun: curr.val}));
            return prev.concat(turvar);
          }, [] as value_turtahun_turvar[])
          .map(e => `${e.turvar}${curr.val}${e.turtahun}`);
        return prev.concat(turtahun);
      }, [] as string[])
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

function formatNumber(e: any) {
  // console.log('data ', e);
  return e
    ? Number(e) === 0
      ? '—'
      : new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(
          Number(e),
        )
    : '—';
}