import React from "react";

const Todolist = ({ todo }) => {
  return (
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
              {index + 1}). {todo.task}
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
  );
};

export default Todolist;
