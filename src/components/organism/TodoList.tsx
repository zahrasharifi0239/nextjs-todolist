"use client";
import { Typography } from "@/components";
import type { TodoType } from "@/components/types";
import { useTranslations } from "next-intl";
import type { FC } from "react";
import TodoItem from "../molecules/Input/TodoItem";
import Image from "next/image";

interface TodoListProps {
  todos: TodoType[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onMoveUp: (id: number) => void;
  onMoveDown: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({
  todos,
  onEdit,
  onDelete,
  onToggle,
  onMoveUp,
  onMoveDown,
}) => {
  const t = useTranslations("TodoPage");
  return (
    <div className="h-[80%] w-[90%] sm:w-[80%] bg-background-component rounded-[10px] overflow-y-auto p-4">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
            onMoveUp={onMoveUp}
            onMoveDown={onMoveDown}
          />
        ))
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center gap-4 py-8">
          <Image
            src="/assets/svg/main.svg"
            alt="logo"
            width={300}
            height={200}
            priority
            className="w-[200px] sm:w-[300px]"
          />
          <Typography.Title level="h3" className="text-center">
            {t("emptyList")}
          </Typography.Title>
        </div>
      )}
    </div>
  );
};

export default TodoList;
