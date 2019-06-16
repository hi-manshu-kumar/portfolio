import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from './head';
import error from './images/404.png'
import errorStyles from './styles/404.module.scss';

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <span className={errorStyles.container}>
                <img src={error} className={errorStyles.errorImg} alt="Page not found"/>
                <h1>Page not found</h1>
                <p><Link to="/">Head home</Link></p>
            </span>
        </Layout>
    )
}

export default NotFound