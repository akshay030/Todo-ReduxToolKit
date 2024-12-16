import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodoAPI } from '../features/todo/todoSlice';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    state.todos.todos.find((todo) => todo.id === parseInt(id))
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setCompleted(todo.completed);
    }
  }, [todo]);

  if (!todo) return <p>Todo not found</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodoAPI(todo.id, { title, description, completed }));
    navigate('/'); 
  };

  return (
    <div className="min-h-screen text-white flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Update Todo</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={completed}
                onChange={() => setCompleted(!completed)}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2">Completed</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gray-950 rounded-md text-white font-semibold hover:bg-gray-600"
          >
            Update Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTodo;
