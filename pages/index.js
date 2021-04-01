import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [taskInput, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleTask = (e) => {
    e.preventDefault();

    const allTodos = [
      {
        task: taskInput,
      },
      ...todos,
    ];
    setTodos(allTodos);
    setTask("");
    if (todos.length == 4) {
      setAlert(true);
    }
  };
  const handleHide = () => {
    console.log("clicked");
    setAlert(!alert);
  };
  return (
    <div className="w-full h-screen relative flex flex-col md:flex-row">
      {alert && (
        <div className="absolute bottom-0 left-5 right-5 mx-2 p-4 bg-green-300 text-white rounded my-2 flex justify-between">
          <p>Wow you have alot of tasks, Keep Going! </p>
          <button
            className="text-gray-600 rounded-md cursor-pointer z-10"
            onClick={() => setAlert(!alert)}
          >
            X
          </button>
        </div>
      )}
      <div className="leftSide bg-gray-400 h-1/5 md:h-screen w-full md:w-1/2">
        <form
          className="flex flex-col justify-items-center align-middle text-center space-y-3"
          onSubmit={handleTask}
        >
          <label htmlFor="task" className=" text-2xl text-gray-100">
            Create a Task
          </label>
          <div className="inputButton">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTask(e.target.value)}
              className="rounded-md shadow-lg w-52 py-1 px-2 focus:outline-none"
            />
            <button className="px-3 py-1 bg-green-300 rounded-md ml-1 text-white transform transition ease-in-out active:scale-95 focus:outline-none">
              Add Task
            </button>
          </div>
        </form>
      </div>
      <div className="rightSide relative">
        {todos.length > 0 && (
          <p className="absolute top-0 left-0 right-0 text-center p-4 text-gray-400 text-2xl">
            You have <span className="text-green-300">{todos.length}</span> task
            {todos.length == 1 ? "" : "s"}
          </p>
        )}
        <div className="todoHolder ">
          {todos.length == 0 ? (
            <h3 className="text-gray-400 text-center text-3xl">No Tasks Yet</h3>
          ) : (
            todos.map((todo, index) => {
              return (
                <p
                  key={index}
                  className="w-full p-3 rounded-md shadow-md bg-gray-50 my-1"
                >
                  {todo.task}
                </p>
              );
            })
          )}
          {todos.length > 11 && (
            <p className="animate-bounce absolute bottom-10 left-0 right-0 text-center text-gray-400">
              scroll down
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
