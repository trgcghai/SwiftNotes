import { RenderElementProps } from "slate-react";

export default function DefaultElement(props: RenderElementProps) {
    return <p style={{ userSelect: 'none' }} {...props.attributes}>{props.children}</p>
}