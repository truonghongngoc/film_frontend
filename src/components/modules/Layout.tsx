import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box minH={"100vh"} w={"100%"}>
      {children}
    </Box>
  );
};
