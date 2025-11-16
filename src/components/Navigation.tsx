"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLangContext } from "@/contexts/LangContext";
import cn from "@/utils/cn";
import { Paths } from "@/utils/constants";
import { i18n } from "@/utils/i18n";

const Navigation = () => {
  const { lang } = useLangContext();
  const pathname = usePathname();

  const navigation: { href: Paths; label: string }[] = [
    {
      href: Paths.home,
      label: i18n("home", lang).toUpperCase(),
    },
    {
      href: Paths.firm,
      label: i18n("firm", lang).toUpperCase(),
    },
    {
      href: Paths.expertise,
      label: i18n("expertise", lang).toUpperCase(),
    },
    {
      href: Paths.fees,
      label: i18n("fees", lang).toUpperCase(),
    },

    {
      href: Paths.news,
      label: i18n("news", lang).toUpperCase(),
    },
    {
      href: Paths.contacts,
      label: i18n("contacts", lang).toUpperCase(),
    },
  ] as const;

  return (
    <nav className="flex items-center">
      {navigation.map((item) => (
        <div className="flex items-center" key={item.href}>
          <Link
            className={cn({
              "border-b-2": pathname === item.href,
            })}
            href={item.href}
          >
            {item.label}
          </Link>
          <span className="mx-2">-</span>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
