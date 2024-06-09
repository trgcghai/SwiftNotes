import Link from "next/link";
import { RenderElementProps } from "slate-react";

export default function LinkElement(props: RenderElementProps) {
    const url = (props.element as any).url;
    return (
        <div
            {...props.attributes}
        >
            <Link

                target="_blank"
                href={url}
                className="underline text-blue-400"
            >
                {props.children}
            </Link>
        </div>
    )
}