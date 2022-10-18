import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import HomeFrontBanner from '../components/HomeFrontBanner'
import { createClient } from 'contentful'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({
        content_type: 'shekineNainti'
    })

    let data = res.items
    let len_data = data.length
    let about_data = []

    for (let i = 0; i < len_data; i++) {
        let len_item = data[i].fields.id.length
        for (let y = 0; y < len_item; y++) {
            if (data[i].fields.id[y] === 'about') {
                about_data.push(data[i])
            }
        }
    }

    return {
        props: {
            data: about_data,
        }
    }
}



const About = ({ data }) => {
    return (
        <div className={styles.about}>
            <Head>
                <title>Shekine | About</title>
                <meta name="Shekine about me" content="Art Collection Marbell" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.aboutMeHero}>
                <div className={styles.info}>
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aliquid ab expedita quo recusandae maxime ad consequatur saepe iusto rerum.</p>
                    {/* <Link  href='/contact'><a className="btn-primary">Contact me</a></Link> */}
                    <Link href='/thesis'><a className="btn-primary">Thesis</a></Link>
                </div>
                <div className={styles.infoImage}>
                    <Image src='/logo.png' width={1200} height={304} />
                </div>
            </div>
            <div className={styles.details}>
                <div>

                    <h2>Shekine Nainti</h2>
                    <p>Shekine was born 1996 in Greece. My academic career started in 2014 in School of Visual and Applied Arts, Faculty of Fine Arts, AUTh
                        Shekine was born 1996 in Greece. My academic career started in 2014 in School of Visual and Applied Arts, Faculty of Fine Arts, AUTh
                        Shekine was born 1996 in Greece. My academic career started in 2014 in School of Visual and Applied Arts, Faculty of Fine Arts, AUTh
                        Shekine was born 1996 in Greece. My academic career started in 2014 in School of Visual and Applied Arts, Faculty of Fine Arts, AUTh
                    </p>
                </div>
            </div>
            <div className="divider"></div>
            <div className={styles.aboutThesis}>
                <h1>Take a look at my thesis Art!</h1>
            </div>
            <div className={styles.homeFrontBanner}>

                {data.map(filterdArt => (
                    <HomeFrontBanner key={filterdArt.sys.id} work={filterdArt} />

                ))}

            </div>

        </div>

    )

}

export default About;