import BigNumber from 'bignumber.js'
import {DEFAULT_TOKEN_DECIMAL} from 'config'

export const stakeFarm = async (masterChefContract, pid, amount) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()

  const tx = await masterChefContract.deposit(pid, value, '0x8BdA8e79dF8a3755a3D48fAadee35AEDe156Bf87')
  const receipt = await tx.wait()
  return receipt.status
}

export const unstakeFarm = async (masterChefContract, pid, amount) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()

  const tx = await masterChefContract.withdraw(pid, value)
  const receipt = await tx.wait()
  return receipt.status
}

export const harvestFarm = async (masterChefContract, pid) => {
  const tx = await masterChefContract.deposit(pid, '0', '0x8BdA8e79dF8a3755a3D48fAadee35AEDe156Bf87')
  const receipt = await tx.wait()
  return receipt.status
}
