import axios from 'axios'

const url = 'https://api.storyblok.com/v1/cdn'

const api = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' }
})

export const getStories = (version, slug) =>
  api.get(`/stories?version=${version}&token=rrKBX52qQx8IgtJ4J4uQcwtt&starts_with=${slug}/`)
