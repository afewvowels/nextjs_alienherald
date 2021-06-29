import Head from 'next/head'
import Link from 'next/link'

import styles from 'styles/pages.module.css'

const Index = () => {
    return(<>
        <Head>
            <title>P1 - Outline &amp; Sodering | Lipo ROS Node | Projects | AlienHerald</title>
            <meta name="description" content="Landing page for 3 part tutorial on creating a multi-cell lipo battery monitor that publishes its values as a ROS node." />
            <link rel="icon" href="/logo.svg" />
        </Head>

        <Link href='/project' passHref>
          <h1>Projects</h1>
        </Link>
        <h2>Lipo Battery Monitor ROS Node</h2>
        <ul>
            <li><Link href='/project/liporosnode/p1' passHref>Part 1 - Sodering the connections</Link></li>
            <li><Link href='/project/liporosnode/p2' passHref>Part 2 - Arduino microcontroller code</Link></li>
            <li><Link href='/project/liporosnode/p3' passHref>Part 3 - Coding the ROS node</Link></li>
        </ul>
    </>)
}

export default Index