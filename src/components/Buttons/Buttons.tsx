import React from "react";
import { useAppContext } from "../../context/AppContext";

const Buttons = () => {
  const { setSelectedPage, selectedPage, noTotalPage } = useAppContext();
  return (
    <div>
      <button
        onClick={() => {
          setSelectedPage((currentValue) => currentValue - 1);
        }}
        disabled={selectedPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => {
          setSelectedPage((currentValue) => currentValue + 1);
        }}
        disabled={selectedPage === noTotalPage}
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
