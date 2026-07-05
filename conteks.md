# Konteks Proyek: Landing Page UMKM Kacang Sembunyi Dusun Krajan

## Deskripsi Proyek
Proyek ini adalah pembuatan prototipe *website* profil dan katalog digital (*landing page*) untuk rintisan UMKM "Snack Kacang Sembunyi" di Dusun Krajan. *Website* ini harus menggunakan HTML, CSS, dan JavaScript murni tanpa *framework* berat, agar ringan saat di-hosting statis (misalnya via GitHub Pages) dan sangat responsif (Mobile-First Design).

## Nuansa Visual & Estetika (UI/UX)
- **Tema:** Modern, bersih (clean), estetis, dengan penataan visual berlapis (*layered visual*) yang menonjolkan kolaborasi masyarakat dan kearifan lokal.
- **Warna:** *Earthy tones* (warna bumi seperti cokelat kacang, krem, hijau alam, dan putih bersih). Karena menggunakan banyak gambar sebagai *background*, wajib gunakan **gradient overlay (lapisan gelap/terang semi-transparan)** agar teks di atasnya tetap jelas dibaca (*high contrast*).
- **Tipografi:** Sans-serif modern yang profesional (misal: Poppins atau Montserrat via Google Fonts).
- **Layout:** Menggunakan CSS Flexbox dan Grid yang 100% responsif untuk semua ukuran layar (*mobile*, tablet, laptop).

## Struktur Folder & Aset Gambar
Semua gambar berada di dalam folder `assets/img/`. *File path* presisi yang harus digunakan:
1. `assets/img/Logo_Kacang_Sembunyi.jpg` / `.png` (Logo utama produk untuk navigasi)
2. `assets/img/foto_bersama.jpg` (Foto tim/bersama untuk visual utama di section Tentang Kami)
3. `assets/img/ibu-ibu pacitan.jpg` (Background untuk section Tentang Kami)
4. `assets/img/pantaiKlayar.jpg` (Background untuk section Produk Kami)
5. `assets/img/jalanPantaiSrau.jpg` (Background untuk section Pesan Sekarang/CTA)
6. `assets/img/kacangSembunyi1.jpg` (Foto utama produk estetik)
7. `assets/img/kacangSembunyi2.jpg` (Foto kemasan produk nyata)
8. `assets/img/pantaiKarangBolong.jpg` (Visual keindahan lokal untuk galeri)
9. `assets/img/pantaiPangasan.jpg` (Visual keindahan lokal untuk galeri)

## Struktur Halaman & Aturan Background (Sections)
1. **Navbar (Navigasi):** Tampilkan `Logo_Kacang_Sembunyi` bersanding dengan teks merek. Harus *sticky* dan dilengkapi fitur *hamburger menu* untuk mode *mobile*.
2. **Hero Section:** Judul sambutan yang menarik, *subtitle*, dan tombol CTA awal.
3. **Tentang Kami (Profil):** 
   - **Background:** Gunakan `ibu-ibu pacitan.jpg` sebagai latar belakang *section* (atur dengan *overlay* agak gelap agar elegan).
   - **Elemen Visual:** Tampilkan `foto_bersama.jpg` di dalam *card* atau kontainer visual penjelas di samping/atas teks deskripsi profil pemberdayaan masyarakat.
4. **Produk Kami:** 
   - **Background:** Gunakan `pantaiKlayar.jpg` sebagai latar belakang *section* ini (gunakan *backdrop overlay* atau *frosted glass effect* agar katalog produk tetap menonjol).
   - **Elemen Visual:** Tampilkan kartu produk menggunakan `kacangSembunyi1.jpg` dan `kacangSembunyi2.jpg`.
5. **Pesona Lokal (Galeri):** *Grid* estetik menonjolkan pariwisata lokal (`pantaiKarangBolong.jpg` dan `pantaiPangasan.jpg`).
6. **Pesan Sekarang (Call to Action Banner):** 
   - **Background:** Gunakan `jalanPantaiSrau.jpg` sebagai latar belakang *section* CTA ini dengan kombinasi teks ajakan membeli dan tombol pemesanan langsung.

## Kebutuhan Teknis (Instruksi Pembuatan Kode)
Hasilkan kode lengkap berdasarkan pedoman di atas:
1. **`index.html`:** Struktur semantik HTML5 dengan *mapping path* gambar yang tepat sesuai aturan *section* di atas.
2. **`css/style.css`:** Pengaturan properti *background-image*, *background-size: cover*, dan *overlay* warna CSS untuk *section* Tentang Kami, Produk Kami, dan Pesan Sekarang agar estetika UI/UX maksimal dan responsif di *mobile*.
3. **`js/script.js`:** Interaksi navigasi *smooth scroll* dan *hamburger menu*.