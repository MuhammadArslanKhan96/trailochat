import React, { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { GrDrag } from "react-icons/gr";
import { StrictModeDroppable } from "../StrictModeDroppable";
const Column = ({
  data,
  column,
  setData,
  setCreatePopup,
  key,
  keys,
  setPopup,
}) => {
  const [subsubtopicIds, setSubsubtopicIds] = useState(
    data.subtopics.filter((i) => i.keys === column)[0].subtopics
  );
  let column2 = data.subtopics.filter((i) => i.keys === column)[0];
  useEffect(() => {
    setSubsubtopicIds(column2.subtopics);
  }, [column2]);

  useEffect(() => {
    setData((pre) => ({
      ...pre,
      subtopics: [
        ...pre.subtopics.filter((i) => i.keys !== column),
        {
          ...pre.subtopics.filter((i) => i.keys === column)[0],
          subtopics: subsubtopicIds,
        },
      ],
    }));
  }, [subsubtopicIds]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    let newOrder = subsubtopicIds;
    if (result.combine) {
      if (result.type === "CARD") {
        const shallow = [...subsubtopicIds];
        shallow.splice(result.source.index, 1);
        newOrder = shallow;
        return;
      }
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (result.type === "CARD") {
      const reorderedorder = reorder(newOrder, source.index, destination.index);

      setSubsubtopicIds(reorderedorder);

      return;
    }
  };
  return (
    <Draggable draggableId={column} index={keys}>
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
                value={column2.topic || column2.name}
                onChange={(e) => {
                  setData({
                    ...data,
                    subtopics: [
                      ...data.subtopics.filter(
                        (i) =>
                          i.topic !== column2.topic ||
                          i.name !== column2.name ||
                          i !== column2
                      ),
                      {
                        ...data.subtopics.filter(
                          (i) =>
                            i.topic === column2.topic ||
                            i.name === column2.name ||
                            i === column2
                        )[0],
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
            <DragDropContext onDragEnd={onDragEnd}>
              <StrictModeDroppable
                droppableId="card"
                type="CARD"
                direction="vertical"
              >
                {(provided) => (
                  <div
                    className="flex flex-col overflow-y-scroll scrollStyle max-h-[60vh] mt-4 gap-y-3"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {subsubtopicIds && subsubtopicIds.length ? (
                      <>
                        {subsubtopicIds.map((item, index) => (
                          <Card
                            text={item.topic || item.name}
                            column={column2}
                            key={index}
                            keys={index}
                            item={item}
                            setPopup={setPopup}
                          />
                        ))}
                      </>
                    ) : null}
                  </div>
                )}
              </StrictModeDroppable>
            </DragDropContext>
            <div
              className="px-[24px] mt-3 cursor-pointer py-2 bg-blue-400 text-white rounded-lg"
              onClick={() => {
                setCreatePopup(column2.topic || column2.name);
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
