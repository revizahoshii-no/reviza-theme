import React, { forwardRef } from 'react';
import { Form } from 'formik';
import FlashMessageRender from '@/components/FlashMessageRender';
import tw from 'twin.macro';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    title?: string;
};

export default forwardRef<HTMLFormElement, Props>(({ title, ...props }, ref) => (
    <div css={tw`w-full flex flex-col items-center`}>
        <FlashMessageRender css={tw`mb-2 px-1 w-full`} />
        <Form {...props} ref={ref} css={tw`w-full`}>
            <div className={'rv-login-card'}>
                <img className={'rv-login-avatar'} src={'/assets/reviza/reviza-profile.jpg'} alt={'Reviza'} />
                <p className={'rv-login-name'}>REVIZA D KINK</p>
                <p className={'rv-login-sub'}>SERVER HOSTING PANEL</p>
                {title && <h2 css={tw`text-lg text-center text-neutral-100 font-medium pb-3`}>{title}</h2>}
                {props.children}
            </div>
        </Form>
        <p className={'rv-watermark'}>POWERED BY REVIZA D KINK | 2026 ALRIGHT RESERVED</p>
    </div>
));
