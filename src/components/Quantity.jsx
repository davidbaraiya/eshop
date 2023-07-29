import React from "react";
import { Button } from "@mui/material";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const Quantity = () => {
  return (
    <QuantitySection className="quantity">
      <Button variant="contained">
        <AiOutlineMinus />
      </Button>
      <span>5</span>
      <Button variant="contained">
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
    color: var(--black);
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
