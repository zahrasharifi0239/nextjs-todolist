"use client";
import { FC } from "react";
import { TodoType } from "@/components/types";
import TodoItem from "../molecules/Input/TodoItem";
import { Typography } from "@/components";
import { useTranslations } from "next-intl";

interface TodoListProps {
  todos: TodoType[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onEdit, onDelete, onToggle }) => {
  const t = useTranslations("TodoPage");
  return (
    <div className="h-[90%] bg-background-component w-[100%] overflow-y-auto rounded-[10px]">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      ) : (
        <div className="w-full h-full flex justify-center items-center text-orange-100">
          <Typography.Title level="h3">{t("emptyList")}</Typography.Title>
        </div>
      )}
    </div>
  );
};

export default TodoList;
