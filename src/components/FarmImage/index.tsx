import React from 'react'
import { Image } from '@pancakeswap/uikit'

interface FarmImageProps {
  src: string
}

export const FarmImage: React.FC<FarmImageProps> = ({ src, ...props }) => {
  return <Image src={src} width={80} height={80} {...props} />
}
