import { Editor, Element, Transforms } from "slate";

const createNewNote = (editor: Editor) => {
    Transforms.removeNodes(editor, {
        match: n => Element.isElement(n) && Editor.isBlock(editor, n)
    })
    Transforms.insertNodes(editor, [
        {type: 'paragraph', children: [{text: ''}]}
    ])
}

export default createNewNote