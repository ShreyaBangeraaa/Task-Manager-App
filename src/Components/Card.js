import React, { useContext } from "react";
import "../Styles/Card.css";
import NotesContext from "../NotesContext/NoteContext";

const Card = (props) => {
  const context = useContext(NotesContext);
  const { deleteTask } = context;
  const { updateTask, task } = props;

  return (
    <>
      <div
        className={`m-3 outerborder ${props.isListView && "list"} ${
          props.isDarkMode ? "dark-mode" : "light-mode"
        }`}
        data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
      >
        <span className="directorybutton">{props.dir}</span>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {props.description}
            </h6>
            <time className="mt-auto flex w-full">
              <i className="bi bi-calendar-check mx-2"></i>
              {props.date}
            </time>
            <div className="row d-flex my-3">
              
              <button
                type="button"
                className={`btn col-6 ${
                  props.completed ? "btn-primary" : "btn-light-red"
                }`}
                id="completed"
                onClick={() => {
                  props.toggleStatus(props.index);
                }}
              >
                {props.completed ? "Completed" : "Incomplete"}
              </button>

              <i
                className={`fa star clickable ${props.important ? "fa-star" : "fa-star-o"} my-2 col-2 fs-4`}
                onClick={() => {
                  props.toggleFav(props.index);
                }}
                id={`${props.id}`}
              ></i>
              <i
                className={`fa fa-trash clickable my-2 col-2 fs-4`}
                aria-hidden="true"
                onClick={() => {
                  deleteTask(props.id);
                }}
              ></i>
              <i
                className="fa fa-edit clickable my-2 col-2 fs-4"
                aria-hidden="true"
                onClick={() => updateTask(task)}
              ></i>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
