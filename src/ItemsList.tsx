import {useContext } from "react";
import TodoContext from "./context/todoContext";


export default function ItemsList() {
  const listValue: String[] = useContext(TodoContext);
  return (
    <div>
      <h2>List of Items</h2>
      {(listValue ).map((iter, index) => {
        return <div key={index}>{iter}</div>;
      })}
    </div>
  );
}
