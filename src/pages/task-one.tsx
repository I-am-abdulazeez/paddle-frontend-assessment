import { Box, Container } from "@chakra-ui/react";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import landingImage from "/src/images/landing.svg";

const TaskOne: React.FC = () => {
  return (
    <Box
      bgImage={`url(${landingImage})`}
      bgPosition={"center"}
      bgSize="cover"
      p={3}
      height={"140vh"}
    >
      <Navbar />
      <Container maxWidth={"container.lg"}>
        <MainPage />
      </Container>
    </Box>
  );
};

export default TaskOne;
