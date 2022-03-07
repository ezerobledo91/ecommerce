import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: white;
  background-color: teal;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  padding: 0px 10px;
`

const Announcement = () => {
  return (
    <Container>Announcement Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, rerum?</Container>
  )
}

export default Announcement
