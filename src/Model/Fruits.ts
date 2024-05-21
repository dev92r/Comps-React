import { ReactNode } from "react";

export interface FruitsItems {
    name: string,
    color: string,
    score: number
}

export interface FruitsItemsConfig {
    label: string,
    render: (data: FruitsItems) => ReactNode;
}