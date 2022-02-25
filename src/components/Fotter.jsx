import { EmailOutlined, Facebook, Instagram, MapOutlined, PhoneOutlined, YouTube } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
`
const Left = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`
const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
`
const Description = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`
const SocialIcon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transition: 0.5s;

  &&:hover {
    transform: scale(1.2);
    background-color: #e9f5f5;
  }
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const ContactItem = styled.div`
  display: flex;
  align-items: center;
`

const PaymentImg = styled.img`
  width: 250px;
`

const Fotter = () => {
  return (
    <Container>
      <Left>
        <Logo>ROMA.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, maiores facere reprehenderit fuga magnam
          sequi porro voluptatem velit quo provident
        </Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Acount</ListItem>
          <ListItem>Order Traking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapOutlined style={{marginRight:'10px'}} /> False Adress 123, Springfield EEUU
        </ContactItem>
        <ContactItem>
          <PhoneOutlined style={{marginRight:'10px'}}/> +54-321-2233453
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{marginRight:'10px'}}/> contact@romastore.buy
        </ContactItem>
        <PaymentImg src='https://support.vyprvpn.com/hc/article_attachments/360084396232/bm2021_accepted_payments_cards.PNG' />
      </Right>
    </Container>
  )
}

export default Fotter
