import { DataContext } from "@/pages/_app";
import React from "react";

const UseMarkdown = ({ children }) => {
  const [markdown, setMarkdown] = React.useState([]);
  const [showMap, setShowMap] = React.useState(false);
  return (
    <DataContext.Provider
      value={{ markdown, setMarkdown, showMap, setShowMap }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default UseMarkdown;
