import { ChainId } from '@pancakeswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.TESTNET]: '0xda607957A9F632CeA26a5bDDEa8B735884654D69',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
