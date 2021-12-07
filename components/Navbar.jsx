import React from 'react'
import style from '../styles/Navbar.module.css'
import HomeIcon from '../public/media/svgcomponents/HomeIcon'
import ChatIcon from '../public/media/svgcomponents/ChatIcon'
import NewPostIcon from '../public/media/svgcomponents/NewPostIcon'
import FindIcon from '../public/media/svgcomponents/FindIcon'
import FeedIcon from '../public/media/svgcomponents/FeedIcon'
import UserIcon from '../public/media/svgcomponents/UserIcon'
import Link from 'next/link'

const Navbar = () => {





    return (
        <nav className={style.nav}>
            <ul className={style.navContent}>
                <li className={style.logo}>
                    <Link href="/"> 
                            <a>
                                Instafarm
                            </a>
                    </Link>
                </li>
                <li className={style.actions}>
                    <input type="text" placeholder="Cerca" className={style.searchBar}/>
                    <div className={style.icons}>
                        <Link href="/"> 
                            <a>
                                <HomeIcon  className={style.icon}/>
                            </a>
                        </Link>
                        <Link href="/direct/inbox/">
                            <a>
                            <ChatIcon  className={style.icon} />
                            </a>
                        </Link>
                        <Link href="/create/select/">
                            <a >
                            <NewPostIcon  className={style.icon} />
                            </a>
                        </Link>
                        <Link href="/explore/">
                            <a>
                                <FindIcon active={false} className={style.icon} />
                            </a>
                        </Link>
                        <FeedIcon active={false} className={style.icon} />
                        <UserIcon />
                    </div>
                </li>
        
            </ul>
        </nav>
    )
}

export default Navbar
