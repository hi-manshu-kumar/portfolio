import React from 'react';

import Layout from '../components/layout';
import Head from './head';
import skillStyles from './styles/skills.module.scss';
import triangle from './styles/Polygon.png';

const skills = () => {
    return (
        <Layout>
            <Head title="Skills"/>
            <div className={skillStyles.clearfix}>
                <h1 className={skillStyles.left}><span/>My Skills</h1>
                <div className={skillStyles.right}>
                    <div>
                        <h2>Programming</h2>
                        <ul>
                            <li><img src={triangle} alt="list-style"/> C / C++</li>
                            <li><img src={triangle} alt="list-style"/> Javascript</li>
                            <li><img src={triangle} alt="list-style"/> Python</li>
                        </ul>
                        <h2>Frontend</h2>
                        <ul>
                            <li><img src={triangle} alt="list-style"/> Html</li>
                            <li><img src={triangle} alt="list-style"/> CSS, SASS</li>
                            <li><img src={triangle} alt="list-style"/> Bootstrap, jQuery</li>
                            <li><img src={triangle} alt="list-style"/> Angular.js, Angular2+</li>
                            <li><img src={triangle} alt="list-style"/> React.js, Redux</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Backend</h2>
                        <ul>
                            <li><img src={triangle} alt="list-style"/> Node.js</li>
                            <li><img src={triangle} alt="list-style"/> ExpressJs</li>
                            <li><img src={triangle} alt="list-style"/> Firebase</li>
                        </ul>
                        <h2>Database</h2>
                        <ul>
                            <li><img src={triangle} alt="list-style"/> MongoDB</li>
                            <li><img src={triangle} alt="list-style"/> PostgreSql</li>
                            <li><img src={triangle} alt="list-style"/> Firebase</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default skills;