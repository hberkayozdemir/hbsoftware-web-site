import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 60vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  background-color: white;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Spacer = styled.div`
  height: 5vh;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px black;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #ccf382;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Titles = styled.h2`
  flex-direction: column;
  display: flex;
  flex: 0.2;
  justify-content: center;
  font-size: 32px;
  font-weight: 500;
  color: #1737d0;
`;
const WorkingTypes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const News = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        {" "}
        <Left>
          <Spacer></Spacer>
          <Titles>
            Our clients benefit from a peerless capacity to de-risk complex
            software projects.
          </Titles>{" "}
          <WorkingTypes>
            {work === "Web Design" ? (
              <WebDesign />
            ) : work === "Development" ? (
              <Development />
            ) : (
              <ProductDesign />
            )}
          </WorkingTypes>
        </Left>
        <Right>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Right>
      </Container>
    </Section>
  );
};

export default News;
