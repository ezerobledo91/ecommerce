import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { mobile } from '../responsive'

const Container = styled.div`
  height: '60px';
  ${mobile({
    height: '50px',
  })};
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: '10px 0px',
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: 'none',
  })}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({
    width: '50px',
  })}
`

const Center = styled.div`
  flex: 1;
`
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({
    fontSize: '24px',
  })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: 'center',
    flex:2,
  })}
`

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({
    fontSize: '12px',
    marginLeft: '10px',
  })}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ES</Language>
          <SearchContainer>
            <Input placeholder='Search'></Input>
            <Search style={{ color: 'gray', fontSize: 16 }}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ROMA.</Logo>
        </Center>
        <Right>
          <MenuItem>Registro</MenuItem>
          <MenuItem>Ingresar</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined></ShoppingCartOutlined>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
