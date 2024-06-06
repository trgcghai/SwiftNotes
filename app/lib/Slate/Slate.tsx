import React, { useCallback, useMemo, useState } from 'react'
import { BaseEditor, createEditor, Editor, Element, Transforms } from 'slate'
import { Slate, Editable, withReact, RenderElementProps, RenderLeafProps, ReactEditor } from 'slate-react'
import { Descendant } from 'slate'
import DefaultElement from './Elements/DefaultElement'
import Leaf from './Elements/Leaf'
import { CustomElement, CustomText, EmptyText, ImageElement as ImageElementType } from './Types/slate'
import Toolbar from './Toolbar'
import ImageElement from './Elements/ImageElement'
import HeadingElement from './Elements/HeadingElement'
import { Formater } from './Types/Formater'

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

    const renderElement = useCallback((props: RenderElementProps) => {
        switch (props.element.type) {
            case 'image':
                return <ImageElement {...props} />
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
                return <HeadingElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    const renderLeaf = useCallback((props: RenderLeafProps) => {
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
                    <Toolbar insertImage={insertImage} editor={editor}></Toolbar>
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
                            case 'b': {
                                event.preventDefault()
                                Formater.toggleBold(editor)
                                break
                            }
                            case 'i': {
                                event.preventDefault()
                                Formater.toggleItalic(editor)
                                break
                            }
                            case 'u': {
                                event.preventDefault()
                                Formater.toggleUnderline(editor)
                                break
                            }
                            case '1':
                            case '2':
                            case '3':
                            case '4':
                            case '5': {
                                event.preventDefault()
                                Formater.toggleHeading(editor, event.key)
                                break
                            }
                        }
                    }}
                />
            </Slate>
        </>
    )
}