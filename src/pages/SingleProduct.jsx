import React, { useEffect } from "react";
import { Button, Container, Rating, Skeleton } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../redux/features/products/fetchProductsSlice";
import { useParams } from "react-router-dom";
import { addToCartFun } from "../redux/features/products/addToCartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, singleLoading, singleError } = useSelector(
    (state) => state.products
  );
  const { title, image, description, category, price, rating } = singleProduct;

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id, dispatch]);

  if (singleError) {
    return <div>{singleError.message}</div>;
  }

  return (
    <SingleProWrapper className="product-single-page pt">
      <section className="single-product">
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
              <h2>Product</h2>
            </div>
          </div>
          {singleLoading ? (
            <Row className="align-items-center">
              <Col sm={12} md={6}>
                <Skeleton
                  variant="rounded"
                  width={"70%"}
                  height={350}
                  sx={{ margin: "auto" }}
                />
              </Col>
              <Col sm={12} md={6}>
                <Skeleton
                  variant="text"
                  width={"30%"}
                  sx={{ fontSize: "20px" }}
                />
                <Skeleton variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton variant="text" sx={{ fontSize: "20px" }} />
                <Skeleton
                  variant="text"
                  width={"60%"}
                  sx={{ fontSize: "20px" }}
                />
                <Skeleton
                  variant="rounded"
                  width={150}
                  height={40}
                  sx={{ marginTop: "40px" }}
                />
              </Col>
            </Row>
          ) : (
            <Row className="align-items-center">
              <Col sm={12} md={6}>
                <div className="product-preview">
                  <div className="img-wrapper">
                    <img src={image} alt="product img" />
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="product-details">
                  <span className="category">{category}</span>
                  <div className="title">{title}</div>
                  <p>{description}</p>
                  <div className="rating d-flex align-items-center gap-2">
                    <Rating
                      name="rating"
                      value={rating?.rate || null}
                      precision={0.5}
                      readOnly
                    />
                    <span
                      style={{ lineHeight: 1 }}
                    >{`$ (${rating?.count})`}</span>
                  </div>
                  <div className="justify-content-between">
                    <div className="price"> $ {price}</div>
                    <Button
                      variant="contained"
                      className="btn"
                      onClick={() => dispatch(addToCartFun(singleProduct))}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </SingleProWrapper>
  );
};

export default SingleProduct;

const SingleProWrapper = styled.div`
  .img-wrapper {
    position: relative;
    padding-top: 70%;
    width: 90%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .product-details {
    .category {
      color: var(--theme-color);
      border-radius: 8px;
      display: inline-block;
      margin-bottom: 10px;
      text-transform: capitalize;
    }
    .title {
      font-size: 20px;
    }
    p {
      color: var(--light-gray);
      letter-spacing: 0.5px;
      margin: 20px 0;
      line-height: 1.8 !important;
    }
    .price {
      margin: 20px 0;
      font-size: 20px;
    }
  }
`;
