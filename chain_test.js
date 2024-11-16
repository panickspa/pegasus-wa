import { doubleChain } from "./llmchain.js";
import sqlite3 from 'sqlite3'
const sql = sqlite3.verbose();
const db = new sql.Database('./data_9.db', (e)=>{
    // console.log(e)
})
doubleChain({
    pertanyaan: "berapa jumlah penduduk minahasa utara?",
}, 5, db).then((res)=> {
    console.log(res)
})