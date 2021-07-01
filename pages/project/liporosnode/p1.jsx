import Head from 'next/head'
import Link from 'next/link'

import ImageSingle from 'components/elements/posts/ImageSingle'
import List from 'components/elements/posts/List'
import TextBlock from 'components/elements/posts/TextBlock'
import Title from 'components/elements/posts/Title'

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
        <Title title='Big Bold Title' />
        <TextBlock text='lorem ipsum dolor sit amet esse des' />
        <ImageSingle imageUrl='/logo.svg' caption='this is a sample image' />
        <List title='Simple list goes here' items={['item1', 'item2', 'item3', 'item4']} ordered={false} />
    </>)
}

export default p1