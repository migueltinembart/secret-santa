import {} from "react";
import classnames from "classnames";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  split?: Boolean;
}
export default function Box(props: Props) {
  const classes = classnames(
    "bg-slate-200",
    "w-10/12",
    "h-1/2",
    "rounded-lg",
    "shadow-md",
    "border-spacing-3",
    "border",
    "border-gray-400",
    "p-4",
     props.split && ["grid", "grid-rows-1 grid-cols-2", ""]
  );
  return <div className={classes}>{props.children}</div>;
}
