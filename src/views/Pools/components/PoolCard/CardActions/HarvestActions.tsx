import React, { useEffect } from 'react'
import { Button, Flex, Heading, Skeleton, Text, useModal } from '@defifarms/uikit'
import BigNumber from 'bignumber.js'
import { Token } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { formatNumber, getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import getTimePeriods from 'utils/getTimePeriods'
import useCountDownTimer from 'hooks/useCountDownTimer'
import Balance from 'components/Balance'
import CollectModal from '../Modals/CollectModal'

interface HarvestActionsProps {
  earnings: BigNumber
  earningToken: Token
  sousId: number
  userData: any
  earningTokenPrice: number
  isBnbPool: boolean
  isLoading?: boolean
}

const HarvestActions: React.FC<HarvestActionsProps> = ({
  earnings,
  earningToken,
  sousId,
  userData,
  isBnbPool,
  earningTokenPrice,
  isLoading = false,
}) => {
  const { t } = useTranslation()
  const earningTokenBalance = getBalanceNumber(earnings, earningToken.decimals)
  const formattedBalance = formatNumber(earningTokenBalance, 3, 3)

  const earningTokenDollarBalance = getBalanceNumber(earnings.multipliedBy(earningTokenPrice), earningToken.decimals)

  const fullBalance = getFullDisplayBalance(earnings, earningToken.decimals)
  const hasEarnings = earnings.toNumber() > 0
  const isCompoundPool = sousId === 0
  // const [timeHarvestRemaining, setTimeHarvestRemaining, isFinish] = useCountDownTimer()

  // useEffect(() => {
  //   setTimeHarvestRemaining(Math.max(farmsPoolWithBalance.nextHarvestTime - new Date().getTime(), 0))
  // }, [farmsPoolWithBalance.nextHarvestTime, setTimeHarvestRemaining])

  const [onPresentCollect] = useModal(
    <CollectModal
      formattedBalance={formattedBalance}
      fullBalance={fullBalance}
      earningToken={earningToken}
      earningsDollarValue={earningTokenDollarBalance}
      sousId={sousId}
      isBnbPool={isBnbPool}
      isCompoundPool={isCompoundPool}
    />,
  )

  const isHarvest = userData?.harvest
  let isDisable = false
  if (hasEarnings && isHarvest) {
    isDisable = true
  }

  const getTimeRemainingText = (time) => {
    const { hours, minutes, seconds } = getTimePeriods(time / 1000)
    if (time <= 0) {
      return ''
    }
    return t(' %hour%h : %minute%m : %second%s', {
      hour: hours,
      minute: minutes,
      second: Math.round(seconds),
    })
  }

  return (
    <Flex justifyContent="space-between" alignItems="center" mb="16px">
      <Flex flexDirection="column">
        {isLoading ? (
          <Skeleton width="80px" height="48px" />
        ) : (
          <>
            {hasEarnings ? (
              <>
                <Balance bold fontSize="20px" decimals={5} value={earningTokenBalance} />
                {earningTokenPrice > 0 && (
                  <Balance
                    display="inline"
                    fontSize="12px"
                    color="textSubtle"
                    decimals={2}
                    prefix="~"
                    value={earningTokenDollarBalance}
                    unit=" USD"
                  />
                )}
              </>
            ) : (
              <>
                <Heading color="textDisabled">0</Heading>
                <Text fontSize="12px" color="textDisabled">
                  0 USD
                </Text>
              </>
            )}
          </>
        )}
      </Flex>
      <Button disabled={!isDisable} onClick={onPresentCollect}>
        {isCompoundPool ? t('Collect') : t('Harvest')}
      </Button>
      {/* <Text>{getTimeRemainingText(timeHarvestRemaining)}</Text> */}
    </Flex>
  )
}

export default HarvestActions
