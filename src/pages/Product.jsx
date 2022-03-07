import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Fotter from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({
    flexDirection: 'column',
    padding: '20px 0px',
  })}
`
const ImgContainer = styled.div`
  flex: 1;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding: '0px 10px',
  })}
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height: '50vh',
  })}
`

const Title = styled.h1`
  font-weight: 200;
  margin: 0;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  ${mobile({
    width: ' 100%',
  })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  ${mobile({
    width: ' 100%',
  })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
`
const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: solid 1px teal;
`

const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  font-weight: 500;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png' />
        </ImgContainer>
        <InfoContainer>
          <Title>Rocket Vintage Chill</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos autem est ab eos expedita minus soluta
            totam blanditiis fuga mollitia neque architecto, saepe explicabo pariatur eveniet placeat rerum doloremque
            delectus?
          </Desc>
          <Price>$20</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>
              <FilterColor color='black'></FilterColor>
              <FilterColor color='gray'></FilterColor>
              <FilterColor color='lightgreen'></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Fotter />
    </Container>
  )
}

export default Product
