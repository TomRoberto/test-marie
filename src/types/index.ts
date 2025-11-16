import { Dispatch, SetStateAction } from "react";

import { Paths } from "@/utils/constants";

export type TLang = "en" | "fr";

export type TPath = Paths;

export type TSetState<T> = Dispatch<SetStateAction<T>>;
