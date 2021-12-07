import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout.jsx'

export default function Home() {
    return (
        <div>
            <Head>
                <title>
                    Instafarm | Clone
                </title>
                <meta name="title" content="Instafarm"></meta>
                <meta 
                name="description"
                content="
                Welcome to your personal account of the Brand-New Social Network INSTAFARM!
                Connect with people, share experiences, promote your contents & much more!
                Post Stories, scroll through posts, profiles, reels and have fun with thousands
                of people from all over the world!🌎

                Website created by Cristian George Hoza:
                - 20 Yo
                - 📍Placed in Switzerland
                - Full Stack Developer & Web Designer
                "></meta>

                <meta
                name="keywords"
                content="Instafarm, Instagram clone, Cristian George Hoza, Switzerland, Developer, Designer"
                >
                </meta>

            </Head>
            <Layout>
              
            </Layout>
        </div>
    )
}
