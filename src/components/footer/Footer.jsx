import "./footer.css";
import {
  Container,
  Input,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import { RiFacebookLine } from "react-icons/ri";
import { PiGoogleLogoLight } from "react-icons/pi";
import paymentMethods from "../../assets/images/payment-methods.png";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="footer-row">
          <Col sm={12} md={3} lg={4}>
            <div className=" newsletter">
              <div className="logo-wrapper mb-2">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <Typography>subscribe for more info and offers</Typography>
              <form action="">
                <FormControl
                  sx={{ m: 1, width: "100%", color: "#fff" }}
                  variant="standard"
                >
                  <InputLabel htmlFor="footer-emial-input">
                    Enter Your Email
                  </InputLabel>
                  <Input id="footer-emial-input" type="email" name="email" />
                </FormControl>
                <Button type="submit">
                  <AiOutlineSend />
                </Button>
              </form>
            </div>
          </Col>
          <Col sm={4} md={3} lg={3}>
            <div className="footer-div">
              <h5>About</h5>
              <ul>
                <li>
                  <Link to={"#"}>about us</Link>
                </li>
                <li>
                  <Link to={"#"}>contact us</Link>
                </li>
                <li>
                  <Link to={"#"}>123456789</Link>
                </li>
                <li>
                  <Link to={"#"} className="text-lowercase">
                    demo@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={4} md={3} lg={3}>
            <div className="footer-div">
              <h5>Help</h5>
              <ul>
                <li>
                  <Link to={"#"}>faqs</Link>
                </li>
                <li>
                  <Link to={"#"}>privacy policy</Link>
                </li>
                <li>
                  <Link to={"#"}>tern and conditions</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={4} md={3} lg={2}>
            <div className="footer-div social-icons">
              <h5>social</h5>
              <ul className="d-flex gap-3 align-items-center">
                <li>
                  <Link to={"#"} style={{ background: "#E4405F" }}>
                    <SlSocialInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={"#"} style={{ background: "#1877F2" }}>
                    <RiFacebookLine />
                  </Link>
                </li>
                <li>
                  <Link to={"#"} style={{ background: "#1DA1F2" }}>
                    <SlSocialTwitter />
                  </Link>
                </li>
                <li>
                  <Link to={"#"} style={{ background: "#EA4335" }}>
                    <PiGoogleLogoLight />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <img src={paymentMethods} alt="img" style={{ maxWidth: "300px" }} />
          </Col>
        </Row>
        <Divider color="#fff" className="mb-4 mt-5" />
        <div className="footer-bottom d-flex justify-content-between align-items-center">
          <Typography>
            <AiOutlineCopyrightCircle /> 2023 <Link to={"/"}> Eshop.com. </Link>
            All rights reserved.
          </Typography>
          <ul className="d-flex gap-3 align-items-center">
            <li>
              <Link to={"#"}>privacy policy</Link>
            </li>
            <li>
              <Link to={"#"}>tern and conditions</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
