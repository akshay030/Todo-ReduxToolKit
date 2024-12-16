import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAPI } from '../features/todo/todoSlice';
import { useNavigate } from 'react-router-dom';

function AddTodo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todoData = {
      id: Date.now(), 
      title,
      description,
      completed,
    };

    dispatch(addTodoAPI(todoData));
    navigate('/'); 
  };

  return (
    <div className="min-h-screen text-white flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
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
              required
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
              required
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
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
