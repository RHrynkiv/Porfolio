import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import vovaImage from '../assets/images/IMG_4802.JPG';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';


function Main() {
    return (
        <div id={"main"} className={style.mainBlock}>

            <Fade bottom>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <h1>I am
                            <br/>
                            Roman Hrynkiv</h1>
                        <p><ReactTypingEffect text={"I want to become Frontend Developer"}/></p>
                    </div>

                    <div className={style.photo}>
                        <Tilt className="Tilt" options={{max: 20, scale: 1.05,}}>
                            <img src={vovaImage} alt=""/>
                        </Tilt>
                        <div className={style.border}></div>
                    </div>

                </div>
            </Fade>

        </div>
    );
}

export default Main;