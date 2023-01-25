import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

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

const List = ({ currentPage }: { currentPage: number }) => {
  const { data } = useQuery<ListData>(["productList", currentPage], () => {
    // fetch("https://reqres.in/api/products/?page=2", {
    return fetch(
      `https://reqres.in/api/products/?per_page=5&page=${currentPage}`,
      {
        method: "GET",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log("Success");
        return data;
      })
      .catch((error) => {
        console.error("Error");
      });
  });

  console.log(data);
  return (
    <div>
      {data?.data.map((product) => (
        <StyledListElement key={product.id} color={product.color}>
          {product.name}
        </StyledListElement>
      ))}
    </div>
  );
};

export default List;
