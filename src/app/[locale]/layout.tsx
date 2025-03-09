import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { type LocaleType, routing } from '@/i18n/routing';
import { Providers } from '@/providers';
import { GeistSans } from 'geist/font/sans';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const isPersian = locale === 'fa';

	return {
		title: isPersian ? 'اپلیکیشن مدیریت وظایف' : 'ToDoListApp',
		description: isPersian
			? 'اپلیکیشن مدیریت وظایف یک برنامه مدیریت کارهای روزانه مدرن است.'
			: 'Next.js ToDoListApp is a modern todo list web application designed to help you get started quickly with Next.js.',
	};
}

export default async function RootLayout({ children, params }: LayoutProps) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as LocaleType)) {
		notFound();
	}

	const messages = await getMessages();
	return (
		<html
			dir={locale === 'fa' ? 'rtl' : 'ltr'}
			lang={locale}
			className={`${GeistSans.variable} antialiased`}
		>
			<body>
				<Providers>
					<NextIntlClientProvider messages={messages}>
						{children}
						<ToastContainer />
					</NextIntlClientProvider>
				</Providers>
			</body>
		</html>
	);
}
