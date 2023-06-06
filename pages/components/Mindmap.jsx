import React, { useEffect, useRef, useState } from "react";

import { parse } from "@/libs/commonParser";
import jsmind from "./js/jsmind";

export default function Mindmap({ options, mind, showMap, data, topic }) {
  const [markdown, setMarkdown] = useState(data);
  const jm = useRef();
  useEffect(() => {
    const text = localStorage.getItem("text");
    if (text != null) setMarkdown(text);
  }, []);

  useEffect(() => {
    if (showMap) {
      jm.current = new jsmind(options);
      jm.current.show({
        ...mind,
        data: parse(markdown, topic),
      });
    }
  }, [showMap]);

  return (
    <>
      <div
        id="jsmind_container"
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "720px",
          overflow: "hidden",
        }}
      ></div>
    </>
  );
}
