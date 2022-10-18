import { useEffect, useState } from "react";
// import './Publication.css'
import styles from '../styles/Publications.module.css'
import { createClient } from "contentful";

//Icons
// import { FaCircleNotch } from 'react-icons/fa'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({
    content_type: 'shekineNaintiBublications'
  })

  return {
    props: {
      data: res.items
    }
  }
}

const Publication = ({ data }) => {
  // Create the initial values.
  let maxYear = 0
  let minYear = 50000
  let years = []

  // Loop throug the data and fing the min and max years.
  for (let i = 0; i < data.length; i++) {
    if (data[i].fields.year > maxYear) {
      maxYear = data[i].fields.year
      console.log(maxYear + '   here')
    }
    if (data[i].fields.year < minYear) {
      minYear = data[i].fields.year
    }
  }

  // Make the str to int
  maxYear = parseInt(maxYear)
  minYear = parseInt(minYear)


  // Loop from max to min to create the array with all the possible years
  for (let i = maxYear; i >= minYear; i = i - 1) {
    years.push(i.toString())
  }

  return (
    <div className={styles.projects}>
      <h1>Publications</h1>
      {/* Create the main divs base on year */}
      {years.map((yearzzz, i) => (
        <div key={i} className={styles.year}>
          <h1>{yearzzz}</h1>
          {/* <div className="divider"></div> */}
          <div className={styles.publication}>

            {/* Filter the data and display only the data that have the same year*/}
            {/* as the parrent ellement */}
            {data.filter((x, z) => x.fields.year === yearzzz).map((u, p) => (
              <div key={u.sys.id} className={styles.content}>
                <div className={styles.text}>
                  <h5>{u.fields.location} - {u.fields.year}</h5>
                  <p>{u.fields.nameOfThePublicationart}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Publication