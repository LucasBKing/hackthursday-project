import React from 'react'
import Button from './button'
import styled from 'styled-components'

const PerfilItem = props => {
  const {
    item: { title, name, url }
  } = props
  const customButton = {
    content: 'Link perfil',
    style: 'primary',
    size: 'small',
    link: url
  }
  return (
    <TodoBox>
      <div>
        <h4>{title}</h4>
        <span>{name}</span>
      </div>
      <Button
        content={customButton.content}
        style={customButton.style}
        size={customButton.size}
        url={customButton.link}
      />
    </TodoBox>
  )
}
const TodoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 70px;
  min-width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 5px;
`
export default PerfilItem
