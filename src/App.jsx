import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
      </Routes>
    </Router>
  );
}

export default App;
