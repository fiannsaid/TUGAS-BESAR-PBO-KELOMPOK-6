// Deklarasi dan inisialisasi atribut
var perulangan = true; 
var idKendaraan = []; 
var kendaraan = {}; 
var choice; 
let idx = 0; 

// fungsion method
function Kendaraan(prmJenis, prmPlat, prmMerk, prmWarna, prmHarga) {
  var jenis  = prmJenis;
  var plat   = prmPlat;
  var merk   = prmMerk;
  var warna  = prmWarna;
  var harga  = prmHarga;
  
  // Untuk Memamnggil Atribut-Atributnya
  this.getJenis = function() {
    return jenis;
  }

  this.getPlat = function() {
    return plat;
  }

  this.getMerk = function() {
    return merk;
  }

  this.getWarna = function() {
    return warna;
  }
  
  this.getHarga = function() {
    return harga;
  }
  
}

// Perulangan 
while (perulangan == true) {
  console.log(" ~~~~~~~~>>> Menu Parkir <<<~~~~~~~~~");
  console.log();
  console.log(" 1. Tambah Kendaraan");
  console.log(" 2. Daftar Harga");
  console.log(" 3. Cetak");
  console.log(" 4. Keluar")
  choice = prompt(" Masukan pilihan\t: ");
  
  // Memilih menu
  switch(choice) {
    case '1':
      console.log();
      console.log("~~~~~~~~>> Tambah Kendaraan <<~~~~~~~~");
      console.log();
      console.log(" * Pilih Jenis Kendaraan");
      console.log("1. Motor");
      console.log("2. Mobil");
      console.log("3. Truk");
      // deklarasi inisialisais
      let jenisk = prompt("Masukan Jenis kendaran\t: ");
      //deklarasi
      let jenis;
      // 
      if (jenisk == '1') {
        jenis  = "Motor" ;
        hargaa = "Rp.2000" ;

      } else if (jenisk == '2') {
        jenis  = "Mobil";
        hargaa = "Rp.5000" ;

      } else if (jenisk == '3') {
        jenis  = "Truk";
        hargaa = "Rp.10000";

      } else { 
        jenis  = "unknown";
        hargaa = "unknown";
      }

      // Deklarasi dan inisialisai
      let plat = prompt("Input Plat Nomor\t\t: ");
      let merk = prompt("Input Merk\t\t\t\t: ");
      let warna = prompt("Input Warna\t\t\t\t: ");

      // Melakukan inisialisasi parameter object 
      kendaraan = new Kendaraan (jenis, plat, merk, warna, hargaa);
      
      //Memasukan data dari object ke array
      idKendaraan.push(kendaraan);

      console.log("\n\n");
      break;
  

    // menampilkan tabel harga
    case '2':
      console.log();
        console.log("==================================");
        console.log("|      Daftar Harga Parkir       |");
        console.log("==================================");
        console.log("|   Kendaraan   |      Harga     |");
        console.log("==================================");
        console.log("|1. Motor       |     Rp.2.000   |");
        console.log("|2. Mobil       |     Rp.5.000   |");
        console.log("|3. Truk        |     Rp.10.000  |");
        console.log("==================================");
      console.log("\n\n");
      break;

    case'3':
      // Perulangan untuk penampilan data
      for (let x in idKendaraan) {
        console.log();
        console.log(`Jenis Kendaraan\t\t\t\t: ${ idKendaraan[x].getJenis() }`);
        console.log(`Plat Nomor Kendaraan\t\t: ${ idKendaraan[x].getPlat() }`);
        console.log(`Merek Kendaraan\t\t\t\t: ${ idKendaraan[x].getMerk()  }`);
        console.log(`Warna Kendaraan\t\t\t\t: ${ idKendaraan[x].getWarna() }`);
        console.log(`Jumlah Yang Harus Di Bayar\t: ${ idKendaraan[x].getHarga() }`);
      }
      console.log("\n\n");
      break;

    case '4':
      // Proses mengakhiri program
      // untuk inisialisasi atribut untuk menghentikan perogram berulang
      perulangan = false;
      console.log (" Terimakasih Silahkan Datang Kembali");
      break;        

    // Akan berjalan ketika inputan tidak sesuai
    default :
      console.log("Tolong Masukan Pilihan Yang Sesuai");
      break;  
  }
}