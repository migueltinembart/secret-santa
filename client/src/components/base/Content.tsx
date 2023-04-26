import { PropsWithChildren, ReactNode } from "react";

interface Config {
    children?: ReactNode;
    className?: string
}

export default function Content(props: Config) {
  return <div className={props.className}>{props.children}</div>;
}
