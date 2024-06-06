import Image from "next/image";
import { RenderElementProps } from "slate-react";

export default function ImageElement(props: RenderElementProps) {
    const url = (props.element as any).url;
    return (
        <div {...props.attributes} contentEditable={false} style={{ userSelect: 'none' }}>
            <Image alt="image" src={url} width={1000} quality={100} height={600} className="max-w-full h-auto" />
            {props.children}
        </div>
    )
}