import { BaseEditor, Editor, Element, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'
import { CustomText } from './Types/slate'

interface Formater {
    toggleBold: (editor: Editor) => void;
    toggleItalic: (editor: Editor) => void;
    toggleUnderline: (editor: Editor) => void;
    toggleHeading: (editor: Editor, heading: string) => void;
}

export const Formater: Formater = {
    toggleBold(editor: Editor): any {
        const match: Omit<CustomText, "text"> = Editor.marks(editor)!;
        Editor.addMark(editor, 'bold', !match.bold);
    },
    toggleItalic(editor: Editor) {
        const match: Omit<CustomText, "text"> = Editor.marks(editor)!;
        Editor.addMark(editor, 'italic', !match.italic);
    },
    toggleUnderline(editor: Editor) {
        const match: Omit<CustomText, "text"> = Editor.marks(editor)!;
        Editor.addMark(editor, 'underline', !match.underline);
    },
    toggleHeading(editor: Editor, heading: string) {
        const [match] = Editor.nodes(editor, {
            match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === ('h' + heading),
        });
        const sizeHeading: any = {
            'h1': 'h1',
            'h2': 'h2',
            'h3': 'h3',
            'h4': 'h4',
            'h5': 'h5'
        };
        Transforms.setNodes(
            editor,
            { type: match ? 'paragraph' : sizeHeading['h' + heading] },
            { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
        );
    },
}