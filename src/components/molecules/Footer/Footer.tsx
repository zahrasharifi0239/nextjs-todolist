'use client';

import { Icon, Typography } from '@/components';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { FC } from 'react';

export const Footer: FC = () => {
	const t = useTranslations('TodoPage');
	return (
		<footer className="flex flex-col items-center left-0 top-0 w-full border-t border-t-regular bg-background my-[-80px] p-4">
			<div className="mx-auto flex flex-col sm:flex-row w-full max-w-4xl justify-between">
				<div className="flex gap-2">
					<Image src="/assets/svg/logo.svg" alt="logo" width={30} height={30} />
					<Typography.Text className="text-font-regular font-[900] sm:pt-7">
						{t('title')}
					</Typography.Text>
				</div>
				<div>
					{' '}
					<ul>
						<li className="flex gap-2 sm:text-right">
							<Icon
								className="hidden sm:block w-[24px] h-[24px]"
								name="Gmail"
							/>
							<Typography.TextLink href="#" className="text-xs sm:text-xl">
								sharifi.zahra0239@gmail.com
							</Typography.TextLink>
						</li>
						<li className="flex gap-2 sm:text-right">
							<Icon
								className="hidden sm:block w-[24px] h-[24px]"
								name="Linkedin"
							/>
							<Typography.TextLink
								href=" https://www.linkedin.com/in/zahrasharifi"
								target="_blank"
								className="text-xs sm:text-xl"
							>
								linkedin.com/in/zahrasharifi
							</Typography.TextLink>
						</li>
						<li className="flex gap-2 sm:text-right">
							<Icon
								className="hidden sm:block w-[24px] h-[24px]"
								name="Github"
							/>
							<Typography.TextLink
								href=" https://github.com/zahrasharifi0239"
								target="_blank"
								className="text-xs sm:text-xl"
							>
								github.com/zahrasharifi0239
							</Typography.TextLink>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row sm:gap-5 pt-4">
				<Typography.TextLink href="#" className="text-xs sm:text-sm underline">
					{t('terms')}
				</Typography.TextLink>
				|
				<Typography.TextLink href="#" className="text-xs sm:text-sm underline">
					{t('privacy')}
				</Typography.TextLink>
				|
				<Typography.TextLink href="#" className="text-xs sm:text-sm underline">
					ⓒ 2024 ZahraSharifi{' '}
				</Typography.TextLink>{' '}
			</div>
		</footer>
	);
};
