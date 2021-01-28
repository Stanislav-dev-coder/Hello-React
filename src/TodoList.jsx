import React from 'react'
import TodoItem from './TodoItem.jsx'

export default function TodoList({todos}) {
  return (
    <ul>
      {todos.map(item => <TodoItem key={item.id} {...item} />)}
    </ul>
  )
}