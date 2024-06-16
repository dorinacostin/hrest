import { ReactElement } from "react";

export type CardType = {
    title: string;
    subtitle?: string;
    children?: ReactElement;
}