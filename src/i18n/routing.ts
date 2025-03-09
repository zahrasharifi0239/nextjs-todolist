import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['fa', 'en'] as const;
export type LocaleType = (typeof locales)[number];

export const routing = defineRouting({
	locales: locales,
	defaultLocale: 'fa',
	localePrefix: 'as-needed',
});

export const { Link, redirect, usePathname, useRouter } =
	createNavigation(routing);
