import { HTMLAttributes } from "react";
import { classNames } from "../utils/classnames";

export function Button({ className, children, ...rest }: HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={classNames("px-4 py-2 bg-rose-600 border-slate-400 border rounded shadow active:scale-[.97]", className)}
            {...rest}
        >
            {children}
        </button>
    );
}