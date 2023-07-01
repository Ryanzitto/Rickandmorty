import { createContext, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [sectionAtual, setSectionAtual] = useState("Home");
  const scroll = () => {
    console.log("funcionando o context");
  };
  return (
    <ScrollContext.Provider value={{ sectionAtual, scroll }}>
      {children}
    </ScrollContext.Provider>
  );
};
