import React from 'react';

/**
 * Video latar Reviza. Dipasang fixed di belakang seluruh panel sehingga tidak
 * ikut bergulir dan tetap terkunci saat viewport mobile berubah tinggi
 * (bilah alamat browser muncul/hilang).
 */
export default () => {
    React.useEffect(() => {
        const sync = () => {
            const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
            if (h) document.documentElement.style.setProperty('--rv-vh', `${h}px`);
        };
        sync();
        window.addEventListener('resize', sync, { passive: true });
        window.visualViewport?.addEventListener('resize', sync, { passive: true });
        return () => {
            window.removeEventListener('resize', sync);
            window.visualViewport?.removeEventListener('resize', sync);
        };
    }, []);

    return (
        <div className={'rv-bg-wrap'} aria-hidden={'true'}>
            <video autoPlay loop muted playsInline preload={'auto'} poster={'/assets/reviza/reviza-profile.jpg'}>
                <source src={'/assets/reviza/reviza-bg.mp4'} type={'video/mp4'} />
            </video>
            <div className={'rv-bg-veil'} />
        </div>
    );
};
