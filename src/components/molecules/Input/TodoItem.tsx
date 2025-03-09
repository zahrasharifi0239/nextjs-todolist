'use client';
import { Button, Icon, Typography } from '@/components';
import type { TodoType } from '@/components/types';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

interface TodoItemProps {
	todo: TodoType;
	onEdit: (id: number) => void;
	onDelete: (id: number) => void;
	onToggle: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onEdit, onDelete, onToggle }) => {
	const t = useTranslations('TodoPage');
	return (
		<div className="font-bold flex flex-col sm:flex-row bg-accent m-5 p-3 px-8 items-center rounded-[10px] justify-between text-primary">
			<Typography.Title
				level="h3"
				className={
					todo.status
						? 'font-bold flex flex-wrap gap-5 text-secondary line-through text-[10px] sm:text-[16px]'
						: 'font-bold flex flex-wrap gap-5 text-[10px] sm:text-[16px]'
				}
			>
				<p className="font-bold text-[10px] px-2 sm:text-[15px]">
					{' '}
					{t('startDate')} : {todo.date}
				</p>
				<p> {todo.text}</p>
			</Typography.Title>
			{todo.status && todo.completionDate && (
				<Typography.Title
					level="h3"
					className="font-bold text-[10px] sm:text-[15px]"
				>
					{t('endDate')} : {todo.completionDate}
				</Typography.Title>
			)}
			<div className="font-bold flex gap-3 sm:gap-5 cursor-pointer  mt-3 sm:mt-0">
				<Button onClick={() => onToggle(todo.id)}>
					{' '}
					<Icon className="w-[24px] h-[24px]" name={'Update'} />
				</Button>
				<Button onClick={() => onEdit(todo.id)}>
					{' '}
					<Icon className="w-[24px] h-[24px]" name={'Edit'} />
				</Button>

				<Button onClick={() => onDelete(todo.id)}>
					<Icon className="w-[24px] h-[24px]" name={'Delete'} />
				</Button>
			</div>
		</div>
	);
};

export default TodoItem;
