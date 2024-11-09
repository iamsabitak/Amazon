import React from "react";
import { Text, Anchor, Flex } from "@mantine/core";

import AmazonSearchBar from "./AmazonSearchBar";
import {
  IconChevronDown,
  IconLocation,
  IconShoppingCart,
} from "@tabler/icons-react";

export default function Navbar() {
  return (
    <>
      {" "}
      <div style={{ backgroundColor: "#131921", padding: "15px 20px" }}>
        <Flex align="center" gap={35}>
          <Text size="lg" c="white">
            <Text fw={700} size="18px">
              MyLogo
            </Text>
          </Text>
          <Anchor href="#" style={{ textDecoration: "none" }} c="white">
            <Flex align={"center"} gap={7}>
              <IconLocation />
              <Text fw={400} size="18px">
                {" "}
                Deliver to
                <Text fw={900} size="18px">
                  {" "}
                  KTM{" "}
                </Text>
              </Text>
            </Flex>
          </Anchor>
          <AmazonSearchBar />

          <Anchor href="#" style={{ textDecoration: "none" }} c="white">
            <Text fw={400} size="18px">
              Hello,sign in
            </Text>
            <Text
              style={{ display: "flex", alignItems: "center" }}
              fw={900}
              size="18px"
            >
              {" "}
              Accounts & List
              <IconChevronDown />
            </Text>
          </Anchor>
          <Anchor href="#" style={{ textDecoration: "none" }} c="white">
            <Text fw={400} size="18px">
              Returns
            </Text>
            <Text fw={900} size="18px">
              and Orders
            </Text>
          </Anchor>
          <Anchor href="#" style={{ textDecoration: "none" }} c="white">
            <Text fw={900} size="18px">
              <IconShoppingCart /> Cart
            </Text>
          </Anchor>
          {/* </Group> */}
        </Flex>
      </div>
      <div style={{ backgroundColor: "#232F3F", padding: "15px 20px" }}>
        <Flex align="center" gap={40} c="white">
          <Text fw={700} size="18px" style={{ cursor: "pointer" }}>
            All
          </Text>
          <Text fw={700} size="18px" style={{ cursor: "pointer" }}>
            Today's Deals
          </Text>
          <Text fw={700} size="18px" style={{ cursor: "pointer" }}>
            Customer Service
          </Text>
          <Text fw={700} size="18px" style={{ cursor: "pointer" }}>
            Gift Cards
          </Text>
          <Text fw={700} size="18px" style={{ cursor: "pointer" }}>
            Registry
          </Text>
          <Text fw={700} size="18px" style={{ cursor: "pointer" }}>
            Sell
          </Text>
        </Flex>
      </div>
    </>
  );
}
