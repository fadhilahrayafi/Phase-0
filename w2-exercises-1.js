console.log("No. 1");
var m = 600;
var a = 2;

var F = m * a;
console.log(F);

//PSEUDOCODE
// START
// 	STORE "m" with 600
// 	STORE "a" with 2

// 	CALCULATE "m" times "a"
// 	SET "F" value with calculation result

// 	DISPLAY "F"
// END

console.log("No. 2");
var tahun = 2007;

if (
  (tahun % 4 === 0 && tahun % 100 !== 0) ||
  (tahun % 4 === 0 && tahun % 100 === 0 && tahun % 400 === 0)
) {
  console.log("Tahun Kabisat");
} else {
  console.log("Bukan Tahun Kabisat");
}

// Pseuduocode
// START
//     STORE "Tahun" WITH ANY VALUE

//     IF "Tahun" MOD 4 EQUALS ZERO AND "Tahun" MOD 100 NOT EQUALS ZERO OR "Tahun" MOD 4 EQUALS ZERO AND "Tahun" MOD 100 EQUALS ZERO AND "Tahun" MOD 400 EQUALS ZERO THEN
//         DISPLAY "Tahun kabisat"
//     ELSE
//         DISPLAY "Bukan Tahun Kabisat"
//     END IF
// STOP

// Algoritma
// 1. tentukan tahun
// 2. jika tahun habis dibagi 4 dan tahun tidak habis dibagi 100 atau tahun habis dibagi 4 tan habis dibagi 100 dan habis dibagi 400 maka tahun adalah tahun kabisat
// 3. jika bukan, maka tahun bukan tahun kabisat

console.log("No. 3");
var baju = 0;
while (baju <= 20) {
  baju++;
  console.log("tambah 1 baju");
}
console.log("mesin cuci siap digunakan");

// Pseuduocode
// START
// 	STORE "baju" to ANY VALUE

// 	WHILE "baju" < 21 THEN
// 		ADD "baju" by 1
// 	END WHILE
// 	DISPLAY "mesin cuci siap digunakan"
// END

// Algoritma
// 1. Masukan jumlah baju di "baju"
// 2. Ketika "baju" kurang dari 20, tambahkan 1 baju hingga mencapai 20 baju
// 3. Tampilkan "mesin cuci siap digunakan"

console.log("No. 4");
// Pseuduocode
// START
// 	STORE "siswa" by NUMBER

// 	WHILE "siswa" < 41 THEN
// 	IF "siswa" = "berkuku panjang"
// 		DO "dihukum"
// 	ELSE
// 		DO "dipuji"
// 	END IF
// 		ADD "siswa" by 1
// 	END WHILE
// END

// Algoritma
// 1. Masukan "siswa" dengan jumlah 40
// 2. Jika "siswa" berkuku panjang
// 3. Maka siswa dihukum
// 4. Jika tidak Maka siswa dipuji
// 5. Ulangi proses hingga siswa 40
