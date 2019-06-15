import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/layout';
import Head from './head';
import indexStyles from './index.module.scss'
import dev from './dev.png'

const indexpage = () => {
    return (
        <Layout >
            <Head title="Home"/>
            <span className={indexStyles.container}>
                <h2 className={indexStyles.content}><span/>Hello !</h2>
                <h1>I'm Himanshu Das</h1>
                <h2 className={indexStyles.details}>I'm a software engineer specializing in developing high-quality applications and websites from scratch taking care of both frontend and backend part. </h2>
                <button className={indexStyles.btnEmpty}>See work</button>
                <Link to="/contact">
                <button className={indexStyles.btnFill}>Hire Me</button></Link>
            </span>
            <span className={indexStyles.imgContainer}>
                <img src={dev} alt="developer" className={indexStyles.img}/>
            </span>
        </Layout>
    )
}

export default indexpage; 