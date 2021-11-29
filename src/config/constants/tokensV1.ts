import {ChainId, Token} from '@defifarms/sdk'
import {serializeToken} from 'state/user/hooks/helpers'
import {SerializedToken} from './types'

const {MAINNET, TESTNET} = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  cake: new Token(
    MAINNET,
    '0x08d1Ed0e3816183e703a492dDD28d68fcc13bb61',
    18,
    'DEFIY',
    'DefiFarms Non-Fungible Yearn',
    'https://www.binance.com/',
  ),
  defiy: new Token(
    MAINNET,
    '0x08d1Ed0e3816183e703a492dDD28d68fcc13bb61',
    18,
    'DEFIY',
    'DefiFarms Non-Fungible Yearn',
    'https://www.binance.com/',
  ),
  busd: new Token(MAINNET, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD'),
  wbnb: new Token(MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
}

export const testnetTokens = {
  cake: new Token(
    TESTNET,
    '0x5017AE3D04e29B67b33CF96a86980717A773a783',
    18,
    'DEFIY',
    'DefiFarms Non-Fungible Yearn',
    'https://www.binance.com/',
  ),
  defiy: new Token(
    TESTNET,
    '0x5017AE3D04e29B67b33CF96a86980717A773a783',
    18,
    'DEFIY',
    'DefiFarms Non-Fungible Yearn',
    'https://www.binance.com/',
  ),
  busd: new Token(TESTNET, '0x99976b5d5fd5d83aa6089598dec7fd5336cc310f', 18, 'BUSD', 'Binance USD'),
  wbnb: new Token(TESTNET, '0xbb5cc00198193e62bb1c02b2bbea4d542229cd8e', 18, 'WBNB', 'Wrapped BNB'),
}

const tokensV1 = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return {...accum, [key]: testnetTokens[key] || mainnetTokens[key]}
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokensV1()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return {...accum, [key]: serializeToken(unserializedTokens[key])}
  }, {})

  return serializedTokens
}

export default tokensV1()
