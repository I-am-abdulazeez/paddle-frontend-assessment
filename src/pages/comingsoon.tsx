import { Box, Center, Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import landingImage from "/src/images/landing.svg";

const ComingSoon: React.FC = () => {
  return (
    <Box
      bgImage={`url(${landingImage})`}
      bgPosition={"center"}
      bgSize="cover"
      p={3}
      height={{ sm: "142vh", md: "140vh" }}
    >
      <Navbar />
      <Container maxWidth={"container.lg"}>
        <MainPage />
      </Container>
      <Footer />
    </Box>
  );
};

export default ComingSoon;
