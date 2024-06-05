import Image from "next/image";

export default function ImageElement(props: any) {
    const url = (props.element as any).url;
    return (
        <div {...props.attributes}>
            <div contentEditable={false}>
                <Image alt="image" src={url} width={1000} quality={100} height={600} className="max-w-full h-auto" />
            </div>
            {props.children}
        </div>
    )
}