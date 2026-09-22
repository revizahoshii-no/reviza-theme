import React from 'react';

interface Kontak {
    nama: string;
    url: string;
    ikon: React.ReactNode;
}

const ikonKelas = 'rv-contact-icon';

const DAFTAR: Kontak[] = [
    {
        nama: 'WhatsApp',
        url: 'https://wa.me/628978595858',
        ikon: (
            <svg className={ikonKelas} viewBox={'0 0 24 24'} fill={'currentColor'}>
                <path d={'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z'} />
                <path d={'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23z'} />
            </svg>
        ),
    },
    {
        nama: 'TikTok',
        url: 'https://www.tiktok.com/@reviza4ever',
        ikon: (
            <svg className={ikonKelas} viewBox={'0 0 24 24'} fill={'currentColor'}>
                <path d={'M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06V9.69a5.68 5.68 0 0 0-.77-.05 5.68 5.68 0 1 0 5.68 5.68V9.01a7.35 7.35 0 0 0 4.29 1.38V7.3a4.29 4.29 0 0 1-3.23-1.48z'} />
            </svg>
        ),
    },
    {
        nama: 'Instagram',
        url: 'https://instagram.com/Always_revizaa',
        ikon: (
            <svg className={ikonKelas} viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={'2'}>
                <rect x={'2'} y={'2'} width={'20'} height={'20'} rx={'5'} />
                <circle cx={'12'} cy={'12'} r={'4'} />
                <circle cx={'17.5'} cy={'6.5'} r={'1'} fill={'currentColor'} stroke={'none'} />
            </svg>
        ),
    },
    {
        nama: 'YouTube',
        url: 'https://www.youtube.com/@reviza4ever',
        ikon: (
            <svg className={ikonKelas} viewBox={'0 0 24 24'} fill={'currentColor'}>
                <path d={'M23 12s0-3.9-.5-5.77a3 3 0 0 0-2.12-2.13C18.5 3.6 12 3.6 12 3.6s-6.5 0-8.38.5A3 3 0 0 0 1.5 6.23C1 8.1 1 12 1 12s0 3.9.5 5.77a3 3 0 0 0 2.12 2.13c1.88.5 8.38.5 8.38.5s6.5 0 8.38-.5a3 3 0 0 0 2.12-2.13C23 15.9 23 12 23 12zM9.75 15.27V8.73L15.5 12l-5.75 3.27z'} />
            </svg>
        ),
    },
    {
        nama: 'Telegram',
        url: 'https://t.me/zayuyoo',
        ikon: (
            <svg className={ikonKelas} viewBox={'0 0 24 24'} fill={'currentColor'}>
                <path d={'M21.9 4.3 18.8 19.2c-.23 1.03-.85 1.28-1.72.8l-4.76-3.5-2.3 2.21c-.25.26-.47.47-.96.47l.34-4.85 8.82-7.97c.38-.34-.09-.53-.6-.19L6.72 12.8 1.98 11.3c-1.03-.32-1.05-1.03.21-1.53l18.46-7.12c.86-.31 1.61.2 1.25 1.65z'} />
            </svg>
        ),
    },
    {
        nama: 'Saweria',
        url: 'https://saweria.co/REVIZAHOSHI',
        ikon: (
            <svg className={ikonKelas} viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={'2'} strokeLinecap={'round'} strokeLinejoin={'round'}>
                <path d={'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'} />
            </svg>
        ),
    },
    {
        nama: 'Website',
        url: 'https://revizayowa.biz.id/',
        ikon: (
            <svg className={ikonKelas} viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={'2'}>
                <circle cx={'12'} cy={'12'} r={'10'} />
                <line x1={'2'} y1={'12'} x2={'22'} y2={'12'} />
                <path d={'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'} />
            </svg>
        ),
    },
];

/**
 * Daftar kontak Reviza untuk ditaruh di drawer navigasi.
 */
export default () => (
    <div className={'rv-contacts'}>
        <span className={'rv-contacts-label'}>Hubungi Reviza</span>
        <div className={'rv-contacts-grid'}>
            {DAFTAR.map((k) => (
                <a key={k.nama} href={k.url} target={'_blank'} rel={'noreferrer noopener'} title={k.nama} className={'rv-contact'}>
                    {k.ikon}
                    <span>{k.nama}</span>
                </a>
            ))}
        </div>
    </div>
);
