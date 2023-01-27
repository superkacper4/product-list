import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import List from "./components/List/List";
import { AppContextComponent } from "./context/AppContext";
import Buttons from "./components/Buttons/Buttons";
import StyledWrapper from "./components/StyledWrapper/StyledWrapper";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextComponent>
        <StyledWrapper>
          <List />
          <Buttons />
        </StyledWrapper>
      </AppContextComponent>
    </QueryClientProvider>
  );
}

export default App;
