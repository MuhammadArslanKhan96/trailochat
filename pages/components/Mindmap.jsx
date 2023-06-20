import React, { useEffect, useRef } from "react";
import jsmind from "./js/jsmind";
import { useContext } from "react";
import { DataContext } from "../_app";
export default function Mindmap({
  options,
  mind,
  data,
  topic,
  select,
  setSelect,
}) {
  const { showMap, markdown, setMarkdown, setShowMap } =
    useContext(DataContext);
  const jm = useRef();
  const ref = useRef();
  useEffect(() => {
    setMarkdown(data);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setShowMap(true);
    // eslint-disable-next-line
  }, [markdown]);

  useEffect(() => {
    if (showMap) {
      jm.current = new jsmind(options);
      jm.current.show({
        ...mind,
        data: markdown,
        functions: {
          markdown,
          setMarkdown,
          setShowMap,
          setSelect,
        },
      });
    }
    // eslint-disable-next-line
  }, [showMap]);

  return (
    <>
      {showMap && (
        <div
          id="jsmind_container"
          ref={ref}
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "780px",
            overflow: "hidden",
          }}
        ></div>
      )}
      <button
        onClick={() => {
          jsmind.shoot(jsmind);
        }}
      >
        Export
      </button>
    </>
  );
}
