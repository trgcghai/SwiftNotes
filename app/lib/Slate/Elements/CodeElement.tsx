export default function CodeElement(props: any) {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}