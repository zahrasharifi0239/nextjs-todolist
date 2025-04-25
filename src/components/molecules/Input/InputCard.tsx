"use client";
import { Button, Icon } from "@/components";
import type { TodoType } from "@/components/types";
import { useLocale, useTranslations } from "next-intl";
import { type FC, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface InputCardProps {
  onSave: (text: string, editId?: number) => void;
  editTodo?: TodoType;
}

const InputCard: FC<InputCardProps> = ({ onSave, editTodo }) => {
  const t = useTranslations("TodoPage");
  const locale = useLocale();
  const [text, setText] = useState(editTodo?.text || "");

  useEffect(() => {
    setText(editTodo?.text || "");
  }, [editTodo]);

  const handleSave = () => {
    if (text.trim().length === 0) {
      return toast.error(t("error"));
    }
    onSave(text, editTodo?.id);
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const regex = locale === "fa" ? /[^آ-ی۰-۹ ]/g : /[^a-zA-Z0-9 ]/g;
    setText(value.replace(regex, ""));
  };

  return (
    <div className="bg-background-component rounded-[10px] p-4 flex flex-col gap-4 w-[80%]">
      <div className="flex items-center gap-4">
        <Button
          onClick={handleSave}
          className="ml-2 bg-primary text-secondary rounded-[50%] w-[50px] h-[50px] flex justify-center items-center"
        >
          {editTodo ? (
            <Icon className="w-[24px] h-[24px]" name={"Edit"} />
          ) : (
            <Icon className="w-[24px] h-[24px]" name={"Plus"} />
          )}
        </Button>
        <input
          className="w-full p-2 bg-transparent border-none outline-none text-primary font-bold"
          type="text"
          placeholder={t("placeholder")}
          value={text}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
      </div>
    </div>
  );
};

export default InputCard;
