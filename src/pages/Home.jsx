import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/todo/todoSlice";
import TodoList from "../components/TodoList";
import Spinner from "../components/spinner";

function Home() {
  const [loading, setLoading] = useState(true); // Start with loading as true
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos()).then(() => setLoading(false)); // Set loading to false after fetching
  }, [dispatch]);

  return (
    <div>
      {loading ? <Spinner /> : <TodoList todos={todos} />}
    </div>
  );
}

export default Home;
