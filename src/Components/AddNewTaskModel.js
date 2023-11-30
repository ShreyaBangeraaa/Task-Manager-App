import React from "react";

const AddNewTaskModal = (props) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary text-center align-center m-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        Add a Task
      </button>

      <div
        className={`modal fade ${
          props.isDarkMode ? "dark-mode" : "light-mode"
        }`}
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
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
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="task-date" className="col-form-label">
                    Date
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="date"
                    placeholder="DD-MM-YYYY"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="task-description" className="col-form-label">
                    Description (Optional)
                  </label>
                  <textarea
                    type="text-area"
                    className="form-control"
                    id="description"
                    placeholder="Eg : Study for the exam"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="task-directory" className="col-form-label">
                    Select a directory
                  </label>
                  <select className="form-control">
                    <option value="">Main</option>
                  </select>
                </div>

                <div className="mb-3 input-group mx-3">
                  <input className="mx-3 checkbox" type="checkbox" value="" />

                  <span className="text">Mark as important</span>
                </div>
                <div className="mb-3 input-group mx-3">
                  <input className="mx-3 checkbox" type="checkbox" value="" />

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
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTaskModal;
