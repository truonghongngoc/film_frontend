import { Box, Link, Text } from "@chakra-ui/react";

const list = [
  {
    title: "Marval",
    bgColor: "rgb(50, 79, 209)",
  },
  {
    title: "4K",
    bgColor: "rgb(102, 102, 153)",
  },
  {
    title: "Sitcom",
    bgColor: "rgb(27, 133, 108)",
  },
  {
    title: "Marval",
    bgColor: "rgb(50, 79, 209)",
  },
  {
    title: "4K",
    bgColor: "rgb(102, 102, 153)",
  },
  {
    title: "Sitkom",
    bgColor: "rgb(27, 133, 108)",
  },
];

export const Card = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        gap={16}
        position={"relative"}
        minH={"44px"}
        bg={"#191b24"}
      >
        <Text
          lineHeight={"1,4px"}
          fontWeight={"600"}
          color={"#fff"}
          fontSize={"29px"}
          textShadow={"0 2px 1px rgba(0, 0, 0, .3)"}
          mx={5}
        >
          Bạn đang quan tâm gì ?
        </Text>
      </Box>

      <Box
        bg={"#191b24"}
        display={"grid"}
        gap={"2rem"}
        padding={"20px"}
        gridTemplateColumns={"repeat(5,1fr)"}
      >
        {list.slice(0, 5).map((item) => (
          <Box
            background={
              "radial-gradient(at left top,rgba(255,255,255,.8) 30%,rgba(255,111,111,.79) 100%)"
            }
            borderRadius={"20px"}
            overflow={"hidden"}
            minH={"138px"}
          >
            <Box
              w={"full"}
              height={"full"}
              padding={"20px"}
              backgroundColor={item.bgColor}
              justifyContent={"space-between"}
              maskImage={"linear-gradient(180deg,black -10%,rgba(0,0,0,.1))"}
            >
              <Text color={"white"} fontSize={"2xl"} fontWeight={"semibold"}>
                {item.title}
              </Text>
              <Link
                href={""}
                color={"white"}
                fontSize={"small"}
                fontWeight={"medium"}
              >
                Xem chủ đề &gt
              </Link>
            </Box>
          </Box>
        ))}
        {list.length > 5 && (
          <Box bg={"grey"} borderRadius={"15px"} width={"200px"} minH={"80px"}>
            <Link
           color={"white"}
              fontSize={"s"}
              fontWeight={"semibold"}
              padding={"20px"}
              href={""}
            >
              +{list.length - 5} chủ đề
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Card;
