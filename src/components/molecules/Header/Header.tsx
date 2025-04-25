"use client";
import { Button, Icon, SelectBox, Typography } from "@/components";
import useTheme from "@/hook/useTheme";
import { type LocaleType, usePathname, useRouter } from "@/i18n/routing";
import { LANGUAGES } from "@/utils/constants";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { type FC, useTransition } from "react";

export const Header: FC = () => {
  const t = useTranslations("TodoPage");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const { theme, changeTheme } = useTheme();

  const clickChangeTheme = () => {
    changeTheme(theme === "dark" ? "" : "dark");
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as LocaleType;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <header className="flex font-bold items-center sticky left-0 top-0 w-full border-b-[4px] border-b-background-component h-[10%] text-sm sm:text-xl bg-background p-4">
      <div className="mx-auto flex w-full max-w-4xl justify-between">
        <div className="flex gap-2">
          <Image src="/assets/svg/logo.svg" alt="logo" width={70} height={70} />
          <Typography.Text className="text-font-regular text-primary pt-6">
            {t("title")}
          </Typography.Text>
        </div>
        <div className="flex gap-4">
          <SelectBox
            options={LANGUAGES}
            onChange={changeLanguage}
            disabled={isPending}
            defaultValue={locale}
            className="text-primary"
          />
          <Button onClick={clickChangeTheme}>
            <Icon
              name={theme === "dark" ? "Sun" : "Moon"}
              className="text-primary"
            />
          </Button>
        </div>
      </div>
    </header>
  );
};
