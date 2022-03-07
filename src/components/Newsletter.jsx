import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`

const Description = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({
    textAlign:'center'
  })}
`

const InputContainer = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  background-color: white;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({
  width: '80%'
  })}
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
  color: #ffffff;
  background-color: teal;
  padding: 5px;
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  flex: 1;
  cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Lorem ipsum, dolor sit amet consectetur adipisicing.</Description>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
