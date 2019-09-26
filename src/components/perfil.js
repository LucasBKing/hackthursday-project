import React from 'react'
import Button from './button'
import styled from 'styled-components'

const Perfil = props => {
  const {
    blok: { title, title_width, name, description, avatar, timestamp, skills, color, button_home }
  } = props

  const buttonHome = {
    content: button_home[0].content,
    size: button_home[0].size,
    style: button_home[0].style,
    link: button_home[0].link.cached_url
  }
  return (
    <CenteredDiv>
      <Button content={buttonHome.content} style={buttonHome.style} size={buttonHome.size} url={buttonHome.link} />
      <PerfilBox>
        <Header color={color}>
          <h2>Perfil: </h2>
          {title && <h2>{title}</h2>}
        </Header>

        <CharHeader>
          {avatar && <Avatar src={`https:${avatar}`} />}

          {name && <Name customWidth={title_width || '250'}>{name}</Name>}
        </CharHeader>
        <hr />
        <ContentBox>
          {description && <Desc>{description}</Desc>}
          {skills && (
            <SkillsBox>
              <SkillsTitle>Skills:</SkillsTitle>
              <span>{skills}</span>
            </SkillsBox>
          )}
        </ContentBox>
        <hr />
        {timestamp && <Created>Created at: {timestamp}</Created>}
      </PerfilBox>
    </CenteredDiv>
  )
}

const CenteredDiv = styled.section`
  height: 100vh;
  display: flex;
  padding-top: 10%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`
const PerfilBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
  h2 {
    font-size: 3.5rem;
    font-weight: bold;
    color: ${({ color }) => color};
  }
`
const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 50%;
`
const SkillsTitle = styled.span``
const Created = styled.span``
const SkillsBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`
const Desc = styled.p`
  max-width: 70%;
  margin-right: 5%;
`
const Name = styled.h2`
  max-width: ${({ customWidth }) => `${customWidth}px`};
`
const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`
const CharHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export default Perfil
