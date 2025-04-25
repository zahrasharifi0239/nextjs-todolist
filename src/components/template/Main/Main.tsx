"use client";
import InputCard from "@/components/molecules/Input/InputCard";
import TodoList from "@/components/organism/TodoList";
import type { TodoType } from "@/components/types";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { type FC, useCallback, useEffect, useMemo, useState } from "react";

export const Main: FC = () => {
  const t = useTranslations("TodoPage");
  const locale = useLocale();
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [editTodo, setEditTodo] = useState<TodoType | undefined>(undefined);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    setTodos(savedTodos ? JSON.parse(savedTodos) : []);
  }, []);

  const saveTodo = (text: string, editId?: number) => {
    let updatedTodos: TodoType[];
    if (editId) {
      updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, text } : todo
      );
    } else {
      const newTodo: TodoType = {
        text,
        status: false,
        id: Date.now(),
      };
      updatedTodos = [...todos, newTodo];
    }
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setEditTodo(undefined);
  };

  const editTodoHandler = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setEditTodo(todo);
    }
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleTodoStatus = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            status: !todo.status,
          }
        : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const moveTodoUp = (id: number) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index > 0) {
      const newTodos = [...todos];
      [newTodos[index - 1], newTodos[index]] = [
        newTodos[index],
        newTodos[index - 1],
      ];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

  const moveTodoDown = (id: number) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index < todos.length - 1) {
      const newTodos = [...todos];
      [newTodos[index], newTodos[index + 1]] = [
        newTodos[index + 1],
        newTodos[index],
      ];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full  max-w-6xl gap-5 font-Yekan">
      <TodoList
        todos={todos}
        onEdit={editTodoHandler}
        onDelete={deleteTodo}
        onToggle={toggleTodoStatus}
        onMoveUp={moveTodoUp}
        onMoveDown={moveTodoDown}
      />

      <InputCard onSave={saveTodo} editTodo={editTodo} />
    </div>
  );
};
