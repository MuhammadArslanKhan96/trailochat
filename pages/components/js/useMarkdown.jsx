import { DataContext } from "@/pages/_app";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const UseMarkdown = ({ children }) => {
  const [markdown, setMarkdown] = React.useState([]);
  const [showMap, setShowMap] = React.useState(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <DataContext.Provider
        value={{ markdown, setMarkdown, showMap, setShowMap }}
      >
        {children}
      </DataContext.Provider>
    </DndProvider>
  );
};
export default UseMarkdown;
