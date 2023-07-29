import React, { useState } from "react";
import "./cart.css";
import { Button, Container, Typography } from "@mui/material";
import { MdArrowBackIos } from "react-icons/md";
import { Col, Row } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import Quantity from "../../components/Quantity";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import emptyCartImg from "../../assets/images/empty-cart.webp";
import { Link } from "react-router-dom";
import { removeToCartFun } from "../../redux/features/products/addToCartSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";

const Cart = () => {
  const { loading, inCartProducts, error } = useSelector(
    (state) => state.inCartProducts
  );

  const dispatch = useDispatch();

  const handleCheckout = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        toast.success("checkout success..");
      } else {
        toast.warning("Login To Checkout");
      }
    });
  };

  if (error) {
    <div>
      <Typography>Error : {error.message}</Typography>
    </div>;
  }

  return (
    <div className="view-cart pt-5">
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
            <h2>Cart</h2>
          </div>
        </div>
        <div className="cart-container">
          {inCartProducts.length === 0 ? (
            <div className="empty-cart-container">
              <div>
                <img src={emptyCartImg} alt="img" className="mb-2" />
                <h2>No Item Available</h2>
                <Button variant="contained" className="mt-4">
                  <Link to="/">Go To Shop</Link>
                </Button>
              </div>
            </div>
          ) : loading ? (
            <Loader />
          ) : (
            <Row>
              <Col sm={12} md={8}>
                <div className="main-cart-inner">
                  {inCartProducts?.map((product) => {
                    const { id, title, image, price } = product;
                    return (
                      <div className="cart" key={id}>
                        <div className="img-wrapper">
                          <img src={image} alt="product img" />
                        </div>
                        <div className="right-content">
                          <h6>{title}</h6>
                          <div className="price mb-3">$ {price}</div>
                          <Quantity />
                        </div>
                        <Button onClick={() => dispatch(removeToCartFun(id))}>
                          <AiOutlineDelete size={25} />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="cart-price-details mt-4 mt-md-0">
                  <h4>Total</h4>
                  <div className="mt-3">
                    <div className="price-info">
                      <label htmlFor="">Sub Total: </label>
                      <span> $ 2000 </span>
                    </div>
                    <div className="price-info">
                      <label htmlFor="">Tax (3.00%):</label>
                      <span> $ 10 </span>
                    </div>
                    <div className="price-info">
                      <label htmlFor="">Delivery Charges:</label>
                      <span> $ 30 </span>
                    </div>
                  </div>
                  <div className="price-info total">
                    <label htmlFor="">Total:</label>
                    <span> $ 2050 </span>
                  </div>
                  <Button
                    variant="contained"
                    className="checkout-btn"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
