import { CustomText, EmptyText, LinkElement } from "../Types/slate";
import { Editor, Transforms } from "slate";

const insertLink = (editor: Editor, url: string) => {
    const text: CustomText = { text: url }
    const link: LinkElement = { type: 'link', url, children: [text] };
    Transforms.insertNodes(editor, link);
    Transforms.insertNodes(editor, {
        type: 'paragraph',
        children: [{ text: '' }]
    });
};

export default insertLink