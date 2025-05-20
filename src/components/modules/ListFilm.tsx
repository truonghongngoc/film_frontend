import { Box, Text, Image, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";

const list = [
  {
    id: 1,
    image: "/assets/phim1.webp",
    pin: "PĐ. 3 ",
    pin2: "TM. 1",
    title: "Mùa xuân tuổi trẻ   ",
    description: "Spring of Youth  ",
  },
  {
    id: 2,
    image: "/assets/phim2.webp",
    pin: "PĐ. 8 ",
    pin2: "TM. 8",
    title: "Cung điện ma ám   ",
    description: "The haunted palace ",
  },
  {
    id: 3,
    image: "/assets/phim3.webp",
    pin: "PĐ. 5 ",
    pin2: "TM. 4 ",
    title: "Khỏe trước yêu sau   ",
    description: "Pump up the healthy love ",
  },
  {
    id: 4,
    image: "/assets/image3.jpg",
    pin: "PĐ. 10",
    pin2: "TM. 8",
    title: "Quán ăn của ngài heo ",
    description: "actionaction",
  },
];

const TextClip = styled("p")`
  -webkit-background-clip: text !important;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: none;
  text-shadow: none !important;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text !important;
`;

export const ListFilm = () => {
  return (
    <Box padding="20px" bg="#191b24">
      <Box
        borderRadius="16px"
        bg="linear-gradient(0deg, rgba(40, 43, 58, 0) 20%, rgba(40, 43, 58, 1))"
      >
        <Box display="flex">
          <Box
            padding={"40px"}
            display={{ xl: "flex", base: "" }}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Text
              WebkitLineClamp={"3"}
              fontSize="30px"
              fontWeight="semibold"
              letterSpacing="1px"
              background={
                "linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(103, 65, 150) 130%)"
              }
              as={TextClip}
              color={"white"}
            >
              Phim Hàn <br></br> Quốc Mới
            </Text>
            <Link
              color="#fff"
              fontSize="14px"
              fontWeight={"400"}
              fontFamily={"Arial"}
              lineHeight={4}
            >
              Xem toàn bộ &gt;
            </Link>
          </Box>

          {/* Movie Card */}
          <Box display={"flex"} padding="40px" gap={6} boxSizing="border-box">
            {list.slice(0, 3).map((active) => (
              <Box>
                {/* Image Wrapper */}
                <Box position="relative">
                  <Image
                    width={"360px"}
                    boxSizing={"border-box"}
                    borderRadius="8px"
                    src={active.image}
                   
                  />
                  {/* Badge */}
                  <Box display={"flex"}>
                    <Box
                      as="span"
                      position="absolute"
                      z-index={"3"}
                      justifyContent={"space-between"}
                      alignItems={"stretch"}
                      left="8px"
                      bg="#5e6070"
                      bottom={"0"}
                      color="#fff"
                      padding="3px 8px"
                      fontSize="11px"
                      fontWeight="400"
                      borderRadius="5px 5px  0 0 "
                      right={"auto"}
                      marginLeft={"16px"}
                    >
                      {active.pin}
                    </Box>
                    <Box
                      as="span"
                      position="absolute"
                      justifyContent={"space-between"}
                      alignItems={"stretch"}
                      bottom={"0"}
                      color="#fff"
                      bg={"#2ca35d"}
                      padding="3px 8px"
                      fontSize="11px"
                      fontWeight="400"
                      borderRadius=" 0   5px  0 0  "
                      right={"auto"}
                      marginLeft={"65px"}
                    >
                      {active.pin2}
                    </Box>
                  </Box>
                </Box>

                {/* Text Info */}
                <Box color="white"  padding="10px 10px">
                  <Link
                    _hover={{ color: "#FFD875", textDecoration:"none"

                    }}
                    color="white"
                    fontSize="16px"
                    fontWeight="semibold"
                    href={`/${active.id}`}
                  >
                    {active.title}
                  </Link>
                  <Text
                    marginTop={"5px"}
                    fontFamily={""}
                    fontSize={"13px"}
                    color="#aaa"
                  >
                    {active.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box display="flex">
          <Box
            padding={"40px"}
            display={{ xl: "flex", base: "" }}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Text
              WebkitLineClamp={"3"}
              fontSize="30px"
              fontWeight="semibold"
              letterSpacing="1px"
              background={
                "linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(247, 161, 11) 130%)"
              }
              as={TextClip}
            >
              Phim Trung <br></br> Quốc Mới
            </Text>
            <Link
              color="#fff"
              fontSize="14px"
              fontWeight={"400"}
              fontFamily={"Arial"}
              lineHeight={4}
            >
              Xem toàn bộ &gt;
            </Link>
          </Box>

          {/* Movie Card */}
          <Box display={"flex"} padding={"20px"} gap={6} boxSizing="border-box">
            {list.slice(0, 3).map((active) => (
              <Box>
                {/* Image Wrapper */}
                <Box position="relative">
                  <Image
                    width={"360px"}
                    boxSizing={"border-box"}
                    borderRadius="8px"
                    src={active.image}
                 
                  />
                  {/* Badge */}
                  <Box display={"flex"}>
                    <Box
                      as="span"
                      position="absolute"
                      z-index={"3"}
                      justifyContent={"space-between"}
                      alignItems={"stretch"}
                      left="8px"
                      bg="#5e6070"
                      bottom={"0"}
                      color="#fff"
                      padding="3px 8px"
                      fontSize="11px"
                      fontWeight="400"
                      borderRadius="3px 3px 0 0 "
                      right={"auto"}
                      marginLeft={"16px"}
                    >
                      {active.pin}
                    </Box>
                    <Box
                      as="span"
                      position="absolute"
                      justifyContent={"space-between"}
                      alignItems={"stretch"}
                      bottom={"0"}
                      color="#fff"
                      bg={"#2ca35d"}
                      padding="3px 8px"
                      fontSize="11px"
                      fontWeight="400"
                      borderRadius="3px 3px 0 0 "
                      right={"auto"}
                      marginLeft={"68px"}
                    >
                      {active.pin2}
                    </Box>
                  </Box>
                </Box>

                {/* Text Info */}
                <Box color="white" padding="10px 10px">
                  <Link
                    _hover={{ color: "#FFD875", textDecoration:"none" }}
                    color="white"
                    fontSize="16px"
                    fontWeight="semibold"
                    href={`/${active.id}`}
                  >
                    {active.title}
                  </Link>
                  <Text
                    marginTop={"5px"}
                    fontFamily={""}
                    fontSize={"15px"}
                    color="#aaa"
                  >
                    {active.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box display="flex">
          <Box
            padding={"40px"}
            display={{ xl: "flex", base: "" }}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Text
              WebkitLineClamp={"3"}
              fontSize="30px"
              fontWeight="semibold"
              letterSpacing="1px"
              as={TextClip}
              background={
                "linear-gradient(235deg, rgb(255, 255, 255) 30%, rgb(255, 0, 153) 130%)"
              }
            >
              Phim US - <br></br> UK Mới
            </Text>
            <Link
              color="#fff"
              fontSize="14px"
              fontWeight={"400"}
              fontFamily={"Arial"}
              lineHeight={4}
            >
              Xem toàn bộ &gt;
            </Link>
          </Box>

          {/* Movie Card */}
          <Box display={"flex"} padding="40px" gap={6} boxSizing="border-box">
            {list.slice(0, 3).map((active) => (
              <Box>
                {/* Image Wrapper */}
                <Box position="relative">
                  <Image
                    width={"360px"}
                    boxSizing={"border-box"}
                    borderRadius="8px"
                    src={active.image}
                 
                  />
                  {/* Badge */}
                  <Box display={"flex"}>
                    <Box
                      as="span"
                      position="absolute"
                      z-index={"3"}
                      justifyContent={"space-between"}
                      alignItems={"stretch"}
                      left="8px"
                      bg="#5e6070"
                      bottom={"0"}
                      color="#fff"
                      padding="3px 8px"
                      fontSize="11px"
                      fontWeight="400"
                      borderRadius="3px 3px 0 0 "
                      right={"auto"}
                      marginLeft={"16px"}
                    >
                      {active.pin}
                    </Box>
                    <Box
                      as="span"
                      position="absolute"
                      justifyContent={"space-between"}
                      alignItems={"stretch"}
                      bottom={"0"}
                      color="#fff"
                      bg={"#2ca35d"}
                      padding="3px 8px"
                      fontSize="11px"
                      fontWeight="400"
                      borderRadius="3px 3px 0 0 "
                      right={"auto"}
                      marginLeft={"68px"}
                    >
                      {active.pin2}
                    </Box>
                  </Box>
                </Box>

                {/* Text Info */}
                <Box color="white" padding="10px 10px">
                  <Link
                    _hover={{ color: "#FFD875" , textDecoration:"none"}}
                    color="white"
                    fontSize="16px"
                    fontWeight="semibold"
                    href={`/${active.id}`}
                  >
                    {active.title}
                  </Link>
                  <Text
                    marginTop={"5px"}
                    fontFamily={""}
                    fontSize={"15px"}
                    color="#aaa"
                  >
                    {active.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ListFilm;
