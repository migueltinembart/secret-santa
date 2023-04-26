import classnames from "classnames";
import { ReactNode } from "react";


interface Props {
  children?: ReactNode;
  grid?: Boolean;
  cols?: Number;
  rows?: Number;
  className?: String[];
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
    props.grid && "grid gap-4 content-center",
    props.cols && `grid-cols-${props.cols}`,
    props.rows && `grid-rows-${props.rows}`
  );
  return (
    <>
      <div className={classes}>{props.children}</div>
    </>
  );
}
