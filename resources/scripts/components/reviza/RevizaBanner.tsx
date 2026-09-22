import React from 'react';
import LiveClock from './LiveClock';
import TypewriterText from './TypewriterText';

/**
 * Banner header yang tampil di setiap halaman: foto profil, sambutan beranimasi,
 * jam berjalan, dan peringatan penggunaan.
 */
export default () => (
    <div className={'rv-banner'}>
        <div className={'rv-banner-main'}>
            <img className={'rv-banner-avatar'} src={'/assets/reviza/reviza-profile.jpg'} alt={'Reviza'} />
            <div className={'rv-banner-body'}>
                <h1 className={'rv-banner-title'}>
                    <TypewriterText text={'SELAMAT DATANG DI SERVER HOSTING REVIZA'} />
                </h1>
                <LiveClock />
            </div>
        </div>
        <div className={'rv-banner-warn'}>
            <svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={'2'} strokeLinecap={'round'} strokeLinejoin={'round'}>
                <path d={'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'} />
                <line x1={'12'} y1={'9'} x2={'12'} y2={'13'} />
                <line x1={'12'} y1={'17'} x2={'12.01'} y2={'17'} />
            </svg>
            <span>
                DILARANG MELAKUKAN HAL YANG ILLEGAL DAN MERUGIKAN. JIKA KETAHUAN OLEH REVIZA MAKA AKAN DI HAPUS
                SERVER DAN AKSESNYA....👿
            </span>
        </div>
    </div>
);
