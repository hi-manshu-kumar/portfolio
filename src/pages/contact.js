import React from 'react';

import Layout from '../components/layout';
import Head from './head';

const contact = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact Me</h1>
            <div>
                <p>Lets make something new, different and more meaningfull?</p>
                <p>JUST SAY HELLO!</p>
                <ul>
                    <li>Github</li>
                    <li>facebook</li>
                    <li>Linkedin</li>
                    <li>twitter</li>
                </ul>
            </div>
            <div>
                <form action="">
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder="Enter name here"/>
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder="Enter email here"/>
                    <label htmlFor="">Message:</label>
                    <input type="text" placeholder="Enter message here"/>
                    <button type="submit">Send Mail ></button>
                </form>
            </div>
        </Layout>
    )
}

export default contact;