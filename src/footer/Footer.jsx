import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import Link from "./link/Link";
import * as Unicons from "@iconscout/react-unicons";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={styleTitle.title}>
                    <h3>Roman Hrynkiv</h3>
                </div>
                <div className={style.links}>
                    <Link link={`https://www.instagram.com/romchik_grinkiv/`}
                          linkIcon={<Unicons.UilInstagram className={style.icon}/>}/>
                    <Link link={`https://www.linkedin.com/in/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD-%D0%B3%D1%80%D0%B8%D0%BD%D1%8C%D0%BA%D1%96%D0%B2-2571b8236/`}
                          linkIcon={<Unicons.UilLinkedin className={style.icon}/>}/>
                    <Link link={`https://www.facebook.com/roman.grinkiv.77`}
                          linkIcon={<Unicons.UilFacebook className={style.icon}/>}/>
                </div>
                <span className={style.rights}>@ 2022 All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;