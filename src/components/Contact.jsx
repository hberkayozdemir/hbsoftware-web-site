import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Earth from "./Earth";
import Atoms from "./Atoms";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #ccf382;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 90px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_id", "template_id", ref.current, "public_key")
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <Stage
                preset={"portrait"}
                shadows="accumulative"
                environment="night"
                intensity={0.3}
              >
                <Earth />
              </Stage>
              <OrbitControls
                enablePan={true}
                enableDamping={false}
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={4}
              />
            </Suspense>
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
