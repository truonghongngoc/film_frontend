import {
  Box,
  Button,
  Text,
  Link,
  Image,
  Icon,
  Tabs,
  Menu,
  Portal,
  Switch,
  Input,
  Textarea,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Heart,
  MessageCircle,
  Play,
  Reply,
  Send,
} from "lucide-react";
import { HiMenu } from "react-icons/hi";
import { MdSubtitles } from "react-icons/md";
import { IconPlus, IconStar } from "../elements/Icons";
import { BiInfinite, BiReply } from "react-icons/bi";

export const Detail = () => {
  const bt = [
    {
      icon: "Play",
      title: "Tập 1",
    },
    {
      icon: "Play",
      title: "Tập 2",
    },
    {
      icon: "Play",
      title: "Tập 1",
    },
    {
      icon: "Play",
      title: "Tập 2",
    },
    {
      icon: "Play",
      title: "Tập 1",
    },
    {
      icon: "Play",
      title: "Tập 2",
    },
  ];
  const topFilm = [
    {
      number: "1",
      image: "src/image/image2.jpeg",
      title: "Chuyện đời bác sĩ nội trú ",
      description: "Resident Playbook ",
      tag1: "T13",
      tag2: "Phần 1",
      tag3: "Tập 8",
    },
    {
      number: "2",
      image: "src/image/image2.jpeg",
      title: "Chuyện đời bác sĩ nội trú ",
      description: "Resident Playbook ",
      tag1: "T13",
      tag2: "Phần 1",
      tag3: "Tập 8",
    },
  ];
  const cmt = [
    {
      image: "src/image/image2.jpeg",
      name: "Chloe",
      description: "hehehe",
    },
    {
      image: "src/image/image4.jpg",
      name: "Mono",
      description: "hehehe",
    },
  ];
  const dv = [
    {
      image: "src/image/image2.jpeg",
      name: "Hong Hae In", //ten dv
      nameReal: "hehehe",
    },
        {
      image: "src/image/image2.jpeg",
      name: "Hong Hae In", //ten dv
      nameReal: "hehehe",
    },
        {
      image: "src/image/image2.jpeg",
      name: "Hong Hae In", //ten dv
      nameReal: "hehehe",
    },
        {
      image: "src/image/image2.jpeg",
      name: "Hong Hae In", //ten dv
      nameReal: "hehehe",
    }

  ];
  return (
    <>
      <Box
        bgImage={`url('src/image/image3.jpg')`}
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
        <Box
          // marginTop={"-100px"}

          // padding={"0 20px"}
          position={"relative"}
          // zIndex={"3"}

          borderRadius={"46px 18px 18px 18px "}
          display={"flex"}
          // justifyContent={"space-between"}
          // alignItems={"stretch"}
          boxSizing={"border-box"}
          // bg={"#191b24"}
        >
          <Box
            borderRadius={" 18px 46px  18px 18px "}
            padding={"30px"}
            backgroundColor={"#191b24"}
            backdropFilter={"none"}
            width={"430px"}
          >
            <Box>
              <Image
                borderRadius={"10px"}
                width={"150px"}
                height={"220px"}
                src={"src/image/image4.jpg"}
              ></Image>
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
            </Box>
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
              {["Chính kịch", "Tình cảm ", "Hài ", "Lãng mạn "].map((item) => (
                <Link
                  color={"white"}
                  bg={"#ffffff10"}
                  padding={"6px"}
                  height={"26px"}
                  borderRadius={"4px"}
                  fontSize={"12px"}
                >
                  {item}
                </Link>
              ))}
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
            <Text color={"#fff"} fontWeight={"500"} marginBottom={"8px"}>
              Giới thiệu{" "}
            </Text>
            <Text
              fontWeight={"300"}
              color={"#aaa"}
              fontSize={"14px"}
              lineHeight={"1,6px"}
              marginBottom={"20px"}
            >
              "Hội bạn trai của Bunny" lấy bối cảnh tại một trường đại học và kể
              về hành trình trưởng thành của Ban Hee-jin (Roh Jeong-eui). Là
              người không quá quan tâm đến ngoại hình, cô chỉ hẹn hò dựa trên
              tính cách. Vì vậy, cô quyết định yêu một chàng trai không quá điển
              trai nhưng lại có tính cách tốt. Tuy nhiên, sau một thời gian, Ban
              Hee-jin phát hiện ra rằng anh ta thực chất đã che giấu một bản
              chất không mấy tốt đẹp đằng sau vẻ ngoài bình thường ấy. Chịu tổn
              thương sâu sắc từ mối tình đầu đầy cay đắng, cô đưa ra quyết định:
              từ nay, cô sẽ chỉ hẹn hò với những chàng trai đẹp trai. "
            </Text>
            <Box display={"flex"}>
              <Text
                fontSize={"14px"}
                color={"#fff"}
                fontWeight={"500"}
                marginBottom={"20px"}
                gap={"10px "}
              >
                Thời lượng:
              </Text>
              <Text fontSize={"14px"} color={"#aaa"} marginLeft={"5px"}>
                1h 00m{" "}
              </Text>
            </Box>

            <Box display={"flex"}>
              <Text
                fontSize={"14px"}
                color={"#fff"}
                fontWeight={"500"}
                marginBottom={"20px"}
                gap={"10px "}
              >
                Quốc gia:
              </Text>

              <Text fontSize={"14px"} color={"#aaa"} marginLeft={"5px"}>
                Han Quoc{" "}
              </Text>
            </Box>
            <Box display={"flex"}>
              <Text
                fontSize={"14px"}
                color={"#fff"}
                fontWeight={"500"}
                marginBottom={"20px"}
                gap={"10px "}
              >
                Networks:
              </Text>
              <Text fontSize={"14px"} color={"#aaa"} marginLeft={"5px"}>
                JTBQ
              </Text>
            </Box>
            <Box display={"flex"}>
              <Text
                fontSize={"14px"}
                color={"#fff"}
                fontWeight={"500"}
                marginBottom={"20px"}
                gap={"10px "}
              >
                Sản xuất :
              </Text>
              <Text fontSize={"14px"} color={"#aaa"} marginLeft={"5px"}>
                SLL , Studio Phoenix{" "}
              </Text>
            </Box>
            <Box display={"flex"}>
              <Text
                fontSize={"14px"}
                color={"#fff"}
                fontWeight={"500"}
                marginBottom={"40px"}
                gap={"10px "}
              >
                Đạo diễn :
              </Text>
              <Text fontSize={"14px"} color={"#aaa"} marginLeft={"5px"}>
                Lee Nam-kyu, Kim Soo-jin, Kim Sok-yun
              </Text>
            </Box>
            <Box marginBottom={"32px"}>
              <Text
                fontSize={"30px"}
                fontWeight={"600"}
                color={"#fff"}
                marginBottom={"16px"}
                minH={"40px"}
              >
                Diễn viên{" "}
              </Text>

              <Box
                display={"grid"}
                gap={"5"}
                gridTemplateColumns={"repeat(3,1fr)"}
              >
                <Box marginBottom={"20p"}>
                  <Image
                    borderRadius={"40px"}
                    width={"80px"}
                    height={"80px"}
                    src={"src/image/image1.jpg"}
                    marginBottom={"10px"}
                  ></Image>
                  <Text color={"#fff"} fontWeight={"400"} fontSize={"16px"}>
                    Kim Hye-ja
                  </Text>
                </Box>
                <Box>
                  <Image
                    borderRadius={"40px"}
                    width={"80px"}
                    height={"80px"}
                    src={"src/image/image1.jpg"}
                    marginBottom={"10px"}
                  ></Image>
                  <Text color={"#fff"} fontWeight={"400"} fontSize={"16px"}>
                    Kim Hye-ja
                  </Text>
                </Box>
                <Box>
                  <Image
                    borderRadius={"40px"}
                    width={"80px"}
                    height={"80px"}
                    src={"src/image/image1.jpg"}
                    marginBottom={"10px"}
                  ></Image>
                  <Text color={"#fff"} fontWeight={"400"} fontSize={"16px"}>
                    Kim Hye-ja
                  </Text>
                </Box>
                <Box>
                  <Image
                    borderRadius={"40px"}
                    width={"80px"}
                    height={"80px"}
                    src={"src/image/image1.jpg"}
                    marginBottom={"10px"}
                  ></Image>
                  <Text color={"#fff"} fontWeight={"400"} fontSize={"16px"}>
                    Kim Hye-ja
                  </Text>
                </Box>
                <Box>
                  <Image
                    borderRadius={"40px"}
                    width={"80px"}
                    height={"80px"}
                    src={"src/image/image1.jpg"}
                    marginBottom={"10px"}
                  ></Image>
                  <Text color={"#fff"} fontWeight={"400"} fontSize={"16px"}>
                    Kim Hye-ja
                  </Text>
                </Box>
              </Box>
              <Box marginTop={"32px"} borderTop={"1px solid #6b6b6b"}>
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
                  <Icon color={"#fff"} as={IconStar}></Icon>
                  <Text>Top phim tuần này </Text>
                </Box>
                {topFilm.slice(0, 3).map((active) => (
                  <Box
                    marginBottom={"20px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    boxSizing={"border-box"}
                  >
                    <Text
                      width={"60px"}
                      textAlign={"left"}
                      fontSize={"46px"}
                      fontWeight={"800"}
                      color={"#191b24"}
                      textShadow={
                        "-1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff"
                      }
                    >
                      {active.number}
                    </Text>
                    <Box
                      borderRadius={"10px"}
                      bg={"#ffffff05"}
                      display={"flex"}
                    >
                      <Image
                        borderRadius={"10px"}
                        width={"80px"}
                        height={"120px"}
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
              boxShadow={"0 5px 10px 5px rgba(255,218,125,.1)"}
            >
              <Icon as={Play} boxSize={5} /> Xem ngay{" "}
            </Button>

            <Box
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
                _hover={{
                  borderRadius: "10px",

                  color: "rgba(254, 207, 89, 1)",
                }}
                as={Heart}
                boxSize={5}
              />

              <Text>Yêu thích </Text>
            </Box>
            <Box
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
                _hover={{
                  borderRadius: "4px",

                  color: "rgba(254, 207, 89, 1)",
                }}
                as={IconPlus}
              />
              <Text>Thêm vào </Text>
            </Box>
            <Box
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
                _hover={{
                  borderRadius: "4px",

                  color: "rgba(254, 207, 89, 1)",
                }}
                as={Send}
                boxSize={5}
              />
              <Text>Chia sẻ </Text>
            </Box>
            <Box
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
                _hover={{ color: "rgba(254, 207, 89, 1)" }}
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
          >
            <Tabs.Root defaultValue="members">
              <Tabs.List>
                <Tabs.Trigger
                  value="members"
                  _hover={{ color: "rgba(254, 207, 89, 1)" }}
                  color={"#fff"}
                >
                  Tập phim
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="projects"
                  _hover={{ color: "rgba(254, 207, 89, 1)" }}
                  color={"#fff"}
                >
                  Gallery{" "}
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tasks"
                  _hover={{ color: "rgba(254, 207, 89, 1)" }}
                  color={"#fff"}
                >
                  Diễn viên{" "}
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tasks"
                  _hover={{ color: "rgba(254, 207, 89, 1)" }}
                  color={"#fff"}
                >
                  Đề xuất{" "}
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="members">
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
                <Box
                  padding={"30px 0"}
                  display={"flex"}
                  // justifyContent={"space-between"}
                  gap={"6"}
                  // marginBottom={"32px"}
                  // alignItems={"center"}
                >
                  <Box
                    // marginBottom={"32px"}
                    display={"flex"}
                    alignItems={"center"}
                    fontSize={"22px "}
                    padding={"10px "}
                    borderRight={"1px solid #ffffff30"}
                  >
                    <Icon
                      fontWeight={"900"}
                      color={"#ffd875"}
                      as={HiMenu}
                    ></Icon>
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
                            <Text
                              fontSize={"14px "}
                              padding={"6px 0px 6px 6px"}
                            >
                              Danh sách phần{" "}
                            </Text>
                            <Menu.Item
                              _hover={{
                                bg: "#ffd875",
                              }}
                              value="new-txt"
                            >
                              Phần 1{" "}
                            </Menu.Item>
                            <Menu.Item
                              value="new-file"
                              _hover={{
                                bg: "#ffd875",
                              }}
                            >
                              Phần 2{" "}
                            </Menu.Item>
                          </Menu.Content>
                        </Menu.Positioner>
                      </Portal>
                      <Icon
                        // content={"\f0d7"}
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
                    <Button
                      bg={"#00000000"}
                      color={"#fff"}
                      border={"1px solid #fff"}
                    >
                      <Icon width={"15px"} as={MdSubtitles}></Icon>
                      <Text fontWeight={"400"}>Phụ đề</Text>
                    </Button>
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
                  </Box>
                  <Box
                    display={"inline-flex"}
                    alignItems={"center"}
                    gap={"2"}
                    boxSizing={"border-box"}
                    justifyContent={"flex-start"}
                  >
                    <Text color={"#fff"} fontSize={"15px"}>
                      Rút gọn{" "}
                    </Text>
                    <Switch.Root>
                      <Switch.HiddenInput />
                      <Switch.Control />
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
                  {bt.slice(0, 6).map((item) => (
                    <Button
                      justifyContent={"center"}
                      height={"50px"}
                      display={"flex"}
                      alignItems={"center"}
                      bg={"#282b3a"}
                      borderRadius={"8px"}
                      marginBottom={"62px"}
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
                  ))}
                </Box>
              </Tabs.Content>
              <Tabs.Content value="projects">
                <Box>
                  <Box>
                    <Text
                      fontSize={"20px"}
                      fontWeight={"600"}
                      color={"white"}
                      marginBottom={"16px"}
                      padding={"20px 20px 0  "}
                    >
                      Videos
                    </Text>
                    <Box
                      width={"900px"}
                      padding={"48px 32px"}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      borderRadius={"16px"}
                      color={"#6e7171"}
                      bg={"rgba(0, 0, 0, .2)"}
                    >
                      <Image
                        opacity={"0.5"}
                        width={"48px"}
                        src={"https://www.rophim.me/images/icons/empty-box.svg"}
                      ></Image>
                      <Text>Chưa có video nào </Text>
                    </Box>
                    <Text
                      fontSize={"20px"}
                      fontWeight={"600"}
                      color={"white"}
                      marginBottom={"16px"}
                      padding={"20px 20px 0  "}
                    >
                      Ảnh
                    </Text>
                    <Box display={"flex"} width={"250px"} gap={6}>
                      <Image src="src/image/image3.jpg" alt="Ảnh 1" />
                      <Image src="src/image/image3.jpg" alt="Ảnh 2" />
                      <Image src="src/image/image3.jpg" alt="Ảnh 2" />
                    </Box>
                  </Box>
                </Box>
              </Tabs.Content>
              <Tabs.Content value="tasks">
                <Box padding={"40px 0"}>
                  <Text fontSize={"28px"} fontWeight={"600"} color={"#fff"}>
                    Diễn viên{" "}
                  </Text>

                  <Box
                    marginTop={"20px"}
                    rowGap={"22px"}
                    display={"grid"}
                    columnGap={"8px"}
                    gridTemplateColumns={"repeat(5,1fr)"}
                  >
                    {dv.slice( 0,33).map((item) => (
                      <Box>
                        <Image
                          borderRadius={"15px"}
                          // position={"absolute"}
                          width={"140px"}
                          height={"180px"}
                          src={item.image}
                        ></Image>

                        <Box
                          padding={"12px 8px "}
                          margin={"-40px "}
                          fontSize={"14px"}
                          fontWeight={"400"}
                          textAlign={"center"}
                        >
                          <Link color={"#fff"} href={""}>
                            {item.name}
                          </Link>
                          <br></br>
                          <Link marginTop={"10px"} color={"#F0ADB1"}>
                            {item.nameReal}
                          </Link>
                        </Box>
                      </Box>
                  ))}
                  </Box>
                    
                </Box>
              </Tabs.Content>
               <Tabs.Content value="trend">
               
                ////
              </Tabs.Content>
            </Tabs.Root>
          </Box>
          <Box
            flexDirection={"column"}
            margin={"32px 0"}
            padding={"10px 0"}
            boxSizing={"border-box"}
          >
            <Box
              fontSize={"20px"}
              display={"flex"}
              alignItems={"center"}
              gap={"4"}
              fontWeight={"600"}
              minH={"40px"}
              color={"#fff"}
              marginBottom={"16px"}
            >
              <Icon as={MessageCircle}></Icon>
              <Text>Bình luận (517)</Text>

              <Tabs.Root
                display={"flex"}
                defaultValue="members"
                variant="plain"
              >
                <Tabs.List border={"1px solid"} bg="#00000000">
                  <Tabs.Trigger
                    justifyItems={"center"}
                    // height={"26px"}
                    alignItems={"center"}
                    value="members"
                  >
                    Bình luận
                  </Tabs.Trigger>

                  <Tabs.Trigger value="tasks" fontSize={"10px"}>
                    Đánh giá
                  </Tabs.Trigger>
                  <Tabs.Indicator rounded="l3" />
                </Tabs.List>
                <Tabs.Content value="members"> </Tabs.Content>

                <Tabs.Content value="projects">
                  Manage your projects
                </Tabs.Content>
              </Tabs.Root>
            </Box>{" "}
            <Box display={"flex"} gap={"1"} marginBottom={"16px"}>
              <Text color={"#aaa"}>Vui lòng </Text>
              <Text color={"#ffd875"}>đăng nhập </Text>
              <Text color={"#aaa"}>để tham gia </Text>
            </Box>
            <Box
              gap={8}
              padding={"16px 20px"}
              borderRadius={"14px"}
              bg={"#ffffff10"}
            >
              <Box
                _hover={{ border: "1px solid white" }}
                width={"100%"}
                padding={"16px 0 30px 0"}
                borderRadius={"10px"}
                bg={" #191b24"}
                color={"#aaa"}
                height={"auto"}
                resize={"none"}
                position={"relative"}
              >
                <Textarea
                  display={"flex"}
                  justifyContent={"flex-end"}
                  // mt={"6px"}
                  fontWeight={"500"}
                  placeholder="Viết bình luận "
                  fontSize={"14px"}
                  boxSizing={"border-box"}
                  border={"none"}
                ></Textarea>
                <Text
                  position={"absolute"}
                  top={"6px"}
                  right={"10px"}
                  fontSize={"11px"}
                >
                  0/1000
                </Text>
              </Box>
              <Box
                padding={"20px 0"}
                justifyContent={"space-between"}
                display={"flex"}
              >
                <Box gap={3} display={"flex"}>
                  <Switch.Root>
                    <Switch.HiddenInput />
                    <Switch.Control />
                  </Switch.Root>

                  <Text fontSize={"14px"} color={"#fff"}>
                    Tiết lộ ?
                  </Text>
                </Box>

                <Box
                  color={"#ffd875"}
                  gap={"3"}
                  justifyContent={"flex-end"}
                  display={"flex"}
                >
                  <Text>Gửi </Text>
                  <Icon
                    _hover={{
                      borderRadius: "4px",

                      color: "rgba(254, 207, 89, 1)",
                    }}
                    as={Send}
                    boxSize={5}
                  />
                </Box>
              </Box>
            </Box>
            {cmt.slice(0, 3).map((active) => (
              <Box gap={"6"} margin={"30px 0"} display={"flex"}>
                <Box>
                  <Image
                    borderRadius={"40px"}
                    width={"50px"}
                    height={"50px"}
                    src={active.image}
                    marginBottom={"10px"}
                  ></Image>
                </Box>
                <Box>
                  <Box
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    marginBottom={"8px"}
                    gap={3}
                    display={"flex"}
                  >
                    <Text fontSize={"14px"} fontWeight={"500"} color={"#fff"}>
                      {active.name}
                    </Text>
                    <Icon color={"#ffd875"} as={BiInfinite} boxSize={5} />
                    <Text color={"#aaa"} fontSize={"10px"}>
                      2 giờ trước{" "}
                    </Text>
                    <Button
                      _hover={{
                        border: "1px solid white",
                        color: "white",
                      }}
                      marginLeft={"4px"}
                      bg={"none"}
                      border={"1px solid #fff5"}
                      height={"30px"}
                      fontWeight={"400"}
                      borderRadius={"8px"}
                      fontSize={"11px"}
                      color={"#aaa "}
                      padding={"3px 6px"}
                    >
                      P.1 - Tập 2
                    </Button>
                  </Box>
                  <Box marginBottom={"10px"}>
                    <Text color={"#aaa"} fontSize={"14px"}>
                      {active.description}
                    </Text>
                  </Box>
                  <Box justifyItems={"center"} gap={6} display={"flex"}>
                    <Box display={"flex"} gap={2}>
                      <Icon
                        _hover={{ bg: "green" }}
                        borderRadius={"15px"}
                        bg={"grey"}
                        as={ChevronUpIcon}
                      ></Icon>
                      <Icon
                        _hover={{ bg: "red" }}
                        borderRadius={"15px"}
                        bg={"grey"}
                        as={ChevronDownIcon}
                      ></Icon>
                    </Box>
                    <Box
                      _hover={{ color: "#fff" }}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Icon color={"#aaa"} as={Reply}></Icon>
                      <Text color={"#aaa"} fontSize={"12px"}>
                        Trả lời{" "}
                      </Text>
                    </Box>
                    <Box
                      color={"#aaa"}
                      alignItems={"center"}
                      gap={2}
                      display={"flex"}
                    >
                      <Text>...</Text>
                      <Text fontSize={"12px"}>Thêm</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Detail;
