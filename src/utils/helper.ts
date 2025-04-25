export const changeTheme = (theme: string) => {
	document.querySelector('html')?.setAttribute('data-theme', theme);
};

export const toPersianDigits = (num: string | number) => {
	return num.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d]);
};
