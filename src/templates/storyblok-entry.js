import React, { useState, useEffect } from 'react'

import Components from '../components/components'

const StoryblokEntry = ({ pageContext }) => {
  const [story, setStory] = useState({ content: {} })

  useEffect(() => {
    if (story.uuid === pageContext.story.uuid) {
      return
    }

    setStory({
      ...story,
      content: JSON.parse(pageContext.story.content)
    })
  }, [story, pageContext.story])

  return (
    <div>
      {React.createElement(Components(story.content.component), { key: story.content._uid, blok: story.content })}
    </div>
  )
}

export default StoryblokEntry
