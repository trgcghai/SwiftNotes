import Image from "next/image";
import { RenderElementProps } from "slate-react";

export default function ImageElement(props: RenderElementProps) {
    const url = (props.element as any).url;
    const { height, width } = (props.element as any)

    return (
        <div {...props.attributes} contentEditable={false} style={{ userSelect: 'none' }}>
            <Image alt="image" src={url} width={width} height={height} quality={100} />
            {props.children}
        </div>
    )
}