import { IconType } from "react-icons/lib";
import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
        }

        AiOutlineSearch: IconType;
    }
} 