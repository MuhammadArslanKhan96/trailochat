import React, { useEffect, useRef, useState } from "react";

import { parse } from "@/libs/commonParser";
import jsmind from "./js/jsmind";

const mind = {
  version: 1,
  meta: {
    name: "demo",
    author: "hizzgdev@163.com",
    version: "0.2",
  },
  format: "node_array",
  data: [],
};
const options = {
  container: "jsmind_container",
  theme: "clouds",
  editable: true,
  support_html: true,
  view: {
    draggable: true,
    hide_scrollbars_when_draggable: true,
  },
};
export default function Mindmap({ topic, data, load }) {
  const jm = useRef();
  useEffect(() => {
    if (!load && data) {
      jm.current = new jsmind(options);
      jm.current.show({
        ...mind,
        data: parse(data, topic),
      });
    }
    // eslint-disable-next-line
  }, [load]);

  return (
    <>
      <div
        id="jsmind_container"
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "720px",
          overflow: "scroll",
        }}
      ></div>
    </>
  );
}
