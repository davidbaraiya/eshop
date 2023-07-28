import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

// const bannerContent = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//     },
//   },
// };
// const item = {
//   hidden: { x: -30, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//   },
// };

const HeroBanner = () => {
  const swiperParams = {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    pagination: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <HeroBannerSection>
      <div className="hero-banner">
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <div className="banner-slide">
              <div className="banner-slide-inner">
                <div className="content">
                  <div className="subtitle">
                    get <span>50% off</span>
                  </div>
                  <h2>
                    Summer <span> Fashion Sale</span>
                  </h2>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus at quam dicta, voluptatum quia asperiores omnis
                    ab. Hic, commodi officia?
                  </Typography>
                  <Button variant="contained" className="btn">
                    <Link to="/collection">Shop Now</Link>
                  </Button>
                </div>

                <img src={banner2} alt="banner img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide">
              <div className="banner-slide-inner">
                <div className="content">
                  <div className="subtitle">
                    get <span>50% off</span>
                  </div>
                  <h2>
                    Summer <span> Fashion Sale</span>
                  </h2>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus at quam dicta, voluptatum quia asperiores omnis
                    ab. Hic, commodi officia?
                  </Typography>
                  <Button variant="contained" className="btn">
                    <Link to="/collection">Shop Now</Link>
                  </Button>
                </div>

                <img src={banner1} alt="banner img" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </HeroBannerSection>
  );
};

export default HeroBanner;

// style
const HeroBannerSection = styled.section`
  .banner-slide-inner {
    position: relative;
    min-height: 500px;
    height: 100px;
    width: 100%;
    overflow-x: hidden;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 400px;
      height: 100%;
      background-color: var(--second-color);
      z-index: 1;
      clip-path: polygon(0 0%, 61% 0, 100% 100%, 0% 100%);
    }
    img {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      /* object-position: top left; */
      object-fit: cover;
    }
  }
  .content {
    position: relative;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    max-width: 500px;
    width: 100%;
    padding: 0 20px;

    h2 {
      font-size: 70px !important;
      margin: 20px 0;

      span {
        display: block;
      }
    }
    p {
      color: var(--black);
      margin-bottom: 20px;
    }
  }

  @media (max-width: 991px) {
    .content h2 {
      font-size: 52px !important;
    }
  }
  @media (max-width: 767px) {
    .banner-slide-inner::before {
      background: rgb(255 255 255 / 50%);
      clip-path: none;
      max-width: 100%;
    }
    .content {
      h2 {
        font-size: 38px !important;
      }
      .subtitle {
        font-size: 22px;
      }
    }
    .banner-slide-inner {
      min-height: 370px;
    }
  }
  @media (max-width: 575px) {
  }
`;
