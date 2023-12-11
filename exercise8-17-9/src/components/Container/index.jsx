import React, { useState, useEffect , useRef } from 'react';
import Header from '../Header';
import Input from '../Input';
import Action from '../Actions';
import Items from '../Items';
import { readJSON, writeJSON } from '../../Utils/local-storage';
import './style.css';

const Container = () => {
  const isMounted = useRef(true);
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (isMounted.current) {
      const storedTasks = readJSON('tasks') || [];
      setTasks(storedTasks);
      isMounted.current = false;
    }
  }, []); 
  useEffect(() => {
    if (!isMounted.current) {
      writeJSON('tasks', tasks);
    }
  }, [tasks]);

  useEffect(() => {
    writeJSON('tasks', tasks);
  }, [tasks]);

  const handleInputChange = (e) => {
    setInputText(e.target.value.replace(/\s+/g, ' '));
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleAddTask = () => {
    const trimmedText = inputText.trim();
    if (trimmedText !== '') {
      setTasks([...tasks, { id: Date.now(), text: trimmedText }]);
      setInputText('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <Header>لیست کار ها</Header>
      <Items tasks={tasks} onDeleteTask={handleDeleteTask} />
      <Input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <Action onAddTask={handleAddTask} onDeleteAllTasks={handleDeleteAllTasks} />
    </div>
  );
};

export default Container;