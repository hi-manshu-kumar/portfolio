import React from 'react';

import Layout from '../components/layout';
import Head from './head';
import aboutStyles from './about.module.scss'

const aboutMe = () => {
    return (
        <Layout>
            <Head title="About Me" />
            <span className={aboutStyles.container}>
                <div className={aboutStyles.leftHalf}>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus doloremque ratione recusandae modi a tempora omnis vero minima sequi debitis?</h1>
                </div>
                <div className={aboutStyles.rightHalf}>
                    <h1 className={aboutStyles.content}><span/>About Me</h1>
                    <p> 
                        My name is himanshu kumar das and Iives in Delhi, India.<br/>
                        I love to build applications that solves my everyday problems. <br/>
                        Javscript is my weapon of choice anytime. <br/>
                    </p>
                    <p>
                        I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases. <br/>
                        Passionate about solving interesting problems.<br/>
                        My daily lifecyle include code, launch, ship and repeat.
                    </p>
                    <button className={aboutStyles.btnEmpty}>Download CV</button>
                </div>
            </span>
        </Layout>
    )
}

export default aboutMe;