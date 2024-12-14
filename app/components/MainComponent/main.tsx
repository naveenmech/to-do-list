"use client";
import { useState } from "react";
import Button from "./button";
import Input from "./input";
interface InputProps {
  inputValue?: string;
  value?: string;
  setInputValue?: String;
}

const Main: React.FC<InputProps> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [value, setValue] = useState<any>([]);

  console.log("inputValue", inputValue);
  console.log("value", value);
  const handleClick = () => {
    setValue([...value, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          {/* Input and Button */}
          <div>
            <Input
              className="py-2 border border-yellow-100"
              placeholder="hello"
              value={inputValue ? inputValue : ""}
              onChange={(e: any) => setInputValue(e.target.value)}
              inputValue={inputValue}
            />

            {inputValue ? (
              <Button
                onClick={handleClick}
                className=" items-center justify-center bg-blue-500 text-white px-2 py-2"
              />
            ) : (
              <button className=" items-center justify-center bg-blue-500 text-white px-2 py-2 cursor-not-allowed">
                add
              </button>
            )}
          </div>
        </div>
        <div className=" flex items-center justify-center">
          {/* Mapping the array value */}
          <ul>
            {value.map((item: any, index: any) => (
              <li
                key={index}
                className="py-2 bg-red-300 text-white mt-3 w-[20rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
