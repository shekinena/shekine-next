import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
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
            if (data[i].fields.id[y] === 'front') {
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

export default function Home({ data }) {
  return (

    <div className={styles.container}>

      <Head>
        <title>Shekine | Home</title>
        <meta name="Shekine homepage" content="Art Collection Marbell" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homepage}>
        <div className={styles.introduction}>
          <div className={styles.info}>
            <h1>Hey! I'm <span>Shekine</span>. An Art major from Greece!</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error totam dicta possimus iusto ducimus?</h3>
            <Link href='/about'><a className='btn-primary'>About me</a></Link>
            <Link href='/projects'><a className='btn-secondary'>Projects</a></Link>
          </div>
          <div className={styles.image}>
            <Image src='/about-person-shekine-1.jpg' width={350} height={351} />
          </div>
        </div>
      </div>
      <div>
        <div className="divider"></div>
        <div className={styles.bannerTitle}>
          <h1 >Here! You can see some of my finest work!</h1>
          <div className={styles.logoImage} >
            <Image src='/logo-icon.png' width={30} height={75} />
          </div>
        </div>
        <div className={styles.homeFrontBanner}>

          {data.map(filterdArt => (
            <HomeFrontBanner key={filterdArt.sys.id} work={filterdArt} />
            
            ))}
        </div>
      </div>
    </div>
  )
}
