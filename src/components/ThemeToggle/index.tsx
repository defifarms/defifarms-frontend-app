import React from 'react'
import Switch from 'react-switch'
import { Text, DarkIcon, LightIcon, useMatchBreakpoints } from '@pancakeswap/uikit'

interface ThemeToggleType {
  handleChange?: () => void
  checked?: boolean
}

const ThemeToggle = ({ handleChange, checked }: ThemeToggleType) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      // handleDiameter={30} 
      offColor="#707685"
      onColor="#181f2d"
      offHandleColor="#657EEC"
      onHandleColor="#FFB230"
      height={30}
      width={isMobile ? 60 : 122}
      borderRadius={32}
      activeBoxShadow="0px 0px 1px 2px #fffc35"
      uncheckedIcon={
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            paddingRight: 9,
            justifyContent: 'flex-end'
          }}
        >
          {!isMobile && <Text fontSize="14px" color="#fff">
            Darkmode
          </Text>}
        </span>
      }
      checkedIcon={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            fontSize: 14,
            color: 'orange',
            paddingLeft: 9,
          }}
        >
          {!isMobile && <Text fontSize="14px" color="#fff">
            Lightmode
          </Text>}
        </div>
      }
      uncheckedHandleIcon={<LightIcon />}
      checkedHandleIcon={<DarkIcon />}
      className="react-switch"
      id="small-radius-switch"
    />
  )
}

export default ThemeToggle
