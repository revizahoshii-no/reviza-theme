# Reviza Theme

Tema panel **Pterodactyl** bergaya Reviza — latar video terkunci, banner
beranimasi, antarmuka kaca ungu, dan bahasa Indonesia.

Fork dari [NookTheme](https://github.com/Nookure/NookTheme), yang merupakan fork
dari [Pterodactyl Panel](https://github.com/pterodactyl/panel).

---

## Daftar isi

- [Isi tema](#isi-tema)
- [Sebelum mulai](#sebelum-mulai)
- [Instalasi langkah demi langkah](#instalasi-langkah-demi-langkah)
- [Mengaktifkan bahasa Indonesia](#mengaktifkan-bahasa-indonesia)
- [Mengganti aset sendiri](#mengganti-aset-sendiri)
- [Memperbarui tema](#memperbarui-tema)
- [Mengembalikan seperti semula](#mengembalikan-seperti-semula)
- [Kalau ada masalah](#kalau-ada-masalah)
- [Berkas yang diubah](#berkas-yang-diubah)
- [Lisensi & kredit](#lisensi--kredit)

---

## Isi tema

| Fitur | Keterangan |
|---|---|
| Latar video | Video potret 576×1024, dikunci `position: fixed` — tidak ikut bergulir |
| Anti-potong | Utuh di layar mobile, `cover` di layar lebar |
| Halaman masuk | Gaya kartu aplikasi mobile, foto profil menggantikan maskot Pterodactyl |
| Banner header | Foto profil, sambutan animasi ketik-hapus, jam berjalan, peringatan penggunaan |
| Bahasa Indonesia | Muncul otomatis di pemilih bahasa panel |
| Kontak | Tautan sosial Reviza berbentuk SVG di dalam drawer |
| Tombol | Gradien ungu dengan efek angkat saat disentuh |
| Transparansi | Panel semi-transparan agar latar terlihat; teks, konsol, dan kolom isian tetap pekat |
| Admin | Tema ikut diterapkan ke seluruh halaman administrasi |
| Konsol | Prompt terminal `reviza@docker~` |
| Watermark | `POWERED BY REVIZA D KINK \| 2026 ALRIGHT RESERVED` |

Seluruh aset (video dan foto) disimpan lokal di `public/assets/reviza/`,
tidak mengambil dari CDN luar.

---

## Sebelum mulai

| Syarat | Nilai |
|---|---|
| VPS | akses root, Ubuntu 22.04 / 24.04 |
| PHP | **8.2 atau 8.3** |
| Node.js | 18+ (hanya bila membangun dari source) |
| Pterodactyl | sudah terpasang dan berjalan normal |
| Domain | sudah mengarah ke VPS, SSL aktif |

Tema ini **mengganti tampilan** panel yang sudah ada, bukan memasang panel baru.
Pasang Pterodactyl resmi dulu sampai bisa dibuka, baru pasang tema ini.

---

## Instalasi langkah demi langkah

### Langkah 1 — Backup

Jangan dilewati. Kalau ada yang salah, ini satu-satunya jalan pulang.

```bash
cd /var/www
tar -czf ~/backup-panel-$(date +%F).tar.gz pterodactyl
mysqldump -u root -p panel > ~/backup-db-$(date +%F).sql
ls -lh ~/backup-panel-*.tar.gz ~/backup-db-*.sql
```

Pastikan kedua berkas muncul dan ukurannya wajar.

### Langkah 2 — Masuk mode perawatan

```bash
cd /var/www/pterodactyl
php artisan down
```

### Langkah 3 — Pastikan PHP 8.2 atau 8.3

```bash
php -v
```

Bila masih 8.1 atau lebih lama:

```bash
sudo apt update
sudo apt install -y software-properties-common
sudo add-apt-repository -y ppa:ondrej/php
sudo apt update
sudo apt install -y php8.3 php8.3-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip,intl}
php -v
```

### Langkah 4 — Unduh tema

```bash
cd /var/www/pterodactyl
curl -L https://github.com/revizahoshii-no/reviza-theme/releases/latest/download/panel.tar.gz | tar -xzv
```

Bila rilis belum tersedia, pasang langsung dari source:

```bash
cd /tmp
git clone -b release/v1.15.1 https://github.com/revizahoshii-no/reviza-theme.git
cd reviza-theme
rsync -a --exclude='.git' --exclude='.env' --exclude='storage' ./ /var/www/pterodactyl/
cd /var/www/pterodactyl
```

### Langkah 5 — Perbaiki izin berkas

```bash
chmod -R 755 storage/* bootstrap/cache
```

### Langkah 6 — Perbarui dependensi PHP

```bash
composer install --no-dev --optimize-autoloader
```

### Langkah 7 — Perbarui skema database

```bash
php artisan migrate --seed --force
```

Jangan pernah mengedit egg bawaan — akan ditimpa proses ini.

### Langkah 8 — Bangun tampilan

Hanya perlu bila memasang dari source (Langkah 4 opsi kedua):

```bash
yarn install
yarn build:production
```

### Langkah 9 — Bersihkan cache

```bash
php artisan view:clear
php artisan config:clear
php artisan cache:clear
php artisan route:clear
```

### Langkah 10 — Set pemilik berkas

Sesuaikan dengan pengguna webserver (`www-data` untuk nginx/apache di Ubuntu):

```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

### Langkah 11 — Restart queue worker

```bash
php artisan queue:restart
```

### Langkah 12 — Keluar dari mode perawatan

```bash
php artisan up
```

### Langkah 13 — Periksa hasil

Buka panel di browser, tekan `Ctrl+Shift+R` (hard refresh) agar CSS lama tidak
tersangkut di cache browser.

Yang harus terlihat:

- video latar berjalan dan **tidak bergerak** saat halaman digulir
- di HP video tampil utuh, tidak terpotong
- halaman masuk memakai foto profil, bukan maskot Pterodactyl
- banner dengan jam berjalan dan teks mengetik
- watermark `POWERED BY REVIZA D KINK`

---

## Mengaktifkan bahasa Indonesia

**Untuk seluruh panel:**
Panel Admin → **Settings** → **General** → **Default Language** → pilih Indonesia.

**Per pengguna:**
Halaman akun → pengaturan bahasa.

---

## Mengganti aset sendiri

| Berkas | Isi | Catatan |
|---|---|---|
| `public/assets/reviza/reviza-bg.mp4` | video latar | potret 9:16 disarankan, di bawah 3 MB |
| `public/assets/reviza/reviza-profile.jpg` | foto profil | persegi, minimal 400×400 |

Setelah mengganti:

```bash
php artisan view:clear
```

Lalu hard refresh browser. Tidak perlu build ulang selama nama berkas sama.

**Mengubah warna:** sunting `--rv-ungu` di `resources/scripts/assets/reviza.css`
dan `public/assets/reviza/admin.css`, lalu jalankan `yarn build:production`.

**Mengubah teks banner:** sunting
`resources/scripts/components/reviza/RevizaBanner.tsx` (React) dan
`public/assets/reviza/admin.js` (halaman admin), lalu build ulang.

---

## Memperbarui tema

```bash
cd /var/www/pterodactyl
php artisan down
curl -L https://github.com/revizahoshii-no/reviza-theme/releases/latest/download/panel.tar.gz | tar -xzv
chmod -R 755 storage/* bootstrap/cache
composer install --no-dev --optimize-autoloader
php artisan migrate --seed --force
php artisan view:clear && php artisan config:clear
chown -R www-data:www-data /var/www/pterodactyl/*
php artisan queue:restart
php artisan up
```

Menarik pembaruan dari NookTheme ke fork ini:

```bash
git remote add upstream https://github.com/Nookure/NookTheme.git
git fetch upstream
git merge upstream/release/v1.15.1
```

---

## Mengembalikan seperti semula

```bash
cd /var/www/pterodactyl
php artisan down
cd /var/www
rm -rf pterodactyl
tar -xzf ~/backup-panel-YYYY-MM-DD.tar.gz
mysql -u root -p panel < ~/backup-db-YYYY-MM-DD.sql
cd pterodactyl
chown -R www-data:www-data *
php artisan up
```

---

## Kalau ada masalah

| Gejala | Penyebab & solusi |
|---|---|
| Halaman putih / error 500 | `tail -50 storage/logs/laravel-*.log` |
| Tampilan lama masih muncul | `php artisan view:clear` lalu hard refresh |
| Video latar tidak muncul | cek `ls -la public/assets/reviza/reviza-bg.mp4` |
| Video ikut bergulir | CSS belum termuat, ulangi Langkah 9 dan 13 |
| Error 500 setelah update | izin salah, ulangi Langkah 5 dan 10 |
| Composer gagal | PHP di bawah 8.2, ulangi Langkah 3 |
| CSS/JS tidak termuat | jalankan `yarn build:production` |
| Panel tidak bisa dibuka | masih mode perawatan, jalankan `php artisan up` |

---

## Berkas yang diubah

```
public/assets/reviza/                   video, foto, admin.css, admin.js
resources/scripts/assets/reviza.css
resources/scripts/components/reviza/    RevizaBackground, RevizaBanner,
                                        RevizaContacts, LiveClock, TypewriterText
resources/scripts/components/App.tsx
resources/scripts/components/Sidebar.tsx
resources/scripts/components/auth/LoginFormContainer.tsx
resources/scripts/components/elements/PageContentBlock.tsx
resources/scripts/config.ts
resources/scripts/routers/DashboardRouter.tsx
resources/scripts/routers/ServerRouter.tsx
resources/views/layouts/admin.blade.php
resources/views/admin/index.blade.php
resources/lang/id/
```

---

## Lisensi & kredit

- **Pterodactyl®** — MIT, © 2015–2026 Dane Everitt dan kontributor
- **NookTheme** — GNU GPLv3, oleh Nookure
- **Reviza Theme** — GNU GPLv3, mengikuti lisensi induknya

Tema ini tidak dibangun dari nol. Terima kasih kepada:

- **[Pterodactyl Panel](https://github.com/pterodactyl/panel)** oleh Dane Everitt
  dan kontributor — panel dasarnya.
- **[NookTheme](https://github.com/Nookure/NookTheme)** oleh
  **[Nookure](https://nookure.com/)** — tema yang menjadi dasar fork ini.

Nookure dan Pterodactyl tidak berafiliasi dengan fork ini.

Dikembangkan oleh **Reviza D Kink** — [revizayowa.biz.id](https://revizayowa.biz.id/)
