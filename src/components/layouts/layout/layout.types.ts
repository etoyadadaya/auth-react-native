import {ReactNode} from "react";

export interface ILayout {
  children: ReactNode;
  isScrollView?: boolean;
}