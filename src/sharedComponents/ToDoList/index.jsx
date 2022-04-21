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
    <div>
    <div className="bg-light mb-5">
      <h1 className="text-center">ToDo List</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control ms-3"
          placeholder="enter new task"
          onChange={function (event) {
            setInputValue(event.target.value);
          }}
        />
      </div>
      <button className="btn btn-lg btn-primary ms-3 mb-3" onClick={submitForm}>
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
      <NavButton name="HOME" link="/"/>
    </div>
  );
}
