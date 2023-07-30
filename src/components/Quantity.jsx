import React from "react";
import { Button } from "@mui/material";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../redux/features/products/addToCartSlice";

const Quantity = ({ product }) => {
  const dispatch = useDispatch();

  const productQuantity = product.quantity || 1;

  return (
    <QuantitySection className="quantity">
      <Button
        variant="contained"
        onClick={() => dispatch(decrementQuantity(product.id))}
      >
        <AiOutlineMinus />
      </Button>
      <span>{productQuantity}</span>
      <Button
        variant="contained"
        onClick={() => dispatch(incrementQuantity(product.id))}
      >
        <AiOutlinePlus />
      </Button>
    </QuantitySection>
  );
};

export default Quantity;

const QuantitySection = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  text-align: center;
  color: var(--theme-color);
  border: 1px solid #eee;

  button {
    padding: 8px;
    background: #eee;
    color: var(--theme-color);
    box-shadow: none;

    &:hover {
      color: #eee;
    }
  }
  span {
    min-width: 35px;
    display: block;
    font-weight: 600;
  }
`;
