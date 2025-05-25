import { Header } from "../modules/Header";
import { Layout } from "../modules/Layout";
import { ListActor } from "../modules/ListActor";
import { Gallery } from "../modules/Gallery";
import { MovieFiles } from "../modules/MovieFiles";
import { Box, Button, Text, Image, Icon, Tabs } from "@chakra-ui/react";
import { Heart, MessageCircle, Play, Send } from "lucide-react";
import { IconPlus } from "../elements/Icons";
import { Comment } from "../modules/Comment";
import { FlimInfo } from "../modules/FlimInfo";
import { images } from "../../assets";
import { useNavigate, useParams } from "react-router-dom";

export const DetailPage = () => {
  const navigate=useNavigate();
  const { id } = useParams();
  return (
    <Layout>
      <Header></Header>
      <Box as={"main"} gridArea={"main"}>
        <Box
          bgImage={`url('${images.image2Jpg}')`}
          backgroundRepeat={"no-repeat"}
          bgSize="cover"
          bgPos="center"
          width={"100%"}
          height={"550px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
        ></Box>
        <Box
          bg={"#000"}
          maxW={"1640px"}
          padding={"20px"}
          position={"relative"}
          display={"flex"}
          boxSizing={"border-box"}
        >
          <FlimInfo></FlimInfo>

          <Box
            borderRadius={" 46px 18px   18px 18px "}
            width={"1000px"}
            padding={"30px"}
            bg={"#191b24"}
            backdropFilter={"none"}
          >
            <Box
              padding={"15px"}
              display={"flex"}
              alignItems={"center"}
              color={"white"}
              gap={"6"}
            >
              <Button
                _hover={{
                  // bgGradient: "linear(to-br, yellow.400, yellow.500)",

                  boxShadow: "0 0 20px 2px  hsl(43, 39.60%, 29.20%)",
                }}
                bg={
                  "linear-gradient(39deg, rgba(254, 207, 89, 1), rgba(255, 241, 204, 1))"
                }
                borderRadius={"32px"}
                fontSize={"18px"}
                fontWeight={"500"}
                padding={"15px 32px"}
                minH={"60px"}
                color={"black"}
                onClick={() => navigate(`/${id}/movie`)}
                boxShadow={"0 5px 10px 5px rgba(255,218,125,.1)"}
              >
                <Icon as={Play} boxSize={5} 
                
                />  Xem ngay 
              </Button>

              <Box
                className="group"
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"1"}
                minW={"80px"}
                _hover={{
                  padding: "4px",
                  borderRadius: "10px",
                  bg: "#1f2231",
                }}
              >
                <Icon
                  _groupHover={{
                    borderRadius: "10px",

                    color: "rgba(254, 207, 89, 1)",
                  }}
                  as={Heart}
                  boxSize={5}
                />

                <Text>Yêu thích </Text>
              </Box>
              <Box
                className="group"
                gap={"1"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                minW={"80px"}
                _hover={{
                  padding: "4px",
                  borderRadius: "10px",
                  bg: "#1f2231",
                }}
              >
                <Icon
                  _groupHover={{
                    borderRadius: "4px",
                    color: "rgba(254, 207, 89, 1)",
                  }}
                  as={IconPlus}
                />
                <Text>Thêm vào</Text>
              </Box>
              <Box
                className="group"
                gap={"1"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                minW={"80px"}
                _hover={{
                  padding: "4px",
                  borderRadius: "10px",
                  bg: "#1f2231",
                }}
              >
                <Icon
                  _groupHover={{
                    borderRadius: "4px",

                    color: "rgba(254, 207, 89, 1)",
                  }}
                  as={Send}
                  boxSize={5}
                />
                <Text>Chia sẻ </Text>
              </Box>
              <Box
                className="group"
                gap={"1"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                minW={"80px"}
                _hover={{
                  padding: "4px",
                  borderRadius: "10px",
                  bg: "#1f2231",
                }}
              >
                <Icon
                  _groupHover={{ color: "rgba(254, 207, 89, 1)" }}
                  as={MessageCircle}
                  boxSize={5}
                />
                <Text>Bình luận</Text>
              </Box>
              <Box
                display={"flex"}
                marginLeft={"150px"}
                alignItems={"center"}
                bg={"#3446b6"}
                borderRadius={"48px"}
                padding={"6px 10px"}
                fontSize={"14px"}
              >
                <Image src={"https://www.rophim.me/images/ro-icon.svg"}></Image>
                <Text fontWeight={"700"} fontSize={"16px"} padding={"5px 8px"}>
                  9.0
                </Text>
                <Text
                  fontSize={"11px"}
                  textDecoration={"underline"}
                  margin={"3px 8px"}
                >
                  Đánh giá{" "}
                </Text>
              </Box>
            </Box>
            <Box
              borderBottom={"1px solidrgba(200, 0, 0, 0.06)"}
              padding={"10px"}
              display={"flex"}
              gap={"10"}
              color={"#ffffff"}
              w={"full"}
            >
              <Tabs.Root w={"full"} defaultValue="1">
                <Tabs.List>
                  <Tabs.Trigger
                    value="1"
                    _hover={{ color: "rgba(254, 207, 89, 1)" }}
                    color={"#fff"}
                  >
                    Tập phim
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="2"
                    _hover={{ color: "rgba(254, 207, 89, 1)" }}
                    color={"#fff"}
                  >
                    Gallery
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="3"
                    _hover={{ color: "rgba(254, 207, 89, 1)" }}
                    color={"#fff"}
                  >
                    Diễn viên
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="4"
                    _hover={{ color: "rgba(254, 207, 89, 1)" }}
                    color={"#fff"}
                  >
                    Đề xuất
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="1">
                  <MovieFiles></MovieFiles>
                </Tabs.Content>
                <Tabs.Content value="2">
                  <Gallery></Gallery>
                </Tabs.Content>
                <Tabs.Content value="3">
                  <ListActor></ListActor>
                </Tabs.Content>
                <Tabs.Content value="4"></Tabs.Content>
              </Tabs.Root>
            </Box>
            <Comment></Comment>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
export default DetailPage;
