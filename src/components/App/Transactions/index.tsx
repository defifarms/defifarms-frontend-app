import React from 'react'
import { Button, HistoryIcon, useModal } from '@defifarms/uikit'
import TransactionsModal from './TransactionsModal'

const Transactions = () => {
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)
  return (
    <>
      <Button variant="text" p={0} onClick={onPresentTransactionsModal} ml="16px">
        <HistoryIcon color="white" width="24px" />
      </Button>
    </>
  )
}

export default Transactions
