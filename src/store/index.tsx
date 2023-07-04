"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  ChangeEvent,
} from "react";

type ContextProps = {
  isActive: number;
  handleActive: (id: number) => void;
  searchTerm: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Context = createContext<ContextProps | null>(null);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleActive = (id: number) => {
    setIsActive((prevState) => (prevState === id ? prevState : id));
  };

  return (
    <Context.Provider
      value={{ isActive, handleActive, searchTerm, handleInputChange }}
    >
      {children}
    </Context.Provider>
  );
}

export function useGlobalContext() {
  const contextValue = useContext<ContextProps | null>(Context);
  if (!contextValue) {
    throw new Error("Something went wrong!!!");
  }

  return contextValue;
}
