import React,{ useState } from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Burger from '@animated-burgers/burger-squeeze' 
import Helmet from 'react-helmet';
// don't forget the styles
import '@animated-burgers/burger-squeeze/dist/styles.css' 

import headerStyles from './header.module.scss'

const Header = () => {
    const [count, setCount] = useState(false);
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    title 
                    description
                    author
                }
            }
        }
    `)
    const handleBurger = ()  => {
        setCount(!count)
    }
    return (
        <>
            <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                    { name: 'description', content: data.site.siteMetadata.description },
                    { name: 'keywords', content: data.site.siteMetadata.keyword },
                ]}
                >
                <html lang="en" />
                <noscript>{`
                    Opps, I cann't work without javascript, will you please enable javascript.
                `}</noscript>
            </Helmet>
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.author}
                </Link>
            </h1>
            <nav>
                <label>
                    <input type="checkbox"/>
                    <Burger className="menui" isOpen={count} onClick={handleBurger}/>

                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
                    </li>
                    <li>
                        <Link to="/skills" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Skills</Link>
                    </li>
                    <li>
                        <Link to="/project" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Project</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link>
                    </li>
                </ul>
                </label>

            </nav>
        </header>
        </>
    )
}

export default Header;