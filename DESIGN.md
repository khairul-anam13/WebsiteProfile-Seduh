# DESIGN.md — Seduh, Teh Tarik & Kopi Klasik

## Catatan identitas: bisnis ini nyata

Brief meminta identitas fiktif, tapi "Teh Tarik Seduh" di Karanganyar ternyata usaha yang benar-benar ada
(IG @tehtarikseduh, portomufi.site, GoFood, TikTok). Mengarang tahun berdiri, harga per item, atau cerita pendiri
untuk usaha nyata bisa menyesatkan pembeli kalau situs ini dipakai. Jadi aturannya:

| Dipakai apa adanya (sumber publik) | Dikarang / perlu diganti sebelum tayang |
|---|---|
| Nama, tagline "Dari Nusantara diSeduh untuk Dunia" | Kutipan testimoni (belum ada ulasan publik yang bisa dikutip) |
| 8 nama menu + bahan dasarnya (teh hitam Aceh, kopi Sanger Aceh, teh hijau Thai, cokelat hitam) | Foto (Unsplash, bukan foto outlet Seduh) |
| Kisaran harga Rp6.000–16.000 | Alamat persis outlet Karanganyar (sumber hanya menyebut "Karanganyar Kota") |
| Jam: Karanganyar 15.00–00.00, Sragen 15.00–23.00 | |
| Outlet Sragen: Jl. Sukowati No. 185 (buka April 2025), cabang Sukoharjo | |
| Pesan via WhatsApp, GoFood, ShopeeFood | |

Tahun berdiri tidak ditemukan, jadi tidak ditulis. Pembeda yang dipakai adalah yang memang terlihat dari sumber:
teh ditarik di depan pembeli, buka sampai tengah malam, harga mulai enam ribuan.

## Konsep visual (satu kalimat)

Satu tarikan teh, dari teko di atas ke gelas di bawah, dijadikan tulang punggung halaman: huruf yang meregang,
aliran teh yang jatuh, dan permukaan bintik-bintik seperti cangkir blirik (enamel) di warung Jawa.

## Tipografi

- **Anybody** (display, variable: `wdth` 50–150, `wght` 100–900). Hurufnya bisa diregangkan ke samping.
  Kata "tarik" secara harfiah ditarik: dari sangat sempit (wdth 50) ke lebar (wdth 150). Tipografinya ikut
  memeragakan cara teh tarik dibuat.
- **Literata** (teks). Serif dengan x-height tinggi, enak dibaca di layar kecil, dan terasa seperti menu cetak
  lama. Kontrasnya dengan Anybody yang geometris sangat jelas. Line-height 1.65 karena serif.
- Skala ekstrem: judul hero `clamp(6rem, 24vw, 22rem)`, teks 1.0625rem. Rasionya sekitar 20:1.
- Tidak ada label huruf kapital semua, tidak ada eyebrow di atas judul, dan tidak ada panah di tombol.

## Palet

| Token | Hex | Peran |
|---|---|---|
| `--teh` | `#C99A6B` | **Dominan.** Warna teh tarik susu. Latar sebagian besar halaman. |
| `--kental` | `#2B1709` | Teks utama dan latar bagian malam (seduhan teh pekat). Kontras 6.77 di atas `--teh`. |
| `--busa` | `#F4E8D6` | Netral terang: busa, teks di atas latar gelap/hijau. Dipakai hemat. |
| `--blirik` | `#1D5A45` | **Aksen.** Hijau enamel cangkir blirik. Isi tombol (teks `--busa`, 6.68), bingkai papan menu. Tidak dipakai sebagai warna teks di atas `--teh` (3.2, tidak lolos AA). |
| `--aren` | `#6E3210` | Sekunder: gula aren. Garis aliran teh, detail kecil, angka jam. |

## Aturan layout

- Rata kiri. Tidak ada hero rata tengah.
- Grid 12 kolom di desktop, teks maksimal ~62ch. Mobile satu kolom dengan gutter 20px.
- Hero asimetris: kata raksasa di kiri, aliran teh vertikal di kanan yang turun melewati batas hero
  sampai ke bagian berikutnya.
- Bagian bergantian antara siang (`--teh`) dan malam (`--kental`). Ini sesuai jam buka 15.00–00.00:
  halaman "menggelap" menuju bagian lokasi dan jam buka.
- Menu tampil sebagai **papan menu** dengan bingkai tebal hijau enamel dan titik-titik penghubung
  (dot leaders), bukan grid kartu.
- Proses dibuat bernomor karena memang berurutan (seduh, campur, tarik, sajikan). Bagian lain tidak diberi nomor.
- Tanpa kartu bersudut bulat dan bayangan. Sudut bulat hanya dipakai di satu tempat: bingkai papan menu,
  meniru bibir cangkir enamel.

## Tekstur

Latar bukan warna datar. Ada dua lapisan:
1. Bintik blirik: pola `radial-gradient` bintik-bintik kecil tidak beraturan (dua ukuran, dua warna) seperti enamel.
2. Butiran kertas: SVG `feTurbulence` sebagai data-URI dengan opasitas rendah.

## Elemen khas yang paling diingat

**Tarikan.** Saat halaman dimuat, satu urutan animasi berjalan (sekitar 1.8 detik):
aliran teh (SVG) jatuh dari teko ke gelas, busa naik di gelas, dan bersamaan dengan itu kata "tarik"
meregang dari `wdth 50` ke `wdth 150`. Hanya ini animasi di halaman. Kalau `prefers-reduced-motion`
aktif, semuanya langsung tampil di keadaan akhir.

## Tinjauan rencana terhadap default (sebelum menulis kode)

- Rencana awal: latar krem terang + aksen oranye-bata. Itu pola default AI (#1 di daftar klise).
  **Diganti** ke latar tan teh susu sebagai warna dominan, dengan aksen hijau enamel dari cangkir blirik Jawa.
- Rencana awal bagian keunggulan berupa 3 angka besar (Rp6rb / 00.00 / 3 kota). Itu treatment
  "angka besar + label kecil" yang generik. **Diganti** jadi kalimat-kalimat pendek dalam satu kolom,
  dengan angka di dalam kalimat.
- Rencana awal memberi nomor 01/02/03 di semua bagian. **Dibatasi** hanya di proses tarik, satu-satunya
  konten yang benar-benar berurutan.
