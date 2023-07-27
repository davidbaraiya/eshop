import React from "react";
import HeroBanner from "../components/HeroBanner";
import { Container } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/product-card/ProductCard";

const Home = () => {

  const productData = {
    image: 'https://example.com/sample-image.jpg',
    title: 'Sample Product',
    price: 29.99,
    description: 'This is a sample product description.',
    category: 'Electronics',
  };
  
  return (
    <>
      <HeroBanner />
      <section className="collection-section pt pb">
        <Container>
          <div className="inner">
            <div className="section-title">
              <span className="subtitle">new</span>
              <h2>Collection</h2>
            </div>
            <Row>
              <Col xs={12} sm={6} md={4} lg={3}>
                <ProductCard {...productData} />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
