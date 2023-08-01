import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/product-card/ProductCard";
import ProductSkeleton from "../components/product-card/ProductSkeleton";
import { fetchProductData } from "../redux/features/products/fetchProductsSlice";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";

function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 10;

const ProductsFilter = () => {
  const [age, setAge] = useState("");
  const [value1, setValue1] = React.useState([20, 37]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const { allproductsData, loading, error } = useSelector(
    (state) => state.products
  );

  // handelrange
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  if (error) {
    <div>{error.message}</div>;
  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FilterSection className="pt">
      <Container>
        <Button sx={{ marginBottom: "10px" }}>
          <Link to={"/"}>
            <MdArrowBackIos />
            go to back
          </Link>
        </Button>
        <div className="section-title">
          <div className="inner-title">
            <span className="subtitle">filter</span>
            <h2>Products</h2>
          </div>
        </div>
        <Row>
          <Col sm={12} md={3}>
            <div className="leftbar-filter">
              <h5>Filter</h5>
              <div className="filter-div mt-3">
                <label>price</label>
                <Slider
                  getAriaLabel={() => "Minimum distance"}
                  value={value1}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                />
              </div>
            </div>
          </Col>
          <Col sm={12} md={9}>
            <div className="rightbar">
              <div className="topbar d-flex  align-items-center justify-content-between ">
                <div className="d-flex gap-3">
                  <div>
                    <Button>
                      <CiGrid41 fontSize={24} />
                    </Button>
                    <Button className="ms-1">
                      <CiGrid2H fontSize={24} />
                    </Button>
                  </div>
                </div>
                <FormControl
                  // variant="standard"
                  size="small"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    // inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>Filter</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Row className="row-gap">
                {loading
                  ? Array.from({ length: 8 }).map((_, index) => (
                      <Col xs={12} sm={12} md={6} lg={4} key={index}>
                        <ProductSkeleton />
                      </Col>
                    ))
                  : allproductsData?.map((product) => (
                      <Col xs={12} sm={12} md={6} lg={4} key={product.id}>
                        <ProductCard product={product} />
                      </Col>
                    ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </FilterSection>
  );
};

export default ProductsFilter;

const FilterSection = styled.section`
  .topbar {
    border-bottom: 2px solid var(--second-color);
    padding: 10px 0;
    margin-bottom: 15px;
  }

  .leftbar-filter {
    position: sticky;
    top: 75px;

    .filter-div {
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
      padding: 20px 15px;
      border-radius: 10px;

      label {
        display: block;
        margin-bottom: 15px;
        text-transform: capitalize;
      }
    }
  }
`;
