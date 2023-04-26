import { ReactNode } from "react";

interface Props {
  element1?: ReactNode;
  element2?: ReactNode;
}

export default function Divider(props: Props) {
  return (
    <div className="flex flex-col w-full h-full lg:flex-row">
      <div className="grid flex-grow h-32 lg:h-full card bg-base-300 rounded-box place-items-center">
        {props.element1 || "No Content"}
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow h-32 lg:h-full card bg-base-300 rounded-box place-items-center">
        {props.element2 || "No Content"}
      </div>
    </div>
  );
}
