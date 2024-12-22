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
    if (inputValue.trim() !== "") {
      setInputValue(""); // Clear input after submission
    }
    setValue([...value, inputValue]);
    setInputValue("");
  };

  const deletePerson = () => {
    setValue(value.filter((_: any, index: any) => index !== 0));
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="py-4 w-36 bg-red-700 text-xl text-white">
          {value.length}
        </div>
        <div className="flex items-center justify-center">
          {/* Input and Button */}
          <div>
            <Input
              className="py-2 border border-yellow-100"
              placeholder="type here... "
              value={inputValue ? inputValue : ""}
              onChange={(e: any) => setInputValue(e.target.value)}
              inputValue={inputValue}
              onKeyDown={(e: any) => {
                if (e.key === "Enter") handleClick();
              }}
            />

            <Button
              disabled={inputValue.trim() === ""}
              onClick={handleClick}
              className=" items-center justify-center bg-blue-500 text-white px-2 py-2"
            />
            <button className=" items-center justify-center bg-red-500 text-white px-2 py-2">
              delete
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          {/* Mapping the array value */}
          {/* table start */}
          <table>
            <thead>
              <tr className="py-2 bg-red-300 text-white mt-3 w-[20rem] flex justify-between px-2">
                <th>
                  {" "}
                  <input type="checkbox"></input>
                </th>
                <th>Name</th>
                <th>
                  {" "}
                  <button>delete</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {value.map((item: any, index: any) => (
                <tr
                  key={index}
                  className="py-2 bg-red-300 text-white mt-3 w-[20rem] flex justify-between px-2"
                >
                  <td>
                    <input type="checkbox" key={index}></input>
                  </td>
                  <td className=" truncate px-5">{item}</td>
                  <td>
                    {" "}
                    <button onClick={() => deletePerson(index)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/*table end  */}
        </div>
      </div>
    </>
  );
};

export default Main;
