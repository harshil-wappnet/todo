// TodoItem.js
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';

function TodoItem({ item }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const toggleItemCompletion = () => {
        setTodoList((oldTodoList) =>
            oldTodoList.map((todo) =>
                todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
    };

    const deleteItem = () => {
        setTodoList((oldTodoList) =>
            oldTodoList.filter((todo) => todo.id !== item.id)
        );
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <span>{item.text}</span>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
}

export default TodoItem;
