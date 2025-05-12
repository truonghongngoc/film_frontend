import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  Link,
  Menu,
  NativeSelect,
  Portal,
  Text,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { AiFillCaretDown } from "react-icons/ai";
import { MenuDrawer } from "./MenuDrawer";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="header"
      display={"flex"}
      alignItems={"center"}
      minH={"70px"}
      px="20px"
      gap="20px"
      gridArea={"header"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      bgColor={isScrolled ? "#0F111A" : "none"}
      transition="background-color 0.3s ease"
      boxShadow={isScrolled ? "md" : "none"}
      zIndex={50}
    >
      <MenuDrawer></MenuDrawer>
      <Box>
        <Link href="/">
          <Image src={"src/assets/logo.svg"} width={"120px"}></Image>
        </Link>
      </Box>
      <InputGroup
        height={"44px"}
        maxW={"360px"}
        borderRadius={"9px"}
        bgColor={"rgba(255, 255, 255, .08)"}
        flex="1"
        startElement={<LuSearch color="white" />}
        display={{
          base: "none",
          xl: "block",
        }}
      >
        <Input
          border={"none"}
          placeholder="Tìm kiếm phim ,  diễn viên "
          _placeholder={{
            color: "white",
          }}
          color={"white"}
        />
      </InputGroup>
      <Box
        flex={1}
        justifyContent={"flex-end"}
        fontSize={"13px"}
        alignItems={"center"}
        gap={"8px"}
        display={{
          base: "none",
          xl: "flex",
        }}
      >
        <Link
          textDecoration={"none"}
          _hover={{ color: "#FFD875" }}
          color={"white"}
          paddingX={"8px"}
          href={""}
        >
          Chủ đề
        </Link>
        <Link
          textDecoration={"none"}
          _hover={{ color: "#FFD875" }}
          color={"white"}
          paddingX={"8px"}
          href={""}
        >
          Duyệt phim
        </Link>
        <Link
          textDecoration={"none"}
          _hover={{ color: "#FFD875" }}
          color={"white"}
          paddingX={"8px"}
          href={""}
        >
          Phim lẻ
        </Link>
        <Link
          textDecoration={"none"}
          _hover={{ color: "#FFD875" }}
          color={"white"}
          paddingX={"8px"}
          href={""}
        >
          Phim bộ
        </Link>
        <Link
          textDecoration={"none"}
          _hover={{ color: "#FFD875" }}
          color={"white"}
          href={""}
          paddingX={"8px"}
        >
          Diễn viên
        </Link>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Box display={"flex"} alignItems={"center"} gap={"4px"}>
              <Text
                textDecoration={"none"}
                _hover={{ color: "#FFD875" }}
                color={"white"}
                paddingX={"8px"}
              >
                Quốc gia
              </Text>
              <AiFillCaretDown color={"white"}></AiFillCaretDown>
            </Box>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content minW={"160px"} bgColor={"#0F111A"}>
                <Menu.Item
                  value="anh"
                  _hover={{
                    bgColor: "#ffffff05",
                    color: "#FFD875",
                  }}
                  paddingX={"8px"}
                  color={"white"}
                  h={"40px"}
                  px={"16px"}
                >
                  <Link
                    textDecoration={"none"}
                    color={"inherit"}
                    href={""}
                    _focus={{ outlineStyle: "none" }}
                  >
                    Anh
                  </Link>
                </Menu.Item>
                <Menu.Item
                  value="korea"
                  _hover={{
                    bgColor: "#ffffff05",
                    color: "#FFD875",
                  }}
                  paddingX={"8px"}
                  color={"white"}
                  h={"40px"}
                  px={"16px"}
                >
                  <Link
                    textDecoration={"none"}
                    color={"inherit"}
                    href={""}
                    _focus={{ outlineStyle: "none" }}
                  >
                    Hàn Quốc
                  </Link>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        <Link
          textDecoration={"none"}
          _hover={{ color: "#FFD875" }}
          color={"white"}
          href={""}
          paddingX={"8px"}
        >
          Lịch chiếu
        </Link>
      </Box>
      <Button
        borderRadius={"20px"}
        height={"40px"}
        width={"150px"}
        bg={"white"}
        display={{
          base: "none",
          xl: "flex",
        }}
      >
        <Image width={"15px"} src={"src/assets/user.png"}></Image>
        <Text color={"black"}>Thành viên</Text>
      </Button>
    </Box>
  );
};
export default Header;
