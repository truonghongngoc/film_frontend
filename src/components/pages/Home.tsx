import { Box } from "@chakra-ui/react";
import Slide from "../elements/Slide";
import Card from "../elements/Card";
import { Header } from "../modules/Header";
import { Layout } from "../modules/Layout";
import { ListFilm } from "../modules/ListFilm";

export const Home = () => {
  return (
    <Layout>
      <Header></Header>
      <Box as={"main"} gridArea={"main"}>
        <Slide></Slide>
        <Card></Card>
        <ListFilm></ListFilm>
      </Box>
    </Layout>
  );
};
export default Home;
