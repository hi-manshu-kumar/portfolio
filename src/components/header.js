import React from 'react';
import {Link} from 'gatsby';

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    Himanshu Das
                </Link>
            </h1>
            <nav>
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
            </nav>
        </header>
    )
}

export default Header;