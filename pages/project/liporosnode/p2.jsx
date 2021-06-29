import Head from 'next/head'
import Link from 'next/link'

import styles from 'styles/pages.module.css'

const p2 = () => {
    return(<>
        <Head>
          <title>P1 - Outline &amp; Sodering | Lipo ROS Node | Projects | AlienHerald</title>
          <meta name="description" content="Part 2 of a 3 part tutorial for creating a multi-cell lipo battery monitor that publishes its values as a ROS node. Part 2 takes the voltages output from the soldered board and outlines how to read the values using Arduino and publish them to the serial output of the microcontroller board." />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <Link href='/project/liporosnode' passHref>
            <h2>Lipo Battery Monitor ROS Node</h2>
        </Link>
        <h3>Part 2 - Arduino microcontroller code</h3>
    </>)
}

export default p2