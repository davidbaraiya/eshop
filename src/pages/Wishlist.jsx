import React from "react";
import { Button, Container } from "@mui/material";
import { MdArrowBackIos } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/product-card/ProductCard";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const { wishlistProducts } = useSelector((state) => state.wishlistProducts);

  return (
    <ViewWishlist className="view-wishlist pt-5">
      <Container>
        <Button sx={{ marginBottom: "10px" }}>
          <Link to={"/"}>
            <MdArrowBackIos />
            go to back
          </Link>
        </Button>
        <div className="section-title">
          <div className="inner-title">
            <span className="subtitle">view</span>
            <h2>Wishlist</h2>
          </div>
        </div>
        <div className="wishlist-container">
          {wishlistProducts.length === 0 ? (
            <div className="empty-cart-container">
              <div>
                <h2>No Favorite Items Available</h2>
                <Button variant="contained" className="mt-4">
                  <Link to="/">Go To Shop</Link>
                </Button>
              </div>
            </div>
          ) : (
            <Row>
              {wishlistProducts?.map((product) => (
                <Col sm={12} md={4} lg={3} key={product.id}>
                  <ProductCard product={product} inWishlist={true} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </ViewWishlist>
  );
};

export default Wishlist;

const ViewWishlist = styled.div``;
