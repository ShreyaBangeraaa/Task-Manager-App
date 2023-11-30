import React, { useState, useRef } from "react";
import "../Styles/CenterSection.css";
import "../Styles/NewTaskModel.css";
import Card from "./Card";
import { useContext } from "react";

import NotesContext from "../NotesContext/NoteContext.js";

export default function CenterSection(props) {
  // eslint-disable-next-line
  const { tasks, addTask,setTasks, editTask, toggleFav, toggleStatus } =
    useContext(NotesContext);
  const array1 = [];
  const ref = useRef(null);
  var date = new Date().toDateString();
  const [mainArray, setMainArray] = useState(array1);
  const [list, setlist] = useState(false);
  const [id, setId] = useState(3);
  const [search, setSearch] = useState(false);

  const listView = () => {
    setlist(true);
    console.log(list);
  };

  if (props.navlink === "today") {
    for (var i = 0; i < tasks.length; i++) {
      var date2 = tasks[i].date;

      var date1 = new Date().toISOString().split("T");

      var compValue = date2.localeCompare(date1[0].toString());
      console.log("Value " + compValue);

      if (compValue === 0) {
        array1.push(tasks[i]);
      }
    }
  } else if (props.navlink === "" || props.navlink === "all") {
    for (i = 0; i < tasks.length; i++) {
      array1.push(tasks[i]);
    }
  } else if (props.navlink === "important") {
    for (i = 0; i < tasks.length; i++) {
      if (tasks[i].important === true) {
        array1.push(tasks[i]);
      }
    }
  } else if (props.navlink === "completed") {
    for (i = 0; i < tasks.length; i++) {
      if (tasks[i].completed === true) {
        array1.push(tasks[i]);
      }
    }
  } else if (props.navlink === "incomplete") {
    for (i = 0; i < tasks.length; i++) {
      if (tasks[i].completed === false) {
        array1.push(tasks[i]);
      }
    }
  }

  const handleSearch = (searchKey) => {
    setSearch(true);
    console.log(array1);
    let mainArray = array1.filter((ele) => {
      return ele.title.includes(searchKey);
    });
    setMainArray(mainArray);
  };
  const gridView = () => {
    setlist(false);
  };
  const [task, setTask] = useState({
    title: "",
    important: false,
    description: "",
    date: "",
    dir: "Main",
    completed: false,
    id: "",
  });
  const [task1, setTask1] = useState({
    etitle: "",
    eimportant: false,
    edescription: "",
    edate: "",
    edir: "Main",
    ecompleted: false,
    id: "",
  });

  const updateTask = (currentNote) => {
    ref.current.click();
    setTask1({
      id: currentNote.id,
      etitle: currentNote.title,
      eimportant: currentNote.important,
      edescription: currentNote.description,
      edate: currentNote.date,
      edir: currentNote.dir,
      ecompleted: currentNote.completed,
    });
  };

  const handleClick = () => {
    console.log("Clicked");
    addTask(
      id,
      task.title,
      task.description,
      task.date,
      task.dir,
      task.important,
      task.completed
    );
    setId(tasks.length + id + 1);
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";

    document.getElementById("important").checked = false;
    document.getElementById("completed").checked = false;
  };
  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  //Edit functions
  const onChange_Edit = (e) => {
    setTask1({ ...task1, [e.target.name]: e.target.value });
  };

  const handleBlur = () => {
    setSearch(false);
  };

  const handleEditClick = () => {
    editTask(
      task1.id,
      task1.etitle,
      task1.edescription,
      task1.edate,
      task1.edir,
      task1.eimportant,
      task1.ecompleted
    );
    document.getElementById("etitle").value = " ";
    document.getElementById("edate").value = "";
    document.getElementById("edescription").value = "";
  };

  const handleDelete=()=>{
    setTasks([])
  }

  return (
    <>
      <div className="row d-flex">
        <form className="d-flex col-5 my-4 nosubmit" role="search">
          <input
            className="form-control me-2 nosubmit "
            type="search"
            placeholder="Search Task"
            aria-label="Search"
            data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
            onInput={(event) => handleSearch(event.target.value)}
            onBlur={handleBlur}
          />
        </form>
        <span className="col my-4"> {`${date}`}</span>
        <div className="col-1 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            // onClick={onClick}
            className="bi bi-bell-fill "
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
        </div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-primary text-center align-center my-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            Add a Task
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={handleDelete}
          >
            Delete All Data
          </button>

          <div
            className={`modal fade ${
              props.isDarkMode ? "dark-mode " : "light-mode "
            }`}
            id="exampleModal2"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add a Task
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="task-name" className="col-form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Eg : Study for the exam"
                        name="title"
                        onChange={onChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="task-date" className="col-form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        placeholder="DD-MM-YYYY"
                        name="date"
                        onChange={onChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="task-description"
                        className="col-form-label"
                      >
                        Description (Optional)
                      </label>
                      <textarea
                        type="text-area"
                        className="form-control"
                        id="description"
                        placeholder="Eg : Study for the exam"
                        name="description"
                        onChange={onChange}
                      />
                    </div>

                    <div className="mb-3 input-group mx-3">
                      <input
                        className="mx-3 checkbox"
                        type="checkbox"
                        name="important"
                        id="important"
                        onChange={onChange}
                      />

                      <span className="text">Mark as important</span>
                    </div>
                    <div className="mb-3 input-group mx-3">
                      <input
                        className="mx-3 checkbox"
                        type="checkbox"
                        id="completed"
                        name="completed"
                        onChange={onChange}
                      />

                      <span className="text">Mark as Completed</span>
                    </div>
                  </form>
                </div>
                <div className="modal-footer justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex my-5 row">
          <div className="col-6 align-self-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list-task mx-2"
              viewBox="0 0 16 16"
              onClick={listView}
            >
              <path
                fillRule="evenodd"
                d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
              />
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
              <path
                fillRule="evenodd"
                d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-grid mx-2"
              viewBox="0 0 16 16"
              onClick={gridView}
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
            </svg>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary text-center align-center my-4 d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal3"
          ref={ref}
        >
          Edit Task
        </button>

        <div
          className={`modal fade ${
            props.isDarkMode ? "dark-mode " : "light-mode "
          }`}
          id="exampleModal3"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit the Task
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="task-name" className="col-form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      placeholder="Eg : Study for the exam"
                      name="etitle"
                      value={task1.etitle}
                      onChange={onChange_Edit}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="task-date" className="col-form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="edate"
                      placeholder="DD-MM-YYYY"
                      name="edate"
                      value={task1.edate}
                      onChange={onChange_Edit}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="task-description"
                      className="col-form-label"
                    >
                      Description (Optional)
                    </label>
                    <textarea
                      type="text-area"
                      className="form-control"
                      id="edescription"
                      placeholder="Eg : Study for the exam"
                      name="edescription"
                      onChange={onChange_Edit}
                      value={task1.edescription}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    handleEditClick();
                    updateTask(task1);
                  }}
                >
                  Edit Task
                </button>
              </div>
            </div>
          </div>
        </div>

        {search === true
          ? mainArray.map((task, index) => {
              return (
                <Card
                  index={index}
                  toggleFav={toggleFav}
                  toggleStatus={toggleStatus}
                  isListView={list}
                  isDarkMode={props.isDarkMode}
                  title={task.title}
                  important={task.important}
                  description={task.description}
                  date={task.date}
                  dir={task.dir}
                  completed={task.completed}
                  id={task.id}
                  updateTask={updateTask}
                  task={task}
                />
              );
            })
          : array1.map((task, index) => {
              return (
                <Card
                  index={index}
                  toggleFav={toggleFav}
                  toggleStatus={toggleStatus}
                  isListView={list}
                  isDarkMode={props.isDarkMode}
                  title={task.title}
                  important={task.important}
                  description={task.description}
                  date={task.date}
                  dir={task.dir}
                  completed={task.completed}
                  id={task.id}
                  updateTask={updateTask}
                  task={task}
                />
              );
            })}
      </div>
    </>
  );
}
