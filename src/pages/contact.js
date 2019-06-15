import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faGithub, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout';
import Head from './head';
import contactStyles from './contact.module.scss';
import arrow from './arrow.png';

const contact = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1 className={contactStyles.content}><span/>Contact Me</h1>
            <div className={contactStyles.contactBox} >
                <div className={contactStyles.details}>
                    <p>Lets make something new, <br/> different and more <br/> meaningfull?</p>
                    <p>JUST SAY HELLO!</p>
                    <img src={arrow} alt=""/>
                    <ul>
                        <li><FontAwesomeIcon icon={faGithub} /></li>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faLinkedin} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
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
        </Layout>
    )
}

export default contact;