import React, { useState } from "react";
import Task from "./Task";
import NavButton from '../NavButton'

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

    if (!newArray[index].isDone) {
      newArray[index].isDone = true;}
    else {
      newArray[index].isDone = false;
    }
    setTasksArray(newArray);
  };

  const removeTask = (index) => {
    const newArray = [...tasksArray];
    newArray.splice(index, 1);
    setTasksArray(newArray)
  }

  return (
    <div>
    <div className="bg-light mb-5 pt-5 pb-3">
      <h1 className="text-center mb-5">ToDo List</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control form-control-lg ms-3 me-5 w-97"
          placeholder="ENTER NEW TASK"
          onChange={function (event) {
            setInputValue(event.target.value);
          }}
        />
      </div>
      <button className="btn btn-lg btn-primary ms-3 mb-3" onClick={submitForm}>
        Submit
      </button>
      <div className="mt-3 ms-3 w-97">
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
      <NavButton name="HOME" link="/"/>
    </div>
  );
}
