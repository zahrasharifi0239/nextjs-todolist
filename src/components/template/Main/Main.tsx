'use client';
import { Typography } from '@/components';
import InputCard from '@/components/molecules/Input/InputCard';
import TodoList from '@/components/organism/TodoList';
import type { TodoType } from '@/components/types';
import { toPersianDigits } from '@/utils/helper';
import moment from 'jalali-moment';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { type FC, useEffect, useState } from 'react';

export const Main: FC = () => {
	const t = useTranslations('TodoPage');
	const locale = useLocale();
	const [todos, setTodos] = useState<TodoType[]>([]);
	const [editTodo, setEditTodo] = useState<TodoType | undefined>(undefined);

	useEffect(() => {
		const savedTodos = localStorage.getItem('todos');
		setTodos(savedTodos ? JSON.parse(savedTodos) : []);
	}, []);

	const saveTodo = (text: string, editId?: number) => {
		let updatedTodos: TodoType[];
		if (editId) {
			updatedTodos = todos.map((todo) =>
				todo.id === editId ? { ...todo, text } : todo,
			);
		} else {
			const newTodo: TodoType = {
				text,
				status: false,
				id: Date.now(),
				date:
					locale === 'fa'
						? toPersianDigits(moment().format('jYYYY/jMM/jDD'))
						: moment().format('YYYY/MM/DD'),
			};
			updatedTodos = [...todos, newTodo];
		}
		setTodos(updatedTodos);
		localStorage.setItem('todos', JSON.stringify(updatedTodos));
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
		localStorage.setItem('todos', JSON.stringify(updatedTodos));
	};

	const toggleTodoStatus = (id: number) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === id
				? {
						...todo,
						status: !todo.status,
						completionDate: todo.status
							? undefined
							: locale === 'fa'
								? toPersianDigits(moment().format('jYYYY/jMM/jDD'))
								: moment().format('YYYY/MM/DD'),
					}
				: todo,
		);
		setTodos(updatedTodos);
		localStorage.setItem('todos', JSON.stringify(updatedTodos));
	};

	return (
		<div className="flex flex-col items-center gap-15 h-[90%] w-[90%] font-bold ">
			<div className="h-[70%] w-[85%]  m-5 font-bold">
				<Typography.Title
					level="h1"
					className="text-font-regular text-sm sm:text-3xl mb-4 font-bold"
				>
					{t('title')}
				</Typography.Title>
				<TodoList
					todos={todos}
					onEdit={editTodoHandler}
					onDelete={deleteTodo}
					onToggle={toggleTodoStatus}
				/>
			</div>
			<div className="w-[85%] m-5 font-bold">
				<InputCard onSave={saveTodo} editTodo={editTodo} />
			</div>
		</div>
	);
};
