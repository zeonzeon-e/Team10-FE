import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Text,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex direction="row" justify="center" align="center">
      <Text fontSize="lg">만반잘부</Text>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="none"
        />
        <MenuList>
          <Link to="/">
            <MenuItem fontSize="sm">my page</MenuItem>
          </Link>
          <Link to="/">
            <MenuItem fontSize="sm">search</MenuItem>
          </Link>
          <Link to="/">
            <MenuItem fontSize="sm">my friends</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
