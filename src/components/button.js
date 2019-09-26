import React from 'react'
import styled from 'styled-components'

const Button = props => {
  const { content, style, size, url } = props

  const handleLink = () => {
    window.location.href = `?path=${url}`
  }

  switch (style) {
    case 'primary':
      return (
        <Primary onClick={() => handleLink()} size={size}>
          {content}
        </Primary>
      )
    case 'secondary':
      return (
        <Secondary onClick={() => handleLink()} size={size}>
          {content}
        </Secondary>
      )
    default:
      return <DefaultButton onClick={() => handleLink()}>{content}</DefaultButton>
  }
}

const DefaultButton = styled.button`
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px 0px #8888;
  }
  border: none;
  border-radius: 5px;
`
const Primary = styled(DefaultButton)`
  &:hover {
    background-color: #545da666;
  }
  background-color: #545da6;
  color: #f6f6f9;
  ${({ size }) =>
    size === 'small' ? 'width: 154px; height: 44px;' : size === 'large' ? 'width: 214px; height: 54px;' : ''};
`
const Secondary = styled(DefaultButton)`
  background-color: #ffcc4d;
  &:hover {
    background-color: #ffcc4d66;
  }
  ${({ size }) =>
    size === 'small' ? 'width: 154px; height: 44px;' : size === 'large' ? 'width: 214px; height: 54px;' : ''};
`

export default Button
