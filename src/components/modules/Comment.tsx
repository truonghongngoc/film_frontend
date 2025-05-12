import {
  Box,
  Switch,
  Tabs,
  Textarea,
  Text,
  Icon,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MessageCircle,
  Reply,
  Send,
} from "lucide-react";
import { useState } from "react";
import { BiInfinite } from "react-icons/bi";

const listComment = [
  {
    image: "src/assets/image2.jpeg",
    name: "Chloe",
    description: "hehehe",
  },
  {
    image: "src/assets/image4.jpg",
    name: "Mono",
    description: "hehehe",
  },
];

export const Comment = () => {
  const [tab, setTab] = useState("1");

  return (
    <Box
      flexDirection={"column"}
      margin={"32px 0"}
      padding={"10px 0"}
      boxSizing={"border-box"}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Box
          display={"flex"}
          alignItems={"center"}
          color={"white"}
          fontSize={"20px"}
          fontWeight={"600"}
        >
          <Icon as={MessageCircle}></Icon>
          <Text>Bình luận (517)</Text>
        </Box>
        <Box
          border={"1px solid #fff"}
          borderRadius={"4px"}
          p={"2px"}
          display={"flex"}
          gap={"2px"}
        >
          <Button
            bgColor={tab === "1" ? "white" : "unset"}
            color={tab === "1" ? "black" : "white"}
            size={"2xs"}
            onClick={() => setTab("1")}
            borderRadius={"4px"}
          >
            Bình luận
          </Button>
          <Button
            bgColor={tab === "2" ? "white" : "unset"}
            color={tab === "2" ? "black" : "white"}
            size={"2xs"}
            onClick={() => setTab("2")}
            borderRadius={"4px"}
          >
            Đánh giá
          </Button>
        </Box>
      </Box>
      <Tabs.Root value={tab} variant="plain">
        <Tabs.Content value="1">
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
          {listComment.slice(0, 3).map((active) => (
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
        </Tabs.Content>
        <Tabs.Content value="2">Manage your projects</Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};
