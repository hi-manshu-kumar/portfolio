import React from 'react';

import Layout from '../components/layout';
import Head from './head';
import aboutStyles from './styles/about.module.scss'
import about from './images/about.png'

const aboutMe = () => {
    const redirect = () => {
        window.open(
            'https://www.google.com',
            '_blank' // <- This is what makes it open in a new window.
        );
    }
    
    return (
        <Layout>
            <Head title="About Me" />
            <span className={aboutStyles.container}>
                <div className={aboutStyles.leftHalf}>
                    <img src={about} alt="About Me"/>
                </div>
                <div className={aboutStyles.rightHalf}>
                    <h1 className={aboutStyles.content}><span/>About Me</h1>
                    <p> 
                        My name is himanshu kumar das and Iives in Delhi, India.<br/>
                        I love to build applications that solves my everyday problems. <br/>
                        Javscript is my weapon of choice anytime. <br/>
                    </p>
                    <p>
                        I have maintained, developed and launched multiple projects from scratch, <br/>carrying the development of its' back-end and front-end codebases. <br/>
                        Passionate about solving interesting problems.<br/>
                        My daily lifecyle include code, launch, ship and repeat.
                    </p>

                    <button className={aboutStyles.btnEmpty} onClick={redirect}>Download CV</button>
                </div>
            </span>
        </Layout>
    )
}

export default aboutMe;