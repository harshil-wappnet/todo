// TodoForm.js
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './atoms';

function TodoForm() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    addItem();
  };

  const getId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} className="bg-slate-400 text-black" placeholder='Enter todo' />
      <button type="submit" className='bg-slate-950 text-white rounded'>Add Todo</button>
    </form>
  );
}

export default TodoForm;
