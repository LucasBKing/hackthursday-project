import React from 'react'
import styled from 'styled-components'

const Header = props => {
  const {
    blok: { title, logo }
  } = props
  return (
    <>
      <LogoSection>
        {logo && (
          <a href='/editor/?path=hackthursday'>
            <CustomImage src={`https:${logo}`} />
          </a>
        )}
      </LogoSection>
      <HedaerSection>
        <CenteredContent>
          <h1>{title}</h1>
        </CenteredContent>
      </HedaerSection>
    </>
  )
}

const LogoSection = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
`
const CustomImage = styled.img`
  width: 180px;
  height: 45px;
`
const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const HedaerSection = styled.section`
  height: 30vh;
  padding-top: 200px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export default Header
