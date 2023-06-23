import React, { useRef, useState, useContext } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/libs/firebase";
import { UserContext } from "../_app";
import Image from "next/image";

const TrelloPopup = ({ popup, setData, data, setPopup }) => {
  const [topic, setTopic] = useState(
    popup && popup.length ? popup[1].topic || popup[1].name : ""
  );
  const coverRef = useRef();
  const attatchmentRef = useRef();
  const [description, setDescription] = useState("");
  const { user } = useContext(UserContext);

  if (!popup || (popup && !popup.length)) return;
  return (
    <div className="p-5">
      <div
        className={"flex flex-col " + (popup[1].description ? "mb-5" : "mb-24")}
      >
        <textarea
          value={topic}
          rows={1}
          onChange={(e) => {
            setTopic(e.target.value);
            setData((pre) => ({
              ...pre,
              subtopics: [
                ...pre.subtopics.filter((i) => i.topic !== popup[0].topic),
                {
                  ...popup[0],
                  subtopics: [
                    ...popup[0].subtopics.filter(
                      (i) => i.topic !== popup[1].topic
                    ),
                    {
                      ...popup[0].subtopics.filter(
                        (i) => i.topic !== popup[1].topic
                      )[0],
                      topic: e.target.value,
                    },
                  ],
                },
              ],
            }));
          }}
          className="max-h-fit resize-none  scrollStyle break-words outline-none focus:outline-none border-none  focus:border focus:border-solid focus:border-blue-400 text-2xl font-medium"
        />
        <p className="select-none">
          in list{" "}
          <span className="font-medium underline cursor-pointer">
            {popup[0].topic || popup[0].name}
          </span>
        </p>
      </div>

      {popup[1].description ? (
        <div className="mb-12">
          <p className="text-[14px] break-words w-full">
            {popup[1].description}
          </p>
        </div>
      ) : null}

      <div className="flex justify-between items-start">
        <div className="flex flex-col w-full relative">
          <p className="select-none text-[18px] font-medium">Description</p>
          <textarea
            rows={4}
            className="resize-none outline-none focus:outline-none border-none  focus:border focus:border-solid focus:border-blue-400 text-base bg-black/[10%] placeholder:text-black px-4 py-2 rounded-md w-full"
            placeholder="Add more detailed description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {description && (
            <button
              onClick={() => {
                setData((pre) => ({
                  ...pre,
                  subtopics: [
                    ...pre.subtopics.filter((i) => i.topic !== popup[0].topic),
                    {
                      ...popup[0],
                      subtopics: [
                        ...popup[0].subtopics.filter(
                          (i) => i.topic !== popup[1].topic
                        ),
                        {
                          ...popup[0].subtopics.filter(
                            (i) => i.topic === popup[1].topic
                          )[0],
                          description: description,
                        },
                      ],
                    },
                  ],
                }));

                popup[1].description = description;
              }}
              className="outline-none absolute bottom-2 right-2 border-none bg-blue-500 w-fit h-fit px-4 py-2 rounded text-white"
            >
              Save
            </button>
          )}
          <p className="select-none text-[18px] mt-3 font-semibold">
            Attachments
          </p>
          <p className="select-none text-base mt-4 text-center px-8 py-12 bg-black/10 rounded font-medium">
            {popup[1].attatchments && popup[1].attatchments.length ? (
              <div className="flex flex-col gap-y-4">
                {popup[1].attatchments.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center bg-white px-4 py-16 cursor-pointer"
                    onClick={async () => {
                      const res = await fetch(item).then((r) => r.blob());
                      var a = document.createElement("a");
                      document.body.appendChild(a);
                      a.style = "display: none";
                      let url = URL.createObjectURL(res);
                      a.href = url;
                      a.download = item.split("o/")[1].split("?")[0];
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                  >
                    {item.includes(".gif") ||
                    item.includes(".jpg") ||
                    item.includes(".png") ||
                    item.includes(".avif") ||
                    item.includes(".webp") ||
                    item.includes(".apng") ? (
                      <Image
                        src={item}
                        alt=""
                        width={50}
                        height={50}
                        className="w-1/2 h-1/2"
                      />
                    ) : (
                      <div>{item.split("o/")[1].split("?")[0]}</div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              "No Attachments Yet!"
            )}
          </p>
        </div>
        <div className="w-[30%] px-5">
          <h2 className="text-lg font-bold">Add to card</h2>
          <div className="flex justify-start gap-y-2 items-start flex-col">
            <button
              onClick={() => attatchmentRef.current.click()}
              className="px-4 py-2 bg-black/10 hover:bg-black/[15%] rounded w-full text-start text-base font-medium"
            >
              Attachment
            </button>
            <button
              onClick={() => coverRef.current.click()}
              className="px-4 py-2 bg-black/10 hover:bg-black/[15%] rounded w-full text-start text-base font-medium"
            >
              Cover
            </button>
            <input
              type="file"
              accept="image/*"
              ref={coverRef}
              onChange={async (e) => {
                const imageRef = ref(
                  storage,
                  `${user.id}/${data.mapId}/${e.target.files[0].name}`
                );
                await uploadBytes(imageRef, e.target.files[0]).then(
                  (snapshot) => {
                    getDownloadURL(snapshot.ref).then((img) => {
                      popup[1].cover = img;

                      setData((pre) => ({
                        ...pre,
                        subtopics: [
                          ...pre.subtopics.filter(
                            (i) => i.topic !== popup[0].topic
                          ),
                          {
                            ...popup[0],
                            subtopics: [
                              ...popup[0].subtopics.filter(
                                (i) => i.topic !== popup[1].topic
                              ),
                              {
                                ...popup[0].subtopics.filter(
                                  (i) => i.topic === popup[1].topic
                                )[0],
                                cover: img,
                              },
                            ],
                          },
                        ],
                      }));
                    });
                  }
                );
              }}
              className="hidden"
            />
            <input
              type="file"
              multiple
              ref={attatchmentRef}
              onChange={async (e) => {
                for (var image of Array.from(e.target.files)) {
                  const imageRef = ref(
                    storage,
                    `${user.id}/${data.mapId}/${image.name}`
                  );
                  await uploadBytes(imageRef, image).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((img) => {
                      popup[1].attatchments =
                        popup[1].attatchments && popup[1].attatchments.length
                          ? [...popup[1].attatchments, img]
                          : [img];
                      setData((pre) => ({
                        ...pre,
                        subtopics: [
                          ...pre.subtopics.filter(
                            (i) => i.topic !== popup[0].topic
                          ),
                          {
                            ...popup[0],
                            subtopics: [
                              ...popup[0].subtopics.filter(
                                (i) => i.topic !== popup[1].topic
                              ),
                              {
                                ...popup[0].subtopics.filter(
                                  (i) => i.topic === popup[1].topic
                                )[0],
                                attatchments:
                                  popup[1].attatchments &&
                                  popup[1].attatchments.length
                                    ? [...popup[1].attatchments, img]
                                    : [img],
                              },
                            ],
                          },
                        ],
                      }));
                    });
                  });
                }
              }}
              className="hidden"
            />
          </div>
          <button
            onClick={() => {
              setData((pre) => ({
                ...pre,
                subtopics: [
                  ...pre.subtopics.filter((i) => i.topic !== popup[0].topic),
                  {
                    ...popup[0],
                    subtopics: popup[0].subtopics.filter(
                      (i) => i.topic !== popup[1].topic
                    ),
                  },
                ],
              }));
              setPopup(undefined);
            }}
            className="px-4 mt-4 py-2 bg-red-500 text-white hover:bg-red-400 rounded w-full text-start text-base font-medium"
          >
            Remove Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrelloPopup;
