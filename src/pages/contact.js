import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faGithub, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout';
import Head from './head';
import contactStyles from './styles/contact.module.scss';
import arrow from './images/arrow.png';

const contact = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <div className={contactStyles.wrapper}>
                <h1 className={contactStyles.content}><span/>Contact Me</h1>
                <div className={contactStyles.contactBox} >
                    <div className={contactStyles.details}>
                        <p>Lets make something new, <br/> different and more <br/> meaningfull?</p>
                        <p>JUST SAY HELLO!</p>
                        <img src={arrow} alt="arrow"/>
                        <ul>
                            <li><a href="https://github.com/hi-manshu-kumar" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
                            <li><a href="https://www.facebook.com/kushwaaha" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li><a href="https://www.linkedin.com/in/himanshu-kumar-das-101104151" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                            <li><a href="https://twitter.com/Himanshu_hd420" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></li>
                        </ul>
                    </div>
                    <div className={contactStyles.formBox}>
                        <form action="" className={contactStyles.form}>
                            <input type="text" placeholder="Name:"/>
                            <input type="text" placeholder="Email:"/>
                            <textarea placeholder="Message:"/>
                            <button type="submit" className={contactStyles.btnEmpty}>Send Mail ></button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default contact;