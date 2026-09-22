import React from 'react';

const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const BULAN = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

const dua = (n: number) => String(n).padStart(2, '0');

/**
 * Jam berjalan beserta hari, tanggal, bulan, dan tahun dalam bahasa Indonesia.
 */
export default () => {
    const [now, setNow] = React.useState(new Date());

    React.useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className={'rv-clock'}>
            <span className={'rv-clock-time'}>
                {dua(now.getHours())}:{dua(now.getMinutes())}:{dua(now.getSeconds())}
            </span>
            <span className={'rv-clock-date'}>
                {HARI[now.getDay()]}, {now.getDate()} {BULAN[now.getMonth()]} {now.getFullYear()}
            </span>
        </div>
    );
};
