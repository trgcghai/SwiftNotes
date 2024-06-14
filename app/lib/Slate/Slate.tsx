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
import { Note } from '@/app/global'
import { getNoteById, saveNote } from '@/app/controller/notesController'
import { useParams } from 'next/navigation'
import { CustomElement } from './Types/slate'

const serialize = (value: Descendant[]) => {
    return JSON.stringify(value.map((item: Descendant) => {
        return {
            type: (item as CustomElement).type,
            text: (item as CustomElement).children[0].text,
            style: {
                bold: (item as CustomElement).children[0].bold,
                underline: (item as CustomElement).children[0].underline,
                italic: (item as CustomElement).children[0].italic,
            }
        }
    }));
}

const deserialize = (string: string): Descendant[] | null => {
    if (!string) {
        return null
    }

    return JSON.parse(string).map((item: any) => {
        return {
            type: item.type,
            children: [{ text: item.text, bold: item.style.bold, underline: item.style.underline, italic: item.style.italic }]
        }
    }) as Descendant[]
}

export default function SlateNote() {
    const editor = useMemo(() => withReact(withHistory(createEditor())), [])
    const params = useParams()
    const [value, setValue] = useState<Descendant[]>([
        {
            type: 'paragraph',
            children: [{ text: '' }],
        },
    ])

    useEffect(() => {
        const fetchNote = async () => {
            if (params.id != undefined) {
                const data = await getNoteById(params.id as string)
                const note: Note | null = data[0]
                if (note && note.content) {
                    setValue(deserialize(note.content) as Descendant[])
                }
            }
        }
        fetchNote()
    }, [params.id])

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
                        if (params.id != undefined) {
                            saveNote(params.id as string, serialize(value))
                        }
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