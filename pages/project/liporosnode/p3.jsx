import Head from 'next/head'
import Link from 'next/link'

import styles from 'styles/pages.module.css'

const p3 = () => {
    return(<>
        <meta name="description" content="Part 3 of a 3 part tutorial for creating a multi-cell lipo battery monitor that publishes its values as a ROS node. The final part of a 3 part series. This section outlines how to connect the programmed microcontroller to the ROS host single-board computer and the code necessary to publish the values from the lipo battery monitor as a ROS node." />

        <Link href='/project/liporosnode' passHref>
            <h2>Lipo Battery Monitor ROS Node</h2>
        </Link>
        <h3>Part 3 - Coding the ROS node</h3>
    </>)
}

export default p3