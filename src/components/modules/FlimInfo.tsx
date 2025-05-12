import { Box, Text, Image, Button, Link, Icon } from "@chakra-ui/react";
import { IconStar } from "../elements/Icons";

const listTopFilm = [
  {
    number: "1",
    image: "src/assets/image2.jpeg",
    title: "Chuyện đời bác sĩ nội trú ",
    description: "Resident Playbook ",
    tag1: "T13",
    tag2: "Phần 1",
    tag3: "Tập 8",
  },
  {
    number: "2",
    image: "src/assets/image2.jpeg",
    title: "Chuyện đời bác sĩ nội trú ",
    description: "Resident Playbook ",
    tag1: "T13",
    tag2: "Phần 1",
    tag3: "Tập 8",
  },
];

export const FlimInfo = () => {
  return (
    <Box
      position={"relative"}
      borderRadius={"46px 18px 18px 18px "}
      display={"flex"}
      boxSizing={"border-box"}
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
            src={"src/assets/image4.jpg"}
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
          "Hội bạn trai của Bunny" lấy bối cảnh tại một trường đại học và kể về
          hành trình trưởng thành của Ban Hee-jin (Roh Jeong-eui). Là người
          không quá quan tâm đến ngoại hình, cô chỉ hẹn hò dựa trên tính cách.
          Vì vậy, cô quyết định yêu một chàng trai không quá điển trai nhưng lại
          có tính cách tốt. Tuy nhiên, sau một thời gian, Ban Hee-jin phát hiện
          ra rằng anh ta thực chất đã che giấu một bản chất không mấy tốt đẹp
          đằng sau vẻ ngoài bình thường ấy. Chịu tổn thương sâu sắc từ mối tình
          đầu đầy cay đắng, cô đưa ra quyết định: từ nay, cô sẽ chỉ hẹn hò với
          những chàng trai đẹp trai. "
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

          <Box display={"grid"} gap={"5"} gridTemplateColumns={"repeat(3,1fr)"}>
            <Box marginBottom={"20p"}>
              <Image
                borderRadius={"40px"}
                width={"80px"}
                height={"80px"}
                src={"src/assets/image1.jpg"}
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
                src={"src/assets/image1.jpg"}
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
                src={"src/assets/image1.jpg"}
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
                src={"src/assets/image1.jpg"}
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
                src={"src/assets/image1.jpg"}
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
            {listTopFilm.slice(0, 3).map((active) => (
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
                <Box borderRadius={"10px"} bg={"#ffffff05"} display={"flex"}>
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
  );
};
