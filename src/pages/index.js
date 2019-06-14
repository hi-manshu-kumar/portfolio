import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/layout';
import Head from './head';

const indexpage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h2><span><hr/></span>Hello !</h2>
            <h1>I'm Himanshu Das</h1>
            <h2>I'm a software engineer specializing in developing high-quality applications and websites from scratch taking care of both frontend and backend part. </h2>
            <button>See work</button>
            <Link to="/contact">
            <button>Hire Me</button></Link>
        </Layout>
    )
}

export default indexpage; 