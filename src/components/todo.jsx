import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
      'first todo', 'second todo',  'third todo'
  ]);

  return (
    <>
  <h1> Todo List </h1>
     {todos.map((x, i) => {
        console.log('item', x, '', i)
            
        return <ol className="text-warning"> Do this: {x} </ol>

    })} 
    </>
  )
};

export default Todo;
