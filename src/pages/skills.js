import React from 'react';

import Layout from '../components/layout';
import Head from './head';
import skillStyles from './skills.module.scss';

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
                            <li>C / C++</li>
                            <li>Javascript</li>
                            <li>Python</li>
                        </ul>
                    {/* </div>
                    <div> */}
                        <h2>Frontend</h2>
                        <ul>
                            <li>Html</li>
                            <li>CSS, SASS</li>
                            <li>Bootstrap, jQuery</li>
                            <li>Angular.js, Angular2+</li>
                            <li>React.js, Redux</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Backend</h2>
                        <ul>
                            <li>Node.js</li>
                            <li>ExpressJs</li>
                            <li>Firebase</li>
                        </ul>
                    {/* </div>
                    <div> */}
                        <h2>Database</h2>
                        <ul>
                            <li>MongoDB</li>
                            <li>PostgreSql</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default skills;