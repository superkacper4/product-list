import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface AppContextType {
  noTotalPage: number;
  setNoTotalPage: Dispatch<SetStateAction<number>>;
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>;
}

export const AppContext = createContext<AppContextType>({
  noTotalPage: 1,
  setNoTotalPage: () => {},
  selectedPage: 1,
  setSelectedPage: () => {},
});

export const AppContextComponent = ({ children }: { children: ReactNode }) => {
  const [noTotalPage, setNoTotalPage] = useState<number>(1);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  return (
    <AppContext.Provider
      value={{ noTotalPage, setNoTotalPage, selectedPage, setSelectedPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const value = useContext(AppContext);
  return value;
};
