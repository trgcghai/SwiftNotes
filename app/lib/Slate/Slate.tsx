import React, { useCallback, useMemo, useState } from 'react'
import { createEditor, Editor, Element, Range, Transforms } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { Descendant } from 'slate'
import CodeElement from './Elements/CodeElement'
import DefaultElement from './Elements/DefaultElement'
import Leaf from './Elements/Leaf'
import { CustomElement, CustomText, EmptyText, ImageElement as ImageElementType } from './Types/slate'
import Toolbar from './Toolbar'
import ImageElement from './Elements/ImageElement'

export default function SlateNote() {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState<Descendant[]>([
        {
            type: 'paragraph',
            children: [{ text: '' }],
        },
    ])
    const insertImage = useCallback((url: string) => {
        const text: EmptyText = { text: '' }
        const image: ImageElementType = { type: 'image', url, children: [text] };
        Transforms.insertNodes(editor, image);
    }, [editor]);

    const renderElement = useCallback((props: any) => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            case 'image':
                return <ImageElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    const renderLeaf = useCallback((props: any) => {
        return <Leaf {...props} />
    }, [])

    const renderPlaceholder = ({ attributes, children }: { children: any, attributes: object }) => {
        return (
            <div {...attributes} style={{ fontStyle: 'normal', color: 'gray' }}>
                <p>{children}</p>
                Type something here...
            </div>
        )
    }

    return (
        <>
            <Slate editor={editor} initialValue={value}>
                <div style={{ height: '6%' }}>
                    <Toolbar insertImage={insertImage}></Toolbar>
                </div>
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    renderPlaceholder={renderPlaceholder}
                    style={{ maxHeight: '93%', height: '93%' }}
                    className='w-full outline-none p-2 rounded-md border-2 no-scrollbar overflow-y-scroll'
                    onKeyDown={event => {

                        if (!event.ctrlKey) {
                            return
                        }

                        switch (event.key) {
                            case '`': {
                                event.preventDefault();

                                const [match] = Editor.nodes(editor, {
                                    match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'code',
                                });
                                Transforms.setNodes(
                                    editor,
                                    { type: match ? 'paragraph' : 'code' },
                                    { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
                                );
                                break
                            }
                            case 'b': {
                                event.preventDefault()
                                const match: Omit<CustomText, "text"> = Editor.marks(editor)!
                                Editor.addMark(editor, 'bold', !match.bold)
                                break
                            }
                            case 'i': {
                                event.preventDefault()
                                const match: Omit<CustomText, "text"> = Editor.marks(editor)!
                                Editor.addMark(editor, 'italic', !match.italic)
                                break
                            }
                            case 'u': {
                                event.preventDefault()
                                const match: Omit<CustomText, "text"> = Editor.marks(editor)!
                                Editor.addMark(editor, 'underline', !match.underline)
                                break
                            }
                            case 'a': {
                                const { selection } = editor
                                console.log(selection);
                            }
                        }
                    }}
                />
            </Slate>
        </>
    )
}