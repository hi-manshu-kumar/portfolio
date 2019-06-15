import React from 'react';

import Layout from '../components/layout';
import Head from './head';
import contactStyles from './contact.module.scss';

const contact = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1 className={contactStyles.content}><span/>Contact Me</h1>
            <div className={contactStyles.contactBox} >
                <div className={contactStyles.details}>
                    <p>Lets make something new, <br/> different and more <br/> meaningfull?</p>
                    <p>JUST SAY HELLO!</p>
                    <ul>
                        <li>Github</li>
                        <li>facebook</li>
                        <li>Linkedin</li>
                        <li>twitter</li>
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