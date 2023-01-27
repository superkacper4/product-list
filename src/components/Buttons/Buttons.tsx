import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";

export const StyledButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

const Buttons = () => {
  const { setSelectedPage, selectedPage, noTotalPage } = useAppContext();
  return (
    <div>
      <StyledButton
        onClick={() => {
          setSelectedPage((currentValue) => currentValue - 1);
        }}
        disabled={selectedPage === 1}
      >
        Previous
      </StyledButton>
      <StyledButton
        onClick={() => {
          setSelectedPage((currentValue) => currentValue + 1);
        }}
        disabled={selectedPage === noTotalPage}
      >
        Next
      </StyledButton>
    </div>
  );
};

export default Buttons;
