// Ambil semua kartu
const cards = document.querySelectorAll('.card');

// Loop melalui setiap kartu dan tambahkan event listener untuk menangani klik
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Cari elemen deskripsi dalam kartu yang diklik
        const description = card.querySelector('.description');
        
        // Jika deskripsi sudah ditampilkan, sembunyikan
        if (description.style.display === 'block') {
            description.style.display = 'none';
            description.classList.remove('show-description');
        } else {
            // Sembunyikan semua deskripsi
            document.querySelectorAll('.description').forEach(desc => {
                desc.style.display = 'none';
                desc.classList.remove('show-description');
            });
            // Tampilkan deskripsi yang sesuai
            description.style.display = 'block';
            description.classList.add('show-description');
        }

        // Jika ingin membersihkan form pada saat halaman dimuat
        window.onload = function() {
            document.getElementById("pria").value = "";
            document.getElementById("wanita").value = "";
            document.getElementById("alamat").value = "";
            document.getElementById("tanggal").value = "";
        };
        
        function sendToWhatsApp() {
            const pria = document.getElementById("pria").value;
            const wanita = document.getElementById("wanita").value;
            const alamat = document.getElementById("alamat").value;
            const tanggal = document.getElementById("tanggal").value;
            const nomorPenjual = "6285213295849"; // Ganti dengan nomor WhatsApp Anda
            const paket = document.getElementById("paket").value;
            
            // Membuat pesan dengan format yang benar dan meng-encode pesan
            const pesan = `Halo, saya ingin memesan layanan pernikahan:%0A
            Nama Calon Pengantin Pria: ${pria}%0A
            Nama Calon Pengantin Wanita: ${wanita}%0A  
            Alamat: ${alamat}%0A
            Tanggal Pernikahan: ${tanggal}%0A
            ----------------------------%0A
            Paket yang dipilih: ${paket}`;

            // Membuat URL WhatsApp
            const url = `https://wa.me/${nomorPenjual}?text=${encodeURIComponent(pesan)}`;
            
            // Membuka WhatsApp dengan pesan yang sudah di-encode
            console.log("Generated URL:", url);

            window.open(url, "_blank");
        }
    });
});
