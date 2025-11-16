"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import building from "@/assets/images/building.png";
import cn from "@/utils/cn";
import { Paths } from "@/utils/constants";

import Container from "./Container";
import LangSwitch from "./LangSwitch";
import MarieBelezy from "./MarieBelezy";
import Navigation from "./Navigation";
import PageName from "./PageName";

const Header = () => {
  const pathname = usePathname();

  const isHomePage: boolean = pathname === Paths.home;

  return (
    <header
      className={cn("relative z-10 py-4 text-white", {
        // "text-black relative": !isHomePage,
        // "text-white": isHomePage,
      })}
    >
      {!isHomePage && (
        <>
          <Image
            alt="building"
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={building}
          />
          <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/50"></div>
        </>
      )}
      <Container
        className={cn("flex items-center justify-between", {
          "relative z-10": !isHomePage,
        })}
      >
        {isHomePage ? <MarieBelezy /> : <PageName />}
        <div className="flex items-center text-xl">
          <Navigation />
          <LangSwitch />
        </div>
      </Container>
    </header>
  );
};

export default Header;
