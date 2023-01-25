import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import List from "./components/List/List";

const queryClient = new QueryClient();

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 3;
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <List currentPage={currentPage} />
        <button
          onClick={() => {
            setCurrentPage((currentValue) => currentValue - 1);
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setCurrentPage((currentValue) => currentValue + 1);
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
