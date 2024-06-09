import { Editor, Transforms } from "slate";
import { CustomText, EmptyText, ImageElement } from "../Types/slate";

const insertImage = (editor: Editor, url: string, height: number, width: number) => {
    const text: EmptyText = { text: '' }
    const image: ImageElement = { type: 'image', url, height, width, children: [text] };
    Transforms.insertNodes(editor, image);
    Transforms.insertNodes(editor, {
        type: 'paragraph',
        children: [{ text: '' }]
    });
};

export default insertImage