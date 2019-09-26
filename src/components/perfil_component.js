import React, { useEffect, useState } from 'react'
import PerfilItem from './perfil_item'
import styled from 'styled-components'
import { getStories } from '../lib/storyblok'

const PerfilComponent = props => {
  const [stories, setStories] = useState(null)
  const [perfis, setPerfis] = useState(null)

  const getPerfilStories = async () => {
    try {
      const response = await getStories('draft', 'perfil')
      response && setStories(response.data.stories)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPerfilStories()
  }, [])

  useEffect(() => {
    if (stories) {
      console.log(stories)
      const filtered = stories.map(perfil => [
        {
          uuid: perfil.uuid,
          title: perfil.content.body[0].title,
          name: perfil.content.body[0].name,
          url: perfil.full_slug
        }
      ])
      setPerfis(filtered)
    }
  }, [stories])

  return (
    <TodoSection>
      <CenteredContent>
        {perfis && perfis.map(item => <PerfilItem key={item[0].uuid} item={item[0]} />)}
      </CenteredContent>
    </TodoSection>
  )
}
const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const TodoSection = styled.section``
export default PerfilComponent
