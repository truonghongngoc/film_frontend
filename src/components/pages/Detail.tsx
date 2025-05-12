import { Box } from "@chakra-ui/react";
import { Header } from "../modules/Header";
import { Layout } from "../modules/Layout";
import Detail from "../modules/Detail";

export const DetailPage = () => {
  return (
    <Layout>
      <Header></Header>
      <Box as={"main"} gridArea={"main"}>
        <Detail></Detail>
      </Box>
    </Layout>
  );
};
export default DetailPage;
