import React from 'react';

interface Props {
    text: string;
    typeSpeed?: number;
    eraseSpeed?: number;
    holdMs?: number;
    className?: string;
}

/**
 * Teks dengan animasi mengetik lalu menghapus, berulang terus-menerus.
 */
export default ({ text, typeSpeed = 90, eraseSpeed = 45, holdMs = 1600, className }: Props) => {
    const [shown, setShown] = React.useState('');
    const [erasing, setErasing] = React.useState(false);

    React.useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (!erasing && shown.length < text.length) {
            timer = setTimeout(() => setShown(text.slice(0, shown.length + 1)), typeSpeed);
        } else if (!erasing && shown.length === text.length) {
            timer = setTimeout(() => setErasing(true), holdMs);
        } else if (erasing && shown.length > 0) {
            timer = setTimeout(() => setShown(text.slice(0, shown.length - 1)), eraseSpeed);
        } else {
            timer = setTimeout(() => setErasing(false), 400);
        }

        return () => clearTimeout(timer);
    }, [shown, erasing, text, typeSpeed, eraseSpeed, holdMs]);

    return (
        <span className={className}>
            {shown}
            <span className={'rv-caret'} />
        </span>
    );
};
