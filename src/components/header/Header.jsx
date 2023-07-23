import React, { useState } from "react";
import styled from "@emotion/styled";
import "./header.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  List,
  ListItem,
  ListItemButton,
  Box,
  Drawer,
  Button,
  Modal,
  Badge,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import Login from "../form/Login";
import Register from "../form/Register";

const CustomToolbar = styled(Toolbar)`
  background: #fff;
  padding: 10px;
  color: #000;
  padding: 0 !important;
`;

const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "category",
    path: "/category",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Header = () => {
  const [modalOpen, setmodalOpen] = useState({
    registerShow: false,
    loginShow: false,
  });
  const [state, setState] = useState(false);

  const handleModalOpen = (text) => {
    if (text === "login") {
      setmodalOpen({ registerShow: false, loginShow: true });
    } else if (text === "register") {
      setmodalOpen({ registerShow: true, loginShow: false });
    }
  };

  // const handleModalOpen = () => setmodalOpen(true);
  const handleClose = () =>
    setmodalOpen({
      registerShow: false,
      loginShow: false,
    });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <>
      <AppBar className="header" sx={{ background: "#fff" }}>
        <Container>
          <CustomToolbar>
            <div className="logo-wrapper">
              <Link to={"/"}>
                <Typography variant="h4">Eshop</Typography>
              </Link>
            </div>
            <nav className=" d-flex gap-3 w-100 justify-content-end">
              <ul className="navlink d-flex gap-3 ms-auto">
                {navLinks?.map(({ name, path }, i) => (
                  <li key={i}>
                    <NavLink to={path}>{name}</NavLink>
                  </li>
                ))}
              </ul>
              <ul className="right-side d-flex gap-3">
                <li>
                  <CiSearch />
                </li>
                <li className="dd-link">
                  <span>
                    <CiUser />
                  </span>
                  <List className="dd-menu">
                    <ListItem>
                      <ListItemButton onClick={() => handleModalOpen("login")}>
                        log in
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        onClick={() => handleModalOpen("register")}
                      >
                        register
                      </ListItemButton>
                    </ListItem>
                  </List>
                </li>
                <li>
                  <Badge badgeContent={1} color="primary">
                    <CiHeart />
                  </Badge>
                </li>
                <li>
                  <Badge badgeContent={1} color="primary">
                    <CiShoppingCart />
                  </Badge>
                </li>
                <li className="menu-icon">
                  <span onClick={toggleDrawer(true)}>
                    <RiMenu3Fill color="#000" />
                  </span>
                </li>
              </ul>
            </nav>
          </CustomToolbar>
        </Container>
      </AppBar>

      {/* ///////  Mobile menu ////////// */}
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <Box
          className="mobile-menu"
          sx={{ width: "300px" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="d-flex justify-content-between align-items-center top-header">
            <Typography variant="h4">Eshop</Typography>
            <Button sx={{ minWidth: "unset" }}>
              <GrClose style={{ fontSize: "24px" }} />
            </Button>
          </div>
          <List className="mobile-links">
            {navLinks?.map(({ name, path }, i) => (
              <ListItem disablePadding key={i}>
                <ListItemButton>
                  <NavLink to={path}>{name}</NavLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Modal */}
      {modalOpen.loginShow || modalOpen.registerShow ? (
        <Modal
          open={modalOpen.loginShow || modalOpen.registerShow}
          onClose={handleClose}
        >
          {modalOpen.loginShow ? (
            <Login handleModalFun={handleModalOpen} />
          ) : (
            <Register handleModalFun={handleModalOpen} />
          )}
        </Modal>
      ) : null}
    </>
  );
};

export default Header;
