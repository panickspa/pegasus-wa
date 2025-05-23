import { config } from 'dotenv'
config()
const domain = [
  {
    "domain_id": "0000",
    "domain_name": "Indonesia",
    "domain_url": "https://www.bps.go.id"
  },
  {
    "domain_id": "1100",
    "domain_name": "Aceh",
    "domain_url": "https://aceh.bps.go.id"
  },
  {
    "domain_id": "1101",
    "domain_name": "Simeulue",
    "domain_url": "https://simeuluekab.bps.go.id"
  },
  {
    "domain_id": "1102",
    "domain_name": "Aceh Singkil",
    "domain_url": "https://acehsingkilkab.bps.go.id"
  },
  {
    "domain_id": "1103",
    "domain_name": "Aceh Selatan",
    "domain_url": "https://acehselatankab.bps.go.id"
  },
  {
    "domain_id": "1104",
    "domain_name": "Aceh Tenggara",
    "domain_url": "https://acehtenggarakab.bps.go.id"
  },
  {
    "domain_id": "1105",
    "domain_name": "Aceh Timur",
    "domain_url": "https://acehtimurkab.bps.go.id"
  },
  {
    "domain_id": "1106",
    "domain_name": "Aceh Tengah",
    "domain_url": "https://acehtengahkab.bps.go.id"
  },
  {
    "domain_id": "1107",
    "domain_name": "Aceh Barat",
    "domain_url": "https://acehbaratkab.bps.go.id"
  },
  {
    "domain_id": "1108",
    "domain_name": "Aceh Besar",
    "domain_url": "https://acehbesarkab.bps.go.id"
  },
  {
    "domain_id": "1109",
    "domain_name": "Pidie",
    "domain_url": "https://pidiekab.bps.go.id"
  },
  {
    "domain_id": "1110",
    "domain_name": "Bireuen",
    "domain_url": "https://bireuenkab.bps.go.id"
  },
  {
    "domain_id": "1111",
    "domain_name": "Aceh Utara",
    "domain_url": "https://acehutarakab.bps.go.id"
  },
  {
    "domain_id": "1112",
    "domain_name": "Aceh Barat Daya",
    "domain_url": "https://acehbaratdayakab.bps.go.id"
  },
  {
    "domain_id": "1113",
    "domain_name": "Gayo Lues",
    "domain_url": "https://gayolueskab.bps.go.id"
  },
  {
    "domain_id": "1114",
    "domain_name": "Aceh Tamiang",
    "domain_url": "https://acehtamiangkab.bps.go.id"
  },
  {
    "domain_id": "1115",
    "domain_name": "Nagan Raya",
    "domain_url": "https://naganrayakab.bps.go.id"
  },
  {
    "domain_id": "1116",
    "domain_name": "Aceh Jaya",
    "domain_url": "https://acehjayakab.bps.go.id"
  },
  {
    "domain_id": "1117",
    "domain_name": "Bener Meriah",
    "domain_url": "https://benermeriahkab.bps.go.id"
  },
  {
    "domain_id": "1118",
    "domain_name": "Pidie Jaya",
    "domain_url": "https://pidiejayakab.bps.go.id"
  },
  {
    "domain_id": "1171",
    "domain_name": "Banda Aceh",
    "domain_url": "https://bandaacehkota.bps.go.id"
  },
  {
    "domain_id": "1172",
    "domain_name": "Sabang",
    "domain_url": "https://sabangkota.bps.go.id"
  },
  {
    "domain_id": "1173",
    "domain_name": "Langsa",
    "domain_url": "https://langsakota.bps.go.id"
  },
  {
    "domain_id": "1174",
    "domain_name": "Lhokseumawe",
    "domain_url": "https://lhokseumawekota.bps.go.id"
  },
  {
    "domain_id": "1175",
    "domain_name": "Subulussalam",
    "domain_url": "https://subulussalamkota.bps.go.id"
  },
  {
    "domain_id": "1200",
    "domain_name": "Sumatera Utara",
    "domain_url": "https://sumut.bps.go.id"
  },
  {
    "domain_id": "1201",
    "domain_name": "Nias",
    "domain_url": "https://niaskab.bps.go.id"
  },
  {
    "domain_id": "1202",
    "domain_name": "Mandailing Natal",
    "domain_url": "https://mandailingnatalkab.bps.go.id"
  },
  {
    "domain_id": "1203",
    "domain_name": "Tapanuli Selatan",
    "domain_url": "https://tapanuliselatankab.bps.go.id"
  },
  {
    "domain_id": "1204",
    "domain_name": "Tapanuli Tengah",
    "domain_url": "https://tapanulitengahkab.bps.go.id"
  },
  {
    "domain_id": "1205",
    "domain_name": "Tapanuli Utara",
    "domain_url": "https://tapanuliutarakab.bps.go.id"
  },
  {
    "domain_id": "1206",
    "domain_name": "Toba",
    "domain_url": "https://tobakab.bps.go.id"
  },
  {
    "domain_id": "1207",
    "domain_name": "Labuhan Batu",
    "domain_url": "https://labuhanbatukab.bps.go.id"
  },
  {
    "domain_id": "1208",
    "domain_name": "Asahan",
    "domain_url": "https://asahankab.bps.go.id"
  },
  {
    "domain_id": "1209",
    "domain_name": "Simalungun",
    "domain_url": "https://simalungunkab.bps.go.id"
  },
  {
    "domain_id": "1210",
    "domain_name": "Dairi",
    "domain_url": "https://dairikab.bps.go.id"
  },
  {
    "domain_id": "1211",
    "domain_name": "Karo",
    "domain_url": "https://karokab.bps.go.id"
  },
  {
    "domain_id": "1212",
    "domain_name": "Deli Serdang",
    "domain_url": "https://deliserdangkab.bps.go.id"
  },
  {
    "domain_id": "1213",
    "domain_name": "Langkat",
    "domain_url": "https://langkatkab.bps.go.id"
  },
  {
    "domain_id": "1214",
    "domain_name": "Nias Selatan",
    "domain_url": "https://niasselatankab.bps.go.id"
  },
  {
    "domain_id": "1215",
    "domain_name": "Humbang Hasundutan",
    "domain_url": "https://humbanghasundutankab.bps.go.id"
  },
  {
    "domain_id": "1216",
    "domain_name": "Pakpak Bharat",
    "domain_url": "https://pakpakbharatkab.bps.go.id"
  },
  {
    "domain_id": "1217",
    "domain_name": "Samosir",
    "domain_url": "https://samosirkab.bps.go.id"
  },
  {
    "domain_id": "1218",
    "domain_name": "Serdang Bedagai",
    "domain_url": "https://serdangbedagaikab.bps.go.id"
  },
  {
    "domain_id": "1219",
    "domain_name": "Batu Bara",
    "domain_url": "https://batubarakab.bps.go.id"
  },
  {
    "domain_id": "1220",
    "domain_name": "Padang Lawas Utara",
    "domain_url": "https://palutakab.bps.go.id"
  },
  {
    "domain_id": "1221",
    "domain_name": "Padang Lawas",
    "domain_url": "https://padanglawaskab.bps.go.id"
  },
  {
    "domain_id": "1222",
    "domain_name": "Labuhan Batu Selatan",
    "domain_url": "https://labuhanbatuselatankab.bps.go.id"
  },
  {
    "domain_id": "1223",
    "domain_name": "Labuhan Batu Utara",
    "domain_url": "https://labuhanbatuutarakab.bps.go.id"
  },
  {
    "domain_id": "1224",
    "domain_name": "Nias Utara",
    "domain_url": "https://niasutarakab.bps.go.id"
  },
  {
    "domain_id": "1225",
    "domain_name": "Nias Barat",
    "domain_url": "https://niasbaratkab.bps.go.id"
  },
  {
    "domain_id": "1271",
    "domain_name": "Sibolga",
    "domain_url": "https://sibolgakota.bps.go.id"
  },
  {
    "domain_id": "1272",
    "domain_name": "Tanjung Balai",
    "domain_url": "https://tanjungbalaikota.bps.go.id"
  },
  {
    "domain_id": "1273",
    "domain_name": "Pematang Siantar",
    "domain_url": "https://siantarkota.bps.go.id"
  },
  {
    "domain_id": "1274",
    "domain_name": "Tebing Tinggi",
    "domain_url": "https://tebingtinggikota.bps.go.id"
  },
  {
    "domain_id": "1275",
    "domain_name": "Medan",
    "domain_url": "https://medankota.bps.go.id"
  },
  {
    "domain_id": "1276",
    "domain_name": "Binjai",
    "domain_url": "https://binjaikota.bps.go.id"
  },
  {
    "domain_id": "1277",
    "domain_name": "Padangsidimpuan",
    "domain_url": "https://padangsidimpuankota.bps.go.id"
  },
  {
    "domain_id": "1278",
    "domain_name": "Gunungsitoli",
    "domain_url": "https://gunungsitolikota.bps.go.id"
  },
  {
    "domain_id": "1300",
    "domain_name": "Sumatera Barat",
    "domain_url": "https://sumbar.bps.go.id"
  },
  {
    "domain_id": "1301",
    "domain_name": "Kepulauan Mentawai",
    "domain_url": "https://mentawaikab.bps.go.id"
  },
  {
    "domain_id": "1302",
    "domain_name": "Pesisir Selatan",
    "domain_url": "https://pesselkab.bps.go.id"
  },
  {
    "domain_id": "1303",
    "domain_name": "Solok",
    "domain_url": "https://solokkab.bps.go.id"
  },
  {
    "domain_id": "1304",
    "domain_name": "Sijunjung",
    "domain_url": "https://sijunjungkab.bps.go.id"
  },
  {
    "domain_id": "1305",
    "domain_name": "Tanah Datar",
    "domain_url": "https://tanahdatarkab.bps.go.id"
  },
  {
    "domain_id": "1306",
    "domain_name": "Padang Pariaman",
    "domain_url": "https://padangpariamankab.bps.go.id"
  },
  {
    "domain_id": "1307",
    "domain_name": "Agam",
    "domain_url": "https://agamkab.bps.go.id"
  },
  {
    "domain_id": "1308",
    "domain_name": "Lima Puluh Kota",
    "domain_url": "https://limapuluhkotakab.bps.go.id"
  },
  {
    "domain_id": "1309",
    "domain_name": "Pasaman",
    "domain_url": "https://pasamankab.bps.go.id"
  },
  {
    "domain_id": "1310",
    "domain_name": "Solok Selatan",
    "domain_url": "https://solokselatankab.bps.go.id"
  },
  {
    "domain_id": "1311",
    "domain_name": "Dharmasraya",
    "domain_url": "https://dharmasrayakab.bps.go.id"
  },
  {
    "domain_id": "1312",
    "domain_name": "Pasaman Barat",
    "domain_url": "https://pasamanbaratkab.bps.go.id"
  },
  {
    "domain_id": "1371",
    "domain_name": "Padang",
    "domain_url": "https://padangkota.bps.go.id"
  },
  {
    "domain_id": "1372",
    "domain_name": "Solok",
    "domain_url": "https://solokkota.bps.go.id"
  },
  {
    "domain_id": "1373",
    "domain_name": "Sawah Lunto",
    "domain_url": "https://sawahluntokota.bps.go.id"
  },
  {
    "domain_id": "1374",
    "domain_name": "Padang Panjang",
    "domain_url": "https://padangpanjangkota.bps.go.id"
  },
  {
    "domain_id": "1375",
    "domain_name": "Bukittinggi",
    "domain_url": "https://bukittinggikota.bps.go.id"
  },
  {
    "domain_id": "1376",
    "domain_name": "Payakumbuh",
    "domain_url": "https://payakumbuhkota.bps.go.id"
  },
  {
    "domain_id": "1377",
    "domain_name": "Pariaman",
    "domain_url": "https://pariamankota.bps.go.id"
  },
  {
    "domain_id": "1400",
    "domain_name": "Riau",
    "domain_url": "https://riau.bps.go.id"
  },
  {
    "domain_id": "1401",
    "domain_name": "Kuantan Singingi",
    "domain_url": "https://kuansingkab.bps.go.id"
  },
  {
    "domain_id": "1402",
    "domain_name": "Indragiri Hulu",
    "domain_url": "https://inhukab.bps.go.id"
  },
  {
    "domain_id": "1403",
    "domain_name": "Indragiri Hilir",
    "domain_url": "https://inhilkab.bps.go.id"
  },
  {
    "domain_id": "1404",
    "domain_name": "Pelalawan",
    "domain_url": "https://pelalawankab.bps.go.id"
  },
  {
    "domain_id": "1405",
    "domain_name": "S I A K",
    "domain_url": "https://siakkab.bps.go.id"
  },
  {
    "domain_id": "1406",
    "domain_name": "Kampar",
    "domain_url": "https://kamparkab.bps.go.id"
  },
  {
    "domain_id": "1407",
    "domain_name": "Rokan Hulu",
    "domain_url": "https://rohulkab.bps.go.id"
  },
  {
    "domain_id": "1408",
    "domain_name": "Bengkalis",
    "domain_url": "https://bengkaliskab.bps.go.id"
  },
  {
    "domain_id": "1409",
    "domain_name": "Rokan Hilir",
    "domain_url": "https://rohilkab.bps.go.id"
  },
  {
    "domain_id": "1410",
    "domain_name": "Kepulauan Meranti",
    "domain_url": "https://merantikab.bps.go.id"
  },
  {
    "domain_id": "1471",
    "domain_name": "Pekanbaru",
    "domain_url": "https://pekanbarukota.bps.go.id"
  },
  {
    "domain_id": "1473",
    "domain_name": "D U M A I",
    "domain_url": "https://dumaikota.bps.go.id"
  },
  {
    "domain_id": "1500",
    "domain_name": "Jambi",
    "domain_url": "https://jambi.bps.go.id"
  },
  {
    "domain_id": "1501",
    "domain_name": "Kerinci",
    "domain_url": "https://kerincikab.bps.go.id"
  },
  {
    "domain_id": "1502",
    "domain_name": "Merangin",
    "domain_url": "https://meranginkab.bps.go.id"
  },
  {
    "domain_id": "1503",
    "domain_name": "Sarolangun",
    "domain_url": "https://sarolangunkab.bps.go.id"
  },
  {
    "domain_id": "1504",
    "domain_name": "Batang Hari",
    "domain_url": "https://batangharikab.bps.go.id"
  },
  {
    "domain_id": "1505",
    "domain_name": "Muaro Jambi",
    "domain_url": "https://muarojambikab.bps.go.id"
  },
  {
    "domain_id": "1506",
    "domain_name": "Tanjung Jabung Timur",
    "domain_url": "https://tanjabtimkab.bps.go.id"
  },
  {
    "domain_id": "1507",
    "domain_name": "Tanjung Jabung Barat",
    "domain_url": "https://tanjabbarkab.bps.go.id"
  },
  {
    "domain_id": "1508",
    "domain_name": "Tebo",
    "domain_url": "https://tebokab.bps.go.id"
  },
  {
    "domain_id": "1509",
    "domain_name": "Bungo",
    "domain_url": "https://bungokab.bps.go.id"
  },
  {
    "domain_id": "1571",
    "domain_name": "Jambi",
    "domain_url": "https://jambikota.bps.go.id"
  },
  {
    "domain_id": "1572",
    "domain_name": "Sungai Penuh",
    "domain_url": "https://sungaipenuhkota.bps.go.id"
  },
  {
    "domain_id": "1600",
    "domain_name": "Sumatera Selatan",
    "domain_url": "https://sumsel.bps.go.id"
  },
  {
    "domain_id": "1601",
    "domain_name": "Ogan Komering Ulu",
    "domain_url": "https://okukab.bps.go.id"
  },
  {
    "domain_id": "1602",
    "domain_name": "Ogan Komering Ilir",
    "domain_url": "https://okikab.bps.go.id"
  },
  {
    "domain_id": "1603",
    "domain_name": "Muara Enim",
    "domain_url": "https://muaraenimkab.bps.go.id"
  },
  {
    "domain_id": "1604",
    "domain_name": "Lahat",
    "domain_url": "https://lahatkab.bps.go.id"
  },
  {
    "domain_id": "1605",
    "domain_name": "Musi Rawas",
    "domain_url": "https://musirawaskab.bps.go.id"
  },
  {
    "domain_id": "1606",
    "domain_name": "Musi Banyuasin",
    "domain_url": "https://musibanyuasinkab.bps.go.id"
  },
  {
    "domain_id": "1607",
    "domain_name": "Banyu Asin",
    "domain_url": "https://banyuasinkab.bps.go.id"
  },
  {
    "domain_id": "1608",
    "domain_name": "Ogan Komering Ulu Selatan",
    "domain_url": "https://okuselatankab.bps.go.id"
  },
  {
    "domain_id": "1609",
    "domain_name": "Ogan Komering Ulu Timur",
    "domain_url": "https://okutimurkab.bps.go.id"
  },
  {
    "domain_id": "1610",
    "domain_name": "Ogan Ilir",
    "domain_url": "https://oganilirkab.bps.go.id"
  },
  {
    "domain_id": "1611",
    "domain_name": "Empat Lawang",
    "domain_url": "https://empatlawangkab.bps.go.id"
  },
  {
    "domain_id": "1612",
    "domain_name": "Penukal Abab Lematang Ilir",
    "domain_url": "https://palikab.bps.go.id"
  },
  {
    "domain_id": "1613",
    "domain_name": "Musi Rawas Utara",
    "domain_url": "https://muratarakab.bps.go.id"
  },
  {
    "domain_id": "1671",
    "domain_name": "Palembang",
    "domain_url": "https://palembangkota.bps.go.id"
  },
  {
    "domain_id": "1672",
    "domain_name": "Prabumulih",
    "domain_url": "https://prabumulihkota.bps.go.id"
  },
  {
    "domain_id": "1673",
    "domain_name": "Pagar Alam",
    "domain_url": "https://pagaralamkota.bps.go.id"
  },
  {
    "domain_id": "1674",
    "domain_name": "Lubuklinggau",
    "domain_url": "https://lubuklinggaukota.bps.go.id"
  },
  {
    "domain_id": "1700",
    "domain_name": "Bengkulu",
    "domain_url": "https://bengkulu.bps.go.id"
  },
  {
    "domain_id": "1701",
    "domain_name": "Bengkulu Selatan",
    "domain_url": "https://bengkuluselatankab.bps.go.id"
  },
  {
    "domain_id": "1702",
    "domain_name": "Rejang Lebong",
    "domain_url": "https://rejanglebongkab.bps.go.id"
  },
  {
    "domain_id": "1703",
    "domain_name": "Bengkulu Utara",
    "domain_url": "https://bengkuluutarakab.bps.go.id"
  },
  {
    "domain_id": "1704",
    "domain_name": "Kaur",
    "domain_url": "https://kaurkab.bps.go.id"
  },
  {
    "domain_id": "1705",
    "domain_name": "Seluma",
    "domain_url": "https://selumakab.bps.go.id"
  },
  {
    "domain_id": "1706",
    "domain_name": "Mukomuko",
    "domain_url": "https://mukomukokab.bps.go.id"
  },
  {
    "domain_id": "1707",
    "domain_name": "Lebong",
    "domain_url": "https://lebongkab.bps.go.id"
  },
  {
    "domain_id": "1708",
    "domain_name": "Kepahiang",
    "domain_url": "https://kepahiangkab.bps.go.id"
  },
  {
    "domain_id": "1709",
    "domain_name": "Bengkulu Tengah",
    "domain_url": "https://bengkulutengahkab.bps.go.id"
  },
  {
    "domain_id": "1771",
    "domain_name": "Bengkulu",
    "domain_url": "https://bengkulukota.bps.go.id"
  },
  {
    "domain_id": "1800",
    "domain_name": "Lampung",
    "domain_url": "https://lampung.bps.go.id"
  },
  {
    "domain_id": "1801",
    "domain_name": "Lampung Barat",
    "domain_url": "https://lampungbaratkab.bps.go.id"
  },
  {
    "domain_id": "1802",
    "domain_name": "Tanggamus",
    "domain_url": "https://tanggamuskab.bps.go.id"
  },
  {
    "domain_id": "1803",
    "domain_name": "Lampung Selatan",
    "domain_url": "https://lampungselatankab.bps.go.id"
  },
  {
    "domain_id": "1804",
    "domain_name": "Lampung Timur",
    "domain_url": "https://lampungtimurkab.bps.go.id"
  },
  {
    "domain_id": "1805",
    "domain_name": "Lampung Tengah",
    "domain_url": "https://lampungtengahkab.bps.go.id"
  },
  {
    "domain_id": "1806",
    "domain_name": "Lampung Utara",
    "domain_url": "https://lampungutarakab.bps.go.id"
  },
  {
    "domain_id": "1807",
    "domain_name": "Way Kanan",
    "domain_url": "https://waykanankab.bps.go.id"
  },
  {
    "domain_id": "1808",
    "domain_name": "Tulangbawang",
    "domain_url": "https://tulangbawangkab.bps.go.id"
  },
  {
    "domain_id": "1809",
    "domain_name": "Pesawaran",
    "domain_url": "https://pesawarankab.bps.go.id"
  },
  {
    "domain_id": "1810",
    "domain_name": "Pringsewu",
    "domain_url": "https://pringsewukab.bps.go.id"
  },
  {
    "domain_id": "1811",
    "domain_name": "Mesuji",
    "domain_url": "https://mesujikab.bps.go.id"
  },
  {
    "domain_id": "1812",
    "domain_name": "Tulang Bawang Barat",
    "domain_url": "https://tubabakab.bps.go.id"
  },
  {
    "domain_id": "1813",
    "domain_name": "Pesisir Barat",
    "domain_url": "https://pesisirbaratkab.bps.go.id"
  },
  {
    "domain_id": "1871",
    "domain_name": "Bandar Lampung",
    "domain_url": "https://bandarlampungkota.bps.go.id"
  },
  {
    "domain_id": "1872",
    "domain_name": "Metro",
    "domain_url": "https://metrokota.bps.go.id"
  },
  {
    "domain_id": "1900",
    "domain_name": "Kep. Bangka Belitung",
    "domain_url": "https://babel.bps.go.id"
  },
  {
    "domain_id": "1901",
    "domain_name": "Bangka",
    "domain_url": "https://bangkakab.bps.go.id"
  },
  {
    "domain_id": "1902",
    "domain_name": "Belitung",
    "domain_url": "https://belitungkab.bps.go.id"
  },
  {
    "domain_id": "1903",
    "domain_name": "Bangka Barat",
    "domain_url": "https://bangkabaratkab.bps.go.id"
  },
  {
    "domain_id": "1904",
    "domain_name": "Bangka Tengah",
    "domain_url": "https://bangkatengahkab.bps.go.id"
  },
  {
    "domain_id": "1905",
    "domain_name": "Bangka Selatan",
    "domain_url": "https://bangkaselatankab.bps.go.id"
  },
  {
    "domain_id": "1906",
    "domain_name": "Belitung Timur",
    "domain_url": "https://belitungtimurkab.bps.go.id"
  },
  {
    "domain_id": "1971",
    "domain_name": "Pangkal Pinang",
    "domain_url": "https://pangkalpinangkota.bps.go.id"
  },
  {
    "domain_id": "2100",
    "domain_name": "Kep. Riau",
    "domain_url": "https://kepri.bps.go.id"
  },
  {
    "domain_id": "2101",
    "domain_name": "Karimun",
    "domain_url": "https://karimunkab.bps.go.id"
  },
  {
    "domain_id": "2102",
    "domain_name": "Bintan",
    "domain_url": "https://bintankab.bps.go.id"
  },
  {
    "domain_id": "2103",
    "domain_name": "Natuna",
    "domain_url": "https://natunakab.bps.go.id"
  },
  {
    "domain_id": "2104",
    "domain_name": "Lingga",
    "domain_url": "https://linggakab.bps.go.id"
  },
  {
    "domain_id": "2105",
    "domain_name": "Kepulauan Anambas",
    "domain_url": "https://anambaskab.bps.go.id"
  },
  {
    "domain_id": "2171",
    "domain_name": "B A T A M",
    "domain_url": "https://batamkota.bps.go.id"
  },
  {
    "domain_id": "2172",
    "domain_name": "Tanjung Pinang",
    "domain_url": "https://tanjungpinangkota.bps.go.id"
  },
  {
    "domain_id": "3100",
    "domain_name": "Dki Jakarta",
    "domain_url": "https://jakarta.bps.go.id"
  },
  {
    "domain_id": "3101",
    "domain_name": "Kepulauan Seribu",
    "domain_url": "https://kepulauanseribukab.bps.go.id"
  },
  {
    "domain_id": "3171",
    "domain_name": "Jakarta Selatan",
    "domain_url": "https://jakselkota.bps.go.id"
  },
  {
    "domain_id": "3172",
    "domain_name": "Jakarta Timur",
    "domain_url": "https://jaktimkota.bps.go.id"
  },
  {
    "domain_id": "3173",
    "domain_name": "Jakarta Pusat",
    "domain_url": "https://jakpuskota.bps.go.id"
  },
  {
    "domain_id": "3174",
    "domain_name": "Jakarta Barat",
    "domain_url": "https://jakbarkota.bps.go.id"
  },
  {
    "domain_id": "3175",
    "domain_name": "Jakarta Utara",
    "domain_url": "https://jakutkota.bps.go.id"
  },
  {
    "domain_id": "3200",
    "domain_name": "Jawa Barat",
    "domain_url": "https://jabar.bps.go.id"
  },
  {
    "domain_id": "3201",
    "domain_name": "Bogor",
    "domain_url": "https://bogorkab.bps.go.id"
  },
  {
    "domain_id": "3202",
    "domain_name": "Sukabumi",
    "domain_url": "https://sukabumikab.bps.go.id"
  },
  {
    "domain_id": "3203",
    "domain_name": "Cianjur",
    "domain_url": "https://cianjurkab.bps.go.id"
  },
  {
    "domain_id": "3204",
    "domain_name": "Bandung",
    "domain_url": "https://bandungkab.bps.go.id"
  },
  {
    "domain_id": "3205",
    "domain_name": "Garut",
    "domain_url": "https://garutkab.bps.go.id"
  },
  {
    "domain_id": "3206",
    "domain_name": "Tasikmalaya",
    "domain_url": "https://tasikmalayakab.bps.go.id"
  },
  {
    "domain_id": "3207",
    "domain_name": "Ciamis",
    "domain_url": "https://ciamiskab.bps.go.id"
  },
  {
    "domain_id": "3208",
    "domain_name": "Kuningan",
    "domain_url": "https://kuningankab.bps.go.id"
  },
  {
    "domain_id": "3209",
    "domain_name": "Cirebon",
    "domain_url": "https://cirebonkab.bps.go.id"
  },
  {
    "domain_id": "3210",
    "domain_name": "Majalengka",
    "domain_url": "https://majalengkakab.bps.go.id"
  },
  {
    "domain_id": "3211",
    "domain_name": "Sumedang",
    "domain_url": "https://sumedangkab.bps.go.id"
  },
  {
    "domain_id": "3212",
    "domain_name": "Indramayu",
    "domain_url": "https://indramayukab.bps.go.id"
  },
  {
    "domain_id": "3213",
    "domain_name": "Subang",
    "domain_url": "https://subangkab.bps.go.id"
  },
  {
    "domain_id": "3214",
    "domain_name": "Purwakarta",
    "domain_url": "https://purwakartakab.bps.go.id"
  },
  {
    "domain_id": "3215",
    "domain_name": "Karawang",
    "domain_url": "https://karawangkab.bps.go.id"
  },
  {
    "domain_id": "3216",
    "domain_name": "Bekasi",
    "domain_url": "https://bekasikab.bps.go.id"
  },
  {
    "domain_id": "3217",
    "domain_name": "Bandung Barat",
    "domain_url": "https://bandungbaratkab.bps.go.id"
  },
  {
    "domain_id": "3218",
    "domain_name": "Pangandaran",
    "domain_url": "https://pangandarankab.bps.go.id"
  },
  {
    "domain_id": "3271",
    "domain_name": "Bogor",
    "domain_url": "https://bogorkota.bps.go.id"
  },
  {
    "domain_id": "3272",
    "domain_name": "Sukabumi",
    "domain_url": "https://sukabumikota.bps.go.id"
  },
  {
    "domain_id": "3273",
    "domain_name": "Bandung",
    "domain_url": "https://bandungkota.bps.go.id"
  },
  {
    "domain_id": "3274",
    "domain_name": "Cirebon",
    "domain_url": "https://cirebonkota.bps.go.id"
  },
  {
    "domain_id": "3275",
    "domain_name": "Bekasi",
    "domain_url": "https://bekasikota.bps.go.id"
  },
  {
    "domain_id": "3276",
    "domain_name": "Depok",
    "domain_url": "https://depokkota.bps.go.id"
  },
  {
    "domain_id": "3277",
    "domain_name": "Cimahi",
    "domain_url": "https://cimahikota.bps.go.id"
  },
  {
    "domain_id": "3278",
    "domain_name": "Tasikmalaya",
    "domain_url": "https://tasikmalayakota.bps.go.id"
  },
  {
    "domain_id": "3279",
    "domain_name": "Banjar",
    "domain_url": "https://banjarkota.bps.go.id"
  },
  {
    "domain_id": "3300",
    "domain_name": "Jawa Tengah",
    "domain_url": "https://jateng.bps.go.id"
  },
  {
    "domain_id": "3301",
    "domain_name": "Cilacap",
    "domain_url": "https://cilacapkab.bps.go.id"
  },
  {
    "domain_id": "3302",
    "domain_name": "Banyumas",
    "domain_url": "https://banyumaskab.bps.go.id"
  },
  {
    "domain_id": "3303",
    "domain_name": "Purbalingga",
    "domain_url": "https://purbalinggakab.bps.go.id"
  },
  {
    "domain_id": "3304",
    "domain_name": "Banjarnegara",
    "domain_url": "https://banjarnegarakab.bps.go.id"
  },
  {
    "domain_id": "3305",
    "domain_name": "Kebumen",
    "domain_url": "https://kebumenkab.bps.go.id"
  },
  {
    "domain_id": "3306",
    "domain_name": "Purworejo",
    "domain_url": "https://purworejokab.bps.go.id"
  },
  {
    "domain_id": "3307",
    "domain_name": "Wonosobo",
    "domain_url": "https://wonosobokab.bps.go.id"
  },
  {
    "domain_id": "3308",
    "domain_name": "Magelang",
    "domain_url": "https://magelangkab.bps.go.id"
  },
  {
    "domain_id": "3309",
    "domain_name": "Boyolali",
    "domain_url": "https://boyolalikab.bps.go.id"
  },
  {
    "domain_id": "3310",
    "domain_name": "Klaten",
    "domain_url": "https://klatenkab.bps.go.id"
  },
  {
    "domain_id": "3311",
    "domain_name": "Sukoharjo",
    "domain_url": "https://sukoharjokab.bps.go.id"
  },
  {
    "domain_id": "3312",
    "domain_name": "Wonogiri",
    "domain_url": "https://wonogirikab.bps.go.id"
  },
  {
    "domain_id": "3313",
    "domain_name": "Karanganyar",
    "domain_url": "https://karanganyarkab.bps.go.id"
  },
  {
    "domain_id": "3314",
    "domain_name": "Sragen",
    "domain_url": "https://sragenkab.bps.go.id"
  },
  {
    "domain_id": "3315",
    "domain_name": "Grobogan",
    "domain_url": "https://grobogankab.bps.go.id"
  },
  {
    "domain_id": "3316",
    "domain_name": "Blora",
    "domain_url": "https://blorakab.bps.go.id"
  },
  {
    "domain_id": "3317",
    "domain_name": "Rembang",
    "domain_url": "https://rembangkab.bps.go.id"
  },
  {
    "domain_id": "3318",
    "domain_name": "Pati",
    "domain_url": "https://patikab.bps.go.id"
  },
  {
    "domain_id": "3319",
    "domain_name": "Kudus",
    "domain_url": "https://kuduskab.bps.go.id"
  },
  {
    "domain_id": "3320",
    "domain_name": "Jepara",
    "domain_url": "https://jeparakab.bps.go.id"
  },
  {
    "domain_id": "3321",
    "domain_name": "Demak",
    "domain_url": "https://demakkab.bps.go.id"
  },
  {
    "domain_id": "3322",
    "domain_name": "Semarang",
    "domain_url": "https://semarangkab.bps.go.id"
  },
  {
    "domain_id": "3323",
    "domain_name": "Temanggung",
    "domain_url": "https://temanggungkab.bps.go.id"
  },
  {
    "domain_id": "3324",
    "domain_name": "Kendal",
    "domain_url": "https://kendalkab.bps.go.id"
  },
  {
    "domain_id": "3325",
    "domain_name": "Batang",
    "domain_url": "https://batangkab.bps.go.id"
  },
  {
    "domain_id": "3326",
    "domain_name": "Pekalongan",
    "domain_url": "https://pekalongankab.bps.go.id"
  },
  {
    "domain_id": "3327",
    "domain_name": "Pemalang",
    "domain_url": "https://pemalangkab.bps.go.id"
  },
  {
    "domain_id": "3328",
    "domain_name": "Tegal",
    "domain_url": "https://tegalkab.bps.go.id"
  },
  {
    "domain_id": "3329",
    "domain_name": "Brebes",
    "domain_url": "https://brebeskab.bps.go.id"
  },
  {
    "domain_id": "3371",
    "domain_name": "Magelang",
    "domain_url": "https://magelangkota.bps.go.id"
  },
  {
    "domain_id": "3372",
    "domain_name": "Surakarta",
    "domain_url": "https://surakartakota.bps.go.id"
  },
  {
    "domain_id": "3373",
    "domain_name": "Salatiga",
    "domain_url": "https://salatigakota.bps.go.id"
  },
  {
    "domain_id": "3374",
    "domain_name": "Semarang",
    "domain_url": "https://semarangkota.bps.go.id"
  },
  {
    "domain_id": "3375",
    "domain_name": "Pekalongan",
    "domain_url": "https://pekalongankota.bps.go.id"
  },
  {
    "domain_id": "3376",
    "domain_name": "Tegal",
    "domain_url": "https://tegalkota.bps.go.id"
  },
  {
    "domain_id": "3400",
    "domain_name": "Di Yogyakarta",
    "domain_url": "https://yogyakarta.bps.go.id"
  },
  {
    "domain_id": "3401",
    "domain_name": "Kulon Progo",
    "domain_url": "https://kulonprogokab.bps.go.id"
  },
  {
    "domain_id": "3402",
    "domain_name": "Bantul",
    "domain_url": "https://bantulkab.bps.go.id"
  },
  {
    "domain_id": "3403",
    "domain_name": "Gunung Kidul",
    "domain_url": "https://gunungkidulkab.bps.go.id"
  },
  {
    "domain_id": "3404",
    "domain_name": "Sleman",
    "domain_url": "https://slemankab.bps.go.id"
  },
  {
    "domain_id": "3471",
    "domain_name": "Yogyakarta",
    "domain_url": "https://jogjakota.bps.go.id"
  },
  {
    "domain_id": "3500",
    "domain_name": "Jawa Timur",
    "domain_url": "https://jatim.bps.go.id"
  },
  {
    "domain_id": "3501",
    "domain_name": "Pacitan",
    "domain_url": "https://pacitankab.bps.go.id"
  },
  {
    "domain_id": "3502",
    "domain_name": "Ponorogo",
    "domain_url": "https://ponorogokab.bps.go.id"
  },
  {
    "domain_id": "3503",
    "domain_name": "Trenggalek",
    "domain_url": "https://trenggalekkab.bps.go.id"
  },
  {
    "domain_id": "3504",
    "domain_name": "Tulungagung",
    "domain_url": "https://tulungagungkab.bps.go.id"
  },
  {
    "domain_id": "3505",
    "domain_name": "Blitar",
    "domain_url": "https://blitarkab.bps.go.id"
  },
  {
    "domain_id": "3506",
    "domain_name": "Kediri",
    "domain_url": "https://kedirikab.bps.go.id"
  },
  {
    "domain_id": "3507",
    "domain_name": "Malang",
    "domain_url": "https://malangkab.bps.go.id"
  },
  {
    "domain_id": "3508",
    "domain_name": "Lumajang",
    "domain_url": "https://lumajangkab.bps.go.id"
  },
  {
    "domain_id": "3509",
    "domain_name": "Jember",
    "domain_url": "https://jemberkab.bps.go.id"
  },
  {
    "domain_id": "3510",
    "domain_name": "Banyuwangi",
    "domain_url": "https://banyuwangikab.bps.go.id"
  },
  {
    "domain_id": "3511",
    "domain_name": "Bondowoso",
    "domain_url": "https://bondowosokab.bps.go.id"
  },
  {
    "domain_id": "3512",
    "domain_name": "Situbondo",
    "domain_url": "https://situbondokab.bps.go.id"
  },
  {
    "domain_id": "3513",
    "domain_name": "Probolinggo",
    "domain_url": "https://probolinggokab.bps.go.id"
  },
  {
    "domain_id": "3514",
    "domain_name": "Pasuruan",
    "domain_url": "https://pasuruankab.bps.go.id"
  },
  {
    "domain_id": "3515",
    "domain_name": "Sidoarjo",
    "domain_url": "https://sidoarjokab.bps.go.id"
  },
  {
    "domain_id": "3516",
    "domain_name": "Mojokerto",
    "domain_url": "https://mojokertokab.bps.go.id"
  },
  {
    "domain_id": "3517",
    "domain_name": "Jombang",
    "domain_url": "https://jombangkab.bps.go.id"
  },
  {
    "domain_id": "3518",
    "domain_name": "Nganjuk",
    "domain_url": "https://nganjukkab.bps.go.id"
  },
  {
    "domain_id": "3519",
    "domain_name": "Madiun",
    "domain_url": "https://madiunkab.bps.go.id"
  },
  {
    "domain_id": "3520",
    "domain_name": "Magetan",
    "domain_url": "https://magetankab.bps.go.id"
  },
  {
    "domain_id": "3521",
    "domain_name": "Ngawi",
    "domain_url": "https://ngawikab.bps.go.id"
  },
  {
    "domain_id": "3522",
    "domain_name": "Bojonegoro",
    "domain_url": "https://bojonegorokab.bps.go.id"
  },
  {
    "domain_id": "3523",
    "domain_name": "Tuban",
    "domain_url": "https://tubankab.bps.go.id"
  },
  {
    "domain_id": "3524",
    "domain_name": "Lamongan",
    "domain_url": "https://lamongankab.bps.go.id"
  },
  {
    "domain_id": "3525",
    "domain_name": "Gresik",
    "domain_url": "https://gresikkab.bps.go.id"
  },
  {
    "domain_id": "3526",
    "domain_name": "Bangkalan",
    "domain_url": "https://bangkalankab.bps.go.id"
  },
  {
    "domain_id": "3527",
    "domain_name": "Sampang",
    "domain_url": "https://sampangkab.bps.go.id"
  },
  {
    "domain_id": "3528",
    "domain_name": "Pamekasan",
    "domain_url": "https://pamekasankab.bps.go.id"
  },
  {
    "domain_id": "3529",
    "domain_name": "Sumenep",
    "domain_url": "https://sumenepkab.bps.go.id"
  },
  {
    "domain_id": "3571",
    "domain_name": "Kediri",
    "domain_url": "https://kedirikota.bps.go.id"
  },
  {
    "domain_id": "3572",
    "domain_name": "Blitar",
    "domain_url": "https://blitarkota.bps.go.id"
  },
  {
    "domain_id": "3573",
    "domain_name": "Malang",
    "domain_url": "https://malangkota.bps.go.id"
  },
  {
    "domain_id": "3574",
    "domain_name": "Probolinggo",
    "domain_url": "https://probolinggokota.bps.go.id"
  },
  {
    "domain_id": "3575",
    "domain_name": "Pasuruan",
    "domain_url": "https://pasuruankota.bps.go.id"
  },
  {
    "domain_id": "3576",
    "domain_name": "Mojokerto",
    "domain_url": "https://mojokertokota.bps.go.id"
  },
  {
    "domain_id": "3577",
    "domain_name": "Madiun",
    "domain_url": "https://madiunkota.bps.go.id"
  },
  {
    "domain_id": "3578",
    "domain_name": "Surabaya",
    "domain_url": "https://surabayakota.bps.go.id"
  },
  {
    "domain_id": "3579",
    "domain_name": "Batu",
    "domain_url": "https://batukota.bps.go.id"
  },
  {
    "domain_id": "3600",
    "domain_name": "Banten",
    "domain_url": "https://banten.bps.go.id"
  },
  {
    "domain_id": "3601",
    "domain_name": "Pandeglang",
    "domain_url": "https://pandeglangkab.bps.go.id"
  },
  {
    "domain_id": "3602",
    "domain_name": "Lebak",
    "domain_url": "https://lebakkab.bps.go.id"
  },
  {
    "domain_id": "3603",
    "domain_name": "Tangerang",
    "domain_url": "https://tangerangkab.bps.go.id"
  },
  {
    "domain_id": "3604",
    "domain_name": "Serang",
    "domain_url": "https://serangkab.bps.go.id"
  },
  {
    "domain_id": "3671",
    "domain_name": "Tangerang",
    "domain_url": "https://tangerangkota.bps.go.id"
  },
  {
    "domain_id": "3672",
    "domain_name": "Cilegon",
    "domain_url": "https://cilegonkota.bps.go.id"
  },
  {
    "domain_id": "3673",
    "domain_name": "Serang",
    "domain_url": "https://serangkota.bps.go.id"
  },
  {
    "domain_id": "3674",
    "domain_name": "Tangerang Selatan",
    "domain_url": "https://tangselkota.bps.go.id"
  },
  {
    "domain_id": "5100",
    "domain_name": "Bali",
    "domain_url": "https://bali.bps.go.id"
  },
  {
    "domain_id": "5101",
    "domain_name": "Jembrana",
    "domain_url": "https://jembranakab.bps.go.id"
  },
  {
    "domain_id": "5102",
    "domain_name": "Tabanan",
    "domain_url": "https://tabanankab.bps.go.id"
  },
  {
    "domain_id": "5103",
    "domain_name": "Badung",
    "domain_url": "https://badungkab.bps.go.id"
  },
  {
    "domain_id": "5104",
    "domain_name": "Gianyar",
    "domain_url": "https://gianyarkab.bps.go.id"
  },
  {
    "domain_id": "5105",
    "domain_name": "Klungkung",
    "domain_url": "https://klungkungkab.bps.go.id"
  },
  {
    "domain_id": "5106",
    "domain_name": "Bangli",
    "domain_url": "https://banglikab.bps.go.id"
  },
  {
    "domain_id": "5107",
    "domain_name": "Karang Asem",
    "domain_url": "https://karangasemkab.bps.go.id"
  },
  {
    "domain_id": "5108",
    "domain_name": "Buleleng",
    "domain_url": "https://bulelengkab.bps.go.id"
  },
  {
    "domain_id": "5171",
    "domain_name": "Denpasar",
    "domain_url": "https://denpasarkota.bps.go.id"
  },
  {
    "domain_id": "5200",
    "domain_name": "Nusa Tenggara Barat",
    "domain_url": "https://ntb.bps.go.id"
  },
  {
    "domain_id": "5201",
    "domain_name": "Lombok Barat",
    "domain_url": "https://lombokbaratkab.bps.go.id"
  },
  {
    "domain_id": "5202",
    "domain_name": "Lombok Tengah",
    "domain_url": "https://lomboktengahkab.bps.go.id"
  },
  {
    "domain_id": "5203",
    "domain_name": "Lombok Timur",
    "domain_url": "https://lomboktimurkab.bps.go.id"
  },
  {
    "domain_id": "5204",
    "domain_name": "Sumbawa",
    "domain_url": "https://sumbawakab.bps.go.id"
  },
  {
    "domain_id": "5205",
    "domain_name": "Dompu",
    "domain_url": "https://dompukab.bps.go.id"
  },
  {
    "domain_id": "5206",
    "domain_name": "Bima",
    "domain_url": "https://bimakab.bps.go.id"
  },
  {
    "domain_id": "5207",
    "domain_name": "Sumbawa Barat",
    "domain_url": "https://sumbawabaratkab.bps.go.id"
  },
  {
    "domain_id": "5208",
    "domain_name": "Lombok Utara",
    "domain_url": "https://lombokutarakab.bps.go.id"
  },
  {
    "domain_id": "5271",
    "domain_name": "Mataram",
    "domain_url": "https://mataramkota.bps.go.id"
  },
  {
    "domain_id": "5272",
    "domain_name": "Bima",
    "domain_url": "https://bimakota.bps.go.id"
  },
  {
    "domain_id": "5300",
    "domain_name": "Nusa Tenggara Timur",
    "domain_url": "https://ntt.bps.go.id"
  },
  {
    "domain_id": "5301",
    "domain_name": "Sumba Barat",
    "domain_url": "https://sumbabaratkab.bps.go.id"
  },
  {
    "domain_id": "5302",
    "domain_name": "Sumba Timur",
    "domain_url": "https://sumbatimurkab.bps.go.id"
  },
  {
    "domain_id": "5303",
    "domain_name": "Kupang",
    "domain_url": "https://kupangkab.bps.go.id"
  },
  {
    "domain_id": "5304",
    "domain_name": "Timor Tengah Selatan",
    "domain_url": "https://timortengahselatankab.bps.go.id"
  },
  {
    "domain_id": "5305",
    "domain_name": "Timor Tengah Utara",
    "domain_url": "https://timortengahutarakab.bps.go.id"
  },
  {
    "domain_id": "5306",
    "domain_name": "Belu",
    "domain_url": "https://belukab.bps.go.id"
  },
  {
    "domain_id": "5307",
    "domain_name": "Alor",
    "domain_url": "https://alorkab.bps.go.id"
  },
  {
    "domain_id": "5308",
    "domain_name": "Lembata",
    "domain_url": "https://lembatakab.bps.go.id"
  },
  {
    "domain_id": "5309",
    "domain_name": "Flores Timur",
    "domain_url": "https://florestimurkab.bps.go.id"
  },
  {
    "domain_id": "5310",
    "domain_name": "Sikka",
    "domain_url": "https://sikkakab.bps.go.id"
  },
  {
    "domain_id": "5311",
    "domain_name": "Ende",
    "domain_url": "https://endekab.bps.go.id"
  },
  {
    "domain_id": "5312",
    "domain_name": "Ngada",
    "domain_url": "https://ngadakab.bps.go.id"
  },
  {
    "domain_id": "5313",
    "domain_name": "Manggarai",
    "domain_url": "https://manggaraikab.bps.go.id"
  },
  {
    "domain_id": "5314",
    "domain_name": "Rote Ndao",
    "domain_url": "https://rotendaokab.bps.go.id"
  },
  {
    "domain_id": "5315",
    "domain_name": "Manggarai Barat",
    "domain_url": "https://manggaraibaratkab.bps.go.id"
  },
  {
    "domain_id": "5316",
    "domain_name": "Sumba Tengah",
    "domain_url": "https://sumbatengahkab.bps.go.id"
  },
  {
    "domain_id": "5317",
    "domain_name": "Sumba Barat Daya",
    "domain_url": "https://sumbabaratdayakab.bps.go.id"
  },
  {
    "domain_id": "5318",
    "domain_name": "Nagekeo",
    "domain_url": "https://nagekeokab.bps.go.id"
  },
  {
    "domain_id": "5319",
    "domain_name": "Manggarai Timur",
    "domain_url": "https://manggaraitimurkab.bps.go.id"
  },
  {
    "domain_id": "5320",
    "domain_name": "Sabu Raijua",
    "domain_url": "https://saburaijuakab.bps.go.id"
  },
  {
    "domain_id": "5321",
    "domain_name": "Malaka",
    "domain_url": "https://malakakab.bps.go.id"
  },
  {
    "domain_id": "5371",
    "domain_name": "Kupang",
    "domain_url": "https://kupangkota.bps.go.id"
  },
  {
    "domain_id": "6100",
    "domain_name": "Kalimantan Barat",
    "domain_url": "https://kalbar.bps.go.id"
  },
  {
    "domain_id": "6101",
    "domain_name": "Sambas",
    "domain_url": "https://sambaskab.bps.go.id"
  },
  {
    "domain_id": "6102",
    "domain_name": "Bengkayang",
    "domain_url": "https://bengkayangkab.bps.go.id"
  },
  {
    "domain_id": "6103",
    "domain_name": "Landak",
    "domain_url": "https://landakkab.bps.go.id"
  },
  {
    "domain_id": "6104",
    "domain_name": "Mempawah",
    "domain_url": "https://mempawahkab.bps.go.id"
  },
  {
    "domain_id": "6105",
    "domain_name": "Sanggau",
    "domain_url": "https://sanggaukab.bps.go.id"
  },
  {
    "domain_id": "6106",
    "domain_name": "Ketapang",
    "domain_url": "https://ketapangkab.bps.go.id"
  },
  {
    "domain_id": "6107",
    "domain_name": "Sintang",
    "domain_url": "https://sintangkab.bps.go.id"
  },
  {
    "domain_id": "6108",
    "domain_name": "Kapuas Hulu",
    "domain_url": "https://kapuashulukab.bps.go.id"
  },
  {
    "domain_id": "6109",
    "domain_name": "Sekadau",
    "domain_url": "https://sekadaukab.bps.go.id"
  },
  {
    "domain_id": "6110",
    "domain_name": "Melawi",
    "domain_url": "https://melawikab.bps.go.id"
  },
  {
    "domain_id": "6111",
    "domain_name": "Kayong Utara",
    "domain_url": "https://kayongutarakab.bps.go.id"
  },
  {
    "domain_id": "6112",
    "domain_name": "Kubu Raya",
    "domain_url": "https://kuburayakab.bps.go.id"
  },
  {
    "domain_id": "6171",
    "domain_name": "Pontianak",
    "domain_url": "https://pontianakkota.bps.go.id"
  },
  {
    "domain_id": "6172",
    "domain_name": "Singkawang",
    "domain_url": "https://singkawangkota.bps.go.id"
  },
  {
    "domain_id": "6200",
    "domain_name": "Kalimantan Tengah",
    "domain_url": "https://kalteng.bps.go.id"
  },
  {
    "domain_id": "6201",
    "domain_name": "Kotawaringin Barat",
    "domain_url": "https://kobarkab.bps.go.id"
  },
  {
    "domain_id": "6202",
    "domain_name": "Kotawaringin Timur",
    "domain_url": "https://kotimkab.bps.go.id"
  },
  {
    "domain_id": "6203",
    "domain_name": "Kapuas",
    "domain_url": "https://kapuaskab.bps.go.id"
  },
  {
    "domain_id": "6204",
    "domain_name": "Barito Selatan",
    "domain_url": "https://barselkab.bps.go.id"
  },
  {
    "domain_id": "6205",
    "domain_name": "Barito Utara",
    "domain_url": "https://barutkab.bps.go.id"
  },
  {
    "domain_id": "6206",
    "domain_name": "Sukamara",
    "domain_url": "https://sukamarakab.bps.go.id"
  },
  {
    "domain_id": "6207",
    "domain_name": "Lamandau",
    "domain_url": "https://lamandaukab.bps.go.id"
  },
  {
    "domain_id": "6208",
    "domain_name": "Seruyan",
    "domain_url": "https://seruyankab.bps.go.id"
  },
  {
    "domain_id": "6209",
    "domain_name": "Katingan",
    "domain_url": "https://katingankab.bps.go.id"
  },
  {
    "domain_id": "6210",
    "domain_name": "Pulang Pisau",
    "domain_url": "https://pulpiskab.bps.go.id"
  },
  {
    "domain_id": "6211",
    "domain_name": "Gunung Mas",
    "domain_url": "https://gumaskab.bps.go.id"
  },
  {
    "domain_id": "6212",
    "domain_name": "Barito Timur",
    "domain_url": "https://bartimkab.bps.go.id"
  },
  {
    "domain_id": "6213",
    "domain_name": "Murung Raya",
    "domain_url": "https://murakab.bps.go.id"
  },
  {
    "domain_id": "6271",
    "domain_name": "Palangka Raya",
    "domain_url": "https://palangkakota.bps.go.id"
  },
  {
    "domain_id": "6300",
    "domain_name": "Kalimantan Selatan",
    "domain_url": "https://kalsel.bps.go.id"
  },
  {
    "domain_id": "6301",
    "domain_name": "Tanah Laut",
    "domain_url": "https://tanahlautkab.bps.go.id"
  },
  {
    "domain_id": "6302",
    "domain_name": "Kota Baru",
    "domain_url": "https://kotabarukab.bps.go.id"
  },
  {
    "domain_id": "6303",
    "domain_name": "Banjar",
    "domain_url": "https://banjarkab.bps.go.id"
  },
  {
    "domain_id": "6304",
    "domain_name": "Barito Kuala",
    "domain_url": "https://baritokualakab.bps.go.id"
  },
  {
    "domain_id": "6305",
    "domain_name": "Tapin",
    "domain_url": "https://tapinkab.bps.go.id"
  },
  {
    "domain_id": "6306",
    "domain_name": "Hulu Sungai Selatan",
    "domain_url": "https://hulusungaiselatankab.bps.go.id"
  },
  {
    "domain_id": "6307",
    "domain_name": "Hulu Sungai Tengah",
    "domain_url": "https://hulusungaitengahkab.bps.go.id"
  },
  {
    "domain_id": "6308",
    "domain_name": "Hulu Sungai Utara",
    "domain_url": "https://hulusungaiutarakab.bps.go.id"
  },
  {
    "domain_id": "6309",
    "domain_name": "Tabalong",
    "domain_url": "https://tabalongkab.bps.go.id"
  },
  {
    "domain_id": "6310",
    "domain_name": "Tanah Bumbu",
    "domain_url": "https://tanahbumbukab.bps.go.id"
  },
  {
    "domain_id": "6311",
    "domain_name": "Balangan",
    "domain_url": "https://balangankab.bps.go.id"
  },
  {
    "domain_id": "6371",
    "domain_name": "Banjarmasin",
    "domain_url": "https://banjarmasinkota.bps.go.id"
  },
  {
    "domain_id": "6372",
    "domain_name": "Banjar Baru",
    "domain_url": "https://banjarbarukota.bps.go.id"
  },
  {
    "domain_id": "6400",
    "domain_name": "Kalimantan Timur",
    "domain_url": "https://kaltim.bps.go.id"
  },
  {
    "domain_id": "6401",
    "domain_name": "Paser",
    "domain_url": "https://paserkab.bps.go.id"
  },
  {
    "domain_id": "6402",
    "domain_name": "Kutai Barat",
    "domain_url": "https://kubarkab.bps.go.id"
  },
  {
    "domain_id": "6403",
    "domain_name": "Kutai Kartanegara",
    "domain_url": "https://kukarkab.bps.go.id"
  },
  {
    "domain_id": "6404",
    "domain_name": "Kutai Timur",
    "domain_url": "https://kutimkab.bps.go.id"
  },
  {
    "domain_id": "6405",
    "domain_name": "Berau",
    "domain_url": "https://beraukab.bps.go.id"
  },
  {
    "domain_id": "6409",
    "domain_name": "Penajam Paser Utara",
    "domain_url": "https://ppukab.bps.go.id"
  },
  {
    "domain_id": "6411",
    "domain_name": "Mahakam Ulu",
    "domain_url": "https://mahulukab.bps.go.id"
  },
  {
    "domain_id": "6471",
    "domain_name": "Balikpapan",
    "domain_url": "https://balikpapankota.bps.go.id"
  },
  {
    "domain_id": "6472",
    "domain_name": "Samarinda",
    "domain_url": "https://samarindakota.bps.go.id"
  },
  {
    "domain_id": "6474",
    "domain_name": "Bontang",
    "domain_url": "https://bontangkota.bps.go.id"
  },
  {
    "domain_id": "6500",
    "domain_name": "Kalimantan Utara",
    "domain_url": "https://kaltara.bps.go.id"
  },
  {
    "domain_id": "6501",
    "domain_name": "Malinau",
    "domain_url": "https://malinaukab.bps.go.id"
  },
  {
    "domain_id": "6502",
    "domain_name": "Bulungan",
    "domain_url": "https://bulungankab.bps.go.id"
  },
  {
    "domain_id": "6503",
    "domain_name": "Tana Tidung",
    "domain_url": "https://tanatidungkab.bps.go.id"
  },
  {
    "domain_id": "6504",
    "domain_name": "Nunukan",
    "domain_url": "https://nunukankab.bps.go.id"
  },
  {
    "domain_id": "6571",
    "domain_name": "Tarakan",
    "domain_url": "https://tarakankota.bps.go.id"
  },
  {
    "domain_id": "7100",
    "domain_name": "Sulawesi Utara",
    "domain_url": "https://sulut.bps.go.id"
  },
  {
    "domain_id": "7101",
    "domain_name": "Bolaang Mongondow",
    "domain_url": "https://bolmongkab.bps.go.id"
  },
  {
    "domain_id": "7102",
    "domain_name": "Minahasa",
    "domain_url": "https://minahasakab.bps.go.id"
  },
  {
    "domain_id": "7103",
    "domain_name": "Kepulauan Sangihe",
    "domain_url": "https://sangihekab.bps.go.id"
  },
  {
    "domain_id": "7104",
    "domain_name": "Kepulauan Talaud",
    "domain_url": "https://talaudkab.bps.go.id"
  },
  {
    "domain_id": "7105",
    "domain_name": "Minahasa Selatan",
    "domain_url": "https://minselkab.bps.go.id"
  },
  {
    "domain_id": "7106",
    "domain_name": "Minahasa Utara",
    "domain_url": "https://minutkab.bps.go.id"
  },
  {
    "domain_id": "7107",
    "domain_name": "Bolaang Mongondow Utara",
    "domain_url": "https://bolmutkab.bps.go.id"
  },
  {
    "domain_id": "7108",
    "domain_name": "Siau Tagulandang Biaro",
    "domain_url": "https://sitarokab.bps.go.id"
  },
  {
    "domain_id": "7109",
    "domain_name": "Minahasa Tenggara",
    "domain_url": "https://mitrakab.bps.go.id"
  },
  {
    "domain_id": "7110",
    "domain_name": "Bolaang Mongondow Selatan",
    "domain_url": "https://bolselkab.bps.go.id"
  },
  {
    "domain_id": "7111",
    "domain_name": "Bolaang Mongondow Timur",
    "domain_url": "https://boltimkab.bps.go.id"
  },
  {
    "domain_id": "7171",
    "domain_name": "Manado",
    "domain_url": "https://manadokota.bps.go.id"
  },
  {
    "domain_id": "7172",
    "domain_name": "Bitung",
    "domain_url": "https://bitungkota.bps.go.id"
  },
  {
    "domain_id": "7173",
    "domain_name": "Tomohon",
    "domain_url": "https://tomohonkota.bps.go.id"
  },
  {
    "domain_id": "7174",
    "domain_name": "Kotamobagu",
    "domain_url": "https://kotamobagukota.bps.go.id"
  },
  {
    "domain_id": "7200",
    "domain_name": "Sulawesi Tengah",
    "domain_url": "https://sulteng.bps.go.id"
  },
  {
    "domain_id": "7201",
    "domain_name": "Banggai Kepulauan",
    "domain_url": "https://bangkepkab.bps.go.id"
  },
  {
    "domain_id": "7202",
    "domain_name": "Banggai",
    "domain_url": "https://banggaikab.bps.go.id"
  },
  {
    "domain_id": "7203",
    "domain_name": "Morowali",
    "domain_url": "https://morowalikab.bps.go.id"
  },
  {
    "domain_id": "7204",
    "domain_name": "Poso",
    "domain_url": "https://posokab.bps.go.id"
  },
  {
    "domain_id": "7205",
    "domain_name": "Donggala",
    "domain_url": "https://donggalakab.bps.go.id"
  },
  {
    "domain_id": "7206",
    "domain_name": "Toli-Toli",
    "domain_url": "https://tolitolikab.bps.go.id"
  },
  {
    "domain_id": "7207",
    "domain_name": "Buol",
    "domain_url": "https://buolkab.bps.go.id"
  },
  {
    "domain_id": "7208",
    "domain_name": "Parigi Moutong",
    "domain_url": "https://parigimoutongkab.bps.go.id"
  },
  {
    "domain_id": "7209",
    "domain_name": "Tojo Una-Una",
    "domain_url": "https://tojounakab.bps.go.id"
  },
  {
    "domain_id": "7210",
    "domain_name": "Sigi",
    "domain_url": "https://sigikab.bps.go.id"
  },
  {
    "domain_id": "7211",
    "domain_name": "Banggai Laut",
    "domain_url": "https://banggailautkab.bps.go.id"
  },
  {
    "domain_id": "7212",
    "domain_name": "Morowali Utara",
    "domain_url": "https://morowaliutarakab.bps.go.id"
  },
  {
    "domain_id": "7271",
    "domain_name": "Palu",
    "domain_url": "https://palukota.bps.go.id"
  },
  {
    "domain_id": "7300",
    "domain_name": "Sulawesi Selatan",
    "domain_url": "https://sulsel.bps.go.id"
  },
  {
    "domain_id": "7301",
    "domain_name": "Kepulauan Selayar",
    "domain_url": "https://selayarkab.bps.go.id"
  },
  {
    "domain_id": "7302",
    "domain_name": "Bulukumba",
    "domain_url": "https://bulukumbakab.bps.go.id"
  },
  {
    "domain_id": "7303",
    "domain_name": "Bantaeng",
    "domain_url": "https://bantaengkab.bps.go.id"
  },
  {
    "domain_id": "7304",
    "domain_name": "Jeneponto",
    "domain_url": "https://jenepontokab.bps.go.id"
  },
  {
    "domain_id": "7305",
    "domain_name": "Takalar",
    "domain_url": "https://takalarkab.bps.go.id"
  },
  {
    "domain_id": "7306",
    "domain_name": "Gowa",
    "domain_url": "https://gowakab.bps.go.id"
  },
  {
    "domain_id": "7307",
    "domain_name": "Sinjai",
    "domain_url": "https://sinjaikab.bps.go.id"
  },
  {
    "domain_id": "7308",
    "domain_name": "Maros",
    "domain_url": "https://maroskab.bps.go.id"
  },
  {
    "domain_id": "7309",
    "domain_name": "Pangkajene Dan Kepulauan",
    "domain_url": "https://pangkepkab.bps.go.id"
  },
  {
    "domain_id": "7310",
    "domain_name": "Barru",
    "domain_url": "https://barrukab.bps.go.id"
  },
  {
    "domain_id": "7311",
    "domain_name": "Bone",
    "domain_url": "https://bonekab.bps.go.id"
  },
  {
    "domain_id": "7312",
    "domain_name": "Soppeng",
    "domain_url": "https://soppengkab.bps.go.id"
  },
  {
    "domain_id": "7313",
    "domain_name": "Wajo",
    "domain_url": "https://wajokab.bps.go.id"
  },
  {
    "domain_id": "7314",
    "domain_name": "Sidenreng Rappang",
    "domain_url": "https://sidrapkab.bps.go.id"
  },
  {
    "domain_id": "7315",
    "domain_name": "Pinrang",
    "domain_url": "https://pinrangkab.bps.go.id"
  },
  {
    "domain_id": "7316",
    "domain_name": "Enrekang",
    "domain_url": "https://enrekangkab.bps.go.id"
  },
  {
    "domain_id": "7317",
    "domain_name": "Luwu",
    "domain_url": "https://luwukab.bps.go.id"
  },
  {
    "domain_id": "7318",
    "domain_name": "Tana Toraja",
    "domain_url": "https://tatorkab.bps.go.id"
  },
  {
    "domain_id": "7322",
    "domain_name": "Luwu Utara",
    "domain_url": "https://luwuutarakab.bps.go.id"
  },
  {
    "domain_id": "7325",
    "domain_name": "Luwu Timur",
    "domain_url": "https://luwutimurkab.bps.go.id"
  },
  {
    "domain_id": "7326",
    "domain_name": "Toraja Utara",
    "domain_url": "https://torutkab.bps.go.id"
  },
  {
    "domain_id": "7371",
    "domain_name": "Makassar",
    "domain_url": "https://makassarkota.bps.go.id"
  },
  {
    "domain_id": "7372",
    "domain_name": "Parepare",
    "domain_url": "https://pareparekota.bps.go.id"
  },
  {
    "domain_id": "7373",
    "domain_name": "Palopo",
    "domain_url": "https://palopokota.bps.go.id"
  },
  {
    "domain_id": "7400",
    "domain_name": "Sulawesi Tenggara",
    "domain_url": "https://sultra.bps.go.id"
  },
  {
    "domain_id": "7401",
    "domain_name": "Buton",
    "domain_url": "https://butonkab.bps.go.id"
  },
  {
    "domain_id": "7402",
    "domain_name": "Muna",
    "domain_url": "https://munakab.bps.go.id"
  },
  {
    "domain_id": "7403",
    "domain_name": "Konawe",
    "domain_url": "https://konawekab.bps.go.id"
  },
  {
    "domain_id": "7404",
    "domain_name": "Kolaka",
    "domain_url": "https://kolakakab.bps.go.id"
  },
  {
    "domain_id": "7405",
    "domain_name": "Konawe Selatan",
    "domain_url": "https://konselkab.bps.go.id"
  },
  {
    "domain_id": "7406",
    "domain_name": "Bombana",
    "domain_url": "https://bombanakab.bps.go.id"
  },
  {
    "domain_id": "7407",
    "domain_name": "Wakatobi",
    "domain_url": "https://wakatobikab.bps.go.id"
  },
  {
    "domain_id": "7408",
    "domain_name": "Kolaka Utara",
    "domain_url": "https://kolutkab.bps.go.id"
  },
  {
    "domain_id": "7409",
    "domain_name": "Buton Utara",
    "domain_url": "https://buturkab.bps.go.id"
  },
  {
    "domain_id": "7410",
    "domain_name": "Konawe Utara",
    "domain_url": "https://konutkab.bps.go.id"
  },
  {
    "domain_id": "7411",
    "domain_name": "Kolaka Timur",
    "domain_url": "https://koltimkab.bps.go.id"
  },
  {
    "domain_id": "7412",
    "domain_name": "Konawe Kepulauan",
    "domain_url": "https://konkepkab.bps.go.id"
  },
  {
    "domain_id": "7413",
    "domain_name": "Muna Barat",
    "domain_url": "https://munbarkab.bps.go.id"
  },
  {
    "domain_id": "7414",
    "domain_name": "Buton Tengah",
    "domain_url": "https://butengkab.bps.go.id"
  },
  {
    "domain_id": "7415",
    "domain_name": "Buton Selatan",
    "domain_url": "https://buselkab.bps.go.id"
  },
  {
    "domain_id": "7471",
    "domain_name": "Kendari",
    "domain_url": "https://kendarikota.bps.go.id"
  },
  {
    "domain_id": "7472",
    "domain_name": "Baubau",
    "domain_url": "https://baubaukota.bps.go.id"
  },
  {
    "domain_id": "7500",
    "domain_name": "Gorontalo",
    "domain_url": "https://gorontalo.bps.go.id"
  },
  {
    "domain_id": "7501",
    "domain_name": "Boalemo",
    "domain_url": "https://boalemokab.bps.go.id"
  },
  {
    "domain_id": "7502",
    "domain_name": "Gorontalo",
    "domain_url": "https://gorontalokab.bps.go.id"
  },
  {
    "domain_id": "7503",
    "domain_name": "Pohuwato",
    "domain_url": "https://pohuwatokab.bps.go.id"
  },
  {
    "domain_id": "7504",
    "domain_name": "Bone Bolango",
    "domain_url": "https://bonebolangokab.bps.go.id"
  },
  {
    "domain_id": "7505",
    "domain_name": "Gorontalo Utara",
    "domain_url": "https://gorontaloutarakab.bps.go.id"
  },
  {
    "domain_id": "7571",
    "domain_name": "Gorontalo",
    "domain_url": "https://gorontalokota.bps.go.id"
  },
  {
    "domain_id": "7600",
    "domain_name": "Sulawesi Barat",
    "domain_url": "https://sulbar.bps.go.id"
  },
  {
    "domain_id": "7601",
    "domain_name": "Majene",
    "domain_url": "https://majenekab.bps.go.id"
  },
  {
    "domain_id": "7602",
    "domain_name": "Polewali Mandar",
    "domain_url": "https://polewalimandarkab.bps.go.id"
  },
  {
    "domain_id": "7603",
    "domain_name": "Mamasa",
    "domain_url": "https://mamasakab.bps.go.id"
  },
  {
    "domain_id": "7604",
    "domain_name": "Mamuju",
    "domain_url": "https://mamujukab.bps.go.id"
  },
  {
    "domain_id": "7605",
    "domain_name": "Pasangkayu",
    "domain_url": "https://pasangkayukab.bps.go.id"
  },
  {
    "domain_id": "7606",
    "domain_name": "Mamuju Tengah",
    "domain_url": "https://mamujutengahkab.bps.go.id"
  },
  {
    "domain_id": "8100",
    "domain_name": "Maluku",
    "domain_url": "https://maluku.bps.go.id"
  },
  {
    "domain_id": "8101",
    "domain_name": "Maluku Tenggara Barat",
    "domain_url": "https://mtbkab.bps.go.id"
  },
  {
    "domain_id": "8102",
    "domain_name": "Maluku Tenggara",
    "domain_url": "https://malukutenggarakab.bps.go.id"
  },
  {
    "domain_id": "8103",
    "domain_name": "Maluku Tengah",
    "domain_url": "https://malukutengahkab.bps.go.id"
  },
  {
    "domain_id": "8104",
    "domain_name": "Buru",
    "domain_url": "https://burukab.bps.go.id"
  },
  {
    "domain_id": "8105",
    "domain_name": "Kepulauan Aru",
    "domain_url": "https://keparukab.bps.go.id"
  },
  {
    "domain_id": "8106",
    "domain_name": "Seram Bagian Barat",
    "domain_url": "https://sbbkab.bps.go.id"
  },
  {
    "domain_id": "8107",
    "domain_name": "Seram Bagian Timur",
    "domain_url": "https://sbtkab.bps.go.id"
  },
  {
    "domain_id": "8108",
    "domain_name": "Maluku Barat Daya",
    "domain_url": "https://malukubaratdayakab.bps.go.id"
  },
  {
    "domain_id": "8109",
    "domain_name": "Buru Selatan",
    "domain_url": "https://burselkab.bps.go.id"
  },
  {
    "domain_id": "8171",
    "domain_name": "Ambon",
    "domain_url": "https://ambonkota.bps.go.id"
  },
  {
    "domain_id": "8172",
    "domain_name": "Tual",
    "domain_url": "https://tualkota.bps.go.id"
  },
  {
    "domain_id": "8200",
    "domain_name": "Maluku Utara",
    "domain_url": "https://malut.bps.go.id"
  },
  {
    "domain_id": "8201",
    "domain_name": "Halmahera Barat",
    "domain_url": "https://halbarkab.bps.go.id"
  },
  {
    "domain_id": "8202",
    "domain_name": "Halmahera Tengah",
    "domain_url": "https://haltengkab.bps.go.id"
  },
  {
    "domain_id": "8203",
    "domain_name": "Kepulauan Sula",
    "domain_url": "https://kepsulkab.bps.go.id"
  },
  {
    "domain_id": "8204",
    "domain_name": "Halmahera Selatan",
    "domain_url": "https://halmaheraselatankab.bps.go.id"
  },
  {
    "domain_id": "8205",
    "domain_name": "Halmahera Utara",
    "domain_url": "https://halutkab.bps.go.id"
  },
  {
    "domain_id": "8206",
    "domain_name": "Halmahera Timur",
    "domain_url": "https://haltimkab.bps.go.id"
  },
  {
    "domain_id": "8207",
    "domain_name": "Pulau Morotai",
    "domain_url": "https://morotaikab.bps.go.id"
  },
  {
    "domain_id": "8208",
    "domain_name": "Pulau Taliabu",
    "domain_url": "https://taliabukab.bps.go.id"
  },
  {
    "domain_id": "8271",
    "domain_name": "Ternate",
    "domain_url": "https://ternatekota.bps.go.id"
  },
  {
    "domain_id": "8272",
    "domain_name": "Tidore Kepulauan",
    "domain_url": "https://tikepkota.bps.go.id"
  },
  {
    "domain_id": "9100",
    "domain_name": "Papua Barat",
    "domain_url": "https://papuabarat.bps.go.id"
  },
  {
    "domain_id": "9101",
    "domain_name": "Fakfak",
    "domain_url": "https://fakfakkab.bps.go.id"
  },
  {
    "domain_id": "9102",
    "domain_name": "Kaimana",
    "domain_url": "https://kaimanakab.bps.go.id"
  },
  {
    "domain_id": "9103",
    "domain_name": "Teluk Wondama",
    "domain_url": "https://telukwondamakab.bps.go.id"
  },
  {
    "domain_id": "9104",
    "domain_name": "Teluk Bintuni",
    "domain_url": "https://telukbintunikab.bps.go.id"
  },
  {
    "domain_id": "9105",
    "domain_name": "Manokwari",
    "domain_url": "https://manokwarikab.bps.go.id"
  },
  {
    "domain_id": "9106",
    "domain_name": "Sorong Selatan",
    "domain_url": "https://sorongselatankab.bps.go.id"
  },
  {
    "domain_id": "9107",
    "domain_name": "Sorong",
    "domain_url": "https://sorongkab.bps.go.id"
  },
  {
    "domain_id": "9108",
    "domain_name": "Raja Ampat",
    "domain_url": "https://rajaampatkab.bps.go.id"
  },
  {
    "domain_id": "9109",
    "domain_name": "Tambrauw",
    "domain_url": "https://tambrauwkab.bps.go.id"
  },
  {
    "domain_id": "9110",
    "domain_name": "Maybrat",
    "domain_url": "https://maybratkab.bps.go.id"
  },
  {
    "domain_id": "9111",
    "domain_name": "Manokwari Selatan",
    "domain_url": "https://manokwariselatankab.bps.go.id"
  },
  {
    "domain_id": "9112",
    "domain_name": "Pegunungan Arfak",
    "domain_url": "https://pegununganarfakkab.bps.go.id"
  },
  {
    "domain_id": "9171",
    "domain_name": "Sorong",
    "domain_url": "https://sorongkota.bps.go.id"
  },
  {
    "domain_id": "9400",
    "domain_name": "Papua",
    "domain_url": "https://papua.bps.go.id"
  },
  {
    "domain_id": "9401",
    "domain_name": "Merauke",
    "domain_url": "https://meraukekab.bps.go.id"
  },
  {
    "domain_id": "9402",
    "domain_name": "Jayawijaya",
    "domain_url": "https://jayawijayakab.bps.go.id"
  },
  {
    "domain_id": "9403",
    "domain_name": "Jayapura",
    "domain_url": "https://jayapurakab.bps.go.id"
  },
  {
    "domain_id": "9404",
    "domain_name": "Nabire",
    "domain_url": "https://nabirekab.bps.go.id"
  },
  {
    "domain_id": "9408",
    "domain_name": "Kepulauan Yapen",
    "domain_url": "https://kepulauanyapenkab.bps.go.id"
  },
  {
    "domain_id": "9409",
    "domain_name": "Biak Numfor",
    "domain_url": "https://biaknumforkab.bps.go.id"
  },
  {
    "domain_id": "9410",
    "domain_name": "Paniai",
    "domain_url": "https://paniaikab.bps.go.id"
  },
  {
    "domain_id": "9411",
    "domain_name": "Puncak Jaya",
    "domain_url": "https://puncakjayakab.bps.go.id"
  },
  {
    "domain_id": "9412",
    "domain_name": "Mimika",
    "domain_url": "https://mimikakab.bps.go.id"
  },
  {
    "domain_id": "9413",
    "domain_name": "Boven Digoel",
    "domain_url": "https://bovendigoelkab.bps.go.id"
  },
  {
    "domain_id": "9414",
    "domain_name": "Mappi",
    "domain_url": "https://mappikab.bps.go.id"
  },
  {
    "domain_id": "9415",
    "domain_name": "Asmat",
    "domain_url": "https://asmatkab.bps.go.id"
  },
  {
    "domain_id": "9416",
    "domain_name": "Yahukimo",
    "domain_url": "https://yahukimokab.bps.go.id"
  },
  {
    "domain_id": "9417",
    "domain_name": "Pegunungan Bintang",
    "domain_url": "https://pegununganbintangkab.bps.go.id"
  },
  {
    "domain_id": "9418",
    "domain_name": "Tolikara",
    "domain_url": "https://tolikarakab.bps.go.id"
  },
  {
    "domain_id": "9419",
    "domain_name": "Sarmi",
    "domain_url": "https://sarmikab.bps.go.id"
  },
  {
    "domain_id": "9420",
    "domain_name": "Keerom",
    "domain_url": "https://keeromkab.bps.go.id"
  },
  {
    "domain_id": "9426",
    "domain_name": "Waropen",
    "domain_url": "https://waropenkab.bps.go.id"
  },
  {
    "domain_id": "9427",
    "domain_name": "Supiori",
    "domain_url": "https://supiorikab.bps.go.id"
  },
  {
    "domain_id": "9428",
    "domain_name": "Mamberamo Raya",
    "domain_url": "https://mamberamorayakab.bps.go.id"
  },
  {
    "domain_id": "9429",
    "domain_name": "Nduga",
    "domain_url": "https://ndugakab.bps.go.id"
  },
  {
    "domain_id": "9430",
    "domain_name": "Lanny Jaya",
    "domain_url": "https://lannyjayakab.bps.go.id"
  },
  {
    "domain_id": "9431",
    "domain_name": "Mamberamo Tengah",
    "domain_url": "https://mamberamotengahkab.bps.go.id"
  },
  {
    "domain_id": "9432",
    "domain_name": "Yalimo",
    "domain_url": "https://yalimokab.bps.go.id"
  },
  {
    "domain_id": "9433",
    "domain_name": "Puncak",
    "domain_url": "https://puncakkab.bps.go.id"
  },
  {
    "domain_id": "9434",
    "domain_name": "Dogiyai",
    "domain_url": "https://dogiyaikab.bps.go.id"
  },
  {
    "domain_id": "9435",
    "domain_name": "Intan Jaya",
    "domain_url": "https://intanjayakab.bps.go.id"
  },
  {
    "domain_id": "9436",
    "domain_name": "Deiyai",
    "domain_url": "https://deiyaikab.bps.go.id"
  },
  {
    "domain_id": "9471",
    "domain_name": "Jayapura",
    "domain_url": "https://jayapurakota.bps.go.id"
  }
]
export const publikasiToText = async (arrayOfPublikasi) => {
  const apiData = await Promise.all(
    arrayOfPublikasi.map(async (publikasi) => {
      const data = await fetch(`https://webapi.bps.go.id/v1/api/list/model/publication/domain/7106/key/${process.env.BPS_API_KEY}/keyword/${decodeURI(publikasi.title)}`)
      const json = await data.json()
      return {
        title: publikasi.title,
        url: json.data[1][0].pdf
      }
    })
  )
  return apiData.reduce((acc, publikasi,i) => {
    return `${acc}*${i+1}. ${publikasi.title}*\n\n${publikasi.url}\n\n`
  },'')
}
export const variableToText = async (arrayOfVariable) => {
  return arrayOfVariable.reduce((acc, variable, i) => {
    let d = domain.find(e => e.domain_id == variable.domain)
    return `${acc}*${i+1}. ${variable.judul}* https://pegasus-view-web.vercel.app/variable/${variable.domain}-${variable.var_id}/\n\n`
  },'')
}