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

const ProductCard = ({ product }) => {
  const { image, price, rating, title } = product;
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
          <img src={image} alt="product img" />
        </Link>
        <CardContent>
          <Typography gutterBottom component="div" className="product-title">
            <Link to={"#"}>{title}</Link>
          </Typography>
          <div className="rating d-flex align-items-center gap-2">
            <Rating
              name="rating"
              defaultValue={rating.rate}
              precision={0.5}
              readOnly
            />
            <span style={{ lineHeight: 1 }}>{`(${rating.count})`}</span>
          </div>
        </CardContent>
        <CardActions className="justify-content-between">
          <div className="price"> ${price}</div>
          <Button variant="contained" className="btn">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
