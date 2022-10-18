import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from '../../styles/ProjectDetails.module.css'
import Image from "next/image";
import HomeFrontBanner from "../../components/HomeFrontBanner";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'shekineNainti'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'shekineNainti',
        'fields.slug': params.slug
    })

    return {
        props: { project: items[0] }
    }

}

export default function ProjectDetails({ project }) {
    const { title, banner } = project.fields
    return (
        // <div>details</div>
        <div>
            <div className={styles.projectItem}>
                <div className={styles.projectTile}>

                    <HomeFrontBanner key={project.sys.id} work={project} />
                </div>
                <div className={styles.text}>
                    <h2>{title}</h2>
                    <div>{documentToReactComponents(project.fields.text)}</div>
                </div>


            </div>
            <div className={styles.banner}>
                {/* <Image className={styles.tile} src={'https:' + banner.fields.file.url}
                    width={banner.fields.file.details.image.width}
                    height={banner.fields.file.details.image.height}
                    layout="responsive" /> */}
            </div>
        </div>
    )
}

