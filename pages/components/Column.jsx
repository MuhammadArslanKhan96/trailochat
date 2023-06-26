import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { GrDrag } from "react-icons/gr";
import Card from "./Card";
import { StrictModeDroppable } from "../../libs/StrictModeDroppable";
const Column = ({
  data,
  column,
  setData,
  setCreatePopup,
  key,
  keys,
  setPopup,
}) => {
  if (!data || !column) return;
  return (
    <Draggable draggableId={column.keys} index={keys}>
      {(provided, snapshot) => (
        <div
          className="flex items-start justify-center "
          ref={provided.innerRef}
          {...provided.draggableProps}
          key={key}
        >
          <div className="bg-[#DDDFE7] relative p-[16px] min-w-[16rem] max-w-[16rem] rounded-[4px]">
            <div
              className="text-[18px] flex items-center justify-between"
              isDragging={snapshot.isDragging}
            >
              <input
                className="bg-transparent text-[18px] w-48  z-10 outline-none focus:outline-none focus:border-none"
                type="text"
                value={column.topic || column.name}
                onChange={(e) => {
                  setData({
                    ...data,
                    subtopics: [
                      ...data.subtopics.filter((i) => i !== column),
                      {
                        ...column,
                        name: e.target.value,
                        topic: e.target.value,
                      },
                    ],
                  });
                }}
              />
              <div
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                <GrDrag />
              </div>
            </div>
            {column.subtopics && column.subtopics.length ? (
              <StrictModeDroppable droppableId={column.keys}>
                {(provided) => (
                  <div
                    className="flex flex-col overflow-y-scroll scrollStyle max-h-[60vh] mt-4 gap-y-3"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {column.subtopics
                      .sort(function (a, b) {
                        return b.index - a.index;
                      })
                      .map((item, idx) => (
                        <Card
                          column={column}
                          key={item.keys}
                          keys={item.keys}
                          item={item}
                          index={idx}
                          setPopup={setPopup}
                        />
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </StrictModeDroppable>
            ) : null}
            <div
              className="px-[24px] mt-3 cursor-pointer py-2 bg-blue-400 text-white rounded-lg"
              onClick={() => {
                setCreatePopup(column.topic || column.name);
              }}
            >
              <div className="flex justify-center gap-x-1 items-center">
                <p className="text-[14px] ">+</p> <p>Add a task</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
