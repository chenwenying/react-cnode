import React from 'react'
import axios from 'axios'

/* eslint-disable */
const TestApi = () => {

  const getTopics = () => {
    axios.get('/api/topics')
      .then(resp => {
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
  }

  const login = () => {
    axios.post('/api/user/login', {
      accessToken: 'f6304e67-3cac-4b4a-8a9e-e70aba8607bd'
    }).then(resp => {
      console.log(resp)
    }).catch(err => {
      console.log(err)
    })
  }

  const markAll = () => {
    axios.post('/api/message/mark_all?needAccessToken=true')
      .then(resp => {
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <button onClick={getTopics}>topics</button>
      <button onClick={login}>login</button>
      <button onClick={markAll}>markAll</button>
    </div>
  )
}

export default TestApi
/* eslint-enable */
