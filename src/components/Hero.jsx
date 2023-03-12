import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Stage,
} from "@react-three/drei";
import Atoms from "./Atoms";
import SunnyPark from "./Earth";

const Section = styled.div`
  height: 90vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  font-weight: 600;
  color: #ccf382;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const ButtonText = styled.h4`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const Desc = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: white;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #ccf382;
  color: white;
  font-weight: 500;
  width: 250px;
  padding: 25px;
  border: none;
  border-radius: 90px;

  cursor: pointer;
`;

const Right = styled.div`
  flex: 2;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  background-color: gray;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Divider></Divider>
      <Container>
        <Left>
          <Title>We build business applications.</Title>

          <Desc>
            We provide our clients with expert guidance and build software vital
            to their organizations.
          </Desc>
          {/* <Button>
            <ButtonText>Learn More</ButtonText>
          </Button> */}
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                enableRotate={false}
              />
              <ambientLight></ambientLight>
              <Stage
                shadows="accumulative"
                environment="apartment"
                intensity={0.2}
              >
                <Atoms></Atoms>
              </Stage>
            </Suspense>
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
