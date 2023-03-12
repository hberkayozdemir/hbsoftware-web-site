import styled from "styled-components";

const Section = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

const Container = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Text = styled.h1`
  color: black;
  font-size: 28px;
  font-weight: 700;
`;
const NetworkImage = styled.img`
  max-width: 10%;
`;
const NetworkImageInverted = styled.img`
  max-width: 10%;
  filter: invert(100%);
`;

const Logo = styled.img`
  max-width: 100px;
`;
const Coorparates = () => {
  return (
    <Section>
      <Container>
        <NetworkImage
          src="https://smallsoftware.com/wp-content/uploads/2023/03/cropped-smallsoftware_logo_400x50.png"
          alt="Network Image "
        />
        <NetworkImage
          src="https://oxos.com/wp-content/uploads/2021/10/logo-1.svg"
          alt="Network Image "
        />
        <NetworkImageInverted
          src="https://fahasoftware.com/assets/img/fahaSLogo.png"
          alt="Network Image "
        />
        <NetworkImage
          src=" https://www.alpaguyazilim.com/assets/img/uclu-logo-renkli2.png"
          alt="Network Image "
        />
        <NetworkImage
          src="https://duckduckgo.com/i/66c9cb06.png"
          alt="Network Image "
        />
        <NetworkImage
          src="data:image/png;base64,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"
          alt="Network Image "
        />
      </Container>
    </Section>
  );
};

export default Coorparates;
