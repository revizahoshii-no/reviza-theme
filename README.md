# Reviza Theme

Tema panel **Pterodactyl** bergaya Reviza — latar video, banner beranimasi,
antarmuka kaca ungu, dan bahasa Indonesia.

Fork dari [NookTheme](https://github.com/Nookure/NookTheme), yang merupakan fork
dari [Pterodactyl Panel](https://github.com/pterodactyl/panel).

---

## Isi tema

| Fitur | Keterangan |
|---|---|
| Latar video | Video Reviza, `position: fixed`, terkunci saat viewport mobile berubah |
| Halaman masuk | Gaya kartu aplikasi mobile, foto profil menggantikan maskot Pterodactyl |
| Banner header | Foto profil, sambutan animasi ketik-hapus, jam berjalan, peringatan penggunaan |
| Bahasa Indonesia | Tersedia di pemilih bahasa panel (`id`) |
| Kontak | Tautan sosial Reviza berbentuk SVG di dalam drawer |
| Tombol | Gradien ungu dengan efek angkat saat disentuh |
| Transparansi | Panel dibuat semi-transparan agar latar tetap terlihat; teks, konsol, dan kolom isian tetap pekat |
| Admin | Tema ikut diterapkan ke seluruh halaman administrasi |
| Konsol | Prompt terminal `reviza@docker~` |
| Watermark | `POWERED BY REVIZA D KINK | 2026 ALRIGHT RESERVED` |

Seluruh aset (video dan foto) disimpan langsung di `public/assets/reviza/`,
tidak mengambil dari CDN luar.

## Berkas yang diubah

```
public/assets/reviza/          video latar, foto profil, admin.css, admin.js
resources/scripts/assets/reviza.css
resources/scripts/components/reviza/   RevizaBackground, RevizaBanner,
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

## Pemasangan

Panduan lengkap ada di berkas panduan terpisah. Ringkasnya:

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

Bila membangun dari source setelah mengubah tampilan:

```bash
yarn install
yarn build:production
php artisan view:clear
```

Syarat: PHP 8.2 atau 8.3, Node.js 18+.

## Mengaktifkan bahasa Indonesia

Panel Admin → **Settings** → **General** → **Default Language** → `Bahasa Indonesia`.
Tiap pengguna juga bisa memilih sendiri di halaman akun.

---

## Lisensi

- **Pterodactyl®** — MIT, © 2015–2026 Dane Everitt dan kontributor
- **NookTheme** — GNU GPLv3, oleh Nookure
- **Reviza Theme** — GNU GPLv3, mengikuti lisensi induknya

## Kredit

Tema ini tidak dibangun dari nol. Terima kasih kepada:

- **[Pterodactyl Panel](https://github.com/pterodactyl/panel)** oleh Dane Everitt
  dan kontributor — panel dasarnya.
- **[NookTheme](https://github.com/Nookure/NookTheme)** oleh
  **[Nookure](https://nookure.com/)** — tema yang menjadi dasar fork ini.

Nookure dan Pterodactyl tidak berafiliasi dengan fork ini.

Dikembangkan oleh **Reviza D Kink** — [revizayowa.biz.id](https://revizayowa.biz.id/)
