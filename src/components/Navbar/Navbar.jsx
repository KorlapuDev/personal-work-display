import React, { useState } from "react";
import "./index.navbar.css";
import { easeOut, motion } from "framer-motion";
// import { navbarItems } from "../../config/navItems";
import { RiHomeLine } from "react-icons/ri";
import { Box, Stack, Tooltip } from "@mui/material";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const RenderNavItem = ({ selectedItm, setNav }) => {
  const handleNavbar = (navName) => {
    setNav(navName);
  };
  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title="Home">
        <Box
          borderRadius="0.4rem"
          className="flex-column-center"
          p={0.5}
          onClick={() => {
            handleNavbar("Home");
          }}
          sx={{
            background:
              selectedItm === "Home"
                ? "linear-gradient(180deg, rgba(132,83,242,1) 0%, rgba(91,220,227,1) 100%)"
                : null,
          }}
        >
          <RiHomeLine fontSize={32} color="white" />
        </Box>
      </Tooltip>
      <Tooltip title="Projects">
        <Box
          borderRadius="0.4rem"
          className="flex-column-center"
          onClick={() => {
            handleNavbar("Projects");
          }}
          sx={{
            background:
              selectedItm === "Projects"
                ? "linear-gradient(180deg, rgba(132,83,242,1) 0%, rgba(91,220,227,1) 100%)"
                : null,
          }}
          p={0.5}
        >
          <AiOutlineFundProjectionScreen fontSize={32} color="white" />
        </Box>
      </Tooltip>
    </Stack>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState("Home");
  return (
    <div className="flex-center mainNavContainer">
      <motion.div
        className="flex-center motionContainer"
        animate={{
          scale: [0.5, 0.7, 0.9, 1.1, 1.2, 1],
        }}
        transition={{ duration: 0.4, ease: easeOut }}
      >
        <RenderNavItem selectedItm={nav} setNav={setNav} />
      </motion.div>
    </div>
  );
};

export default Navbar;
