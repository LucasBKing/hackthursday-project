import React from 'react'
import styled from 'styled-components'

const Header = props => {
  const {
    blok: { title }
  } = props
  return (
    <HedaerSection>
      <CenteredContent>
        <h1>{title}</h1>
      </CenteredContent>
    </HedaerSection>
  )
}
const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const HedaerSection = styled.section`
  height: 20vh;
  padding-top: 250px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Header
