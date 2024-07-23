const namaSiswa = document.getElementById("nama-siswa");
const nilaiSiswa = document.getElementById("nilai-siswa");
const hasilSiswa = document.getElementById("hasil-siswa");
const hasilText = document.getElementById("hasil-text");
const keteranganText = document.getElementById("keterangan-siswa");

hasilSiswa.addEventListener("click", function (event) {
  event.preventDefault();

  let nama = namaSiswa.value;
  let nilai = parseFloat(nilaiSiswa.value);
  let grade;
  let keterangan;

  if (nilai >= 90) {
    grade = "A";
    keterangan = "Anjay anak mami keren juga";
  } else if (nilai >= 75 && nilai < 90) {
    grade = "B";
    keterangan = "Murid B aja, nilai B aja";
  } else if (nilai >= 60 && nilai < 75) {
    grade = "C";
    keterangan = "Kalo udah tau dongo ya belajar";
  } else if (nilai < 60) {
    grade = "D";
    keterangan = "Mati aja lo!";
  }

  hasilText.textContent = `NILAI ${nama} = ${nilai} Adalah "${grade}"`;
  keteranganText.textContent = `Note : ${keterangan}`;

  namaSiswa.value = "";
  nilaiSiswa.value = "";
});
