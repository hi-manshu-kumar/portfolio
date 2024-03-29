import React from 'react';

import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyle from './layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyle.container}>
            <div className={layoutStyle.content}>
                <Header></Header>
                <div className={layoutStyle.span}>
                    {props.children}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout;