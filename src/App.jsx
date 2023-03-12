import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import News from "./components/News";
import Coorparates from "./components/Coorparates";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-color: #1737d0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Coorparates></Coorparates>
      <Who /> <News></News>
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
