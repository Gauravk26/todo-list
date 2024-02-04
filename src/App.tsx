// Import everything needed to use the `useQuery` hook
// import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import InputBar from "./InputBar.tsx";
import ItemsList from "./ItemsList.tsx";
import "./App.css";
import TodoContext from "./context/todoContext.tsx";

export default function App() {
  const [list, setList] = useState<String[]>([]);
  function handleList(input: String) {
    let prevList = [...list];
    prevList.push(input);
    setList(prevList);
  }
  return (
    <div className="todolist">
      <h2>To Do List</h2>
      <br />
      {/* <DisplayLocations /> */}
      <InputBar onHandle={handleList} />
      <TodoContext.Provider value ={list}>
        <ItemsList />
      </TodoContext.Provider>
    </div>
  );
}
