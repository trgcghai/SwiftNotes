import { RenderElementProps } from "slate-react";

const HeadingElement = (props: RenderElementProps) => {
    const pair: any = {
        h1: 'text-4xl',
        h2: 'text-3xl',
        h3: 'text-2xl',
        h4: 'text-xl',
        h5: 'text-lg'
    }

    return (
        <p
            {...props.attributes}
            style={{ userSelect: 'none' }}
            className={pair[props.element.type]}
        >
            {props.children}
        </p>
    )
}

export default HeadingElement