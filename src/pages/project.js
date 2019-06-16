import React from 'react';
import {Link} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink} from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout';
import Head from './head';
import projectStyles from './styles/project.module.scss'

const project = () => {
    
    return (
        <Layout>
            <Head title="Projects"/>
            <span className={projectStyles.container}>
                <h1 className={projectStyles.content}><span/>Projects</h1>
                <ul className={projectStyles.flexContainer}>
                <li className={projectStyles.flexItem}><Link to="/"><span>Portfolio<FontAwesomeIcon icon={faLink} /></span></Link></li>
                <li className={projectStyles.flexItem}><a href="https://serene-caverns.herokuapp.com/"> <span>E-commerce App<FontAwesomeIcon icon={faLink} /></span></a></li>
                <li className={projectStyles.flexItem}><a href="https://snapyshare.herokuapp.com"> <span>Snappy Share<FontAwesomeIcon icon={faLink} /></span></a></li>
                <li className={projectStyles.flexItem}><a href="https://weather-app-hkd.herokuapp.com/"> <span>Weather App<FontAwesomeIcon icon={faLink} /></span></a></li>
                <li className={projectStyles.flexItem}><a href="https://testengine-a27d5.firebaseapp.com/"> <span>Test Engine<FontAwesomeIcon icon={faLink} /></span></a></li>
                <li className={projectStyles.flexItem}><a href="https://hi-manshu-kumar.github.io/Food-Restaurant-E-commerce-Site/indextry.html#/"> <span>Restaurant Site<FontAwesomeIcon icon={faLink} /></span></a></li>
                </ul>
            </span>
        </Layout>
    )
}

export default project;