import React, { useEffect, useRef } from "react";
import { parse } from "@/libs/commonParser";
import jsmind from "./js/jsmind";
import { useContext } from "react";
import DataContext from "./js/Context";
export default function Mindmap({ options, mind, data, topic }) {
  const { showMap, markdown, setMarkdown, setShowMap } =
    useContext(DataContext);
  const jm = useRef();
  useEffect(() => {
    setMarkdown(parse(data, topic));
  }, []);

  useEffect(() => {
    setShowMap(true);
  }, [markdown]);

  useEffect(() => {
    if (showMap) {
      jm.current = new jsmind(options);
      jm.current.show({
        ...mind,
        data: markdown,
        functions:{showMap,markdown,setMarkdown,setShowMap}
      });
    }
  }, [showMap]);
  return (
    <>
      {showMap && (
        <div
          id="jsmind_container"
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "720px",
            overflow: "hidden",
          }}
        ></div>
      )}
    </>
  );
}
