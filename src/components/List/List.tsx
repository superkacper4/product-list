import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import Modal from "../Modal/Modal";

export interface ListElement {
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
  padding: 5px;
  margin: 2px 0;
  text-align: center;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: contrast(200%);
  }
`;

const List = () => {
  const [selectedProduct, setSelectedProduct] = useState<ListElement | null>(
    null
  );
  const [idFilter, setIdFilter] = useState<number>(0);

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
      <input
        type="number"
        value={idFilter}
        onChange={(e) => setIdFilter(Number(e.target.value))}
      />
      {data?.data
        ?.filter((product) => {
          if (idFilter) return Number(product.id) === idFilter;
          else return true;
        })
        ?.map((product) => (
          <StyledListElement
            key={product.id}
            color={product.color}
            onClick={() => setSelectedProduct(product)}
          >
            {product.name}
          </StyledListElement>
        ))}
      {selectedProduct &&
        createPortal(
          <Modal
            product={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />,
          document.body
        )}
    </div>
  );
};

export default List;
