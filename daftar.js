function daftarBeasiswa() {
    var ipk = 3.4; // Asumsi IPK
    var statusAjuan = "belum di verifikasi";

    if (ipk > 3) {
        document.getElementById("semester").focus();
    } else {
        alert("Maaf, IPK Anda tidak memenuhi syarat untuk mendaftar beasiswa.");
    }

    // Simpan data atau kirim ke backend sesuai kebutuhan
    console.log("Nama: " + document.getElementById("nama").value);
    console.log("Email: " + document.getElementById("email").value);
    console.log("Nomor HP: " + document.getElementById("nomorHP").value);
    console.log("Semester: " + document.getElementById("semester").value);
    console.log("IPK: " + ipk);
    console.log("Berkas: " + document.getElementById("berkas").value);
}