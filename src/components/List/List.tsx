import React from "react";
import { useQuery } from "react-query";

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

const List = () => {
  const { data } = useQuery<ListData>("productList", () => {
    // fetch("https://reqres.in/api/products/?page=2", {
    return fetch("https://reqres.in/api/products", {
      method: "GET",
    })
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
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default List;
