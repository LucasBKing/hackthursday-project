import React, { useEffect, useState } from 'react'
import PerfilItem from './perfil_item'
import styled from 'styled-components'
import Spinner from './spinner'
import { getStories } from '../lib/storyblok'
import JsonViewer from './json-viewer'

const PerfilComponent = props => {
  const [stories, setStories] = useState(null)
  const [perfis, setPerfis] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

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
      const filtered = stories.map(perfil => [
        {
          uuid: perfil.uuid,
          title: perfil.content.body[0].title,
          name: perfil.content.body[0].name,
          url: perfil.full_slug
        }
      ])
      setPerfis(filtered)
      setIsLoading(false)
    }
  }, [stories])

  return (
    <section>
      <CenteredContent>
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            perfis &&
            perfis.map((item, index) => (
              <PerfilItem key={item[0].uuid} item={item[0]} odds={index % 2 === 0 ? 'primary' : 'secondary'} />
            ))
          )}
        </div>
        <RightSide>
          <JsonViewer content={stories} />
        </RightSide>
      </CenteredContent>
    </section>
  )
}
const RightSide = styled.div`
  margin-left: 2%;
  max-width: 48%;
`
const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`
export default PerfilComponent
