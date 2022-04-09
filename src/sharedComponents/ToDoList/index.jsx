import React, { useState } from "react";
import Task from "./Task";

export default function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [tasksArray, setTasksArray] = useState([]);
  const [index, setIndex] = useState(0)

  console.log(tasksArray)
  console.log(index)


  return (
    <div className="bg-light">
      <h1 className="text-center">ToDo List</h1>
        <div className="mb-3">
          <label className="form-label">
            Add new task
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="enter new task"
            onChange={function (event) {
              setInputValue(event.target.value);
            }}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={function () {
            tasksArray.push( // zkusit sem pushnout celou komponentu Task
              <Task key={index} name={inputValue} isDone={false} remove={function() {
                const newArr = [...tasksArray];
                newArr.splice(newArr[{index}],1);
                setTasksArray(newArr)
              }} />
            );
            setIndex(index+1)
          }}
        >
          Submit
        </button>

      <div> 
        {tasksArray}
      </div>
    </div>
  );
}
