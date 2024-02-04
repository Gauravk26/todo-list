import { useState, useRef, ChangeEvent } from "react";

// Define the type for the props of InputBar
interface InputBarProps {
  onHandle: (item: string) => void;
}

export default function InputBar({ onHandle }: InputBarProps) {
  const [listItem, setItem] = useState<string>(""); // Explicitly typing the state (optional here)
  const inputRef = useRef<HTMLInputElement>(null); // Specify the type of elements the ref will attach to

  // Correctly type the event parameter
  function onChangeText(event: ChangeEvent<HTMLInputElement>) {
    setItem(event.target.value);
  }

  function onAdd() {
    if (inputRef.current) { // Check if current is not null
      onHandle(listItem);
      inputRef.current.value = ''; // TypeScript knows this is an input element
    }
  }

  return (
    <div>
      <div className="inputBar">
        <input onChange={onChangeText} ref={inputRef}></input>
        <button className="add" onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
}
