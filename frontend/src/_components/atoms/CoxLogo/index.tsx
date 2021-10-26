import { CSSProperties } from '@material-ui/styles'
import React from 'react'

type ImageProps = {
  imageSrc: string
  alt: string
  styles: CSSProperties | undefined
}

const ImageComponent: React.FC<ImageProps> = ({ imageSrc, alt, styles }) => {
  return <img data-testid="image" src={imageSrc} alt={alt} style={styles} />
}

export default ImageComponent
