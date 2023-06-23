import Image from "next/image";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ item, column, key, setPopup, keys, text }) => {
  if (!column || !text || !item) return;
  return (
    <Draggable draggableId={text} index={keys}>
      {(provided, snapshot) => (
        <div
          className="px-4 py-2 bg-white rounded-lg cursor-pointer"
          onClick={() => {
            setPopup([column, item]);
          }}
          key={key}
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          {...provided.dragHandleProps}
        >
          <div className="flex flex-col gap-y-[14px]">
            {item && item.cover ? (
              <div className="flex items-center justify-center">
                <Image
                  src={item.cover}
                  width={50}
                  height={50}
                  className="w-full h-w-full "
                  alt=""
                />
              </div>
            ) : null}
            <p className="text-[14px] break-words max-w-[12rem] text-[#1B1C1D]">
              {item && (item.topic || item.name)}
            </p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
