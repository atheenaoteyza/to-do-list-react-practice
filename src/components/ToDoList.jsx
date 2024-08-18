import React, { useState } from "react";
const ToDoList = () => {
  const [lists, setLists] = useState([
    { text: "Do the laundry", checked: false },
    { text: "Study for exams tomorrow", checked: false },
    { text: "Clean the dishes", checked: false },
    { text: "Cook for pet catto", checked: false },
  ]);

  function handleAddList() {
    const newTask = document.getElementById("input").value;
    setLists((l) => [...l, { text: newTask, checked: false }]);
    document.getElementById("input").value = "";
  }

  function handleToggleCheck(index) {
    setLists(
      lists.map((list, i) =>
        i === index ? { ...list, checked: !list.checked } : list
      )
    );
  }

  function handleRemoveList(index) {
    setLists(lists.filter((_, i) => i !== index));
  }

  return (
    <div className="to-do-container">
      <h1>To Do List</h1>
      <ul className="ul-container">
        {lists.map((list, index) => (
          <li
            className={`li-lists ${list.checked ? "checked" : "unchecked"}`}
            key={index}
            onClick={() => handleToggleCheck(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="21"
              fill="currentColor"
            >
              {!list.checked ? (
                <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
              ) : (
                <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              )}
            </svg>

            <span>{list.text}</span>

            <button
              className="button-lists"
              onClick={(e) => {
                e.stopPropagation(); // Prevent click event from bubbling up
                handleRemoveList(index);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="21"
                viewBox="0 -960 960 960"
                width="21"
                fill="#FFFFFF"
              >
                               {" "}
                <path d="M261-120q-24 0-42-18t-18-42v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm106-146h60v-399h-60v399Zm166 0h60v-399h-60v399Z"></path>
                             {" "}
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <div className="input-container">
        <input
          type="text"
          id="input"
          placeholder="What do you plan on doing today?"
        ></input>
        <button className="add-button" onClick={handleAddList}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
