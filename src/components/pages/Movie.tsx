import Header from "../modules/Header";
import {
  Box,
  Image,
  Icon,
  Text,
  Button,
  Switch,
  Menu,
  Portal,
  Tabs,
} from "@chakra-ui/react";
import { Layout } from "../modules/Layout";
import { Link, useParams } from "react-router-dom";
import {
  ChevronLeftIcon,
  Heart,
  MessageCircle,
  Play,
  Plus,
  Send,
  StarIcon,
} from "lucide-react";
import { FiFlag } from "react-icons/fi";
import { images } from "../../assets";
import { useState } from "react";
import { MdSubtitles } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Comment } from "../modules/Comment";



const listTopFilm = [
  {

    image: images.image2Jpeg,
    title: "Chuyện đời bác sĩ nội trú ",
    description: "Resident Playbook ",
    tag1: "T13",
    tag2: "Phần 1",
    tag3: "Tập 12 ",
  },

  {
   
    image: images.phim4,
    title: "Khỏe trước yêu sau  ",
    description: "Pump up the healthy love  ",
    tag1: "T13",
    tag2: "Phần 1",
    tag3: "Tập 8",
  },
  {
 
    image: images.phim5,
    title: "Khom lưng  ",
    description: "The prisoner of beauty   ",
    tag1: "T13",
    tag2: "Phần 1",
    tag3: "Tập 15 ",
  },
];
const bt = [
  {
    icon: "Play",
    title: "Tập 1",
    image: images.image4,
  },
  {
    icon: "Play",
    title: "Tập 2",
    image: images.image2Jpeg,
  },
  {
    icon: "Play",
    title: "Tập 1",
    image: images.image2Jpg,
  },
];
export const MoviePage = () => {
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState("1");
  return (
    <Layout>
      <Header></Header>
      <Box as={"main"} gridArea={"main"}></Box>
      <Box bgColor={"#0F111A"} color="white" p={6}>
        <Box
          display={"flex"}
          gap={8}
          alignItems={"center"}
          padding={"0 0px"}
          marginTop={"80px"}
          fontSize="xl"
          mb={4}
        >
          <Icon
            as={ChevronLeftIcon}
            aria-label="Go Back"
            borderRadius="full"
            border="1px solid"
            borderColor="gray.500"
            bg="transparent"
            size="lg"
          />
          <Text>Xem phim Chín Mảnh Ghép Bí Ẩn </Text>
        </Box>
        <iframe
          width="100%"
          height="500"
          allowFullScreen
          src="https://www.youtube.com/embed/Xsk5CMQ9mpk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <Box
          fontSize={"14px"}
          fontWeight={"400"}
          borderRadius={"10px"}
          display={"flex"}
          gap={12}
          bg={"black"}
          padding={"16px 16px"}
        >
          <Box gap={2} display={"flex"}>
            <Heart></Heart>
            <Text>Yêu thích </Text>
          </Box>
          <Box gap={2} display={"flex"}>
            <Plus></Plus>
            <Text>Thêm vào </Text>
          </Box>

          <Box gap={2} display={"flex"}>
            <Send></Send>
            <Text>Chia sẻ </Text>
          </Box>
          <Box ml={"auto "} alignItems={"center"} gap={2} display={"flex"}>
            <Icon as={FiFlag} />
            <Text>Báo lỗi </Text>
          </Box>
        </Box>
        <Box gap={10} display={"flex"} flex={1} padding={"20px"}>
          <Box>
            <Box display={"flex"} gap={6}>
              <Box borderRight={"1px soli grey"}>
                <Image
                  borderRadius={"10px"}
                  width={"150px"}
                  height={"220px"}
                  src={images.image3}
                ></Image>
              </Box>
              <Box>
                <Text
                  mt={"30px"}
                  fontWeight={"600"}
                  lineHeight={"1.5px"}
                  marginBottom={"8px"}
                  color={"#fff"}
                  fontSize={"26px"}
                >
                  Hội bạn trai của Bunny
                </Text>
                <Text
                  color={"#ffd875"}
                  marginBottom={"22px"}
                  fontWeight={"400"}
                  mt={"30px"}
                >
                  Crushology 101
                </Text>

                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                  gap="9px"
                  marginBottom={"10px"}
                >
                  {["T14", "2025", "Phần 1", "Tập 7"].map((item, index) => (
                    <Button
                      bgColor={index === 0 ? "white" : "#ffffff10"}
                      display={"flex"}
                      fontSize={"12px"}
                      height={"30px"}
                      border={"1px solid white"}
                      color={index === 0 ? "#000" : "white"}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
                <Box marginBottom={"12px"} display={"flex"} gap={2}>
                  {["Chính kịch", "Tình cảm ", "Hài ", "Lãng mạn "].map(
                    (item) => (
                      <Link
                        _hover={{ color: "#ffd875" }}
                        color={"white"}
                        bg={"#ffffff10"}
                        textDecoration={"none"}
                        padding={"6px"}
                        height={"26px"}
                        borderRadius={"4px"}
                        fontSize={"12px"}
                      >
                        {item}
                      </Link>
                    )
                  )}
                </Box>

                <Button
                  marginBottom={"32px"}
                  color={"#ff8300"}
                  bgColor={"#ff83001a"}
                  borderRadius={"32px"}
                >
                  <Text fontWeight={"300"} fontSize={"12px"}>
                    Đã chiếu : 12/14 tập{" "}
                  </Text>
                </Button>
              </Box>
              <Box flex={1}>
                <Text
                  color={"#fff"}
                  fontWeight={"500"}
                  marginBottom={"8px"}
                ></Text>

                <Text
                  fontWeight="300"
                  color="#aaa"
                  fontSize="14px"
                  lineHeight="1.6"
                  marginBottom="20px"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Đây là một đoạn văn bản rất dài, rất dài, rất dài, rất dài,
                  rất dài, rất dài, rất dài, rất dài, rất dài, rất dài, rất dài,
                  rất dài, rất dài, rất dài, rất dài, rất dài, rất dài, rất dài,
                  rất dài, rất dài, rất dài, rất dài.
                </Text>
                
              </Box>
            </Box>

            <Box
              display={"flex"}
              alignItems={"center"}
              padding={"6px 46px 6px  20px "}
              borderRadius={"6px"}
              gap={2}
              fontSize={"14px"}
              color={"white"}
              backgroundColor={"#4158D0"}
              backgroundImage={"linear-gradient(90deg,#4158D0,#C850C0)"}
            >
              <Image
                borderRadius={"20px"}
                bg={"#0005"}
                width={"36px"}
                height={"36px"}
                src="https://www.rophim.me/images/alarm.gif"
              ></Image>
              <Text fontWeight={"bold"}>Tập 7 </Text>
              <Text>sẽ phát sóng </Text>
              <Text fontWeight={"bold"}>21:30 ngày 10-05-2025</Text>

              <Text>. Các bạn nhớ đón xem nhé </Text>
            </Box>
            <Box padding={"30px 0"} display={"flex"} gap={"6"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                fontSize={"22px "}
                padding={"10px "}
                borderRight={"1px solid #ffffff30"}
              >
                <Icon fontWeight={"900"} color={"#ffd875"} as={HiMenu}></Icon>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button
                      border={"none"}
                      bg={"none"}
                      fontWeight={"500"}
                      color={"white"}
                      variant="outline"
                      fontSize={"2xl"}
                    >
                      Phần 2
                    </Button>
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content borderRadius={"6px"}>
                        <Text fontSize={"14px "} padding={"6px 0px 6px 6px"}>
                          Danh sách phần
                        </Text>
                        <Menu.Item
                          _hover={{
                            bg: "#ffd875",
                          }}
                          value="new-txt"
                        >
                          Phần 1
                        </Menu.Item>
                        <Menu.Item
                          value="new-file"
                          _hover={{
                            bg: "#ffd875",
                          }}
                        >
                          Phần 2
                        </Menu.Item>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                  <Icon
                    fontSize={"12px"}
                    fontWeight={"900"}
                    color={"white"}
                    width={"15px"}
                    as={Play}
                  ></Icon>
                </Menu.Root>
              </Box>
              <Box
                fontSize={"12px"}
                display={"flex"}
                gap={"8"}
                padding={"12px"}
                borderRadius={"6px"}
                background={"#00000000"}
              >
                <Tabs.Root defaultValue="members" variant="plain">
                  <Tabs.List rounded="l3" p="1">
                    <Tabs.Trigger
                      style={{
                        background: "none",
                        color: tab === "projects" ? "#ff89b0" : "#ffffff",
                        borderColor:
                          tab === "projects" ? "white" : "transparent",
                        fontWeight: tab === "projects" ? 600 : 400,
                      }}
                      value="projects"
                    >
                      <Button
                        size={"2xs"}
                        borderRadius={"4px"}
                        onClick={() => setTab("2")}
                        color={tab === "2" ? "white" : "white"}
                        bg={"#00000000"}
                        border={tab === "1" ? "white" : "none"}
                      >
                        <Icon width={"15px"} as={MdSubtitles}></Icon>
                        <Text fontWeight={"400"}>Phụ đề</Text>
                      </Button>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                      color={tab === "tasks" ? "#fff " : "#aaa"}
                      border={
                        tab === "tasks" ? "1px solid #fff " : "1px solid none"
                      }
                      fontWeight={"400"}
                      value="tasks"
                      bgColor={"none "}
                    >
                      <Box display={"flex"} alignItems={"center"} gap={"2"}>
                        <Icon color={"#fff"} as={MdSubtitles}></Icon>
                        <Text
                          fontSize={"12px"}
                          color={"#fff"}
                          alignItems={"center"}
                        >
                          Thuyết minh giọng Nam{" "}
                        </Text>
                      </Box>
                    </Tabs.Trigger>
                    <Tabs.Indicator rounded="l2" />
                  </Tabs.List>
                </Tabs.Root>
              </Box>
              <Box
                display={"inline-flex"}
                alignItems={"center"}
                gap={"2"}
                boxSizing={"border-box"}
                justifyContent={"flex-end"}
                flex={1}
              >
                <Text color={"#fff"} fontSize={"15px"}>
                  Rút gọn{" "}
                </Text>
                <Switch.Root
                  checked={checked}
                  onCheckedChange={(e) => setChecked(e.checked)}
                  colorPalette={"yellow"}
                  border={checked ? "1px solid #FFD875" : "1px solid #fff"}
                  borderRadius={"full"}
                  size={"sm"}
                >
                  <Switch.HiddenInput />
                  <Switch.Control bgColor={"unset"}>
                    <Switch.Thumb bgColor={checked ? " #FFD875" : "#fff"} />
                  </Switch.Control>
                </Switch.Root>
              </Box>
            </Box>
            <Box
              display={"grid"}
              boxSizing={"border-box"}
              gridTemplateColumns={"repeat(7,2fr)"}
              columnGap={"15px"}
              gap={"4"}
            >
              {bt.slice(0, 3).map((item) => {
                if (checked) {
                  return (
                    <Box>
                      <Image borderRadius={"10px"} src={item.image}></Image>
                      <Text>{item.title} </Text>
                    </Box>
                  );
                }
                return (
                  <Button
                    justifyContent={"center"}
                    height={"50px"}
                    display={"flex"}
                    alignItems={"center"}
                    bg={"#282b3a"}
                    borderRadius={"8px"}
                    marginBottom={"30px"}
                    _hover={{
                      color: "#ffd875",
                    }}
                  >
                    <Icon width={"15px"} as={Play}>
                      {item.icon}
                    </Icon>
                    <Text fontSize={"14px"} fontWeight={"400"}>
                      {item.title}
                    </Text>
                  </Button>
                );
              })}
            </Box>

            <Comment></Comment>
          </Box>

          <Box width={"380px"} borderLeft={"1px solid #ffffff10"}>
            <Box gap={2} display={"flex"}>
              <Box
                className="group"
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
                <Text fontSize={"13px"}>Bình luận</Text>
              </Box>
              <Box
                className="group"
                gap={1}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                minW={"80px"}
                borderLeft={"1px solid #ffffff10"}
                _hover={{
                  padding: "4px",
                  borderRadius: "10px",
                  bg: "#1f2231",
                }}
              >
                <Icon
                  _groupHover={{ color: "rgba(254, 207, 89, 1)" }}
                  as={StarIcon}
                  boxSize={5}
                />
                <Text fontSize={"13px"}>Đánh giá </Text>
              </Box>
              <Box
                display={"flex"}
                marginLeft={"80px"}
                alignItems={"center"}
                bg={"#3446b6"}
                borderRadius={"48px"}
                padding={" 6px"}
                fontSize={"14px"}
              >
                <Image src={"https://www.rophim.me/images/ro-icon.svg"}></Image>
                <Text fontWeight={"700"} fontSize={"16px"} padding={"5px 8px"}>
                  9.0
                </Text>
                <Text
                  width={"70px"}
                  fontSize={"11px"}
                  textDecoration={"underline"}
                  margin={"3px 8px"}
                >
                  Đánh giá{" "}
                </Text>
              </Box>
            </Box>
            <Box
            marginTop={"20px"}
            padding={"20px"}
              marginBottom={"32px"}
            >
              <Text
                  borderTop={"1px solid #ffffff10"}
                fontSize={"20px"}
                fontWeight={"600"}
                color={"#fff"}
         paddingTop={"20px"}
                marginBottom={"16px"}
                minH={"40px"}
              >
                Diễn viên{" "}
              </Text>

              <Box
              padding={"20px"}
                display={"grid"}
                gap={"8"}
                gridTemplateColumns={"repeat(3,1fr)"}
              >
               
                <Box>
                  <Image
                    borderRadius={"40px"}
                    width={"80px"}
                    height={"80px"}
                    src={images.actor2}
                    marginBottom={"10px"}
                  ></Image>
                  <Text color={"#fff"} fontWeight={"400"} fontSize={"16px"}>
                    Liu Yuning
                  </Text>
                </Box>
                <Box>
                  <Image
                    borderRadius={"40px"}
                    width={"80px"}
                    height={"80px"}
                    src={images.actor3}
                    marginBottom={"10px"}
                  ></Image>
                  <Text color={"#fff"} fontWeight={"400"} fontSize={"16px"}>
                    Xuan Lu
                  </Text>
                </Box>
                <Box>
                  <Image
                    borderRadius={"40px"}
                    width={"80px"}
                    height={"80px"}
                    src={images.actor4}
                    marginBottom={"10px"}
                  ></Image>
                  <Text color={"#fff"} fontWeight={"400"} fontSize={"16px"}>
                    Liu Duan
                  </Text>
                </Box>
                <Box>
                  <Image
                    borderRadius={"40px"}
                    width={"80px"}
                    height={"80px"}
                    src={images.actor5}
                    marginBottom={"10px"}
                  ></Image>
                  <Text color={"#fff"} fontWeight={"400"} fontSize={"16px"}>
                    Liu Xiaoqing
                  </Text>
                </Box>
              </Box>
              <Box marginTop={"32px"} borderTop={"1px solid #ffffff10"}>
                <Box
                  display={"flex"}
                  gap={4}
                  fontSize={"24px"}
                  color={"#fff"}
                  padding={"32px 0 0"}
                  fontWeight={"600"}
                  marginBottom={"16px"}
                  alignItems={"center"}
                  boxSizing={"border-box"}
                >
               
                  <Text>Top phim tuần này </Text>
                </Box>
                {listTopFilm.slice(0, 3).map((active) => (
                  <Box
                    marginBottom={"20px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    boxSizing={"border-box"}
                  >
               
                    <Box
                      borderRadius={"10px"}
                      width={"300px"}
                      bg={"#ffffff05"}
                      display={"flex"}
                    >
                      <Image
                        borderRadius={"10px"}
                        width={"80px"}
                        height={"123px"}
                        src={active.image}
                      ></Image>
                      <Box padding={"20px 16px"}>
                        <Link
                          textDecoration={"none"}
                          _hover={{ color: "#ffd875" }}
                          href={""}
                          margin={"0 0 4px"}
                          color={"#fff"}
                        >
                          {active.title}
                        </Link>
                        <Text
                          padding={"6px 0"}
                          fontSize={"13px"}
                          margin={"0 0 4px"}
                          color={"#aaa"}
                        >
                          {active.description}
                        </Text>
                        <Box
                          fontSize={"13px"}
                          gap={4}
                          color={"#aaa"}
                          display={"flex"}
                        >
                          <Text>{active.tag1}</Text>
                          <Text>{active.tag2} </Text>
                          <Text>{active.tag3} </Text>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
export default MoviePage;
