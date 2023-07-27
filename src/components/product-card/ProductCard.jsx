import "./productCard.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";

const ProductCard = () => {
  return (
    <div className="product-card">
      <Card className="product-inner">
        <div className="product-topbar">
          <span>new</span>
          <Button>
            <GoHeart />
          </Button>
        </div>
        <Link to={"#"} className="img-wrapper">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="product imag"
          />
        </Link>
        <CardContent>
          <Typography gutterBottom component="div" className="product-title">
            <Link to={"#"}>
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </Link>
          </Typography>
          <div className="rating d-flex align-items-center gap-2">
            <Rating name="rating" defaultValue={2.5} precision={0.5} readOnly />
            <span style={{ lineHeight: 1 }}>(120)</span>
          </div>
        </CardContent>
        <CardActions className="justify-content-between">
          <div className="price"> $ 109.95</div>
          <Button variant="contained" className="btn">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
