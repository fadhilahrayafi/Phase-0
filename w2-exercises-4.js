var hari = 4;
var bulan = 9;
var tahun = 2019;

if (hari < 0 || (hari > 32 && tahun < 1899) || tahun > 2201) {
  console.log("-");
} else if (bulan < 1 || bulan > 13) {
  console.log("-");
} else {
  switch (bulan) {
    case 1: {
      bulan = "Januari";
      break;
    }
    case 2: {
      bulan = "Februari";
      break;
    }
    case 3: {
      bulan = "Maret";
      break;
    }
    case 4: {
      bulan = "April";
      break;
    }
    case 5: {
      bulan = "Mei";
      break;
    }
    case 6: {
      bulan = "Juni";
      break;
    }
    case 7: {
      bulan = "Juli";
      break;
    }
    case 8: {
      bulan = "Agustus";
      break;
    }
    case 9: {
      bulan = "September";
      break;
    }
    case 10: {
      bulan = "Oktober";
      break;
    }
    case 11: {
      bulan = "November";
      break;
    }
    case 12: {
      bulan = "Desember";
      break;
    }
    default: {
      bulan = "-";
    }
  }
  console.log(hari + " " + bulan + " " + tahun);
}
