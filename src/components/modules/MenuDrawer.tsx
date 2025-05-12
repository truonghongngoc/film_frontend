import {
  Box,
  Button,
  CloseButton,
  Drawer,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export const MenuDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger
        asChild
        display={{
          base: "flex",
          xl: "none",
        }}
      >
        <IconButton variant={"ghost"} aria-label="Search database">
          <AiOutlineMenuUnfold color="white"></AiOutlineMenuUnfold>
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            {/* <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header> */}
            <Drawer.Body>
              <Box
                gap={"6"}
                display={{ xl: "none", base: "flex" }}
                flexDirection={{ base: "column" }}
                fontWeight={"semibold"}

                // flexDirection={{xl:"none",base:"column-reverse"}}
              >
                <a href={""}> Chủ đề </a>
                <a href={""}> Duyệt phim </a>
                <a href={""}> Phim lẻ </a>
                <a href={""}> Phim bộ </a>
                <a href={""}> Diễn viên </a>
                <a href={""}> Quốc gia </a>
                <a href={""}> Lịch chiếu </a>
                <Button>Thành viên </Button>
              </Box>
            </Drawer.Body>
            {/* <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer> */}
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
