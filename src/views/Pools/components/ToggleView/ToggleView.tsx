import React from 'react'
import styled from 'styled-components'
import {CardViewIcon, IconButton, ListViewIcon} from '@pancakeswap/uikit'

export enum ViewMode {
  'TABLE' = 'TABLE',
  'CARD' = 'CARD',
}
interface ToggleViewProps {
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

const Container = styled.div`
  margin-right: 0px;
  margin-left: -8px;

  ${({theme}) => theme.mediaQueries.sm} {
    margin-left: 0;
    margin-right: 16px;
  }
`
const WrapIcon = styled.div`
  display: inline-block;
  background-color: #6e2de5;
  margin: 4px;
  border-radius: 1px;
  & > button {
    width: 28px;
    height: 27px;
  }
`

const ToggleView: React.FunctionComponent<ToggleViewProps> = ({viewMode, onToggle}) => {
  const handleToggle = (mode: ViewMode) => {
    if (viewMode !== mode) {
      onToggle(mode)
    }
  }

  return (
    <Container>
      <WrapIcon>
        <IconButton variant="text" scale="sm" id="clickPoolCardView" onClick={() => handleToggle(ViewMode.CARD)}>
          <CardViewIcon color={viewMode === ViewMode.CARD ? 'primary' : 'textDisabled'} />
        </IconButton>
      </WrapIcon>
      <WrapIcon>
        <IconButton variant="text" scale="sm" id="clickPoolTableView" onClick={() => handleToggle(ViewMode.TABLE)}>
          <ListViewIcon color={viewMode === ViewMode.TABLE ? 'primary' : 'textDisabled'} />
        </IconButton>
      </WrapIcon>
    </Container>
  )
}

export default ToggleView
