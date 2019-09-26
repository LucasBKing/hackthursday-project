import React from 'react'
import ReactJson from 'react-json-view'

const JsonViewer = props => {
  const { content } = props
  return <ReactJson src={content} theme='monokai' />
}

export default JsonViewer
