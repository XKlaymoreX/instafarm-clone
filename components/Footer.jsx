import React from 'react'
import style from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.firstRow}>
                <div>
                    Meta
                </div>
                <div>
                    Informazioni 
                </div>
                <div>
                    Blog
                </div>
                <div>
                    Lavora con noi
                </div>
                <div>
                    Assistenza
                </div>
                <div>
                    API
                </div>
                <div>
                    Privacy
                </div>
                <div>
                    Condizioni
                </div>
                <div>
                    Account più popolari
                </div>
                <div>
                    Hashtag
                </div>
                <div>
                    Luoghi
                </div>
                <div>
                    Instagram Lite
                </div>
            </div>
        
            <div className={style.secondRow}>
                 <div>
                    Language
                </div>
                <div>
                © 2021 Instagram from Meta
                </div>
            </div>

        </footer>
    )
}

export default Footer
