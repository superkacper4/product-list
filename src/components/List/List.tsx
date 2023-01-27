import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";

interface ListElement {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

interface ListData {
  data: ListElement[];
  page: number;
  per_page: number;
  support: any;
  total: number;
}

interface ListElementProps {
  color: string;
}

const StyledListElement = styled.div<ListElementProps>`
  background-color: ${(props) => props.color};
`;

const List = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const value = useAppContext();
  const { setNoTotalPage, selectedPage } = value;

  const { data } = useQuery<ListData>(["productList", selectedPage], () => {
    return fetch(
      `https://reqres.in/api/products/?per_page=5&page=${selectedPage}`,
      {
        method: "GET",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setNoTotalPage(data.total_pages);
        return data;
      })
      .catch((error) => {
        console.error("Error");
      });
  });

  return (
    <div>
      {data?.data.map((product) => (
        <StyledListElement
          key={product.id}
          color={product.color}
          onClick={() => setSelectedProduct(product.id)}
        >
          {product.name}
        </StyledListElement>
      ))}
      {selectedProduct &&
        createPortal(
          <div>
            <button onClick={() => setSelectedProduct(null)}>X</button>
            {selectedProduct}
          </div>,
          document.body
        )}
    </div>
  );
};

export default List;
