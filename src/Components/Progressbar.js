import React from "react";
// import Button from "./Button";
import { useContext } from "react";
import NotesContext from "../NotesContext/NoteContext.js";
import '../App.css';


export default function Progressbar() {
  const { tasks } = useContext(NotesContext);
  var completed = 0;
  const array1 = [];

  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
      completed++;
    } else {
      // incomplete++;
      var date = tasks[i].date;

      var date1 = new Date().toISOString().split("T");

      var compValue = date.localeCompare(date1[0].toString());
      console.log("Value " + compValue);
      console.log(typeof compValue);

      if (compValue <= 0) {
        array1.push(tasks[i]);
      }
    }
  }

  const handleClick = () => {
    console.log(array1);
  };
  var total = i;
  return (
    <>
      <span className="my-4 py-4 d-flex justify-content-between ">
        <span onClick={handleClick}>All Tasks</span>
        {completed}/{total}
      </span>

      <div
        className="progress my-2"
        role="progressbar"
        aria-label="Info example"
        aria-valuemin="0"
        aria-valuemax="100"
        // style={{width:"80%"}}
      >
        <div
          className="progress-bar custom-progress-bar"
          style={{ width: `${(completed / total) * 100}%` }}
        ></div>
      </div>
      <hr />

      <p>{array1.length === 0 ? "No" : array1.length} tasks for today</p>
      {array1.map((arr) => {
        return <p className="text text-danger">{arr.title} is not Completed</p>;
      })}
    </>
  );
}
