import Image from 'next/image'

import styles from 'styles/elements.module.css'

const ImageSingle = ({imageUrl, caption}) => {
  return(<>
    <div>
      <Image src={imageUrl} alt={caption} width='128' height='128' />
      <p>{caption}</p>
    </div>
  </>)
}

export default ImageSingle