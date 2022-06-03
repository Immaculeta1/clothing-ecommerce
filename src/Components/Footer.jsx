import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"


const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;

`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 65%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.</Desc>
            <SocialContainer>
                 <SocialIcon color="3B5999">
                    <Facebook/>   
                </SocialIcon>
                 <SocialIcon color="E4405F">
                    <Instagram/>   
                </SocialIcon>
                 <SocialIcon color="55ACEE">
                    <Twitter/>   
                </SocialIcon>
                 <SocialIcon color="E60023">
                    <Pinterest/>   
                </SocialIcon>
            </SocialContainer>
        </Left>
       
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Orde Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path Lagos, Nigeria 98336
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}} /> +234 803 333 3333
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> contact@lama.dev
            </ContactItem>
            <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yLtiQpAHo8udlaerxF075vaLEWsiQp2HpQ&usqp=CAU" />
        </Right>
    </Container>
  );
};

export default Footer;