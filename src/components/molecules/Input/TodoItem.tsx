"use client";
import { Button, Icon, SelectBox, Typography } from "@/components";
import type { TodoType } from "@/components/types";
import { useTranslations } from "next-intl";
import type { FC } from "react";
import { useEffect, useState } from "react";

interface TodoItemProps {
  todo: TodoType;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onMoveUp: (id: number) => void;
  onMoveDown: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  todo,
  onEdit,
  onDelete,
  onToggle,
  onMoveUp,
  onMoveDown,
}) => {
  const t = useTranslations("TodoPage");

  return (
    <div className="min-h-[100px] flex flex-col sm:flex-row bg-background mx-4 sm:mx-10 my-5 px-4 sm:px-[70px] items-center rounded-[10px] justify-between text-primary gap-2">
      <div className="flex items-center gap-2">
        <Typography.Text
          className={`mx-2 sm:mx-5 text-sm sm:text-base ${
            todo.status ? "line-through" : ""
          }`}
        >
          {todo.text}
        </Typography.Text>
      </div>

      <div className="flex gap-3 sm:gap-5 cursor-pointer  mt-3 sm:mt-0">
        <Button onClick={() => onMoveUp(todo.id)}>
          <Icon className="w-[30px] h-[30px] " name={"Up"} />
        </Button>
        <Button onClick={() => onMoveDown(todo.id)}>
          <Icon className="w-[30px] h-[30px]" name={"Down"} />
        </Button>
        <Button onClick={() => onToggle(todo.id)}>
          <Icon className="w-[30px] h-[30px]" name={"Update"} />
        </Button>
        <Button onClick={() => onEdit(todo.id)}>
          <Icon className="w-[30px] h-[30px]" name={"Edit"} />
        </Button>
        <Button onClick={() => onDelete(todo.id)}>
          <Icon className="w-[30px] h-[30px]" name={"Delete"} />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
