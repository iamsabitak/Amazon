import React from "react";
import { Text, Anchor, Flex } from "@mantine/core";

import AmazonSearchBar from "./AmazonSearchBar";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "#000000", padding: "15px 20px" }}>
      <Flex align="center" gap={20}>
        <Text size="lg" c="white">
          MyLogo
        </Text>
        <Anchor href="#" style={{ textDecoration: "none" }} c="white">
          Deliver to sabita palce name
        </Anchor>
        <AmazonSearchBar />

        {/* <Group gap={"48px"} className="navbar-link"> */}
        <Anchor href="#" style={{ textDecoration: "none" }} c="white">
          Country flag
        </Anchor>
        <Anchor href="#" style={{ textDecoration: "none" }} c="white">
          Hello,Sabita and Accounts and List
        </Anchor>
        <Anchor href="#" style={{ textDecoration: "none" }} c="white">
          Returns and Orders
        </Anchor>
        <Anchor href="#" style={{ textDecoration: "none" }} c="white">
          Shopping card logo
        </Anchor>
        {/* </Group> */}
      </Flex>
    </div>
  );
}
