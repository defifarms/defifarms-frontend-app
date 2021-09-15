import React from 'react'
import Switch from 'react-switch'
import { Text, DarkIcon, LightIcon } from '@pancakeswap/uikit'

interface ThemeToggleType {
  handleChange?: () => void
  checked?: boolean
}
const ThemeToggle = ({ handleChange, checked }: ThemeToggleType) => {
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      handleDiameter={31}
      offColor="#707685"
      onColor="#181f2d"
      offHandleColor="#657EEC"
      onHandleColor="#FFB230"
      height={32}
      width={122}
      borderRadius={32}
      activeBoxShadow="0px 0px 1px 2px #fffc35"
      uncheckedIcon={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'end',
            paddingRight: 9,
          }}
        >
          <Text fontSize="14px" color="#fff">
            Darkmode
          </Text>
        </div>
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
          <Text fontSize="14px" color="#fff">
            Lightmode
          </Text>
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
