function dataHandling2(input) {
  var splitName = input[1].split(" ");
  splitName.splice(2, 0, "Elsharawy");
  input[1] = splitName.join(" ");

  var splitCity = input[2].split(" ");
  splitCity.splice(0, 0, "Provinsi");
  input[2] = splitCity.join(" ");

  input.splice(4, 0, "Pria");

  input.splice(5, 1, "SMA Internasional Metro");
  console.log(input);

  var date = input[3].split("/");
  var month = date[1];
  switch (month) {
    case "01": {
      month = "Januari";
      break;
    }
    case "02": {
      month = "Februari";
      break;
    }
    case "03": {
      month = "Maret";
      break;
    }
    case "04": {
      month = "April";
      break;
    }
    case "05": {
      month = "Mei";
      break;
    }
    case "06": {
      month = "Juni";
      break;
    }
    case "07": {
      month = "Juli";
      break;
    }
    case "08": {
      month = "Agustus";
      break;
    }
    case "09": {
      month = "September";
      break;
    }
    case "10": {
      month = "Oktober";
      break;
    }
    case "11": {
      month = "November";
      break;
    }
    case "12": {
      month = "Desember";
      break;
    }
  }
  console.log(month);

  date.sort(function(value1, value2) {
    return parseInt(value1) < parseInt(value2);
  });
  console.log(date);

  var split = input[3].split("/");
  var join = split.join("-");
  console.log(join);

  var nameSlice = input[1].slice(0, 15);
  console.log(nameSlice);
}

dataHandling2([
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
]);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
