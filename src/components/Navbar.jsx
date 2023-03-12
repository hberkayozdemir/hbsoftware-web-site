import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 60px;
  list-style: none;
  justify-content: end;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const HeroText = styled.h2`
  font-size: 60px;
  color: #ccf382;
  font-weight: 600;
  cursor: pointer;
`;

const Button = styled.button`
  width: 150px;
  padding: 20px;
  background-color: #06eb4c;
  color: black;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;
const ButtonText = styled.h4`
  font-weight: 600;
  color: black;
  font-size: large;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        {" "}
        <HeroText>HBO</HeroText>
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>{" "}
          <Button>
            <ButtonText>Contact Us</ButtonText>
          </Button>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
