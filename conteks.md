
```markdown
## Integrasi Peta Interaktif (Google Maps)
- **Lokasi Penempatan:** Tambahkan sebuah peta interaktif menggunakan elemen `<iframe>` Google Maps pada bagian bawah *section* "Pesan Sekarang" (atau *section* kontak yang memiliki *background* jalan Pantai Srau). Letakkan peta ini **tepat di bawah** deretan kartu media sosial (WhatsApp, Instagram, TikTok) dan **tepat di atas** teks *italic* "*Oleh-oleh sempurna setelah menikmati keindahan alam Pacitan.*".
- **Titik Koordinat:** `8°13'34.2"S 111°02'36.2"E`
- **Gaya Visual (UI/UX):** 
  - Peta harus bisa digeser-geser (*interactive*).
  - Peta tidak boleh terlalu besar; gunakan ukuran kecil hingga sedang yang proporsional (misalnya `width: 100%` dengan `max-width: 600px` dan `height: 250px`).
  - Sudut peta harus dibuat melengkung (`border-radius`) agar senada dengan estetika desain kartu media sosial di atasnya.
  - Tambahkan sedikit *margin* atas dan bawah agar tidak menabrak elemen lain, dan pastikan sangat responsif di layar HP.

```

---


**Detail Eksekusi:**
> 1. Gunakan link *embed* Google Maps berikut untuk iframe-nya: `[https://maps.google.com/maps?q=8](https://maps.google.com/maps?q=8)°13'34.2"S%20111°02'36.2"E&t=&z=15&ie=UTF8&iwloc=&output=embed`
> 2. Letakkan kode iframe tersebut tepat di area yang diminta (di bawah susunan kartu media sosial dan di atas teks kutipan '*Oleh-oleh sempurna...*').
> 3. Di CSS, pastikan *container* peta berada di tengah (*center aligned*), memiliki `border-radius` yang estetis, tidak memiliki *border* kasar (`border: none`), dan menyesuaikan lebar layar secara responsif agar tetap cantik saat dibuka di HP.
