import React, { useEffect, useRef, useState } from "react";

import { parse } from "@/libs/commonParser";
import jsmind from "./js/jsmind";
import { Configuration, OpenAIApi } from "openai";

export default function Mindmap({ options, mind, data, topic }) {
  const [showMap, setShowMap] = useState(true);
  const [markdown, setMarkdown] = useState(parse(data, topic));
  const jm = useRef();
  useEffect(() => {
    const text = localStorage.getItem("text");
    if (text != null) setMarkdown(text);
  }, []);
  const handleClick = async (topic) => {
    try {
      const configuration = new Configuration({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Create a mind map for ${topic} without hashtags and numbers in markdown format`,
          },
        ],
      });
      const str = response.data.choices[0].message.content;
      return str;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (showMap) {
      jm.current = new jsmind(options);
      jm.current.show({
        ...mind,
        data: markdown,
      });
    }
  }, [showMap]);

  const element = document.getElementsByTagName("jmnode");
  useEffect(() => {
    let text = null;
    let btn = document.createElement("button");
    btn.innerHTML = "+";
    btn.addEventListener("click", async function () {
      let arr2 = [];
      const newString = await handleClick(text);
      let generatedData = parse(newString, topic).filter(
        (i) => i.id !== "root"
      );
      let parentid = markdown.filter(
        (i) => i.topic === text || i.name === text
      )[0].id;
      for (var obj of generatedData) {
        arr2.push({
          ...obj,
          parentid: obj.parentid === "root" ? parentid : obj.parentid,
        });
        if (generatedData.length === arr2.length) {
          let variables = [...arr2, ...markdown];
          setMarkdown(variables);
          setShowMap(false);

          setTimeout(() => {
            setShowMap(true);
          }, 300);
        }
      }
    });
    document.addEventListener("click", function () {
      if (element.length) {
        for (var elem of element) {
          if (elem.classList.contains("selected")) {
            text = elem.innerHTML
              .split("<button>+</button>")[0]
              .replace("    ", "");
            elem.innerHTML = `${
              elem.innerHTML.split("<button>+</button>")[0]
            }    `;
            elem.appendChild(btn);
          } else {
            elem.innerHTML = elem.innerHTML.split("<button>+</button>")[0];
          }
        }
      }
    });
  }, []);
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
