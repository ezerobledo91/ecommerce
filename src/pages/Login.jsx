import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background: white;
`

const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-bottom: 10px;
  background: teal;
  color: white;
  cursor: pointer;
`

const Link = styled.a`
  margin: 5px 0px;
  color: black;
  font-size: 12px;
  text-decoration: underline;
  width: 100%;
  &:hover {
    color: teal;
  }
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Button>Login</Button>
          <Link href='#'>Do not remember the password?</Link>
          <Link href='#'>Create a New Account </Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
