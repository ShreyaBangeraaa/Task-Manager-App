import React from "react";
// import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import $ from "jquery";
import { useContext } from "react";
import NotesContext from "../context/NotesContext.js";

export default function Directory(props) {
  $(document).ready(function () {
    let i = 1;
    $(".directory").on("click", function () {
      i = i + 1;
      if (i % 2 === 1) {
        $(".dir").removeClass("bi-chevron-right");
        $(".dir").addClass("bi-chevron-down");
        document.getElementById("main").style.display = "block";
        document.getElementById("modal_button").style.display = "block";
      } else if (i % 2 === 0) {
        $(".dir").removeClass("bi-chevron-down");
        $(".dir").addClass("bi-chevron-right");
        document.getElementById("main").style.display = "none";
        document.getElementById("modal_button").style.display = "none";
      }
    });
  });
  const { directory } = useContext(NotesContext);

  return (
    <>
      <div className="justify-content-center  m-3">
        <div className=".fs-4 directory ">
          Directories
          <i className="bi dir bi-chevron-right"></i>
        </div>

        
              <p className="mx-3 main" id="main" style={{ display: "none" }}>
              {
          directory.map((dir)=>{
            return(
          <p>{dir.title}</p>
          )
          })
        }
        </p>
            

        <button
          type="button"
          className="btn border-dotted text-faded my-4"
          id="modal_button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
          data-bs-whatever="@getbootstrap"
          style={{display:'none'}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          New
        </button>

        <div
          className={`modal fade ${
            props.isDarkMode ? "dark-mode" : "light-mode"
          }`}
          id="exampleModal1"
          tabIndex="-1"
          aria-hidden="true"
          data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5 "
                  id="exampleModalLabel"
                  style={{ marginLeft: "25%" }}
                >
                  Create New Directory
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
                    <label htmlFor="title" className="col-form-label">
                      Title
                    </label>
                    <input type="text" className="form-control" id="title" />
                  </div>
                </form>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
