import React, { useState } from "react";
import Task from "./Task";

export default function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  console.log(tasksArray)

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
            const newArray = [...tasksArray]
            newArray.push({
              name: inputValue,
              isDone: false,
            }
            );
            setTasksArray(newArray)
          }}
        >
          Submit
        </button>

      <div> 
        { tasksArray.map((el, index) => <Task key={index} name={el.name} isDone={el.isDone} remove={function({index}) {
                const newArr = [...tasksArray];
                newArr.splice(newArr[{index}],1);
                setTasksArray(newArr)
              }} />)}
      </div>
    </div>
  );
}
