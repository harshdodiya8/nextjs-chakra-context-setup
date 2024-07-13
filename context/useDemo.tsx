// TodoContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface Todo {
  id: string,
  name: string,
  description: string
}

// Define the shape of your context state
interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void
   // Replace Todo[] with your actual data structure
  // Add other state variables if needed
}

// Create the initial context with default values
const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {}
  // Initialize other state variables here
});



// Provider component that wraps your app and provides the context
export const TodoProvider= ({ children }: { children: React.ReactNode }) => {
  // Define your state and functions here

  // Example state declaration:
  const [todos, setTodos] = useState<Todo[] | []>([]);

  // Example function to add a todo
  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  
  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  )
};


// Create a hook to use the context
export const useTodoContext = () => {
  return useContext(TodoContext);
};