import { Box, Button, Text, Image, Link } from "@chakra-ui/react";
import { useState } from "react";
import { IconFavorite, IconWarning } from "../Icons";
import { images } from "../../../assets";

const list = [
  {
    title: "Mât vụ phụ hồ 1",
    description: "A working Man 1",
    node: "",
    image: images.image1,
  },
  {
    title: "Super Man",
    description: "Hero",
    node: "",
    image: images.image2Jpeg,
  },
  {
    title: "Mât vụ phụ hồ 1",
    description: "A working Man 1",
    node: "",
    image: images.image2Jpg,
  },
  {
    title: "Mât vụ phụ hồ 1",
    description: "A working Man 1",
    node: "",
    image: images.image3,
  },
  {
    title: "Mât vụ phụ hồ 1",
    description: "A working Man 1",
    node: "",
    image: images.image6,
  },
];

export const Slide = () => {
  const [indexActive, setIndexActive] = useState(0);

  const active = list[indexActive];

  return (
    <Box
      bgImage={`url('${active.image}')`}
      backgroundRepeat={"no-repeat"}
      bgSize="cover"
      bgPos="center"
      width={"100%"}
      height={"550px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-end"}
    >
      <Box mx={"30px"} maxW={"600px"}>
        <Text
          fontSize={"32px"}
          display={"flex"}
          color={"white"}
          marginBottom={"8px"}
          textShadow={"0 2px 1px rgba(0, 0, 0, .3);"}
          fontWeight={"700"}
        >
          {active.title}
        </Text>
        <Text color={" #ffd875"} mt={"10px"}>
          {active.description}
        </Text>
        <Box
          alignItems={"center"}
          justifyContent={"flex-start"}
          boxSizing={"border-box"}
          gap={2}
          marginBottom={"12px"}
          display={"flex"}
          mt={"20px"}
        >
          <Button
            color={"#f0d25c"}
            bg={"#00000000"}
            border={"1px solid #f0d25c"}
            fontWeight={"500"}
            lineHeight={"24px"}
            fontSize={"12px"}
            display={"inline-flex"}
            alignItems={"center"}
            boxSizing={"border-box"}
            h="26px"
          >
            IMDb <span>8.3</span>
          </Button>
          {["T18", "2025", "Phan 1", "Tap 99"].map((item, index) => (
            <Button
              bgColor={index === 0 ? "white" : "#ffffff10"}
              display={"flex"}
              h="26px"
              fontSize={"12px"}
              padding={"6px"}
              border={"1px solid white"}
              color={index === 0 ? "#000" : "white"}
            >
              {item}
            </Button>
          ))}
        </Box>
        <Box display={"flex"} gap={2}>
          {["Chính kịch", "Hinh Su", "Sieu Anh Hung", "Marvel"].map((item) => (
            <Link
              color={"white"}
              bg={"#ffffff10"}
              padding={"6px"}
              borderRadius={"4px"}
              fontSize={"12px"}
            >
              {item}
            </Link>
          ))}
        </Box>
        <Text
          color={"white"}
          fontSize={"16px"}
          lineHeight={"1.6"}
          fontWeight={"400"}
          WebkitLineClamp={"3"}
          overflow={"hidden"}
          marginBottom={"32px"}
          textShadow={"0 1px 1px rgba(0, 0, 0, .2)"}
        >
          Levon Cade - cựu biệt kích tinh nhuệ thuộc lực lượng Thủy quân Lục
          chiến Hoàng gia Anh. Sau khi nghỉ hưu , anh sống cuộc đời bình yên là
          một công nhân xây dựng tại Chicago (Mỹ). Levon có mối quan hệ rất tốt
          với gia đình ông chủ Joe Gảcia(Michael...)
        </Text>
      </Box>
      <Box
        mx={"30px"}
        gap={4}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box gap={8} display={"flex"} alignItems={"center"} flex={1}>
          <Button
            background={
              "linear-gradient(39deg,rgba(254,207,89,1),rgba(255,241,204,1))"
            }
            borderRadius={"50%"}
            width={"70px"}
            h={"70px"}
          >
            <Image width={"21px"} src="/assets/play-button.png"></Image>
          </Button>
          <Box
            width={"140px"}
            height={"54px"}
            border={"1px solid #ffffff10"}
            display={"flex"}
            borderRadius={"27px"}
          >
            <Box
              flex={1}
              color={"white"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <IconFavorite></IconFavorite>
            </Box>
            <Box
              flex={1}
              color={"white"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderLeft={"2px solid #ffffff10"}
            >
              <IconWarning></IconWarning>
            </Box>
          </Box>
        </Box>
        <Box flex={1}>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            padding={"20px"}
            gap={"10px"}
            alignItems={"center"}
          >
            {list.map((item, index) => (
              <Image
                onClick={() => setIndexActive(index)}
                height={"50px"}
                width={"100px"}
                src={item.image}
              ></Image>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Slide;
