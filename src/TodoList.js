// TodoList.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './atoms';
import TodoItem from './TodoItem';

function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
        <div>
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </div>
    );
}

export default TodoList;
