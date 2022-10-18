import styles from '../styles/HomeFrontBanner.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function HomeFrontBanner({ work }) {
    const { title, slug, subtittle, thumbnail, tags } = work.fields
    return (
        <Link href={'/projects/'+slug}>
        <div className={styles.panel}>
            <div className={styles.image}>
                <Image className={styles.actualImage} src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                />
            </div>
            <div className={styles.content}>
                <h2>{title}</h2>
                <h5>{subtittle}</h5>
                <div className={styles.tagsParrent}>
                    <FontAwesomeIcon icon={faTags} style={{ fontSize: 15 }} />
                    {tags.map(tag => {
                        return (
                            <span key={tag} className={styles.tags}>{tag}</span>
                        )
                    })}
                </div>
            </div>


            {/* <video width="320" autoPlay muted >
                <source src="/calidoscope.mp4" type="video/mp4"></source>
            </video> */}
        </div>
        </Link>
    )
}

export default HomeFrontBanner