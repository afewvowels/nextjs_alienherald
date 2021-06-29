import Head from 'next/head'
import Link from 'next/link'

import styles from 'styles/pages.module.css'

const p1 = () => {
    return(<>
        <Head>
          <title>P1 - Outline &amp; Sodering | Lipo ROS Node | Projects | AlienHerald</title>
          <meta name="description" content="Part 1 of a 3 part tutorial for creating a multi-cell lipo battery monitor that publishes its values as a ROS node. This part details the project and walks through the process of resistors and soldering the board." />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <Link href='/project/liporosnode' passHref>
            <h2>Lipo Battery Monitor ROS Node</h2>
        </Link>
        <h3>Part 1 - Soldering the board</h3>
    </>)
}

export default p1