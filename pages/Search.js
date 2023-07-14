import React from "react";
import { BsSend } from "react-icons/bs";

const Search = ({ topic, setTopic, handleClick }) => {
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-center self-center items-center"
      >
        <div className="bg-[#625BF74D] items-center flex justify-between border-[1px] border-[#625BF7] rounded-[15px] py-[10px] px-[30px] w-[60vw]">
          <input
            placeholder="Send a message"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="placeholder:text-[#625BF7] w-full text-[16px] font-bold bg-transparent border-none outline-none"
          />
          <button
            onClick={handleClick}
            className="text-[#625BF7] text-[20px] font-bold"
          >
            {" "}
            <BsSend size={30} />{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
