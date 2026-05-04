# LAPORAN — Tugas #1: Website Personal

## Deskripsi Proyek

Website personal statis yang dibangun menggunakan HTML semantik dan CSS eksternal murni. Website ini dirancang dengan tema **Dark & Elegant** — memadukan palet warna gelap premium dengan aksen emas (gold), tipografi display serif, dan animasi CSS yang halus.

**Tujuan:** Membangun portofolio digital yang mencerminkan identitas dan kemampuan teknis saya sebagai mahasiswa Informatika.

**Fitur utama:**
- 3 halaman penuh: Home, Portfolio, Kontak
- Desain responsif (mobile & desktop)
- Animasi scroll-reveal dan hover
- Formulir kontak dengan umpan balik visual
- Favicon ico
- Aksesibilitas keyboard dan atribut `alt` pada semua gambar

**Teknologi yang digunakan:** HTML5, CSS3 (Flexbox + Grid + Custom Properties), JavaScript (vanilla, tanpa framework), Google Fonts, Font Awesome 6

---

## Struktur Folder dan File

```
personal-website/
├── index.html          # Halaman utama (Hero + About + Skills)
├── portfolio.html      # Halaman portofolio (Proyek unggulan + grid proyek)
├── contact.html        # Halaman kontak (Info + Formulir)
├── style/
│   └── main.css        # Seluruh gaya CSS eksternal
├── assets/
│   ├── favicon.ico     # Favicon ico
│   └── main.js         # JavaScript: scroll-reveal, nav aktif, efek header
└── LAPORAN.md          # File laporan ini
```

---

## Link Website yang Sudah Di-host

> 🌐 **[https://username.github.io/nama-repo](https://username.github.io/nama-repo)**

*(Ganti URL di atas dengan link GitHub Pages / Netlify / Vercel kamu yang sebenarnya)*

---

## Bukti SSH Berhasil Dikonfigurasi

Paste tangkapan layar output perintah `ssh -T git@github.com` di sini.

```
Hi <username>! You've successfully authenticated, but GitHub does not provide shell access.
```

> 📸 *[Tambahkan screenshot di sini]*

---

## Hasil Validasi W3C

### HTML Validator — `index.html`
> 📸 *[Tambahkan screenshot hasil validasi dari https://validator.w3.org/]*

### HTML Validator — `portfolio.html`
> 📸 *[Tambahkan screenshot hasil validasi]*

### HTML Validator — `contact.html`
> 📸 *[Tambahkan screenshot hasil validasi]*

### CSS Validator — `style/main.css`
> 📸 *[Tambahkan screenshot hasil validasi dari https://jigsaw.w3.org/css-validator/]*

---

## Hasil Lighthouse (Bonus)

> 📸 *[Tambahkan screenshot skor Lighthouse jika mengerjakan bonus]*

| Kategori | Skor |
|---|---|
| Performance | ≥ 80 |
| Accessibility | ≥ 80 |

---

## Catatan Pengembangan

- **Responsivitas:** Menggunakan 2 breakpoint — `max-width: 900px` (tablet) dan `max-width: 600px` (mobile).
- **Aksesibilitas:** Semua `<img>` memiliki atribut `alt` deskriptif. Navigasi dapat diakses dengan keyboard (Tab). Kontras warna text primary (`#e8e4dc`) terhadap background (`#0a0a0c`) memenuhi rasio WCAG AA (>4.5:1).
- **CSS Variables:** Semua warna, font, spacing, dan transisi menggunakan CSS custom properties agar mudah diubah.
- **Tanpa inline style** pada elemen konten — semua gaya ada di `style/main.css`.

---

*Dibuat dengan ❤️ untuk Tugas #1 Pemrograman Web — Universitas Muhammadiyah Surakarta 2026*
