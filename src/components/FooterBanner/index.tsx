import { useEffect, useState } from 'react';
import './FooterBanner.scss'
import { useTranslation } from "react-i18next"

const FooterBanner = () => {
    const [text, setText] = useState('')

    const { t } = useTranslation();

    var i=0;
    useEffect(() => {
        if (document.getElementsByClassName("FooterTyping")![0].innerHTML.length != text.length) {
            document.getElementsByClassName("FooterTyping")![0].innerHTML = '';
        }
        function typeWriter() {
            if (i < text.length) {
                document.getElementsByClassName("FooterTyping")![0].innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter()
    },[text])
    
    function sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        setText(t('ctadfg'))
        delayed()
        async function delayed() {
            await sleep(5000);
            setText(t('pdreact'))
            await sleep(5000);
            setText(t('ctadfg'))
            await sleep(5000);
            setText(t('ctbbl'))
        }
        setInterval(() => {
            delayed()
        }, 15000);
    },[])

    return (
        <>
        <div className='FooterBanner'>
            <span className="FooterTyping"></span>
        </div>
        </>
    )
}

export default FooterBanner;