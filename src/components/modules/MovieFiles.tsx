import { images } from "../../assets";
import {
  Box,
  Button,
  Icon,
  Text,
  Image,
  Menu,
  Portal,
  Switch,
  Tabs,
} from "@chakra-ui/react";
import { Play } from "lucide-react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

import { MdSubtitles } from "react-icons/md";

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

export const MovieFiles = () => {
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState("1");
  return (
    <>
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
                  borderColor: tab === "projects" ? "white" : "transparent",
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
                border={tab === "tasks" ? "1px solid #fff " : "1px solid none"}
                fontWeight={"400"}
                value="tasks"
                bgColor={"none "}
              >
                <Box display={"flex"} alignItems={"center"} gap={"2"}>
                  <Icon color={"#fff"} as={MdSubtitles}></Icon>
                  <Text fontSize={"12px"} color={"#fff"} alignItems={"center"}>
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
          );
        })}
      </Box>
    </>
  );
};
