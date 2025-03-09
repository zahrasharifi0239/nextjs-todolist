'use client';
import { Typography } from '@/components';
import type { TodoType } from '@/components/types';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import TodoItem from '../molecules/Input/TodoItem';

interface TodoListProps {
	todos: TodoType[];
	onEdit: (id: number) => void;
	onDelete: (id: number) => void;
	onToggle: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onEdit, onDelete, onToggle }) => {
	const t = useTranslations('TodoPage');
	return (
		<div className="h-[90%] bg-background-component overflow-y-auto rounded-[10px] font-bold">
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
				<Typography.Title
					className="w-full h-full flex justify-center items-center text-font-regular"
					level="h3"
				>
					{t('emptyList')}
				</Typography.Title>
			)}
		</div>
	);
};

export default TodoList;
