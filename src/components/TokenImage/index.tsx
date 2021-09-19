import React from 'react'
import {
  ImageProps,
  TokenImage as UIKitTokenImage,
  TokenPairImage as UIKitTokenPairImage,
  TokenPairImageProps as UIKitTokenPairImageProps,
} from '@pancakeswap/uikit'
import tokens from 'config/constants/tokens'
import { Token } from 'config/constants/types'
import { getAddress } from 'utils/addressHelpers'

interface TokenPairImageProps extends Omit<UIKitTokenPairImageProps, 'primarySrc' | 'secondarySrc'> {
  primaryToken: Token
  secondaryToken: Token
}

const getImageUrlFromToken = (token: Token) => {
  const isDev = window.location.hostname === "localhost" || window.location.hostname.includes('testnet')
  const address = getAddress(token.symbol === 'BNB' ? tokens.wbnb.address : token.address)
  if (isDev) {
    const fakeMainetAddress = ['0x08d1Ed0e3816183e703a492dDD28d68fcc13bb61', '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', '0x8443f091997f06a61670B735ED92734F5628692F']
    return `http://localhost:3000/images/tokens/${fakeMainetAddress[Math.floor(Math.random()*fakeMainetAddress.length)]}.svg`
  }
  return `/images/tokens/${address}.svg`
}

export const TokenPairImage: React.FC<TokenPairImageProps> = ({ primaryToken, secondaryToken, ...props }) => {
  return (
    <UIKitTokenPairImage
      primarySrc={getImageUrlFromToken(primaryToken)}
      secondarySrc={getImageUrlFromToken(secondaryToken)}
      {...props}
    />
  )
}

interface TokenImageProps extends ImageProps {
  token: Token
}

export const TokenImage: React.FC<TokenImageProps> = ({ token, ...props }) => {
  return <UIKitTokenImage src={getImageUrlFromToken(token)} {...props} />
}
