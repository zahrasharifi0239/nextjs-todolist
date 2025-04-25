"use client";

import { Button, Icon, Typography } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type { FC } from "react";

export const Footer: FC = () => {
  const t = useTranslations("TodoPage");
  return (
    <footer className="flex  justify-center left-0 top-0 w-full  h-[10%] border-t-[4px] border-t-background-component bg-background">
      {" "}
      <ul className="flex items-center gap-10">
        <li>
          <Typography.TextLink
            href="mailto:sharifi.zahra0239@gmail.com"
            target="_blank"
          >
            <Icon
              className="w-[29px] h-[40px] text-primary mt-1"
              name="Gmail"
            />
          </Typography.TextLink>
        </li>
        <li>
          <Typography.TextLink
            href=" https://www.linkedin.com/in/zahrasharifi"
            target="_blank"
          >
            <Icon className="w-[35px] h-[30px] text-primary" name="Linkedin" />
          </Typography.TextLink>
        </li>
        <li>
          <Typography.TextLink
            href=" https://github.com/zahrasharifi0239"
            target="_blank"
          >
            <Icon className="w-[35px] h-[30px] text-primary" name="Github" />
          </Typography.TextLink>
        </li>
      </ul>
    </footer>
  );
};
