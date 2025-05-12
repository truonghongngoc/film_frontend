import { Box, Text, Image, Link } from "@chakra-ui/react";

const list = [
  {
    image: "src/assets/image2.jpeg",
    name: "Hong Hae In", //ten dv
    nameReal: "hehehe",
  },
  {
    image: "src/assets/image2.jpeg",
    name: "Hong Hae In", //ten dv
    nameReal: "hehehe",
  },
  {
    image: "src/assets/image2.jpeg",
    name: "Hong Hae In", //ten dv
    nameReal: "hehehe",
  },
  {
    image: "src/assets/image2.jpeg",
    name: "Hong Hae In", //ten dv
    nameReal: "hehehe",
  },
];

export const ListActor = () => {
  return (
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
        {list.slice(0, 33).map((item) => (
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
  );
};
