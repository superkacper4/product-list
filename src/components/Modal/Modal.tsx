import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { StyledButton } from "../Buttons/Buttons";
import { ListElement } from "../List/List";

const StyledModal = styled.div`
  background-color: ${(props) => props.color};
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 250px;
  min-height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
  border-radius: 15px;
`;

const Modal = ({
  product,
  setSelectedProduct,
}: {
  product: ListElement;
  setSelectedProduct: Dispatch<SetStateAction<ListElement | null>>;
}) => {
  return (
    <StyledModal color={product.color}>
      <StyledButton onClick={() => setSelectedProduct(null)}>X</StyledButton>
      <h3>{product.name}</h3>
      <p>ID: {product.id}</p>
      <p>{product.pantone_value}</p>
      <p>Year: {product.year}</p>
    </StyledModal>
  );
};

export default Modal;
