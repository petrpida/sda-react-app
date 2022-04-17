import React, { useState } from "react";
import Task from "./Task";

export default function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  const submitForm = () => {
    if(!inputValue) {
      alert("You must fill out the task!")
      return
    }

    const newArray = [...tasksArray];
    newArray.push({
      name: inputValue,
      isDone: false
    });
    setTasksArray(newArray);
  };

  const markTask = (index) => {
    const newArray = [...tasksArray];
    console.log(index)

    newArray[index].isDone = true;
    setTasksArray(newArray);
  };

  const removeTask = (index) => {
    const newArray = [...tasksArray];
    newArray.splice(index, 1);
    setTasksArray(newArray)
  }

  return (
    <div className="bg-light">
      <h1 className="text-center">ToDo List</h1>
      <div className="mb-3">
        <label className="form-label">Add new task</label>
        <input
          type="text"
          className="form-control"
          placeholder="enter new task"
          onChange={function (event) {
            setInputValue(event.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary" onClick={submitForm}>
        Submit
      </button>

      <div>
        {tasksArray.map((el, index) => (
          <Task
            key={index}
            task={el}
            index={index}
            markTask={markTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}
