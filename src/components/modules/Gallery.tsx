import { Box, Text, Image } from "@chakra-ui/react";

export const Gallery = () => {
  return (
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
          <Image src="/assets/image3.jpg" alt="Ảnh 1" />
          <Image src="/assets/image3.jpg" alt="Ảnh 2" />
          <Image src="/assets/image3.jpg" alt="Ảnh 2" />
        </Box>
      </Box>
    </Box>
  );
};
