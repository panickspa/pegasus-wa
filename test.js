import { publikasiToText, variableToText } from "./converterApi.js"

const data = [
    [
      {
        title: 'Direktori Perusahaan Konstruksi Kabupaten Minahasa Utara 2024',
        count: [Array]
      },
      {
        title: 'Kabupaten Minahasa Utara Dalam Angka 2024',
        count: [Array]
      },
      { title: 'Kecamatan Airmadidi Dalam Angka 2024', count: [Array] },
      {
        title: 'Kecamatan Likupang Barat Dalam Angka 2024',
        count: [Array]
      },
      {
        title: 'Kecamatan Likupang Selatan Dalam Angka 2024',
        count: [Array]
      }
    ],
    [
      {
        var_id: '37',
        kategori_data: 'produk domestik regional bruto (lapangan usaha)',
        judul: '[Seri 2010] Pertumbuhan Ekonomi Provinsi Sulawesi Utara Di Sulawesi Utara Dalam Persen',
        satuan: 'Persen',
        wilayah: 'sulawesi utara',
        domain: '7100'
      },
      {
        var_id: '49',
        kategori_data: 'produk domestik regional bruto (lapangan usaha)',
        judul: '[Seri 2010] Pertumbuhan Ekonomi Triwulanan Provinsi Sulawesi Utara Di Sulawesi Utara Dalam Persen',
        satuan: 'Persen',
        wilayah: 'sulawesi utara',
        domain: '7100'
      },
      {
        var_id: '285',
        kategori_data: 'produk domestik regional bruto (lapangan usaha)',
        judul: '[Seri 2010] Pertumbuhan Ekonomi Menurut Kabupaten/Kota Di Sulawesi Utara Dalam Persen',
        satuan: 'Persen',
        wilayah: 'sulawesi utara',
        domain: '7100'
      },
      {
        var_id: '708',
        kategori_data: 'produk domestik regional bruto (lapangan usaha)',
        judul: '[Seri 2000] Pertumbuhan Ekonomi Provinsi Di Pulau Sulawesi Di Sulawesi Utara Dalam Persen',
        satuan: 'Persen',
        wilayah: 'sulawesi utara',
        domain: '7100'
      },
      {
        var_id: '739',
        kategori_data: 'produk domestik regional bruto (lapangan usaha)',
        judul: '[Seri 2000] Pertumbuhan Ekonomi Kabupaten/Kota Di Sulawesi Utara Dalam Persen',
        satuan: 'Persen',
        wilayah: 'sulawesi utara',
        domain: '7100'
      },
      {
        var_id: '67',
        kategori_data: 'produk domestik regional bruto',
        judul: 'Laju Pertumbuhan Ekonomi Di Bitung Dalam Persen',
        satuan: 'Persen',
        wilayah: 'bitung',
        domain: '7172'
      },
      {
        var_id: '146',
        kategori_data: 'produk domestik regional bruto (lapangan usaha)',
        judul: 'Pertumbuhan Ekonomi Di Minahasa Dalam Persen',
        satuan: 'Persen',
        wilayah: 'minahasa',
        domain: '7102'
      },
      {
        var_id: '87',
        kategori_data: 'produk domestik regional bruto (pdrb)',
        judul: 'Pertumbuhan Ekonomi Minahasa Selatan Di Minahasa Selatan Dalam Persen',
        satuan: 'Persen',
        wilayah: 'minahasa selatan',
        domain: '7105'
      },
      {
        var_id: '1237',
        kategori_data: 'geografi',
        judul: 'Rata-Rata Pertumbuhan Ekonomi Di Daerah Tertinggal Di Indonesia Dalam Persen',
        satuan: 'Persen',
        wilayah: 'indonesia',
        domain: '0000'
      },
      {
        var_id: '107',
        kategori_data: 'produk domestik regional bruto',
        judul: 'Pertumbuhan Ekonomi Di Nagan Raya Dalam Persen',
        satuan: 'Persen',
        wilayah: 'nagan raya',
        domain: '1115'
      },
      {
        var_id: '67',
        kategori_data: 'produk domestik regional bruto',
        judul: 'Pertumbuhan Ekonomi Kota Sabang, Provinsi Aceh, Dan Indonesia Di Sabang Dalam Persen',
        satuan: 'persen',
        wilayah: 'sabang',
        domain: '1172'
      },
      {
        var_id: '92',
        kategori_data: 'produk domestik regional bruto menurut lapangan usaha',
        judul: '[Seri 2010] Laju Pertumbuhan Ekonomi Menurut Lapangan Usaha Di Lhokseumawe Dalam Persen',
        satuan: 'Persen',
        wilayah: 'lhokseumawe',
        domain: '1174'
      },
      {
        var_id: '40',
        kategori_data: 'produk domestik regional bruto',
        judul: '[Seri 2000]Pertumbuhan Ekonomi Atas Dasar Harga Konstan 2000 Menurut Kabupaten/Kota Di Sumatera Utara Dalam Persen',
        satuan: 'Persen',
        wilayah: 'sumatera utara',
        domain: '1200'
      },
      {
        var_id: '74',
        kategori_data: 'produk domestik regional bruto',
        judul: '[Seri 2010]Pertumbuhan Ekonomi Atas Dasar Harga Konstan 2010 Menurut Kabupaten/Kota Di Sumatera Utara Dalam Persen',
        satuan: 'Persen',
        wilayah: 'sumatera utara',
        domain: '1200'
      },
      {
        var_id: '82',
        kategori_data: 'produk domestik regional bruto (menurut lapangan usaha)',
        judul: '[Seri 2010] Pertumbuhan Ekonomi Per Semester Di Sumatera Utara ',
        satuan: '',
        wilayah: 'sumatera utara',
        domain: '1200'
      }
    ]
  ]
async function run() {
  //  const publikasi = await publikasiToText(data[0])
  //  const varia = await variableToText(data[1])
  //  console.log(`${publikasi}\n${varia}`)
}
run()