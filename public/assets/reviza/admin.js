(function () {
    'use strict';

    function tinggiViewport() {
        var h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        if (h) document.documentElement.style.setProperty('--rv-vh', h + 'px');
    }

    function pasangLatar() {
        if (document.getElementById('rv-bg')) return;
        var wrap = document.createElement('div');
        wrap.id = 'rv-bg';
        wrap.setAttribute('aria-hidden', 'true');
        wrap.innerHTML =
            '<video autoplay loop muted playsinline preload="auto">' +
            '<source src="/assets/reviza/reviza-bg.mp4" type="video/mp4"></video>';
        document.body.insertBefore(wrap, document.body.firstChild);
    }

    var HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    function dua(n) { return String(n).padStart(2, '0'); }

    function pasangBanner() {
        var isi = document.querySelector('.content-wrapper .content');
        if (!isi || document.querySelector('.rv-admin-banner')) return;

        var b = document.createElement('div');
        b.className = 'rv-admin-banner';
        b.innerHTML =
            '<img src="/assets/reviza/reviza-profile.jpg" alt="Reviza">' +
            '<div><div class="rv-t"><span id="rv-ketik"></span><span class="rv-caret-a"></span></div>' +
            '<div><span class="rv-c" id="rv-jam">--:--:--</span>' +
            '<span class="rv-d" id="rv-tgl"></span></div></div>';

        var w = document.createElement('div');
        w.className = 'rv-admin-warn';
        w.textContent = 'DILARANG MELAKUKAN HAL YANG ILLEGAL DAN MERUGIKAN. JIKA KETAHUAN OLEH REVIZA MAKA AKAN DI HAPUS SERVER DAN AKSESNYA....\uD83D\uDC7F';

        isi.insertBefore(w, isi.firstChild);
        isi.insertBefore(b, isi.firstChild);

        var teks = 'SELAMAT DATANG DI SERVER HOSTING REVIZA';
        var el = document.getElementById('rv-ketik');
        var i = 0, hapus = false;

        (function ketik() {
            if (!el) return;
            if (!hapus && i < teks.length) { el.textContent = teks.slice(0, ++i); setTimeout(ketik, 90); }
            else if (!hapus) { hapus = true; setTimeout(ketik, 1600); }
            else if (i > 0) { el.textContent = teks.slice(0, --i); setTimeout(ketik, 45); }
            else { hapus = false; setTimeout(ketik, 400); }
        })();

        setInterval(function () {
            var d = new Date();
            var j = document.getElementById('rv-jam');
            var t = document.getElementById('rv-tgl');
            if (j) j.textContent = dua(d.getHours()) + ':' + dua(d.getMinutes()) + ':' + dua(d.getSeconds());
            if (t) t.textContent = HARI[d.getDay()] + ', ' + d.getDate() + ' ' + BULAN[d.getMonth()] + ' ' + d.getFullYear();
        }, 1000);
    }

    function jalan() {
        tinggiViewport();
        pasangLatar();
        pasangBanner();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', jalan);
    else jalan();

    window.addEventListener('resize', tinggiViewport, { passive: true });
})();
