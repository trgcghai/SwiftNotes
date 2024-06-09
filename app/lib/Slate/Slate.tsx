import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact, RenderElementProps, RenderLeafProps, ReactEditor } from 'slate-react'
import { Descendant } from 'slate'
import DefaultElement from './Elements/DefaultElement'
import Leaf from './Elements/Leaf'
import Toolbar from './Toolbar'
import ImageElement from './Elements/ImageElement'
import HeadingElement from './Elements/HeadingElement'
import { Formater } from './Formater'
import LinkElement from './Elements/LinkElement'
import handlePaste from './Components/handlePaste'
import { withHistory } from 'slate-history'

export default function SlateNote() {
    const editor = useMemo(() => withReact(withHistory(createEditor())), [])
    const [value] = useState<Descendant[]>(() => {
        const content = JSON.parse(localStorage.getItem('content')!)
        if (!content || content.length === 0) {
            return [{ type: 'paragraph', children: [{ text: '' }] }]
        }
        return content
    })

    useEffect(() => {
        ReactEditor.focus(editor)
    }, [editor])

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
            case 'link':
                return <LinkElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    const renderLeaf = useCallback((props: RenderLeafProps) => {
        return <Leaf {...props} />
    }, [])

    return (
        <>
            <Slate
                editor={editor}
                initialValue={value}
                onChange={value => {
                    const isAstChange = editor.operations.some(
                        op => 'set_selection' !== op.type
                    )
                    if (isAstChange) {
                        localStorage.setItem('content', JSON.stringify(value))
                    }
                }}
            >
                <div style={{ height: '5%' }}>
                    <Toolbar editor={editor}></Toolbar>
                </div>
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    style={{ maxHeight: '95%', height: '95%' }}
                    className='w-full outline-none p-2 rounded-md border-2 no-scrollbar overflow-y-scroll'
                    onPaste={(e) => handlePaste(editor, e)}
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
            </Slate >
        </>
    )
}