import React, { useState } from "react";

import NotesContext from "./NoteContext";

const NotesState = (props) => {


  const directoryInitial=[
    {
      title: "Main",
    },
    {
      title: "Sub",
    },
  ]

  const [directory, setDirectory] = useState(directoryInitial);

  const tasksInitial = [
    {
      title: "Task 1",
      important: false,
      description: "This is the description for this task",
      date: "2023-11-05",
      dir: "Main",
      completed: true,
      id: "t1",
    },
    {
      title: "Task 2",
      important: true,
      description: "This is the description for this task",
      date: "2023-11-05",
      dir: "Main",
      completed: true,
      id: "t2",
    },
    {
      title: "Task 3",
      important: false,
      description: "This is the description for this task",
      date: "2023-10-05",
      dir: "Main",
      completed: false,
      id: "t3",
    },
  ];

  const [tasks, setTasks] = useState(tasksInitial);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  // Add a task

  const addTask=(id,title,description,date,dir,important,completed)=>{

  let task=[{
    id:id,
    title : title ,
    description : description ,
    date : date ,
    dir : dir ,
    important : important ,
    completed : completed

  }]
  console.log(task)

   setTasks(tasks.concat(task))
   localStorage.setItem("tasks", JSON.stringify(tasks));

  }

  const toggleFav = (index) => {
    let newTasks = tasks.map((ele, ind) => {
      if (index === ind) {
        return { ...ele, important: !ele.important };
      }
      return ele;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const toggleStatus=(index)=>{
    console.log(index)
    let newTasks = tasks.map((ele, ind) => {
      if (index === ind) {
        return { ...ele, completed: !ele.completed };
      }
      return ele;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

  }

  // Delete note
  const deleteTask = (id) => {
    console.log("Deleting the note with id" + id);
    let newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  // Edit Task
  const editTask = (id,title,description,date,dir,important,completed) => {
    for (let index = 0; index < tasks.length; index++) {
      let element = tasks[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.date = date;
        element.dir = dir;
        element.important = important;
        element.completed = completed;
        
      }
    }
  }
  const onChange_Search=(title)=>{
    console.log(title)
    if(title===''){
  setTasks(...[tasks])
  }
  else{
    let newTasks = tasks.filter((task) => {
      return task.title.includes(title)
    });
    setTasks(newTasks);
  }
  }


  return (
    <NotesContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        editTask,
        onChange_Search,
        deleteTask,
        toggleFav,
        toggleStatus,
        directory,
        setDirectory
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
