import React from 'react'
import {
  ImageProps,
  TokenImage as UIKitTokenImage,
  TokenPairImage as UIKitTokenPairImage,
  TokenPairImageProps as UIKitTokenPairImageProps,
} from '@pancakeswap/uikit'
import tokens, {WBNB} from 'config/constants/tokens'
import {Token} from '@defifarms/sdk'
import {getAddress} from 'utils/addressHelpers'

interface TokenPairImageProps extends Omit<UIKitTokenPairImageProps, 'primarySrc' | 'secondarySrc'> {
  primaryToken: Token
  secondaryToken: Token
}

const getImageUrlFromToken = (token: Token) => {
  const address = token.symbol === 'BNB' || token.symbol === 'wBNB' ? tokens.bnb.address : token.address
  return `/images/tokens/${address}.svg`
}

export const TokenPairImage: React.FC<TokenPairImageProps> = ({primaryToken, secondaryToken, ...props}) => {
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

export const TokenImage: React.FC<TokenImageProps> = ({token, ...props}) => {
  return <UIKitTokenImage src={getImageUrlFromToken(token)} {...props} />
}
