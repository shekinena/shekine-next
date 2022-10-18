import HomeFrontBanner from '../../components/HomeFrontBanner'
import styles from '../../styles/Projects.module.css'
import { createClient } from 'contentful'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({
        content_type: 'shekineNainti'
    })

    return {
        props: {
            data: res.items
        }
    }
}

const Projects = ({ data }) => {
    return (
        <>
            <div className={styles.projectsTitle}>
                <h1>Projects</h1>
                <h4>Projects: subtitle</h4>
            </div>
            <div className={styles.projects}>

                {
                    data.map(filterdArt => (
                        <HomeFrontBanner key={filterdArt.sys.id} work={filterdArt} />

                    ))
                }
            </div>
        </>
    )

}

export default Projects;