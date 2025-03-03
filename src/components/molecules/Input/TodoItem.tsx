"use client";
import { FC } from "react";
import { TodoType } from "@/components/types";
import { Typography, Icon } from "@/components";
import { useTranslations } from "next-intl";

interface TodoItemProps {
  todo: TodoType;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onEdit, onDelete, onToggle }) => {
  const t = useTranslations("TodoPage");
  return (
    <div className="flex flex-col sm:flex-row bg-accent m-3 p-2 items-center rounded-[10px] justify-between text-[#3E4D6C]">
      <Typography.Title
        level="h3"
        className={
          todo.status
            ? "flex flex-wrap gap-5 text-orange-300 line-through text-[10px] sm:text-[16px]"
            : "flex flex-wrap gap-5 text-[10px] sm:text-[16px]"
        }
      >
        <div className="text-[10px] sm:text-[15px]">
          {" "}
          {t("startDate")} : {todo.date}
        </div>
        {todo.text}
      </Typography.Title>
      {todo.status && todo.completionDate && (
        <Typography.Title level="h3" className="text-[10px] sm:text-[15px]">
          {t("endDate")} : {todo.completionDate}
        </Typography.Title>
      )}
      <div className="flex gap-3 sm:gap-5 cursor-pointer  mt-3 sm:mt-0">
        <button onClick={() => onToggle(todo.id)}>
          {" "}
          <Icon name={"Update"} />
        </button>
        <button onClick={() => onEdit(todo.id)}>
          {" "}
          <Icon name={"Edit"} />
        </button>

        <button onClick={() => onDelete(todo.id)}>
          <Icon name={"Delete"} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
