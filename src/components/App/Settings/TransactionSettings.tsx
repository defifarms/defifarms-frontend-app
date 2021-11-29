import {Button, Flex, Grid, Input, Text} from '@pancakeswap/uikit'
import {useTranslation} from 'contexts/Localization'
import React, {useState} from 'react'
import styled from 'styled-components'
import {AutoColumn} from '../../Layout/Column'
import {RowBetween, RowFixed} from '../../Layout/Row'
import QuestionHelper from '../../QuestionHelper'

enum SlippageError {
  InvalidInput = 'InvalidInput',
  RiskyLow = 'RiskyLow',
  RiskyHigh = 'RiskyHigh',
}

enum DeadlineError {
  InvalidInput = 'InvalidInput',
}

const ButtonStyled = styled(Button)`
  border: 0.887863px solid #ac8aea;
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  border-radius: 14.2058px;
`
const InputStyled = styled(Input)`
  border: 0.887863px solid #ac8aea;
  border-radius: 14.2058px;
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`

export interface SlippageTabsProps {
  rawSlippage: number
  setRawSlippage: (rawSlippage: number) => void
  deadline: number
  setDeadline: (deadline: number) => void
}

export default function SlippageTabs({rawSlippage, setRawSlippage, deadline, setDeadline}: SlippageTabsProps) {
  const [slippageInput, setSlippageInput] = useState('')
  const [deadlineInput, setDeadlineInput] = useState('')

  const {t} = useTranslation()

  const slippageInputIsValid =
    slippageInput === '' || (rawSlippage / 100).toFixed(2) === Number.parseFloat(slippageInput).toFixed(2)
  const deadlineInputIsValid = deadlineInput === '' || (deadline / 60).toString() === deadlineInput

  let slippageError: SlippageError | undefined
  if (slippageInput !== '' && !slippageInputIsValid) {
    slippageError = SlippageError.InvalidInput
  } else if (slippageInputIsValid && rawSlippage < 50) {
    slippageError = SlippageError.RiskyLow
  } else if (slippageInputIsValid && rawSlippage > 500) {
    slippageError = SlippageError.RiskyHigh
  } else {
    slippageError = undefined
  }

  let deadlineError: DeadlineError | undefined
  if (deadlineInput !== '' && !deadlineInputIsValid) {
    deadlineError = DeadlineError.InvalidInput
  } else {
    deadlineError = undefined
  }

  function parseCustomSlippage(value: string) {
    setSlippageInput(value)

    try {
      const valueAsIntFromRoundedFloat = Number.parseInt((Number.parseFloat(value) * 100).toString())
      if (!Number.isNaN(valueAsIntFromRoundedFloat) && valueAsIntFromRoundedFloat < 5000) {
        setRawSlippage(valueAsIntFromRoundedFloat)
      }
    } catch (error) {
      console.error(error)
    }
  }

  function parseCustomDeadline(value: string) {
    setDeadlineInput(value)

    try {
      const valueAsInt: number = Number.parseInt(value) * 60
      if (!Number.isNaN(valueAsInt) && valueAsInt > 0) {
        setDeadline(valueAsInt)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AutoColumn gap="md">
      <AutoColumn gap="sm">
        <RowFixed>
          <Text fontSize="14px">{t('Slippage Tolerance')}</Text>
          <QuestionHelper
            text={t('Your transaction will revert if the price changes unfavorably by more than this percentage.')}
            ml="4px"
          />
        </RowFixed>
        <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
          <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="8px" mb={['8px', '8px', 0]} mr={[0, 0, '8px']}>
            <ButtonStyled
              onClick={() => {
                setSlippageInput('')
                setRawSlippage(10)
              }}
              variant={rawSlippage === 10 ? 'four' : 'tertiary'}
            >
              0.1%
            </ButtonStyled>
            <ButtonStyled
              onClick={() => {
                setSlippageInput('')
                setRawSlippage(50)
              }}
              variant={rawSlippage === 50 ? 'four' : 'tertiary'}
            >
              0.5%
            </ButtonStyled>
            <ButtonStyled
              onClick={() => {
                setSlippageInput('')
                setRawSlippage(100)
              }}
              variant={rawSlippage === 100 ? 'four' : 'tertiary'}
            >
              1%
            </ButtonStyled>
          </Grid>
          <RowBetween>
            <InputStyled
              scale="lg"
              placeholder={(rawSlippage / 100).toFixed(2)}
              value={slippageInput}
              onBlur={() => {
                parseCustomSlippage((rawSlippage / 100).toFixed(2))
              }}
              onChange={(e) => parseCustomSlippage(e.target.value)}
              isWarning={!slippageInputIsValid}
              isSuccess={![10, 50, 100].includes(rawSlippage)}
            />
            <Text color="white" bold ml="8px">
              %
            </Text>
          </RowBetween>
        </Flex>
        {!!slippageError && (
          <RowBetween
            style={{
              fontSize: '14px',
              paddingTop: '7px',
              color: slippageError === SlippageError.InvalidInput ? 'red' : '#00FFFF',
            }}
          >
            {slippageError === SlippageError.InvalidInput
              ? t('Enter a valid slippage percentage')
              : slippageError === SlippageError.RiskyLow
              ? t('Your transaction may fail')
              : t('Your transaction may be frontrun')}
          </RowBetween>
        )}
      </AutoColumn>

      <AutoColumn gap="sm">
        <RowFixed>
          <Text fontSize="14px">{t('Transaction deadline')}</Text>
          <QuestionHelper text={t('Your transaction will revert if it is pending for more than this long.')} ml="4px" />
        </RowFixed>
        <RowFixed>
          <InputStyled
            color={deadlineError ? 'red' : undefined}
            onBlur={() => {
              parseCustomDeadline((deadline / 60).toString())
            }}
            placeholder={(deadline / 60).toString()}
            value={deadlineInput}
            onChange={(e) => parseCustomDeadline(e.target.value)}
            style={{height: 56}}
          />
          <Text pl="8px" fontSize="14px">
            {t('minutes')}
          </Text>
        </RowFixed>
      </AutoColumn>
    </AutoColumn>
  )
}
