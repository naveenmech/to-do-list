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
  const [inputValue, setInputValue] = useState<string>(""); // Input field state
  const [value, setValue] = useState<any>([]); // Array of items (name list)
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set()); // Track selected items by index

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setValue([...value, inputValue]); // Add new item to value array
      setInputValue(""); // Clear the input field
    }
  };

  // Delete a specific item based on index
  const deletePerson = (index: number) => {
    setValue(value.filter((_: any, i: number) => i !== index));
    setSelectedItems(new Set()); // Clear selection after delete
  };

  // Handle checkbox changes for row-level checkboxes
  const handleCheckboxChange = (index: number) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(index)) {
      newSelectedItems.delete(index); // Unselect if already selected
    } else {
      newSelectedItems.add(index); // Select this item
    }
    setSelectedItems(newSelectedItems);
  };

  // Handle the select/deselect all checkbox
  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      const allIndexes: any = new Set(value.map((_: any, index: any) => index)); // Select all
      setSelectedItems(allIndexes);
    } else {
      setSelectedItems(new Set()); // Deselect all
    }
  };

  // Delete selected items
  const deleteSelectedItems = () => {
    setValue(value.filter((_: any, index: any) => !selectedItems.has(index)));
    setSelectedItems(new Set()); // Clear selection after delete
  };

  return (
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
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
            inputValue={inputValue}
            onKeyDown={(e: any) => {
              if (e.key === "Enter") handleClick();
            }}
          />

          <Button
            disabled={inputValue.trim() === ""}
            onClick={handleClick}
            className="items-center justify-center bg-blue-500 text-white px-2 py-2"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* table start */}
        <table>
          <thead>
            <tr className="py-2 bg-red-300 text-white mt-3 w-[20rem] flex justify-between px-2">
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAllChange} // Handle select all
                  checked={
                    selectedItems.size === value.length && value.length > 0
                  } // Check if all items are selected, only if data exists
                />
              </th>
              <th>Name</th>
              <th>
                <button onClick={deleteSelectedItems}>
                  {/*  Call delete for selected items */}
                  delete
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping the array value */}
            {value.map((item: any, index: number) => (
              <tr
                key={index}
                className="py-2 bg-red-300 text-white mt-3 w-[20rem] flex justify-between px-2"
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.has(index)} // Check if the current item is selected
                    onChange={() => handleCheckboxChange(index)} // Handle row checkbox click
                  />
                </td>
                <td className="truncate px-5">{item}</td>
                <td>
                  <button onClick={() => deletePerson(index)}>delete</button>
                  {/* Delete specific item */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* table end */}
      </div>
    </div>
  );
};

export default Main;
